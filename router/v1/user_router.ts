import { Router, Request, Response } from "express";
import { login } from "../../controlers/user_controller";
const router = Router();

router.get("/login", login);

export default router;
