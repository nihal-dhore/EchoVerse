export const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mx-4 my-4 max-w-md sm:max-w-l md:max-w-xl xl:max-w-4xl cursor-pointer w-screen">
        <div className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full bg-slate-700 text-white flex justify-center items-center flex-shrink-0`}
          >
          </div>
          <div className="ml-2 flex items-center">
            <div className="mr-2 h-5 w-24 bg-gray-500  rounded-full"></div>
            <span>&#183;</span>
            <div className="text-gray-400 h-[18px] w-24 rounded-full bg-gray-600 ml-2"></div>
          </div>
        </div>
        <div className="text-xl font-semibold text-white mt-3 bg-gray-400 h-6 w-[50%] rounded-full"></div>
        <div className="mt-2 bg-gray-600 h-5 w-[90%] rounded-full"></div>
        <div className="my-3 text-sm bg-gray-600 h-5 w-28 rounded-full"></div>
        <hr className="w-full border-gray-700" />
      </div>
    </div>
  );
};
