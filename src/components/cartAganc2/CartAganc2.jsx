import React from "react";
import { Link } from "react-router-dom";
// icons
import { AiOutlineGlobal } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// tooltip
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
export default function CartAganc2(props) {
  return (
    <div className="box-cart-aganc2">
      <div className="bg-white rounded-lg p-4 flex flex-wrap md:flex-nowrap itmes-center justify-center md:h-56">
        <div className="img-agancy-cart w-9/12 md:w-4/12">
          <img
            src={props.logoAg}
            alt="لوگو آژانس املاک"
          />
        </div>
        <div className="content-box-agancy-cart w-full md:w-9/12">
          <Link to={`/agency-profile/${props.id}`}>
            <h4 className="text-black text-fs18x md:text-f22s s-medium">
              {props.nameAg}
            </h4>
          </Link>
          <p className="text-black text-xs md:text-sm mt-2">
            حوزه فعالیت : <span>{props.activity}</span>
          </p>
          <hr className="mt-2" />
          <p className="text-gray1 text-fs10x md:text-sm mt-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است
          </p>
          <div className="info-cart-agancy flex justify-between items-center mt-3">
            <button className="bg-myGreen-300 text-sm text-white rounded-lg p-2">
              <Link to={`/agency-profile/${props.id}`}>مشاهده پروفایل</Link>
            </button>
            <div className="flex flex-cols  gap-2 mt-5 mb-2">
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
      </div>
    </div>
  );
}
