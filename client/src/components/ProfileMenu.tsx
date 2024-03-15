import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

export const ProfileMenu = ({setVerification}: {setVerification: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className=" absolute top-[50px] right-8 w-[12%] z-50 bg-black shadow-outer shadow-gray-400  rounded-lg cursor-pointer">
      <ul className="flex flex-col justify-center items-center">
        <li className="border-b-1 border-gray-700 w-full text-center py-2 flex justify-center items-center hover:bg-gray-900">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#374151"
            className="mr-1"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                fill="#374151"
              ></path>
            </g>
          </svg>
          <span className="mr-2">Profile</span>
        </li>
        <Link className="hover:bg-gray-900 w-full" to={"/blogs"}>
          <li
            className="w-full text-center py-2 flex justify-center items-center "
            onClick={() => {
              localStorage.clear();
              setVerification(false);
            }}
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
              className="mr-1"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16.8 2H14.2C11 2 9 4 9 7.2V11.25H15.25C15.66 11.25 16 11.59 16 12C16 12.41 15.66 12.75 15.25 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z"
                  fill="#374151"
                ></path>{" "}
                <path
                  d="M4.56141 11.2498L6.63141 9.17984C6.78141 9.02984 6.85141 8.83984 6.85141 8.64984C6.85141 8.45984 6.78141 8.25984 6.63141 8.11984C6.34141 7.82984 5.86141 7.82984 5.57141 8.11984L2.22141 11.4698C1.93141 11.7598 1.93141 12.2398 2.22141 12.5298L5.57141 15.8798C5.86141 16.1698 6.34141 16.1698 6.63141 15.8798C6.92141 15.5898 6.92141 15.1098 6.63141 14.8198L4.56141 12.7498H9.00141V11.2498H4.56141Z"
                  fill="#374151"
                ></path>{" "}
              </g>
            </svg>
            <span className="mr-2">Log out</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};
