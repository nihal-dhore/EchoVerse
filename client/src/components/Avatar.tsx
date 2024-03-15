import { Dispatch, SetStateAction } from "react";

export const Avatar = ({authorName, setProfileMenu, profileMenu}: {authorName: string,setProfileMenu: Dispatch<SetStateAction<boolean>>, profileMenu: boolean}) => {  
  return (
    <div
      className={`w-8 h-8 rounded-full bg-slate-700 text-white flex justify-center items-center flex-shrink-0 cursor-pointer`}
      onClick={() => setProfileMenu(!profileMenu)}
    >
      <span className="text-[17px] font-light">
        {authorName[0].toUpperCase()}
      </span>
    </div>
  );
};
