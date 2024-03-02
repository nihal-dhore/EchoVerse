import { updatePostInput } from "@nihal-dhore/common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const blogEditHandler = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body: updatePostInput = await c.req.json();

  const inputValidation = updatePostInput.safeParse(body);

  if (!inputValidation.success) {
    return c.json({
      error: "Invalid credentials"
    }, 422);
  }

  const userId = c.get("userId");
  const postId = c.req.param().id;  


  try {
    await prisma.post.update({
      where: {
        id: postId,
        authorId: userId
      }, data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: userId
      }
    });

    return c.json({ message: "Blog edited Successfully" });
  } catch (error) {

    return c.json({ error: "conflict" }, 409);
  }
}