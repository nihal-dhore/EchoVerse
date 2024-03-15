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
    }, 401)
  }

  const userId: string = c.get("userId");
  try {

    const currentDate = new Date();
    // console.log(currentDate.getDate());
    const response = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
        publishedDate: currentDate,
        tags: {
          connectOrCreate: body.tags.map((tag) => ({
            where: tag,
            create: tag
          }))
        }
      },
      select: {
        id: true,
        tags: true
      }

    })
    return c.json({ message: "Blog created successfully", id: response.id })
  } catch (error) {
    console.error(error);
    return c.json({ error: "Conflict" }, 409);
  }
}