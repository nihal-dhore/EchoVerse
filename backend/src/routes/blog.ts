import { Hono } from "hono"
import { authMiddleware } from "../middlewares/authMiddleware";
import { blogGetHandler } from "../controllers/blogGetHandler";
import { blogEditHandler } from "../controllers/blogEditHandler";
import { blogPostHandler } from "../controllers/blogPostHandler";
import { allBlogsHandler } from "../controllers/allblogshandler";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  variables: {
    message: string
  }
}>();

blogRouter.use("/*", authMiddleware);
blogRouter.post("/", blogPostHandler);
blogRouter.put("/:id", blogEditHandler);
blogRouter.get("/bulk", allBlogsHandler);
blogRouter.get("/:id", blogGetHandler);
