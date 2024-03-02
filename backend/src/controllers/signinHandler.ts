import { signinInput } from "@nihal-dhore/common";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { sign } from "hono/jwt";
import bcrypt from "bcryptjs";

export const signinHandler = async (c: Context) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body: signinInput = await c.req.json();

  const signinValidation = signinInput.safeParse(body);

  if (!signinValidation.success) {
    return c.json({
      error: signinValidation.error.issues[0].message
    }, 401);
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  })

  if (!user) {
    return c.json({ error: "user not found please signup" }, 404)
  }

  const hashedPassword = await bcrypt.compare(body.password, user.password);

  if (!hashedPassword) {
    return c.json({
      error: "Password does not match"
    }, 401);
  }

  const token = "Bearer " + await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ msg: "signin successfully", token: token });
}