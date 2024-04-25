import React, { createContext, memo, useEffect, useRef, useState } from "react";
import iconIr from "../../../public/images/icon-iran.jpg";
import "./TabAuth.css";

function TabAuth(props) {





  return (
    <>
      {/* tab box */}

      <div className="tab flex gap-5 flex-nowrap my-4">
        <span
          className="tab-item text-sm lg:text-base text-myGreen-300 opacity-20 pointer"
          id={props.active === true && "active-tab-item"}
          onClick={() => {
            props.setActive(true);
            console.log(inputs);
          }}
        >
          استفاده از شماره تماس
        </span>
        <span
          className="tab-item text-sm md:text-base text-myGreen-300 opacity-20 pointer"
          id={props.active === false && "active-tab-item"}
          onClick={() => {
            props.setActive(false);
          }}
        >
          استفاده از آدرس ایمیل
        </span>
      </div>

      {props.active ? (
        // input phone number
        <div className="flex items-center relative h-12 rounded-xl bg-[#F8F8F8] inputs-auth">
          <input
            type="type"
            name="PhoneNumber"
            className="input-phone-number w-9/12 h-full px-4 bg-transparent text-left"
            placeholder="5454 555 912"
            onChange={props.onChange}
            defaultValue={props.defValuePhone}
          />
          <div className="w-3/12 h-full p-2 flex gap-2 items-center flex-nowrap">
            <img src={iconIr} alt="" className="w-7 rounded-sm" />
            <span className="text-myGreen-2">98+</span>
          </div>
        </div>
      ) : (
        // input email
        <div className="flex items-center relative h-12 rounded-xl bg-[#F8F8F8] inputs-auth">
          <input
            type="text"
            name="Email"
            defaultValue={props.defValueEmail}
            className="inputs-auth bg-[#F8F8F8] w-full h-12 rounded-xl px-4 "
            placeholder="آدرس ایمیل"
            onChange={props.onChange}
          />
        </div>
      )}
    </>
  );
}


export default memo(TabAuth)