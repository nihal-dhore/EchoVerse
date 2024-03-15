import {  Hono } from "hono";
import { signupHandler } from "../controllers/signupHandler";
import { signinHandler } from "../controllers/signinHandler";
import { verificationHandler } from "../controllers/verificationHandler";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    message: string
  }
}>();

userRouter.get("/verify", verificationHandler);
userRouter.post("/signup", signupHandler);
userRouter.post("/signin", signinHandler);
