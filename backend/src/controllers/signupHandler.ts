import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono"
import { Jwt } from "hono/utils/jwt";
import { signupInput } from "@nihal-dhore/common";


export const signuphandler = async (c: Context) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const body: signupInput = await c.req.json();
  const signupValidation = signupInput.safeParse(body);
  console.log(signupValidation);


  if (!signupValidation.success) {
    return c.json({
      error: signupValidation.error.issues[0].message
    }, 422);
  }

  const userExist = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  });

  if (userExist) {
    return c.json({ error: "user already exists" }, 403);
  }

  /*   const keyPair = await crypto.subtle.generateKey({name: "RSA-PASS", length: 256}, true, ["encrypt", "decrypt"]);
    const hashedPassword = await crypto.subtle.sign({name: "RSA-PASS"}, keyPair,  body.password ) */

  const hashedPassword = await bcrypt.hash(body.password, 10);
  console.log(hashedPassword);


  const user = await prisma.user.create({
    data: {
      name: body.username,
      email: body.email,
      password: hashedPassword
    }
  });

  if (!user) {
    return c.json({ msg: "user not found" }, 404);
  }

  const token = "Bearer " + await Jwt.sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ msg: "done", token: token });
}