import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const allBlogsHandler = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const response = await prisma.post.findMany({
    where: {
      published: true
    },
    select: {
      title: true,
      content: true,
      author: true
    }
  });
  console.log(response);
  return c.json({response});
}