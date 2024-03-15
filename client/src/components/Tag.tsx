import axios from "axios";
import { BACKEND_URL } from "../config";
import { Blog } from "../hooks/useBlogs";

export const Tag = ({
  id,
  tag,
  setBlogs,
}: {
  id: string,
  tag: string,
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>,
}) => {
  const loadBlogsWithTag = async () => {
    try {
      const blogs = await axios.get(`${BACKEND_URL}/api/v1/blog/tag/${id}`);
      
      setBlogs(blogs.data.posts);
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <div
      className="mx-1 bg-gray-700 px-4 py-2 rounded-full cursor-pointer"
      onClick={() => {
        loadBlogsWithTag();
      }}
    >
      {tag}
    </div>
  );
};
