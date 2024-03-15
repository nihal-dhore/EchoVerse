import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const getAuthorBlogsHandler = async (c: Context) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const userId = c.get("userId");

  try {
    const userBlogs = await prisma.post.findMany({
      where: {
        authorId : userId
      },
      select: {
        id: true,
        title: true,
        content: true,
        publishedDate: true,
        tags: true
      }
    })
    return c.json({userBlogs: userBlogs});
  } catch (error) {
    return c.json({
      message: "Internal server Error"
    }, 500);
  }
}