import jwt from "jsonwebtoken";
import {JWT_SECRET, JWT_EXPIRATION} from "./config.js";

export const signTocken =({username})=>{
    const payload = {username};
    return jwt.sign({data:payload}, JWT_SECRET, {expiresIn: JWT_EXPIRATION })
}