import { Hono } from "hono"
import { authMiddleware } from "../middlewares/authMiddleware";
import { blogGetHandler } from "../controllers/blogGetHandler";
import { blogEditHandler } from "../controllers/blogEditHandler";
import { blogPostHandler } from "../controllers/blogPostHandler";

import { getBlogsByTagHandler } from "../controllers/getBlogByTagHandler";
import { allBlogsHandler } from "../controllers/allBlogsHandler";
import { getAllTagsHandler } from "../controllers/getAllTagsHandler";
import { getAuthorBlogsHandler } from "../controllers/getAuthorBlogsHandler";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  },
  variables: {
    message: string
  }
}>();


blogRouter.post("/", authMiddleware, blogPostHandler);
blogRouter.put("/:id", authMiddleware, blogEditHandler);
blogRouter.get("/bulk", allBlogsHandler);
blogRouter.get("/tags", getAllTagsHandler);
blogRouter.get("/userBlogs", authMiddleware, getAuthorBlogsHandler);
blogRouter.get("/:id", blogGetHandler);
blogRouter.get("/tag/:id", getBlogsByTagHandler);
