import axios from "axios";
import { useEffect, useState } from "react"

export type Blog = {
  id: string
  title: string,
  content: string,
  publishedDate: string,
  author: {
    name: string,
    username: string
  }
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);


  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.BACKEND_URL}/api/v1/blog/bulk`);
        setBlogs(response.data.blogs)
        setLoading(false);


      } catch (error) {
        
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      setLoading(false);
    }

  }, []);

  return { loading, blogs, setBlogs };
}