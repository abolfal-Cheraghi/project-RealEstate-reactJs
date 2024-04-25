import React, { useContext } from "react";
import { Link } from "react-router-dom";
// icons
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";



export default function CartAganc(props) {



  return (
    <div className="con-cart-aganc rounded-xl bg-white p-4">
      <div className="header-cart-agance h-[150px] overflow-hidden">
        <img
          src={props.logoAg}
          alt="logo agent"
          className="h-full w-full object-cover object-center duration-1000 hover:scale-110"
        />
      </div>
      <div className="content-cart-aganc flex flex-col gap-1 items-center">
        <Link to={`/agency-profile/${props.id}`}>
          <h4 className="text-lg text-center s-bold hover:c-green2">
            {props.nameAg}
          </h4>
        </Link>
        <p className="text-xs text-gray3 ">حوزه فعالیت : {props.activity}</p>
        <div className="flex flex-cols gap-3 mt-5 mb-2">
          {props.phoneNumber && (
            <div
              className="bg-myGreen-100 p-3 rounded-md"
              data-tooltip-id="my-tooltip1"
              data-tooltip-content={props.phoneNumber}
            >
              <Tooltip id="my-tooltip1" className="my-tooltip" />
              <FaPhoneVolume size="17px" className="fill-myGreen-300" />
            </div>
          )}
          {props.email && (
            <div
              className="bg-myGreen-100 p-3 rounded-md"
              data-tooltip-id="my-tooltip2"
              data-tooltip-content={props.email}
            >
              <Tooltip id="my-tooltip2" className="my-tooltip" />
              <AiOutlineGlobal
                size="19px"
                className="fill-myGreen-300 c-myGreen-300"
              />
            </div>
          )}

          {props.website && (
            <div
              className="bg-myGreen-100 p-3 rounded-md"
              data-tooltip-id="my-tooltip3"
              data-tooltip-content={props.website}
            >
              <Tooltip id="my-tooltip3" className="my-tooltip" />
              <MdEmail size="18px" className="fill-myGreen-300" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
