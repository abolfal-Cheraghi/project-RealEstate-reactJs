import React, { memo } from "react";
import "./Btn1.css";
import { Link } from "react-router-dom";
function Btn1(props) {
  return (
    <Link to={props.linkBtn}>
      <button
        className={`btn-1 ${props.className}  ${props.pm} s-medium rounded-full`}
      >
        {props.text}
      </button>
    </Link>
  );
}
Btn1.defaultProps = {
  pm: "py-1 px-4",
  to: "/add-property",
};
export default memo(Btn1);
