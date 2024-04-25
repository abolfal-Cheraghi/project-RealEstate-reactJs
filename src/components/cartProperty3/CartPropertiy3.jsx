import React from "react";
import "./CartProperty3.css";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

export default function CartPropertiy3(props) {
  return (
    <div className="flex flex-nowrap h-[100px] w-full p-[6px]">
      <div className="w-4/12 box-img-cart-pr3">
        <img
          src={props.cover}
          className="object-cover object-center rounded-lg"
          alt=""
        />
      </div>
      <div className="w-8/12 h-full pr-3 flex flex-col justify-between">
        <Link to={`/property/${props.id}`}>
          <h4 className="text-black s-medium text-base line-clamp-1">{props.title}</h4>
        </Link>
        <div className="flex items-center gap-1">
          <FaLocationDot size="14px" className="fill-gray-1" />
          <span className="c-gray-1 text-[13px]">{props.location}</span>
        </div>
        <div className="price-cart-pro s-medium text-myGreen-300 lg:text-sm">
          {props.price !== "contact" &&
            props.price !== "sold" &&
            Number(props.price).toLocaleString("fa")}
          {props.price === "contact" ? (
            <sapn className="text-sm">تماس بگیرید</sapn>
          ) : props.price === "sold" ? (
            <span>فروخته شد</span>
          ) : (
            <span className="text-xs"> تومان </span>
          )}
          <span className="text-xs">
            {props.for == "برای اجاره" &&
              props.price !== "contact" &&
              "/ در ماه"}
          </span>
        </div>
      </div>
    </div>
  );
}
