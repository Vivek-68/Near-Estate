import express from "express";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import chatRouter from "./routes/chat.route.js";
import messageRouter from "./routes/message.route.js";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";


dotenv.config({
    path:'.env.dev'
})
const app = express();



const corsOptions = {
    origin:process.env.CLIENT_ORIGIN,
    credentials:true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));


app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)
app.use('/api/posts',postRouter)
app.use('/api/chats',chatRouter)
app.use('/api/messages',messageRouter)

app.use((err,req,res,next) =>{
    return res.status(err.statusCode || 500).json({
        message:err.message
    })
})



export {app};