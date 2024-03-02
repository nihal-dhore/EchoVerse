import zod from "zod";

export const signupInput = zod.object({
  username: zod.string().min(3, "Username must be atleast of 3 characters"), email: zod.string().email("Enter valid email address"),
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
  title: zod.string(),
  content: zod.string(),
  published: zod.boolean()
});

export type createPostInput = zod.infer<typeof createPostInput>

export const updatePostInput = zod.object({
  title: zod.string().optional(),
  content: zod.string().optional(),
  published: zod.boolean().optional()
});

export type updatePostInput = zod.infer<typeof updatePostInput>
