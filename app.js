import express, { urlencoded } from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env")

import connectDB from "./src/config/mongo.config.js"
import urlSchema  from "./src/models/short_Url.model.js";
import short_Url from "./src/routes/short_Url.route.js";

const app = express();

app.use(express.json())                             // body parser
app.use(express.urlencoded({extended:true}))        //

app.post("/api/create",short_Url)

app.get("/:id",async (req,res)=>{
    const {id} = req.params
    const url = await urlSchema.findOne({short_url:id})
    if(url){
        res.redirect(url.full_url)
    }
    else{
        res.status(404).send("Not Found")
    }
})

app.listen(3000,()=>{
    connectDB()
    console.log("Server is running. - 3000")
})