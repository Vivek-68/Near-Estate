import { exclude, prisma } from "../lib/prisma.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";

const getUsers = asyncHandler(async(req,res)=>{
    const users = await prisma.user.findMany();
    if(!users){
        throw new ApiError(500,"There are no existing users!");
    }
    const usersResponse = users.map((user) => exclude(user,['password']));
    res.status(200).json(
        new ApiResponse("Successfully fetched all users",200,usersResponse)
    );

})

const getUser = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const user = await prisma.user.findUnique({
        where:{
            id:id
        }
    });
    if(!user){
        throw new ApiError(500,"User does not exist!")
    };
    const userResponse = exclude(user,['password']);
    res.status(200).json(
        new ApiResponse("User fetched successfully",200,userResponse)
    );
})


const updateUser = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const userId = req.user?.id;
    if(id !== userId){
        throw new ApiError(403,"Unauthorized Access!");
    }
    const {email,username,password,avatar} = req.body;
    if([email,username].some(field => field.trim()==="")){
        throw new ApiError(400,"Invalid credentials!");
    }
    const emailExists = await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    if(emailExists){
        throw new ApiError(400,"Email already in use!");
    }
    const usernameExists = await prisma.user.findUnique({
        where:{
            username:username
        }
    });
    if(usernameExists){
        throw new ApiError(400,"Username already in use!");
    }
    let hashedPassword = null;
    if(password){
        hashedPassword = await bcrypt.hash(password,10);
    }
    const updatedUser = await prisma.user.update({
        where:{
            id:id
        },
        data:{
            username,email,...(hashedPassword && {password:hashedPassword}),
            ...(avatar && {avatar}),
        }
    });
    if(!updatedUser){
        throw new ApiError(500,"Something went wrong while processing the update");
    }
    const updatedUserResponse = exclude(updatedUser,['password']);
    return res.status(200).json(
        new ApiResponse("User successfully updated!",200,updatedUserResponse)
    );

});

const deleteUser = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    if(id !== req.user?.id){
        throw new ApiError(403,"Unauthorized access");
    }
    await prisma.user.delete({
        where:{
            id:id
        }
    });

    return res.status(200).json(
        new ApiResponse("User successfully deleted",200)
    );
});

const getUserPosts = asyncHandler(async(req,res)=>{
    const userId = req.user?.id;
    const posts = await prisma.post.findMany({
        where:{
            userId:userId
        }
    });
    return res.status(200).json(
        new ApiResponse("User's posts fetched successfully!",200,posts)
    );
})

const getSavedPosts = asyncHandler(async(req,res)=>{
    const userId = req.user?.id;
    const savedPosts = await prisma.savedPost.findMany({
        where:{
            userId:userId
        },
        include:{
            post:true
        }
    });
    const posts = savedPosts.map(item => item.post);
    return res.status(200).json(
        new ApiResponse("Saved posts fetched successfully",200,posts)
    );

})

export {getUser,getUsers,updateUser,deleteUser,getUserPosts,getSavedPosts};