import { useEffect, useState } from "react"
import { Blog } from "./useBlogs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useBlog = function ({ id }: { id: string }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: localStorage.getItem("authToken")
          }
        })
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchData();
    return () => setLoading(false);

  }, [id, navigate]);

  return {
    loading,
    blog
  }
}