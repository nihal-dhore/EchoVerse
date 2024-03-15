import { SubmitHandler, useForm } from "react-hook-form";
import { Appbar } from "../components/Appbar";
import { ContentEditor } from "../components/ContentEditor";
import { TitleEditor } from "../components/TitleEditor";
import { createPostInput } from "@nihal-dhore/common";
import axios, { isAxiosError } from "axios";
import { BACKEND_URL } from "../config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerify } from "../hooks/useVerify";
import { TagsEditor } from "../components/TagsEditor";

export const NewBlog = () => {
  const navigate = useNavigate();

  const { setVerification } = useVerify();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<createPostInput>({
    resolver: zodResolver(createPostInput),
  });

  const onSubmit: SubmitHandler<createPostInput> = async (data) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, data, {
        headers: {
          Authorization: localStorage.getItem("authToken"),
        },
      });
      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 409) {
          setError("root", {
            message: "Internal server error",
          });
        }
      }
    }
  };

  return (
    <div className="flex flex-col">
      <Appbar
        authorName={localStorage.getItem("user") || " "}
        setVerification={setVerification}
        location={location.pathname}
      />
      <div className="mt-24">
        <section className="flex flex-col justify-center items-center mx-[8%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              className=" absolute right-[5%] top-[70px] font-bold px-3 py-2 bg-gray-800 rounded-lg"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Echoing..." : "Echo"}
            </button>
            <TitleEditor register={register("title")} />
            {errors.title && (
              <div className="text-red-400">{errors.title.message}</div>
            )}
            <div className="px-5 lg:grid lg:grid-cols-4">
              <ContentEditor register={register("content")} />
              <TagsEditor register={register} />
            </div>
          </form>
        </section>
      </div>
      <div>{errors.root?.message}</div>
    </div>
  );
};
