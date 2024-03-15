/* import { UseFormRegister } from "react-hook-form";
import { formFields } from "../pages/Signup"; */

import { UseFormRegisterReturn } from "react-hook-form";


interface LabelledInputType {
  type?: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  autofocus?: boolean
}
export const LabelledInput =(props: LabelledInputType) => {
  return (
    <div className="relative mt-10 w-full">
      <input
        required
        autoFocus={props.autofocus}
        className="input w-full px-4 pt-3 bg-transparent z-100 border-gray-500 border rounded-md ease-[0.1s] 
          outline-none focus:border-white focus:text-white transition duration-200 h-16"
        type={props.type}
        {...props.register}
        // placeholder={props.placeholder}
      />
      <label className="holder text-gray-400 absolute left-0 top-[18px] pl-4 transition duration-200">
        {props.placeholder}
      </label>
    </div>
  );
};
