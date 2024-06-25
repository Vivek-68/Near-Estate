import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {prisma ,exclude}from "../lib/prisma.js";

const getPosts = asyncHandler(async(req,res)=>{
    const query = req.query;
    console.log(query)
    const posts = await prisma.post.findMany({
        where:{
            city: query.city || undefined,
            type: query.type || undefined,
            property: query.property || undefined,
            bedrooms:parseInt(query.bedrooms) || undefined,
            price:{
                gte : parseInt(query.minPrice) || 0,
                lte : parseInt(query.maxPrice) || 10000000
            }
        }
    });
    console.log(posts)
    res.status(200).json(
        new ApiResponse("Posts fetched successafully",200,posts)
    )
})

const getPost = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const post = await prisma.post.findUnique({
        where:{
            id:id
        },
        include:{
            user:{
                select:{
                    username:true,
                    avatar:true
                }
            },
            postDetail:true
        }
    });
    res.status(200).json(
        new ApiResponse("Post fetched successfully",200,post)
    )
})

const addPost = asyncHandler(async(req,res)=>{
    const body = req.body;
    const tokenId = req.user.id;
    const newPost = await prisma.post.create({
        data:{
            ...body.postData,userId:tokenId,
            postDetail:{
                create:body.postDetail
            }
        }
    });
    res.status(200).json(
        new ApiResponse("Post created successfully",200,newPost)
    )
})

const updatePost = asyncHandler(async(req,res)=>{
    
})

const deletePost = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const tokenId = req.user.id;
    const post = await prisma.post.findUnique({
        where:{
            id
        }
    });
    if(post.userId !== tokenId){
        throw new ApiError(403,"Not Authorized");
    }
    await prisma.post.delete({
        where:{
            id
        }
    });
    res.status(200).json(
        new ApiResponse("Post deleted successfully",200,post)
    )
})

export {
    getPosts,getPost,addPost,updatePost,deletePost
};