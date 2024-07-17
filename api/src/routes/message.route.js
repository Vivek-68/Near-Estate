import {Router} from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {addMessage} from "../controllers/message.controller.js"

const router = Router();

router.post('/:chatId',verifyJWT,addMessage)

export default router;