import React, { memo } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// icons
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="con-fluid h-[450px] bg-[url('../../../public/images/bg-footer.jpg')] bg-no-repeat bg-cover c-white relative ">
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
          </div>

          {/* section address us */}
          <div className="w-1/2 md:w-1/2 lg:w-1/4 flex flex-col gap-2 md:gap-6">
            <div className="title-footer">
              <h4 className="s-bold text-lg md:text-xl relative">تماس با ما</h4>
            </div>
          </div>

          {/* section namad */}
          <div className="w-1/2 md:w-بع lg:w-1/4 flex flex-col gap-2 md:gap-6">
            <div className="title-footer">
              <h4 className="s-bold text-lg md:text-xl relative">مجوز ها</h4>
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
export default memo(Footer);
