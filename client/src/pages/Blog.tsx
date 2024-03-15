import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/useBlog";
import { Appbar } from "../components/Appbar";
import { BlogSkeleton } from "./BlogSkeleton";
import { PublishedDate } from "../components/PublishedDate";
import { Navbar } from "../components/Navbar";
import { useVerify } from "../hooks/useVerify";
import { AuthorAvatar } from "../components/AuthorAvatar";

export const Blog = () => {
  const { blogId } = useParams<{ blogId: string }>();

  const { loading, blog } = useBlog({ id: blogId! });
  const { verification, setVerification } = useVerify();

  if (loading) {
    return <BlogSkeleton />;
  }

  const barLoading = () => {
    if (verification) {
      return<Appbar authorName={localStorage.getItem("user") || " "} setVerification={setVerification} />
    } return <Navbar />
  }

  return (
    <div className="flex flex-col">
      {barLoading()}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-screen mt-32">
        <div className="flex flex-col justify-center mx-[8%] md:ml-[15%] col-span-2 ">
          <header className="text-4xl font-semibold text-white">
            {blog?.title}
          </header>
          <div className="my-6 text-gray-400 text-sm">
            Published
            <PublishedDate publishedDate={blog?.publishedDate || " "} />
          </div>
          <p> {blog?.content} </p>
        </div>
        <div className="flex flex-col mx-[20%] invisible md:visible">
          <label className="text-sm">Author</label>
          <div className="flex mt-2 items-center">
            <AuthorAvatar authorName={blog?.author.name || " "} />
            <div className="mx-5">
              <div>{`${blog?.author.name[0].toUpperCase()}${
                blog?.author.name.slice(1, blog?.author.name.length) || " "
              }`}</div>
              <div className="text-gray-400 text-sm">
                @{blog?.author.username}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
