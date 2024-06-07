import jwt from "jsonwebtoken"
import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { exclude, prisma } from "../lib/prisma.js";

const verifyJWT = asyncHandler(async(req,_,next)=>{
const {token} = req.cookies;
if(!token){
    throw new ApiError(401,"Unauthorized access!");
}
const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
if(!decodedToken){
    throw new ApiError(401,"Unauthorized access!");
}
const user = await prisma.user.findUnique({
    where:{
        id:decodedToken.id
    }
});
if(!user){
    throw new ApiError(401,"Invalid access token!");
}
const authorizedUser = exclude(user,['password']);
req.user = authorizedUser;

next();
});

export {verifyJWT}