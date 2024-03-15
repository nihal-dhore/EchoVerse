import { useNavigate } from "react-router-dom";

export const ServerError = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-10 w-screen h-screen justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="mx-4 border-r-[1px] border-gray-500 py-4 px-4 text-6xl">
          500
        </div>
        <div>Internal Server Error</div>
      </div>
      <div>
        <span className="size-5">&gt; </span>
        Go to
        <span className="underline ml-1 cursor-pointer">
          <span onClick={() => navigate("/blogs")}>Home page</span>
        </span>
      </div>
    </div>
  );
};
