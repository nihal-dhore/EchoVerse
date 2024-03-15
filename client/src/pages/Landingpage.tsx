import { useNavigate } from "react-router-dom";
// import { Appbar } from "../components/appbar";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <Appbar></Appbar> */}
      <div className="flex justify-center h-screen items-center scale-75  md:scale-100">
        <div className="flex justify-center flex-col w-[100%] items-center">
          <span className="text-[40px] font-bold text-center ">
            <div className="text-[20px] font-semibold">ENTER INTO THE</div>
            <div className="text-gray-400 inline-block">E C H O V E R S E</div>
          </span>
          <span className="mb-5">Where Minds Meet: Join the Conversation</span>
          <button className="w-300 bg-white text-black py-2 rounded-full mt-5">
            Sign up with Google
          </button>
          <button className="w-300 bg-white text-black py-2 rounded-full mt-5">
            Sign up with Facebook
          </button>
          <button
            className="w-300 bg-white text-black py-2 rounded-full mt-5"
            onClick={() => navigate("/signup")}
          >
            Sign up with Email
          </button>
          <div className="flex justify-center items-center mt-5">
            <hr className="w-[130px] border-t-slate-700 mr-3" />
            <label> or </label>
            <hr className="w-[130px] border-t-slate-700 ml-3" />
          </div>
          <div className="mt-5 flex flex-col items-center">
            <p>Already have an account?</p>
            <button
              className="w-300 bg-slate-800 py-2 rounded-full mt-5"
              onClick={() => navigate("/signin")}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
