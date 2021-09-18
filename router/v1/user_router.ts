import { Router, Request, Response } from "express";
import { users } from "../../controlers/user_controller";
const router = Router();

router.get("/users", users);

export default router;
