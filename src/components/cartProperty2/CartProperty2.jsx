import React, { useState } from "react";
import { Link } from "react-router-dom";
// icons
import { IoBedOutline } from "react-icons/io5";
import { LuShowerHead } from "react-icons/lu";
import { SlSizeFullscreen } from "react-icons/sl";
import { FaLocationDot, FaSleigh } from "react-icons/fa6";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { space } from "postcss/lib/list";
export default function CartProperty2(props) {
  return (
    <div
      className={`con-cart-property bg-white w-full rounded-xl overflow-hidden  ${props.border} flex`}
      data-aos={props.aos}
    >
      <div className="header-cart-property w-1/3 h-[240px] relative p-3 rounded-lg">
        {/* slider pictures */}
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper slider-cart-pro h-full rounded-lg"
        >
          {props.images.map((img) => (
            <SwiperSlide>
              <img src={img} alt="" className="img-fluid" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* info bottom header */}
        <div className="info-box-cart-property  absolute bottom-7 left-7 right-4 flex justify-between items-center z-10">
          <div className="left flex flex-col"></div>
        </div>
      </div>

      {/* content  cart */}
      <div className="content-cart-property relative p-3 w-2/3">
        {/* label absulote */}
        <div className="z-10 type-cart-propert bg-green-1 w-fit px-2 py-1 c-white rounded-md absolute top-5 left-5 text-sm">
          {props.for}
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="c-green-1 w-fit text-sm">{props.type}</div>
          <h3 className="c-black text-xl s-medium line-clamp-1">
            <Link to={`/property/${props.id}`}>{props.title}</Link>
          </h3>

          <div className="flex items-center gap-2">
            <FaLocationDot size="17px" className="fill-gray-1" />
            <span className="c-gray-1 text-sm">{props.location}</span>
          </div>
          {/* box overview content */}
          <div className="w-full flex items-center gap-14 mt-3">
            <div className="flex items-center  gap-2">
              <div className="bg-green-4 p-1.5 rounded-full">
                <IoBedOutline className="fill-green-1" size="18px" />
              </div>
              <span className="c-gray-1 text-xs md:text-[13px]">
                {props.rooms} اتاق
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-4 p-1.5 rounded-full">
                <LuShowerHead className="fill-green-1" size="19px" />
              </div>
              <span className="c-gray-1 text-xs md:text-[13px]">
                {props.bathrooms} حمام
              </span>
            </div>
            <div className="flex items-center  gap-2">
              <div className="bg-green-4 p-1.5 rounded-full">
                <SlSizeFullscreen className="fill-green-1" size="15px" />
              </div>
              <span className="c-gray-1 text-xs md:text-[13px]">
                {props.landArea} متر
              </span>
            </div>
          </div>
          <hr />
          {/* box price */}
          <div className="price-cart-pro s-bold text-myGreen-200 text-md lg:text-2xl">
            {props.price !== "contact" &&
              props.price !== "sold" &&
              Number(props.price).toLocaleString("fa")}
            {props.price === "contact" ? (
              <sapn className="text-lg">تماس بگیرید</sapn>
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
    </div>
  );
}
