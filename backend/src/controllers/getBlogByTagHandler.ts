import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const getBlogsByTagHandler = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const tagId = c.req.param().id;

  try {
    const blogs = await prisma.tag.findMany({
      where: {
        id: tagId
      },
      select: {
        posts: {
          include: {
            author: {
              select: {
                name: true
              }
            }
          }
        }
      }
    })

    return c.json(blogs[0]);

  } catch (error) {
    console.log(error);
    c.json({
      message: "Internal server error"
    }, 500);
  }
}