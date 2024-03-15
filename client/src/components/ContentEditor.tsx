import { blogPost } from "./TitleEditor";

export const ContentEditor = ({ register }: blogPost) => {
  return (
    <textarea
      className="bg-black w-full h-screen outline-none col-span-3"
      placeholder="Pen your echo, shape our verse..."
      id="content-editor"
      cols={100}
      {...register}
      required
    />
  );
};
