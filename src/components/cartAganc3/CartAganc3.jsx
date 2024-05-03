import React from "react";
import { Link } from "react-router-dom";

export default function CartAganc3(props) {
  return (
    <div className="cart-agancy-3">
      <div className="bg-white rounded-xl p-8 md:px-12 md:py-10">
        <div className="box-cart-aganc flex flex-col gap-5 items-center">
          <div className="header-cart-aganc">
            <div className="bg-myGreen-300 rounded-full h-[140px] w-[140px] flex items-center relative duration-300">
              <img
                src={props.logoAg}
                alt=""
                className="img-cart-aganc3 h-[125px] w-[125px] bg-gray2 rounded-full absolute left-0 hover:right-0"
              />
            </div>
          </div>
          <div className="content-cart-agance flex flex-col gap-4 items-center">
            <Link
              to={`/agency-profile/${props.id}`}
              className="text-black text-xl s-bold duration-200 hover:text-myGreen-300"
            >
              {props.nameAg}
            </Link>
            <p className="text-black text-center text-sm leading-7 line-clamp-2">
              {props.overview}
            </p>
            <Link
              to={`/agency-profile/${props.id}`}
              className="text-[13px] text-blue border border-blue rounded-lg py-2 px-4 mt-4 duration-300 hover:bg-blue hover:text-white"
            >
              مشاهده پروفایل
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
