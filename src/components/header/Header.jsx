import React, { memo, useEffect, useState } from "react";
import "./Header.css";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useLocation, useNavigation } from "react-router-dom";
import Btn1 from "../btn1/Btn1";
// icons
import {
  FaHome,
  FaRegListAlt,
  FaRegUser,
  FaRegHeart,
  FaUser,
  FaHeart,
} from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { LuContact2 } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const navigation = [
  { name: "صفحه اصلی", href: "/", icon: <FaHome size="16px" /> },
  { name: "آگهی ها", href: "/properties", icon: <FaRegListAlt size="16px" /> },
  {
    name: "آژانس های املاک",
    href: "/agencies",
    icon: <LuContact2 size="16px" />,
  },
  { name: "وبلاگ", href: "/blog", icon: <GrArticle size="16px" /> },
  { name: "درباره ما", href: "/about-us", icon: <FaRegUser size="16px" /> },
  { name: "تماس با ما", href: "/contact-us", icon: <BiSupport size="16px" /> },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [bgColor, setBgColor] = useState("");
  const [color, setColor] = useState("");
  let loc = useLocation().pathname;

  // useEfeect for mount nav
  useEffect(() => {
    // if for color nav
    if (loc !== "/") {
      setColor("c-black");
    } else {
      setColor("c-white");
    }
  }, []);

  // event handler scroll window
  const listenScrollEvent = (e) => {
    if (window.scrollY > 20 && loc === "/") {
      setBgColor("bg-blue-scrooler-header");
    } else if (window.scrollY < 20 && loc === "/") {
      setBgColor("bg-trans-scrooler-header");
      setColor("c-white");
    } else if (window.scrollY < 20 && loc !== "/") {
      setBgColor("bg-trans-scrooler-header");
    } else if (window.scrollY > 20 && loc !== "/") {
      setBgColor("bg-white-another-page");
    }
  };

  window.addEventListener("scroll", listenScrollEvent);

  return (
    <Disclosure as="nav" className={`${bgColor} header z-50`}>
      {({ open }) => (
        <>
          <div className="container">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-black  ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className={`block h-6 w-6 ${color}`}
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className={`block h-6 w-6 ${color}`}
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className={`logo s-bold text-2xl ${color}`}>
                    سایت املاک
                  </h1>
                </div>
                <div className="hidden sm:ml-6 lg:block ms-12">
                  <div className="list-menu-nav flex gap-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={`${color} px-3 py-2 text-sm font-medium flex gap-2 items-center`}
                      >
                        {item.icon}
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <div className="relative flex items-center gap-5 ml-3">
                  <div className="box-panel-head flex gap-3">
                    <div
                      className={`border-solid ${
                        color === "c-white" ? "border-white" : "border-black"
                      } border rounded-full p-2 transition-all duration-500`}
                    >
                      <NavLink to="/favorates">
                        <FaRegHeart size="18px" className={`${color}`} />
                      </NavLink>
                    </div>
                    <div
                      className={`border-solid ${
                        color === "c-white" ? "border-white" : "border-black"
                      } border rounded-full p-2 transition-all duration-500`}
                    >
                      <NavLink to="/account-panel">
                        <FaRegUser size="18px" className={`${color}`} />
                      </NavLink>
                    </div>
                  </div>
                  <Btn1
                    LinkBtn={"/add-property"}
                    text="افزودن ملک"
                    className="md:my-1 md:mx-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-400"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="transform opacity-0 scale-100 "
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-2 px-2 pb-3 pt-2  list-menu-phone">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    as="a"
                    to={item.href}
                    className="item-menu-phone c-black block  px-3 py-2 text-base font-medium flex gap-2 items-center "
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                ))}
                <div className="box-panel-head-phone">
                  <NavLink
                    to="/account-panel"
                    className="c-gray-2 block px-3 py-2 text-base font-medium flex gap-2 items-center "
                  >
                    <FaUser size="16px" />
                    پنل کاربری
                  </NavLink>
                  <NavLink
                    to="/favorates"
                    className="c-gray-2 block px-3 py-2  font-light flex gap-2 items-center "
                  >
                    <FaHeart size="16px" />
                    ملک های ذخیره شده
                  </NavLink>
                </div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}

export default memo(Header);
