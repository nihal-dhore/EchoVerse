import zod from "zod";

export const signupInput = zod.object({
  username: zod.string().min(3, "Username must be at-least of 3 characters"),
  email: zod.string().email("Enter valid email address"),
  password: zod.string().min(8, "Password must be of 8 characters long"),
  name: zod.string()
});

export type signupInput = zod.infer<typeof signupInput>

export const signinInput = zod.object({
  email: zod.string().email("Enter valid email address"),
  password: zod.string().min(8, "Password must be of 8 characters long")
});

export type signinInput = zod.infer<typeof signinInput>

export const createPostInput = zod.object({
  title: zod.string().max(60),
  content: zod.string(),
  tags: zod.array(zod.object({
    tag: zod.string()
  }))
});

export type createPostInput = zod.infer<typeof createPostInput>

export const updatePostInput = zod.object({
  title: zod.string(),
  content: zod.string(),
  tags: zod.array(zod.object({
    tag: zod.string()
  }))
});

export type updatePostInput = zod.infer<typeof updatePostInput>