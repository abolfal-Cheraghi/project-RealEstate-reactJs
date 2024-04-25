import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import imgAbout1 from "../../../public/images/about-us-pic-4.jpg";
import imgAbout2 from "../../../public/images/about-us-pic-5.jpg";
import Btn3 from "../../components/btn3/Btn3";
// icons
import { IoArrowBack } from "react-icons/io5";
import { useDglobal } from "../../hooks/useDglobal";
import IconBox2 from "../../components/iconBox2/IconBox2";

// img
import imgCapabilitySec from "../../../public/images/main-page-pic-1.png";
import ProgressBar from "../../components/progressBar/ProgressBar";
import CartAganc3 from "../../components/cartAganc3/CartAganc3";
export default function About() {
  // get all data this page
  const { OurCapabilities, whyUs, dataAgancies } = useDglobal();

  useEffect(() => {
    console.log(whyUs);
  }, []);
  // console.log(whyUs);
  return (
    <>
      {/* header */}
      <Header />

      {/* container page about */}
      <div className="container py-6  lg:py-8">
        {/* box location */}
        <div className="box-location bg-white h-[40px] rounded-md flex items-center gap-3 px-5 text-sm">
          <Link to="/" className="text-myGreen-300 ">
            صفحه نخست
          </Link>
          <span>/</span>
          <span className="">درباره ما</span>
        </div>

        {/* hero section about */}
        <section className="hero-sec-about mt-8 lg:mt-10">
          {/* .wrapper frid boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
            <div className="content-hero-sec-about flex flex-col  gap-2">
              {/* sub title */}
              <span className="top-title">ما کی هستیم!</span>
              {/* title */}
              <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
                درباره تیم قدرتمند ما بیشتر بدانید
              </h2>
              {/* sup title */}
              <div className="text-black text-md md:text-xl mt-2">
                به جمع بیش از <span className="text-myGreen-300"> 50000 </span>
                کاربر ما بپیوندید{" "}
              </div>
              <div className="pargrapghs w-full md:w-10/12 flex flex-col gap-3 mt-3 md:mt-6">
                {/* paragraph first */}
                <p className="text-gray1 text-sm md:text-md leading-7">
                  برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم
                  متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است. برای تغییر این متن بر روی دکمه ویرایش کلیک
                  کنید.
                </p>
                {/* paragraph sec */}
                <p className="text-gray1 text-sm md:text-md leading-7">
                  برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم
                  متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است.
                </p>
              </div>

              {/* btn contect us */}
              <div className="mt-6">
                <Btn3 text="تماس با ما" myLink="/contact-us">
                  <IoArrowBack />
                </Btn3>
              </div>
            </div>
            {/* box imgs */}
            <div className="flex justify-end items-end relative mt-6 md:mt-0">
              <div className="">
                <img
                  src={imgAbout2}
                  alt="img info us web 1"
                  className=" h-[180px] w-full object-cover ob sm:h-full top-0 left-0 rounded-xl"
                />
              </div>
              <div className="">
                <img
                  src={imgAbout1}
                  alt="img info us web 2"
                  className="absolute w-2/3 md:w-2/3 right-0 top-[100px] md:top-[250px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* section why is us ? */}

        <section className="why-us-about mt-28 md:mt-46">
          {/* box top | sub title & title */}
          <div className="flex flex-col gap-2 items-center">
            {/* sub title */}
            <span className="top-title">چرا ما؟</span>
            {/* title */}
            <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
              چرا باید آژانس املاک مارا انتخاب کنید
            </h2>
          </div>

          {/* wrapper icon box and */}
          <div className="wrapper-icon-box grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-20 mx-0 md:mx-6 mt-8">
            {whyUs.map((item) => (
              <IconBox2
                key={item.id}
                count={item.counter}
                title={item.titleBox}
                text={item.textBox}
              />
            ))}
          </div>
        </section>
      </div>

      {/* section capability us */}
      <section className="capability-us-about con-fluid my-10 lg:my-20">
        {/* grid boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* box img RIGHT */}
          <div className="">
            <img src={imgCapabilitySec} alt="img" className="img-fluid" />
          </div>

          {/* box content LEFT */}
          <div className="bg-blueBG flex flex-col items-center justify-center p-6 md:pr-28">
            <div className="flex flex-col gap-2">
              {/* sub title */}
              <span className="top-title">قابلیت های ما</span>
              {/* title */}
              <h2 className="c-white text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
                مزایا و ویژگی های آژانس املاک ما
              </h2>
              {/* paragraph */}
              <div className="w-full md:w-10/12">
                <p className="text-gray1 text-sm md:text-md leading-7 mt-3">
                  برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم
                  متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                  طراحان گرافیک است.
                </p>
              </div>

              <div className="wrapper-progress-bars grid gap-3">
                {OurCapabilities.map((item) => (
                  <ProgressBar
                    label={item.capability}
                    value={item.percentCapabilities}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section  Some of our agencies */}
      <section className="our-agencies container my-10">
        {/* box top | sub title & title */}
        <div className="flex flex-col gap-2 items-center">
          {/* sub title */}
          <span className="top-title">آژانس های ما</span>
          {/* title */}
          <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
            برخی از آژانس های ما
          </h2>
        </div>

        {/* wrapper some of our agencies  */}
        <div className="my-6 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataAgancies.map(
            (aganc, index) =>
            // show 3 agance in sections
              index + 1 <= 3 && <CartAganc3 key={aganc.id} {...aganc} />
          )}
        </div>
      </section>


      {/* section news blogs */}
      <section className="my-48">
        <h1 className="text-gray1 text-3xl text-center">هنوز این بخش راه اندازی نشده است .</h1>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
}
