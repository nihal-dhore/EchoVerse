import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const allBlogsHandler = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  /* const currentDate = new Date();
    console.log(currentDate); */
  try {
    const response = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        publishedDate: true,
        author: {
          select: {
            name: true,
            username: true
          }
        },
        tags: true
      }
    });
    return c.json({ blogs: response });
  } catch (error) {
    console.log(error);
    return c.json({
      message: "Internal server error"
    }, 500);
  }
}