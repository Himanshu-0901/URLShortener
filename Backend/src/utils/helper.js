import { nanoid } from "nanoid";
import jsonwebtoken from 'jsonwebtoken';
import { cookieOptions } from "../config/config.js";

export const generateNanoId = (length)=>{
    return nanoid(length);
} 

export const signToken = (payload)=>{
    return jsonwebtoken.sign(payload,process.env.JWT_SECRET,{
        expiresIn: "1h"  // ✅ valid JWT option
      })
}

export const verifyToken = (token)=>{
    return jsonwebtoken.verify(token,process.env.JWT_SECRET)
}

