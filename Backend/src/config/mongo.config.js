import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        
        // mongoose.set('strictQuery',false)    // for some warning.
        // const conn = mongoose.connect(process.env.MONGO_URI,{
        //     useNewUrlParser:true,
        //     useUnifiedTopology:true
        // });
       const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Error during connection to mongoDB ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;