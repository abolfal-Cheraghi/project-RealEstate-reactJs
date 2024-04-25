import React from "react";
import "./CartAreas.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function CartAreas(props) {
  return (
    <div className="con-cart-areas bg-white rounded-xl overflow-hidden shadow-lg duration-500">
      <div className="header-cart-areas">
        <img
          src={props.cover}
          alt="img areas"
          className="w-full h-[240px] object-cover object-center"
        />
      </div>
      <div className="content-cart-areas p-5 flex items-center justify-between">
        <h4 className="c-black text-[17px] s-medium">{props.name}</h4>
        <Link to={`/properties/${props.value}`}>
          <div className="icon-cart-areas bg-myGreen-100 p-3 rounded-full duration-500">
            <FaArrowLeft
              size="18px"
              className="fill-myGreen-300 duration-500"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
