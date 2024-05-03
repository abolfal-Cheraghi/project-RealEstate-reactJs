import React, { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// icons
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";

import { useDglobal } from "../../hooks/useDglobal";
import lisence from "../../../public/images/lisence.png";
export default function Footer() {
  const { fastLinks, addressFooter } = useDglobal();

  return (
    <footer className="con-fluid  lg:h-[450px] bg-[url('../../../public/images/bg-footer.jpg')] bg-no-repeat bg-cover c-white relative ">
      <div className="at-top-footer absolute left-0 right-0 h-full flex items-center">
        <div className="container flex flex-wrap lg:flex-nowrap gap-14 items-center">
          {/* section about and link social media */}
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-2 md:gap-6">
            <h3 className="c-myWhite text-xl md:text-3xl s-bold">
              سایت آماده املاک
            </h3>
            <p className="text-sm md:text-md text-justify leading-7">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله با
              صنعت چاپ است.
            </p>
            <div className="wrapper-social-footer flex gap-3 mt-4">
              <a href="https://instagram.com/abolfazlcheraqi1/" target="_blank">
                <div className="bg-[#ffffff59] p-2 rounded-md duration-500 hover:bg-myGreen-300">
                  <FaFacebook size="20px" className="fill-white" />
                </div>
              </a>
              <a href="https://instagram.com/abolfazlcheraqi1/" target="_blank">
                <div className="bg-[#ffffff59] p-2 rounded-md duration-500 hover:bg-myGreen-300">
                  <FaTwitter size="20px" className="fill-white" />
                </div>
              </a>
              <a href="https://instagram.com/abolfazlcheraqi1/" target="_blank">
                <div className="bg-[#ffffff59] p-2 rounded-md duration-500 hover:bg-myGreen-300">
                  <FaLinkedinIn size="20px" className="fill-white" />
                </div>
              </a>
              <a href="https://instagram.com/abolfazlcheraqi1/" target="_blank">
                <div className="bg-[#ffffff59] p-2 rounded-md duration-500 hover:bg-myGreen-300">
                  <FaPinterest size="20px" className="fill-white" />
                </div>
              </a>
              <a href="https://instagram.com/abolfazlcheraqi1/" target="_blank">
                <div className="bg-[#ffffff59] p-2 rounded-md duration-500 hover:bg-myGreen-300">
                  <FaInstagram size="20px" className="fill-white" />
                </div>
              </a>
            </div>
          </div>
          {/* section fast link */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4 flex flex-col gap-2 md:gap-6">
            <div className="title-footer">
              <h4 className="s-bold text-lg md:text-xl relative">
                لینک های سریع
              </h4>
            </div>
            {/* list fast links */}
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
              {fastLinks.map((item) => (
                <li className="text-sm duration-300 hover:-translate-x-2">
                  <Link to={`/${item.link}`}>{item.value}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* section address us */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4 flex flex-col gap-2 md:gap-6">
            <div className="title-footer">
              <h4 className="s-bold text-lg md:text-xl relative">تماس با ما</h4>
            </div>
            {/* list our address */}
            <ul className="mt-4 grid grid-cols-1 gap-8">
              <li className="flex items-center gap-1 text-sm duration-300 hover:-translate-x-2">
                <BiSolidPhoneCall size="18px" className="fill-gray3" />
                23456789 - 021
              </li>
              <li className="flex items-center gap-1 text-sm duration-300 hover:-translate-x-2">
                <MdEmail size="18px" className="fill-gray3" />
                amlaki@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm duration-300 hover:-translate-x-2">
                <MdLocationOn size="29px" className="fill-gray3" />
                <span className="leading-8">
                  خیابان ولیعصر - کوچه طراحان سایت - پلاک 1 - واحد 2
                </span>
              </li>
            </ul>
          </div>

          {/* section namad */}
          <div className="w-1/2 md:w-بع lg:w-1/4 flex flex-col gap-2 md:gap-6">
            <div className="title-footer">
              <h4 className="s-bold text-lg md:text-xl relative">مجوز ها</h4>
            </div>
            <div className="mt-4 w-[150px] grid grid-cols-2 gap-3 ">
              <img src={lisence} alt="lisence" className=""/>
              <img src={lisence} alt="lisence" className=""/>
              <img src={lisence} alt="lisence" className=""/>
              <img src={lisence} alt="lisence" className=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="at-bottom-footer bg-blue py-5 absolute bottom-0 left-0 right-0">
        <div className="container flex justify-between items-center ">
          <Link to="">
            <p className="text-sm">قوانین و مقررات سیاست حفظ حریم خصوصی</p>
          </Link>
          <p className="text-sm">تمامی حقوق برای سایت آماده املاک محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
