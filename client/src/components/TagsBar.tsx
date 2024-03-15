import { Blog } from "../hooks/useBlogs";
import { useTags } from "../hooks/useTags";
import { Tag } from "./Tag";


export const TagsBar = ({setBlogs}: {setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>}) => {
  const { tags} = useTags();


  return (
    <div className="flex mt-20 max-w-[100%] sm:max-w-[50%] w-screen">
      {tags.map((tag) => {
        return <Tag key={tag.id} id={tag.id} tag={tag.tag} setBlogs={setBlogs} />;
      })}
    </div>
  );
};

