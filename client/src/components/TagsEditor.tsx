import { useState } from "react";
import { blogPost } from "./TitleEditor";
import { UseFormRegister } from "react-hook-form";
import { createPostInput } from "@nihal-dhore/common";

interface Tag {
  tag: string;
}

export const TagsEditor = ( {register} : {register: UseFormRegister<createPostInput>}) => {
  const [tags, setTags] = useState<Tag[]>([]);

  const handlerKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    const value: string = (e.target as HTMLInputElement).value;
    if (!value.trim()) return;
    setTags([...tags, { tag: value.trim() }]);
    (e.target as HTMLInputElement).value = "";
    register(`tags.${tags.length}`, {value: {tag: value.trim()}});
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((element, i) => i !== index));
  };

  return (
    <div className="mb-8 flex flex-col">
      <div className="flex flex-wrap">
        {tags.map((tag, index) => {
          return (
            <div
              key={index}
              className="border-1 border-gray-600 my-2 px-3 py-1 flex items-center mx-2 rounded-lg"
            >
              <span>{tag.tag}</span>
              <span
                className="pl-3 text-sm cursor-pointer"
                onClick={() => removeTag(index)}
              >
                &times;
              </span>
            </div>
          );
        })}
      </div>
      <input
        onKeyDown={handlerKeyDown}
        className="bg-transparent w-full lg:w-[250px] outline-none shrink-0 border-1 border-gray-500 py-2 rounded-lg pl-4 mt-2"
        placeholder="Tag it! Separate with spaces"
        {...register}
      />
    </div>
  );
};
