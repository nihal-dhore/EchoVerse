import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export const authMiddleware = async (c: Context, next: Next) => {
  const token = c.req.header().authorization;

  if (!token || !token.startsWith("Bearer ")) {
    return c.json({ error: "Unauthorized Request" }, 401);
  }

  const actualToken = token.split(" ")[1];

  try {
    const verified = await verify(actualToken, c.env.JWT_SECRET);

    c.set("userId", verified.id);
    await next();
  } catch (error) {
    return c.json({ error: "Unauthorized Request" }, 401);
  }

}