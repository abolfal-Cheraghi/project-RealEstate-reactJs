import React from "react";
import CountUp from "react-countup";

export default function IconBox2(props) {
  return (
    <div className="con-box-icon2 bg-white rounded-lg shadow-sm p-6 md:p-8">
      <div className="flex flex-col gap-1 items-center justify-center">
        <div className="countup-box text-myGreen-300 text-[40px] s-bold">
          <CountUp end={props.count} duration={10}/> +
        </div>
        <h4 className="text-black text-md md:text-lg s-medium">
          {props.title}
        </h4>
        <p className="text-gray1 leading-7 text-center text-[13px] ">
          {props.text}
        </p>
      </div>
    </div>
  );
}
