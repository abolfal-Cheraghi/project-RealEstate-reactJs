import React from "react";
import { Link } from "react-router-dom";

export default function Btn3(props) {
  return (
    <Link to={props.myLink}>
      <button className="bg-myGreen-300 text-white text-sm px-6 py-2 rounded-lg duration-300 hover:bg-myGreen-400 flex gap-2 items-center">
        {props.text}
        {props.children}
      </button>
    </Link>
  );
}
