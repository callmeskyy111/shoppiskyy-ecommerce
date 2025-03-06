import { Router } from "express";
import {
  getLoggedInUserProfile,
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import protectRoute from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", protectRoute, getLoggedInUserProfile); //protected route

export default userRouter;
