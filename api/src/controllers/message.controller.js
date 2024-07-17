import { exclude, prisma } from "../lib/prisma.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";


const addMessage = asyncHandler(async(req,res)=>{
   const userId = req.user.id;
   const {chatId} = req.params;
   const text = req.body.text;
   const chat = await prisma.chat.findUnique({
    where:{
        id:chatId,
        userIDs:{
            hasSome: [userId]
        }
    }
   });
   if(!chat){
    return new ApiError(400,"Chat does not exist!")
   };
   const message = await prisma.message.create({
    data:{
        text,chatId,userId
    }
   });

   await prisma.chat.update({
    where:{
        id: chatId
    },
    data:{
        seenBy: [userId],
        lastMessage: text,
    },
   });

   res.status(200).json(
    new ApiResponse("Message added successfully",200,message)
   )
});


export {addMessage};