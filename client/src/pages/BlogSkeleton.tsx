import { Navbar } from "../components/Navbar";

export const BlogSkeleton = () => {

  return (
    <div className="flex flex-col">
      {<Navbar />}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 w-screen mt-24 ">
        <div className="flex flex-col justify-center mx-[8%] md:ml-[15%] col-span-2 animate-pulse opacity-70">
          <header className="text-4xl font-semibold text-white h-9 w-[70%] bg-gray-200 rounded-full mb-5"></header>
          <div className="my-2 h-5 w-[30%] bg-gray-400 rounded-full mb-9"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[40%] mb-8 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[90%] mb-8 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[60%] mb-8 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[100%] mb-3 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-[90%] mb-8 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex flex-col mx-[20%] invisible md:visible">
          <label className="text-sm">Author</label>
          <div className="flex mt-2 items-center animate-pulse opacity-70">
            <div
              className={`w-8 h-8 rounded-full bg-slate-700 text-white flex justify-center items-center flex-shrink-0`}
            ></div>
            <div className="mx-5">
              <div  className=" h-6 w-24 bg-gray-200 rounded-full"></div>
              <div className=" h-5 w-32 bg-gray-500 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
