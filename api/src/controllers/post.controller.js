import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {prisma ,exclude}from "../lib/prisma.js";
import jwt from "jsonwebtoken"

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

    const {token} = req.cookies;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,async(err,payload)=>{
            if(!err){
                const savedPost = await prisma.savedPost.findUnique({
                    where:{
                        userId_postId:{
                        userId:payload.id,
                        postId:id
                        }
                    }
                });
            return res.status(200).json(
                new ApiResponse("Post fetched successfully",200,{...post,isSaved:savedPost?true:false})
            );
            }
        });
    }
else{
    return res.status(200).json(
        new ApiResponse("Post fetched successfully",200,{...post,isSaved:false})
    )
}
});

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

const savePost = asyncHandler(async(req,res)=>{
    const postId = req.body.postId;
    const userId = req.user.id;
    const savedPost = await prisma.savedPost.findUnique({
        where:{
            userId_postId:{
                userId:userId,postId:postId
            }
        }
    });
    if(savedPost){
        await prisma.savedPost.delete({
            where:{
                id:savedPost.id
            }
        });
        res.status(200).json(
            new ApiResponse("Post removed from saved posts!",200,savedPost)
        )
    }
    else{
        const newSavedPost = await prisma.savedPost.create({
            data:{
                postId,userId
            }
        });
        res.status(200).json(
            new ApiResponse("Post saved!",200,newSavedPost)
        );

    }
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
    getPosts,getPost,addPost,updatePost,deletePost,savePost
};