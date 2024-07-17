import { exclude, prisma } from "../lib/prisma.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";


const getChats = asyncHandler(async(req,res)=>{
   const userId = req.user.id;
   const chats = await prisma.chat.findMany({
    where:{
        userIDs:{
            hasSome: [userId]
        }
    }
   });
   for(const chat of chats){
    const receiverId = chat.userIDs.find(id => id != userId);
    const receiver = await prisma.user.findUnique({
        where:{
            id:receiverId
        },
        select:{
            id:true,
            username:true,
            avatar:true,
        }
    });
    chat.receiver = receiver;
   } 
   res.status(200).json(
    new ApiResponse("Chats fetched successfully",200,chats)
   );

})

const getChat = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const userId = req.user.id;
    const chat = await prisma.chat.findUnique({
        where:{
            id:id,
            userIDs:{
                hasSome: [userId]
            }
        },
        include:{
            messages:{
                orderBy:{
                    createdAt:"asc"
                }
            }
        }
    });
    if(chat){
    await prisma.chat.update({
        where:{
            id:id
        },
        data:{
            seenBy:{
                push:[userId]
            }
        }
    });
}
    res.status(200).json(
        new ApiResponse("Chat fetched successfully",200,chat)
    );
})


const addChat = asyncHandler(async(req,res)=>{
    const id = req.user.id;
    const newChat = await prisma.chat.create({
        data:{
            userIDs: [id,req.body.receiverId]
        }
    });
    res.status(200).json(
        new ApiResponse("Chat successfully created",200,newChat)
    );

});

const readChat = asyncHandler(async(req,res)=>{
    const userId = req.user.id;
    const {id} = req.params;
    const chat = await prisma.chat.update({
        where:{
            id:id,
            userIDs:{
                hasSome:[userId]
            }
        },
        data:{
            seenBy:{
                push: [userId]
            }
        }
    });
    res.status(200).json(
        new ApiResponse("Chat read successfully",200,chat)
    );
});

export {getChat,getChats,addChat,readChat};