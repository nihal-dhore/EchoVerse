import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Context } from "hono"

export const getAllTagsHandler = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try {
    const tags = await prisma.tag.findMany({});
    console.log("hi");

    return c.json({
      tags: tags
    })
  } catch (error) {
    return c.json({
      message: "Internal server error"
    }, 500);
  }
}