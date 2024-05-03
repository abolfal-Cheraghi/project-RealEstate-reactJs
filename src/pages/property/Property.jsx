import React, { Fragment, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// icons
import { IoMdHeart, IoMdHeartEmpty, IoIosHome } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import {
  FaLocationDot,
  FaShareNodes,
  FaTag,
  FaBed,
  FaRegBuilding,
  FaComments,
  FaWhatsapp,
  FaTelegram,
  FaXTwitter,
  FaPhoneFlip,
} from "react-icons/fa6";
import { PiBathtubFill } from "react-icons/pi";
import { SlSizeFullscreen } from "react-icons/sl";
import { BiCalendar } from "react-icons/bi";
// modal
import Modal from "../../components/modal/Modal";
import BoxNewProperties from "../../components/boxNewProperties/BoxNewProperties";
import BoxBanner1 from "../../components/boxBanner1/BoxBanner1";
import IconBox from "../../components/iconBox/IconBox";
import DOMPurify from "dompurify";

// swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules swiper
import { Pagination } from "swiper/modules";
import { useDglobal } from "../../hooks/useDglobal";
import { IsLogin } from "../../utils";
import Swal from "sweetalert2";

// hook global context

export default function Property() {
  const params = useParams().propetyId;
  const [dataProperty, setDataProperty] = useState({});
  const [dataAgancy, setDataAgancy] = useState({});
  const [overview, setOverview] = useState({});
  const [options, setOptions] = useState([]);
  const [images, setImages] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [isSave, setIsSave] = useState();
  const { AddPr, removePr, isSavePr, listFavorate } = useDglobal();
  // modal share and slider img
  let [isOpenShare, setIsOpenShare] = useState(false);
  let [isOpenSlider, setIsOpenSlider] = useState(false);

  //   mount page
  useEffect(() => {
    // get data propety
    axios.get(`http://localhost:5000/properties/${params}`).then((res) => {
      setDataProperty(res.data);
      setOverview(res.data["overview"]);
      setOptions(res.data["options"]);
      setImages(res.data["images"]);
      setIsPending(false);
      setIsSave(isSavePr(res.data.id));
    });

    // get address agency this property
    axios
      .get(`http://localhost:5000/agancies/${dataProperty.agency}`)
      .then((res) => {
        setDataAgancy(res.data);
      });
  }, [params]);

  useEffect(() => {
    IsLogin() && setIsSave(isSavePr(dataProperty.id));
  }, [listFavorate]);

  // functions modal
  const closeModalShare = () => {
    setIsOpenShare(false);
  };

  const openModalShare = () => {
    setIsOpenShare(true);
  };

  // function modal slider
  const onModalSlider = () => {
    setIsOpenSlider(true);
  };
  const closeModalSlider = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* navbar */}
      <Header />
      <div className="container pt-8 text-xs md:text-sm">
        {/* box location */}
        <div className="box-location bg-white h-[40px] rounded-md flex items-center gap-3 px-5">
          <Link to="/" className="text-myGreen-300 ">
            صفحه نخست
          </Link>
          <span>/</span>

          <Link to="/properties" className=" text-myGreen-300">
            ملک ها
          </Link>
          <span>/</span>
          <span className="">{dataProperty.title}</span>
        </div>

        {/* section box intro top page */}
        <section className="intro-page mt-8">
          <div className="bg-white py-6 px-4 rounded-lg">
            <div className="flex flex-wrap justify-between items-center row-gap-5">
              <div className="w-full md:w-6/12 content-page-pr flex flex-col gap-4">
                {/* box for  */}
                <div className="z-10 bg-green-1 w-fit px-2 py-1 c-white rounded-md  text-md">
                  {dataProperty.for}
                </div>
                {/* title */}
                <h1 className="text-black text-2xl s-medium">
                  {dataProperty.title}
                </h1>

                {/* box info pr */}
                <div className="flex gap-3">
                  <div className="flex items-center gap-1">
                    <FaLocationDot size="14px" className="fill-gray-1" />
                    <span className="c-gray-1 text-[13px]">
                      {dataProperty.location}
                    </span>
                  </div>
                  <span>/</span>
                  <div className="flex items-center gap-1">
                    <MdOutlineAccessTime size="14px" className="fill-gray-1" />
                    <span className="c-gray-1 text-[13px]">
                      {dataProperty.date}
                    </span>
                  </div>
                  <span>/</span>
                  <div className="flex items-center gap-1">
                    <FaComments size="14px" className="fill-gray-1" />
                    <span className="c-gray-1 text-[13px]">بدون نظر</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 flex flex-col gap-6 items-end">
                {/* section price */}
                <div className="mt-4 md:m-0 text-md lg:text-xl">
                  {dataProperty.for === "برای فروش" ? (
                    <span className="text-myGreen-300 s-medium">
                      {dataProperty["price"].Buy === "contact"
                        ? "تماس بگیرید"
                        : dataProperty["price"].Buy === "sold" &&
                          "فروخته شد"}{" "}
                      {dataProperty["price"].Buy !== "contact" &&
                        dataProperty["price"].Buy !== "sold" && (
                          <p className="s-bold">
                            {Number(dataProperty["price"].Buy).toLocaleString(
                              "fa"
                            )}{" "}
                            <span className="text-gray1">تومان</span>
                          </p>
                        )}
                    </span>
                  ) : (
                    dataProperty.for === "برای اجاره" && (
                      <div className="flex flex-col gap-2 md:gap-4 items-end">
                        <p className="text-gray1 s-bold">
                          ودیعه
                          <span className="s-bold text-xl lg:text-2xl text-myGreen-300">
                            {" "}
                            {Number(
                              dataProperty["price"].deposit
                            ).toLocaleString("fa")}{" "}
                          </span>
                          تومان
                        </p>
                        <p className="text-gray1 s-bold">
                          اجاره ماهیانه
                          <span className="s-bold text-xl lg:text-2xl  text-myGreen-300">
                            {" "}
                            {Number(
                              dataProperty["price"].monthlyRent
                            ).toLocaleString("fa")}{" "}
                          </span>
                          تومان
                        </p>
                      </div>
                    )
                  )}
                </div>
                {/* section icon save & share */}
                <div className=" flex  overflow-hidden rounded-xl border border-solid">
                  <div
                    className={`${
                      isSave && "bg-myGreen-300"
                    }  border-l border-sloid`}
                  >
                    {isSave ? (
                      <div
                        className="h-full w-full p-2.5 pointer"
                        onClick={() => {
                          IsLogin()
                            ? removePr(dataProperty["id"])
                            : Swal.fire({
                                position: "top-end",
                                icon: "warning",
                                title: "وارد شوید !",
                                text: "قبل از اضافه کردن به علاقه مندی وارد شوید .",
                                showConfirmButton: false,
                                timer: 1500,
                              });
                        }}
                      >
                        <IoMdHeart
                          size="23px"
                          className="icon-save fill-white"
                        />
                      </div>
                    ) : (
                      <div
                        className="h-full w-full p-2.5  duration-300 pointer hover:bg-myGreen-300 hover-icon "
                        onClick={() => {
                          IsLogin()
                            ? AddPr(dataProperty)
                            : Swal.fire({
                                position: "top-end",
                                icon: "warning",
                                title: "وارد شوید !",
                                text: "قبل از اضافه کردن به علاقه مندی وارد شوید .",
                                showConfirmButton: false,
                                timer: 1500,
                              });
                        }}
                      >
                        <IoMdHeartEmpty
                          size="23px"
                          className="icon-save fill-myGreen-300"
                        />
                      </div>
                    )}
                  </div>
                  <div
                    className="p-2.5 pointer duration-300 hover:bg-myGreen-300 hover-icon"
                    onClick={openModalShare}
                  >
                    <FaShareNodes size="23px" className="fill-myGreen-300 " />
                  </div>
                  {/* modal share */}
                  <Modal
                    show={isOpenShare}
                    closeModal={closeModalShare}
                    title="اشتراک گذاری در :"
                  >
                    <div className="wrapper mt-5 flex gap-3 items-center justify-center">
                      <a
                        href={`https://telegram.me/share/url?url=http://localhost:5173/property/${dataProperty.id}&text=${dataProperty.title}`}
                        target="blank"
                        className="bg-[#2CA5E0] hover:bg-[rgb(93,182,227)] p-2 rounded-lg"
                      >
                        <FaTelegram className="fill-white" size="20px" />
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?text=*${dataProperty.title}http://localhost:5173/property/${dataProperty.id}`}
                        target="blank"
                        className="bg-[#25D366] hover:bg-[#4ff58c] p-2 rounded-lg"
                      >
                        <FaWhatsapp className="fill-white" size="20px" />
                      </a>
                      <a
                        href=""
                        target="blank"
                        className="bg-black hover:bg-[#2b2b2b] p-2 rounded-lg"
                      >
                        <FaXTwitter className="fill-white" size="20px" />
                      </a>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section contents pr */}
        <section className="propertiy mt-3">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* right box */}
            <div className="lg:col-span-2">
              <div className="box-img-page-pr mt-5">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper rounded-lg"
                >
                  {images.map((img) => (
                    <SwiperSlide onClick={onModalSlider} key={img}>
                      <img
                        src={img}
                        alt="تصاویر ملک"
                        className="h-[350px] w-full object-cover object-center"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="box-overview-page-pr bg-white rounded-xl p-6 mt-7">
                {/* overview */}
                <div className="overview-pr">
                  <h4 className="text-black text-xl s-medium">برسی اجمالی</h4>
                  <div className="my-10  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <IconBox title="شناسه ملک" subTitle={dataProperty.id}>
                      <FaTag
                        size="20px"
                        className="fill-myGreen-300 duration-200"
                      />
                    </IconBox>
                    <IconBox
                      title="مساحت زمین"
                      subTitle={`${overview.landArea} متر`}
                    >
                      <SlSizeFullscreen
                        size="19px"
                        className="fill-myGreen-300 duration-200"
                      />
                    </IconBox>
                    <IconBox title="نوع ملک" subTitle={overview.type}>
                      <IoIosHome
                        size="20px"
                        className="fill-myGreen-300 duration-200"
                      />
                    </IconBox>
                    <IconBox
                      title="تعداد اتاق"
                      subTitle={`${overview.numberOFrooms}`}
                    >
                      <FaBed
                        size="20px"
                        className="fill-myGreen-300 duration-200"
                      />
                    </IconBox>
                    <IconBox
                      title="تعداد حمام"
                      subTitle={`${overview.numberOFbathrooms}`}
                    >
                      <PiBathtubFill
                        size="20px"
                        className="fill-myGreen-300 duration-200"
                      />
                    </IconBox>
                    <IconBox title="وضعیت ملک" subTitle={dataProperty.for}>
                      <FaRegBuilding
                        size="20px"
                        className="fill-myGreen-300 duration-200"
                      />
                    </IconBox>
                    <IconBox
                      title="سال ساخت"
                      subTitle={overview.yearOFconstraction}
                    >
                      <BiCalendar
                        size="20px"
                        className="fill-myGreen-300 duration-200"
                      />
                    </IconBox>
                  </div>

                  {/* spline */}
                  <hr className="my-6" />

                  {/* info this pr */}
                  <h4 className="text-black text-xl s-medium">
                    درباره این ملک
                  </h4>
                  <div
                    className="my-5 text-justify leading-8 text-gray1"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(dataProperty.aboutProperty),
                    }}
                  ></div>

                  {/* spline */}
                  <hr className="my-6" />

                  {/* options this pr */}
                  <h4 className="text-black text-xl s-medium">
                    ویژگی ها و امکانات
                  </h4>
                  <div className="list-option-page-pr my-5">
                    <ul className="flex list-inside flex-wrap gap-x-10 gap-y-4 text-md text-gray1 list-image-[url(../../../public/images/checkmark2.png)]">
                      {options.map((option, index) => (
                        <li className="" key={index}>
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* spline */}
                  <hr className="my-6" />

                  {/* comments this pr */}
                  <h4 className="text-black text-xl s-medium">
                    دیدگاهتان را بنویسید ...
                  </h4>
                  <p className="text-gray1 my-2">
                    نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز
                    علامت‌گذاری شده‌اند *
                  </p>
                </div>
              </div>
            </div>
            {/* left box */}
            <div className="">
              {/* box Advertiser information ...*/}
              <div className="box-advertiser-info">
                <div className="bg-white rounded-lg p-6">
                  {dataAgancy.agency === "" ? (
                    <span>این اگهی را عموم ثبت کردن .</span>
                  ) : (
                    <>
                      <h4 className="text-black s-bold text-lg">
                        اطلاعات آژانس املاک
                      </h4>
                      <hr className="my-3" />
                      <div className="grid grid-cols-3 items-center gap-4">
                        <div className="img">
                          <img
                            src={dataAgancy.logoAg}
                            alt="logo agency"
                            className="rounded-[100%] border border-2 py-2 h-24"
                          />
                        </div>
                        <div className="col-span-2 flex flex-col gap-3">
                          <span className="text-black s-medium text-base">
                            {dataAgancy.nameAg}
                          </span>
                          <div className="flex gap-1 items-center">
                            <FaPhoneFlip className="fill-gray1" size="12px" />
                            <span className="text-gray1">
                              {dataAgancy.phoneNumber}
                            </span>
                          </div>
                          <Link to={`/agency-profile/${dataAgancy.id}`}>
                            <button className="bg-myGreen-300 w-fit py-1 px-3 text-xs text-white rounded-lg">
                              مشاهده پروفایل
                            </button>
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* box the newest propeties */}
              <BoxNewProperties />
              {/* box banner 1 */}
              <BoxBanner1 />
            </div>
          </div>
        </section>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
