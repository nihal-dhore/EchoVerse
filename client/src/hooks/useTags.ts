import axios from "axios";
import { useEffect, useState } from "react";

export interface Tag {
  id?: string,
  tag: string
}

export const useTags = () => {
  const [tags, setTags] = useState<Tag[]>([]);  

  useEffect(() => {
    axios.get(`${process.env.BACKEND_URL}/api/v1/blog/tags`)
      .then((response) => {
        setTags(response.data.tags);
      }).catch((error) => {
        throw new Error(error.response.message)
      })
  }, [])

  return { tags }
}