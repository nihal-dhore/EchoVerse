import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks/useBlogs";
import { calculateTimeSincePublished } from "../hooks/calculateTimeSincePublished";
import { AllBlogsSkeletons } from "../components/AllBlogsSkeletons";
import { useMemo } from "react";
import { Navbar } from "../components/Navbar";
import { TagsBar } from "../components/TagsBar";
import { useVerify } from "../hooks/useVerify";

export const Blogs = () => {
  const {verification, setVerification} = useVerify();
  const { loading, blogs, setBlogs } = useBlogs();
  

  const allBlogs = useMemo(() => {
    return blogs
      .sort(
        (a, b) =>
          calculateTimeSincePublished(a.publishedDate) -
          calculateTimeSincePublished(b.publishedDate)
      )
      .map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          authorName={blog.author.name}
          title={blog.title}
          content={blog.content}
          publishedDate={blog.publishedDate}
        />
      ));
  }, [blogs]);

  if (loading) {
    return (
      <>
        <AllBlogsSkeletons />
      </>
    );
  }

  const barLoading = () => {
    if (verification) {
      return (
        <Appbar
          authorName={localStorage.getItem("user") || " "}
          setVerification={setVerification}
        />
      );
    }
    return <Navbar />;
  };

  return (
    <div className="flex flex-col">
      {barLoading()}

      <div className=" flex flex-col justify-center items-center">
        <TagsBar setBlogs={setBlogs} />
        <div className="mt-5 flex flex-col justify-center items-center w-screen">
          {allBlogs}
        </div>
      </div>
    </div>
  );
};
