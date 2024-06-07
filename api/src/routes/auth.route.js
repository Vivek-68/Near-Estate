import { Router } from "express";
import { registerUser, loginUser,logout, test} from "../controllers/auth.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/',test);
router.post('/register',registerUser);
router.post('/login',loginUser);
router.delete('/logout',logout);


export default router;