
import { useNavigate } from "react-router-dom";
import { LabelledInput } from "../components/Labelledinput";
import { SubmitHandler, useForm } from "react-hook-form";
import { signinInput } from "@nihal-dhore/common";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

export const Signin = () => {
  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signinInput>({
    resolver: zodResolver(signinInput),
  });

  const onSubmit: SubmitHandler<signinInput> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/v1/user/signin`,
        data
      );
      console.log(response);
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", response.data.name);
      navigate("/blogs");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response);
        if (error.response?.status === 401) {
          setError("password", {
            message: error.response.data.error,
          });
        } else if (error.response?.status === 404) {
          setError("root", {
            message: "Outside the verse?",
          });
        } else {
          setError("root", {
            message: "Server error",
          });
        }
      }
    }
  };
  return (
    <div
      className="flex justify-center h-screen items-center scale-75 
    md:scale-90"
    >
      <div className="px-14 py-10 flex flex-col justify-center w-[500px] h-[650px] shadow-outer rounded-xl">
        <div className="flex flex-col ">
          <header className="font-bold text-[18px] w-full text-center mb-8">
            E C H O V E R S E
          </header>
          <h1 className="font-semibold text-[28px] text-gray-200 w-full text-center">
            Sign in
          </h1>
          <form
            className="mt-7 flex flex-col justify-center items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <LabelledInput
              type="text"
              placeholder="Email"
              register={register("email")}
              autofocus={true}
            />
            {errors.email && (
              <label className="text-red-600 text-sm text-left w-full mt-2">
                {errors.email.message}
              </label>
            )}
            <LabelledInput
              type="password"
              placeholder="Password"
              register={register("password")}
            />
            {errors.password && (
              <label className="text-red-600 text-sm text-left w-full mt-2">
                {errors.password.message}
              </label>
            )}
            <button className="w-[393px] mt-10 bg-gray-300 text-black rounded-full py-3 font-semibold text-lg">
              {isSubmitting? "..." : "Sign in"}
            </button>
            {}
            {errors.root && (
              <div className="text-red-600 mt-5">
                {errors.root.message}
                <span
                  className="text-sky-500 cursor-pointer pl-2"
                  onClick={() => navigate("/signup")}
                >
                  Get into the verse
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
