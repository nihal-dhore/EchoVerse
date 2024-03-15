import { BlogCardSkeleton } from "./BlogCardSkeleton";
import { Navbar } from "./Navbar";

export const AllBlogsSkeletons = () => {
  return (
    <div className="flex flex-col">
       <Navbar />
      <div className="mt-20">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </div>
    </div>
  );
};
