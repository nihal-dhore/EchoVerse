import { createPostInput } from "@nihal-dhore/common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const blogPostHandler = async (c: Context) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body: createPostInput = await c.req.json();

  const blogValidation = createPostInput.safeParse(body);

  if (!blogValidation.success) {
    return c.json({
      error: "Invalid credentials"
    })
  }

  const userId: string = c.get("userId");
  try {
    
    
    await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: userId
      }
    })
    return c.json({ message: "Blog created successfully" })
  } catch (error) {
    console.error(error);
    return c.json({ error: "Conflict" }, 409);
  }
}