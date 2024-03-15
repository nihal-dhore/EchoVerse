import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Time } from "./PublishedTime";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  const navigate = useNavigate();

  return (
    <Link to={`/blog/${id}`}
      className="mx-4 my-3 max-w-[70%] sm:max-w-[50%] cursor-pointer w-screen"
      onClick={() => navigate(`/blog/${id}`)}
    >
      <div className="flex items-center">
        <Avatar authorName={authorName} />
        <span className="ml-2">
          <span className="mr-2">{`${authorName[0].toUpperCase()}${authorName.slice(
            1,
            authorName.length
          )}`}</span>
          <span>&#183;</span>
          {/* <span className="text-gray-400 text-sm ml-2">{publishedDate}</span> */}
          <Time publishedDate={publishedDate} />
        </span>
      </div>
      <div className="text-xl font-semibold text-white mt-3">{title}</div>
      <div className="font-light mt-2">
        {content.length > 100 ? content.slice(0, 100) + "..." : content}
      </div>
      <div className="my-3 text-sm text-gray-400 font-light">
        {`${Math.round(Math.ceil(content.length) / 100)} ${
          Math.ceil(content.length) / 100 >= 2 ? "mins" : "min"
        } read`}
      </div>
      <hr className="w-full border-gray-700 mt-5" />
    </Link>
  );
};
