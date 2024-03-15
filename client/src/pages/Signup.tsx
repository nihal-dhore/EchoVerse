// import { signupInput } from "@nihal-dhore/common";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { LabelledInput } from "../components/Labelledinput";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupInput } from "@nihal-dhore/common";

/* export type formFields = signupInput & { confirmPassword: string } */

export const Signup = () => {
  const navigate = useNavigate();
  /* const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); */
  const {
    register,
    /* watch, */
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<signupInput>({
    resolver: zodResolver(signupInput),
  });

  const onSubmit: SubmitHandler<signupInput> = async (data) => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/api/v1/user/signup`,
        data
      );

      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("user", response.data.name);
     
      navigate("/blogs", {
        state: {
          key: response.data.name,
        },
      });
    } catch (error) {
      console.log(error);
      setError("root", {
        message: "User already exists",
      });
    }
  };

  return (
    <div className="flex justify-center h-screen items-center ">
      <div className="px-10 py-10 flex flex-col justify-center items-center w-[500px] shadow-outer rounded-xl scale-75 sm:px-14 md:scale-90">
        <div className="flex flex-col justify-center items-center w-full">
          <header className="font-bold text-[18px] w-full text-center mb-8">
            E C H O V E R S E
          </header>
          <h1 className="font-semibold text-[28px] text-gray-200">
            Create your account
          </h1>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <LabelledInput
              type="text"
              placeholder="Name"
              register={register("name")}
              autofocus={true}
            />
            {errors.name && (
              <label className="text-red-600">{errors.name.message}</label>
            )}

            <LabelledInput
              type="text"
              placeholder="Email"
              register={register("email")}
            />
            {errors.email && (
              <div className="text-red-600">{errors.email.message}</div>
            )}

            <LabelledInput
              type="text"
              placeholder="Username"
              register={register("username")}
            />
            {errors.username && (
              <label className="text-red-600">{errors.username.message}</label>
            )}

            <LabelledInput
              type="password"
              placeholder="Password"
              register={register("password")}
            />
            {errors.password && (
              <label className="text-red-600">{errors.password.message}</label>
            )}

            {/*  <LabelledInput
              type="password"
              placeholder="Re-enter password"
              register={register("confirmPassword", {
                required: "Confirm your password",
                validate: (value: string) => {
                  console.log(watch("password"))
                  return value === watch("password") || "Both password should match"
                }
              })}
            />
            {errors.confirmPassword && (
              <label className="text-red-600">
                {errors.confirmPassword.message}
              </label>
            )} */}

            <button
              disabled={isSubmitting}
              className="w-full mt-10 bg-gray-300 text-black rounded-full py-3 font-semibold text-lg"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
            {errors.root && (
              <div className="text-center mt-3">
                <label className="text-red-600">
                  {errors.root.message}

                  <Link
                    className="underline text-blue-400 pl-1 underline-offset-5"
                    to={"/signin"}
                  >
                    Sign in
                  </Link>
                </label>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
