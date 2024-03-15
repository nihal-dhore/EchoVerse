import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const blogGetHandler = async(c: Context) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const blogId = c.req.param().id;  

  

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: blogId
      },
      select: {
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
    })
    

    if(blog === null) return c.json({
      message: "Blog not found"
    }, 404);
    
    return c.json({
      title: blog?.title,
      content: blog?.content,
      author: blog?.author,
      publishedDate: blog?.publishedDate,
      tags: blog.tags
    });
    
  } catch (error) {
    console.log(error);
    return c.json({message: "Conflict"}, 409);    
  }
}