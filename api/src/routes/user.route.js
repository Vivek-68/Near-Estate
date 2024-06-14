import { Router } from "express";
import {getUser,getUsers,updateUser,deleteUser} from "../controllers/user.controller.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/',getUsers);
router.get('/:id',getUser);
router.put('/update/:id',verifyJWT,updateUser);
router.delete('/delete/:id',verifyJWT,deleteUser);

export default router;