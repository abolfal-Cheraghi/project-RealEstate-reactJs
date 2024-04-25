import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
export default function InputPass(props) {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div className="relative">
        <input
          type={showPass ? "text" : "password"}
          name="password"
          className="inputs-auth bg-[#F8F8F8] w-full h-12 rounded-xl px-4 "
          placeholder="رمز عبور"
          onChange={props.onChange}
          maxLength={4}
        />
        <button
          type="button"
          className="absolute left-4 top-4"
          onClick={() => {
            setShowPass(!showPass);
          }}
        >
          {showPass ? (
            <FaRegEye size="17px" className="fill-gray1" />
          ) : (
            <FaRegEyeSlash size="18px" className="fill-gray1" />
          )}
        </button>
      </div>
    </>
  );
}
