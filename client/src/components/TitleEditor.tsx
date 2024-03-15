import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type blogPost = {
  register: UseFormRegisterReturn;
};

export const TitleEditor = (props: blogPost) => {
  const [charCount, setCharCount] = useState(0);

  return (
    <div className="my-8 h-20 shadow-bottom shadow-white px-5  relative">
      {/* <label>Title</label> */}
      <input
        className="bg-transparent w-full h-20 outline-none placeholder:text-5xl placeholder:font-semibold text-[31px] font-semibold"
        placeholder="Title"
        type="text"
        maxLength={60}
        required
        autoCapitalize="on"
        {...props.register}
        onChange={(e) => setCharCount(e.target.value.length)}
      />
      <span className="char absolute right-[3%] lg:right-[3%] top-[40%]">
        {charCount} / 60
      </span>
    </div>
  );
};
