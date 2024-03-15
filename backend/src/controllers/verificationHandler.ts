import { Context } from "hono";
import { verify } from "hono/jwt";

export const verificationHandler = async (c: Context) => {
  const token = c.req.header().authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return c.json({ error: "Unauthorized Request" }, 401);
  }

  const actualToken = token.split(" ")[1];

  try {
    const verified = await verify(actualToken, c.env.JWT_SECRET);

    return c.json({ message: "user verified" });
  } catch (error) {
    return c.json({ error: "Unauthorized Request" }, 401);
  }
}