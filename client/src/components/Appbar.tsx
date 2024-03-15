import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Dispatch, SetStateAction, useState } from "react";
import { ProfileMenu } from "./ProfileMenu";

export const Appbar = ({
  authorName,
  setVerification,
  location
}: {
  authorName: string;
  setVerification: Dispatch<SetStateAction<boolean>>;
  location?: string
}) => {
  const [profileMenu, setProfileMenu] = useState(false);

  /*  useEffect(() => {
     setProfileMenu(false);
  }, []); */

  return (
    <header className="flex flex-col ">
      <div className="py-3 px-[4%] border-b-1 h-[61px] border-gray-700 flex justify-between align-middle fixed w-screen z-10  bg-black">
        <Link className="flex items-center flex-shrink-0" to={"/blogs"}>
          <span className="font-bold text-[18px] text-white cursor-pointer">
            E C H O V E R S E
          </span>
        </Link>
        {/*
      <div className="max-w-[350px]  flex-1">
        <input className="px-4 py-2 rounded-full bg-slate-800 flex-1" type="text" placeholder="Search" />
      </div> */}
        <div className="flex items-center">
          {/* <a className="mx-5" href="">Sign in</a>
        <button className="font-bold px-3 py-3 bg-slate-800 rounded-lg" onClick={() => navigate("/signup")}>Get Started</button> */}
          {(location !== "/write-in-verse") && <Link to={"/write-in-verse"} className="cursor-pointer flex">
            <svg
              className="shrink-0"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                fill="currentColor"
              ></path>
              <path
                d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                stroke="currentColor"
              ></path>
            </svg>
            <div className="ml-1 mr-6 lg:mr-8 w-[40px]">Write</div>
          </Link>}
          <Avatar
            authorName={authorName}
            setProfileMenu={setProfileMenu}
            profileMenu={profileMenu}
          />
        </div>
      </div>
      {profileMenu && <ProfileMenu setVerification={setVerification} />}
    </header>
  );
};
