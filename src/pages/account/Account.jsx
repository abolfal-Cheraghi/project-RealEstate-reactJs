import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
// icons
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { FaListUl } from "react-icons/fa6";
import { IoBookmark } from "react-icons/io5";
import { GiUpgrade } from "react-icons/gi";
import { FaUserEdit } from "react-icons/fa";
import { foundedPathLocation } from "../../functions/findNameArea";
import { list } from "postcss";
const listMenu = [
  {
    path: "/account",
    value: "پیشخوان",
    icon: <AiOutlineDashboard className="fill-gray1" />,
  },
  {
    path: "add-property",
    value: "اضافه کردن آگهی",
    icon: <MdOutlineAddHomeWork className="fill-gray1" />,
  },
  {
    path: "list-of-submited-properties",
    value: "لیست ملک های ارسالی",
    icon: <FaListUl className="fill-gray1" />,
  },
  {
    path: "favorates",
    value: "ملک های ذخیره شده",
    icon: <IoBookmark className="fill-gray1" />,
  },

  {
    path: "upgrade-to-agent",
    value: "ارتقاء حساب کاربری",
    icon: <GiUpgrade className="fill-gray1" />,
  },
  {
    path: "edit-account-info",
    value: "ویرایش اطلاعات حساب کاربری",
    icon: <FaUserEdit className="fill-gray1" />,
  },
];
export default function Account() {
  const locationObject = useLocation();
  const [thisLocation, setThisLocaton] = useState("");

  useEffect(() => {
    foundedPathLocation(
      locationObject["pathname"].split("/account/").join(""),
      listMenu,
      setThisLocaton
    );
  }, [locationObject]);
  return (
    <>
      <Header />

      {/* container page */}
      <div className="container py-6 md:py-10">
        {/* box location */}
        <div className="box-location bg-white h-[40px] rounded-md flex items-center gap-3 px-5 text-sm">
          <Link to="/" className="text-myGreen-300 ">
            صفحه نخست
          </Link>
          <span>/</span>
          <span className="">حساب کاربری</span>
          <span>/</span>
          <span className="">{thisLocation}</span>
        </div>

        {/* section sidebar right & outlet */}
        <section className="panel-account my-8 ">
          <div className="flex flex-wrap lg:flex-nowrap gap-10">
            <div className=" w-full lg:w-4/12" id="right">
              {/* box side bar */}
              <div className="box-sidebar bg-white border rounded-lg pt-4 overflow-hidden">
                <h2 className="text-black text-2xl px-4">منو</h2>
                <ul className="flex flex-col mt-4">
                  {listMenu.map((itemMenu, index) => (
                    <>
                      <hr />
                      <li className="item-list-sidebar h-12">
                        {itemMenu.path === "/account" ? (
                          <Link
                            to={`${itemMenu.path}`}
                            className="px-4 flex gap-2 items-center h-full text-gray1"
                          >
                            <div>{itemMenu.icon}</div>
                            {itemMenu.value}
                          </Link>
                        ) : (
                          <NavLink
                            to={`${itemMenu.path}`}
                            className="link-menu-sidebar flmkld px-4 flex gap-2 items-center h-full text-gray1 duration-300 hover:bg-myGreen-300 hover:text-white "
                          >
                            <div>{itemMenu.icon}</div>
                            {itemMenu.value}
                          </NavLink>
                        )}
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="bg-white border rounded-lg w-full lg:w-8/1"
              id="left"
            >
              <Outlet />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
