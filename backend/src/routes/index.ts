import {  Hono } from "hono";
import { signuphandler } from "../controllers/signupHandler";
import { signinHandler } from "../controllers/signinHandler";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  Variables: {
    message: string
  }
}>();

userRouter.post("/signup", signuphandler);
userRouter.post("/signin", signinHandler);
