import { Router } from "express";
import UserRouter from "./user_router";
const router = Router();

router.use(UserRouter);

export default router;
