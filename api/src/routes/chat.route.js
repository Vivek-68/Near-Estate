import {Router} from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {getChats,getChat,addChat,readChat} from "../controllers/chat.controller.js"

const router = Router();

router.get("/",verifyJWT,getChats);
router.get("/:id",verifyJWT,getChat);
router.post("/",verifyJWT,addChat);
router.put("/read/:id",verifyJWT,readChat);


export default router;