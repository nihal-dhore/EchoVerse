import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="flex flex-col">
      <div className="py-3 px-[4%] border-b-1 border-gray-700 flex justify-between align-middle fixed w-screen z-10 bg-black">
        <Link className="flex items-center flex-shrink-0" to={"/blogs"}>
          <span className="font-bold text-[18px] text-white cursor-pointer">
            E C H O V E R S E
          </span>
        </Link>

        {/* <div className="max-w-[350px]  flex-1">
          <input
            className="px-4 py-2 rounded-full bg-slate-800 flex-1"
            type="text"
            placeholder="Search"
          />
        </div> */}
        <div className="flex items-center">
          <Link onClick={() => navigate("/signin")} to={"/signin"} className="mx-5">
            Sign in
          </Link>
          <button
            className="font-bold px-3 py-2 bg-slate-800 rounded-lg"
            onClick={() => navigate("/signup")}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};
