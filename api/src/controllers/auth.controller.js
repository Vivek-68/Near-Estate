import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";

const test = (req,res) =>{
res.send("Hello testing");
}

const registerUser = asyncHandler(async(req,res)=>{
    const {email,username,password} = req.body;
    if(!username || !email || !password){
        throw new ApiError(401,"Missing credentials");
    }
    const hashedPassword = bcrypt.hash(password,10);
    const user = await prisma.user.create({
        data:{
            email,
            username,
            password:hashedPassword
        }
    });
    return res.status(200).json(
        new ApiResponse("User registered successfully",200)
    );

})


export {test,registerUser}