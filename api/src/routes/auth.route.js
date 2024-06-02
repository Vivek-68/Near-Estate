import { Router } from "express";
import { registerUser, test } from "../controllers/auth.controller.js";

const router = Router();

router.get('/',test)
router.get('/register',registerUser)

export default router;