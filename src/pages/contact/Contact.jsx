import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useDglobal } from "../../hooks/useDglobal";
import FormContact from "../../components/formContact/FormContact";

export default function Contact() {
  const { ourAddress } = useDglobal();

  console.log(ourAddress);
  return (
    <>
      {/* header */}
      <Header />

      <div className="container py-4 md:py-10">
        {/* box location */}
        <div className="box-location bg-white h-[40px] rounded-md flex items-center gap-3 px-5 text-sm">
          <Link to="/" className="text-myGreen-300 ">
            صفحه نخست
          </Link>
          <span>/</span>
          <span className="">تماس با ما</span>
        </div>

        {/* section contact us */}
        <section className="section-contact-us my-8">
          <div className="grid gap-6 md:gap-10 lg:gap-12 grid-cols-1 lg:grid-cols-2 items-center">
            {/* box right | FORM CONTACT */}
            <div className="right">
              {" "}
              {/* sub title */}
              <span className="top-title">سوالی دارید؟</span>
              {/* title */}
              <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
                میزبان صدای گرمتان هستیم
              </h2>
              {/* form */}
              <FormContact />
            </div>

            {/* box left | ADDRESS US */}
            <div className="left">
              <div className="wrapper-boxes grid grid-1 gap-8">
                {/* row first | 1 box */}
                <div className=" flex flex-wrap md:flex-nowrap  gap-8 ">
                  <div
                    id="our-address-1"
                    className="box-address w-full md:w-6/12"
                  >
                    <span className="text-xl md:text-[28px] s-bold">
                      {ourAddress[0].ourLocation}
                    </span>
                    <span className="text-gray1 text-sm text-center leading-7">
                      {ourAddress[0].address}
                    </span>
                    <span>{ourAddress[0].ourTelephone}</span>
                  </div>
                  <div className="img-box-office w-full md:w-6/12">
                    <img
                      src="https://pre-websites.ir/elementor/realestate/wp-content/uploads/2021/12/conact-us-pic-1.jpg"
                      alt="our office 1"
                      className="filter-gray rounded-lg w-full h-64 object-cover object-center  duration-500 hover:-translate-y-3 "
                    />
                  </div>
                </div>
                {/* row secound | 2 box */}
                <div className=" flex flex-wrap md:flex-nowrap md:flex-row-reverse  gap-8">
                  <div
                    id="our-address-1"
                    className="box-address w-full md:w-6/12 "
                  >
                    <span className="text-xl md:text-[28px] s-bold">
                      {ourAddress[1].ourLocation}
                    </span>
                    <span className="text-gray1 text-sm text-center leading-7">
                      {ourAddress[1].address}
                    </span>
                    <span>{ourAddress[1].ourTelephone}</span>
                  </div>
                  <div className="img-box-office w-full md:w-6/12">
                    <img
                      src="https://pre-websites.ir/elementor/realestate/wp-content/uploads/2021/12/villa36.jpg"
                      alt="our office 1"
                      className="filter-gray rounded-lg w-full h-64 object-cover object-center duration-500 hover:-translate-y-3 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* section our address on map */}
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="500"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=%D8%AA%D9%87%D8%B1%D8%A7%D9%86+(%D8%AF%D9%81%D8%AA%D8%B1%20%D9%85%D8%B1%DA%A9%D8%B2%DB%8C%20%D9%85%D8%A7%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </iframe>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
}
