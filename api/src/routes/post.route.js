import {Router} from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {getPosts,getPost,updatePost,addPost,deletePost} from "../controllers/post.controller.js"

const router = Router();

router.get("/",getPosts);
router.get("/:id",getPost);
router.post("/",verifyJWT,addPost);
router.put("/:id",verifyJWT,updatePost);
router.delete("/:id",verifyJWT,deletePost);

export default router;