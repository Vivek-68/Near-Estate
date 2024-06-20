import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt"
import {prisma ,exclude}from "../lib/prisma.js";
import jwt from "jsonwebtoken";

const test = (req,res) =>{
res.send("Hello testing");
}

const registerUser = asyncHandler(async(req,res)=>{
    const {email,username,password} = req.body;
    if([email,username,password].some(field => field.trim() === "")){
        throw new ApiError(400,"Some required fields are missing");
    }
   
    const emailExists = await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    if(emailExists){
        throw new ApiError(409,"Email already exists");
    }
    const usernameExists = await prisma.user.findUnique({
        where:{
            username:username
        }
    });
    if(usernameExists){
        throw new ApiError(409,"Username already exists");
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await prisma.user.create({
        data:{
            email,
            username,
            password:hashedPassword
        }
    });

    const createdUser = await prisma.user.findUnique({
        where:{
            id:user?.id
        },
    })
    if(!createdUser){
        throw new ApiError(500,"Something went wrong while registering user");
    }
    const createdUserWithoutPassword = exclude(createdUser,['password']);
    
    return res.status(200).json(
        new ApiResponse("User registered successfully",200,createdUserWithoutPassword)
    );

})

const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        throw new ApiError(400,"Fields cannot be empty");
    }
    const user = await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    if(!user){
        throw new ApiError(401,"User does not exist!");
    }
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(!isPasswordCorrect){
        throw new ApiError(401,"Password is incorrect!");
    }
    const token = jwt.sign({
        id:user.id
    },process.env.JWT_SECRET,{
        expiresIn:'30d'
    });
    const options = {
        httpOnly:true
    }
    const loggedInUser = exclude(user,['password']);
    res.status(200).cookie("token",token,options).json(
        new ApiResponse("User logged in successfully",200,loggedInUser)
    );

});

const logout = asyncHandler(async(req,res)=>{
    const options = {
        httpOnly:true
    };
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.status(200).clearCookie("token",options)
    .json(
        new ApiResponse("User logged out successfully!",200)
    );
})



export {test,registerUser,loginUser,logout}