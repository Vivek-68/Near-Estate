import { Router } from "express";
import {getUser,getUsers,updateUser,deleteUser,getSavedPosts,getUserPosts} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/',getUsers);
router.get('/select/:id',getUser);
router.get('/saved',verifyJWT,getSavedPosts);
router.get('/posts',verifyJWT,getUserPosts);
router.put('/update/:id',verifyJWT,updateUser);
router.delete('/delete/:id',verifyJWT,deleteUser);

export default router;