import React, { useEffect, useState } from "react";
import "./CartProperty.css";
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
import { useDglobal } from "../../hooks/useDglobal";
import { useAddPr } from "../../hooks/useAddAd";
import { useDeletePr } from "../../hooks/useDeleteAd";

export default function CartProperty(props) {
  const [isSave, setIsSave] = useState();
  const { listFavorate, dispatch } = useDglobal();
  const { addPr } = useAddPr();
  const { deletePr } = useDeletePr();

  // btn save property handler
  const saveHandler = () => {
    addPr(props.allData);
  };
  const removerSaveHandler = () => {
    deletePr(props.id);
  };

  useEffect(() => {
    // Let's see the situation, we bet if this data is in favorites
    setIsSave(() => {
      listFavorate.forEach((item) => {
        if (props.id === item.id) return false;
        return true;
      });
    });
  }, [listFavorate]);

  return (
    <div
      className={`con-cart-property w-full rounded-xl overflow-hidden  ${props.border}`}
      data-aos={props.aos}
    >
      <div className="header-cart-property h-[260px]  relative bg-blue">
        {/* slider pictures */}
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper slider-cart-pro h-full"
        >
          {props.images.map((img) => (
            <SwiperSlide>
              <img src={img} alt="" className="img-fluid" />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* box shadow on slider */}
        <div className="box-shadow-slider h-full w-full  absolute top-0 left 0 "></div>
        {/* label absulote */}
        <div className="z-10 type-cart-propert bg-green-1 w-fit px-2 py-1 c-white rounded-md absolute top-5 left-5 text-sm">
          {props.for}
        </div>
        {/* info bottom header */}
        <div className="info-box-cart-property  absolute bottom-0 left-4 right-4 flex justify-between items-center z-10">
          <div className="left flex flex-col gap-2">
            <div className="price-cart-pro s-bold c-white text-md lg:text-xl">
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
            <div className="c-green-1 w-fit px-2 py-2 bg-white rounded-t-lg text-sm">
              {props.type}
            </div>
          </div>
          <div className="right ">
            {isSave ? (
              <div
                className="box-save-cart  px-2 py-1 rounded-lg"
                onClick={saveHandler}
              >
                <IoMdHeart size="20px" className="icon-save fill-green-1" />
              </div>
            ) : (
              <div
                className="box-save-cart  px-2 py-1 rounded-lg"
                onClick={saveHandler}
              >
                <IoMdHeartEmpty
                  size="20px"
                  className="icon-save fill-white"
                  onClick={removerSaveHandler}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* content bottom cart */}
      <div className="content-cart-property bg-white p-5">
        <div className="flex flex-col gap-5">
          <h3 className="c-black text-xl s-medium line-clamp-1">
            <Link to={`/property/${props.id}`}>{props.title}</Link>
          </h3>

          <div className="flex items-center gap-2">
            <FaLocationDot size="17px" className="fill-gray-1" />
            <span className="c-gray-1 text-sm">{props.location}</span>
          </div>
          <div className="w-full flex items-center justify-around">
            <div className={`flex items-center ${props.gap}`}>
              <div className="bg-green-4 p-1.5 rounded-full">
                <IoBedOutline className="fill-green-1" size="18px" />
              </div>

              {/* box bottom content */}
              <span className="c-gray-1 text-xs md:text-[13px]">
                {props.rooms} اتاق
              </span>
            </div>
            <div className={`flex items-center ${props.gap}`}>
              <div className="bg-green-4 p-1.5 rounded-full">
                <LuShowerHead className="fill-green-1" size="19px" />
              </div>
              <span className="c-gray-1 text-xs md:text-[13px]">
                {props.bathrooms} حمام
              </span>
            </div>
            <div className={`flex items-center ${props.gap}`}>
              <div className="bg-green-4 p-1.5 rounded-full">
                <SlSizeFullscreen className="fill-green-1" size="15px" />
              </div>
              <span className="c-gray-1 text-xs md:text-[13px]">
                {props.landArea} متر
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartProperty.defaultProps = {
  gap: "gap-1",
  border: "border border-solid border",
};
