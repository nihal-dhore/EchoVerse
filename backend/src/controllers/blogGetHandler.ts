import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

export const blogGetHandler = async(c: Context) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const blogId = c.req.param().id;
  console.log(blogId);
  

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id: blogId
      },
      select: {
        title: true,
        content: true
      }
    })
    console.log(blog);
    
    setTimeout(() => {
      console.log(2545);
    }, 5000);
    
    console.log("nn");
    
    return c.json({
      title: blog?.title,
      content: blog?.content
    });
    
  } catch (error) {
    console.log(error);
    return c.json({message: "Conflict"}, 409);    
  }
}