import express from "express";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";


dotenv.config({
    path:'.env.dev'
})
const app = express();

app.use(cors(
    {
        origin:process.env.CLIENT_ORIGIN,
        credentials:true
    }
))
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/api/auth',authRouter)

app.use((err,req,res,next) =>{
    return res.status(err.statusCode).json({
        message:err.message
    })
})



export {app};