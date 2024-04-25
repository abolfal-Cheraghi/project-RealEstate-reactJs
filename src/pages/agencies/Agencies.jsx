import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
import BoxFilterPr from "../../components/boxFilterPr/BoxFilterPr";
import BoxNewProperties from "../../components/boxNewProperties/BoxNewProperties";
import BoxBanner1 from "../../components/boxBanner1/BoxBanner1";
import { useDglobal } from "../../hooks/useDglobal";
import CartAganc2 from "../../components/cartAganc2/CartAganc2";
import Footer from "../../components/footer/Footer";

export default function Agencies() {
  const { dataAgancies } = useDglobal();

  return (
    <>
      <Header />
      <div className="container pt-8 text-black">
        {/* box location */}
        <div className="box-location bg-white h-[40px] rounded-md flex items-center gap-3 px-5 text-xs md:text-sm">
          <Link to="/" className="text-myGreen-300 ">
            صفحه نخست
          </Link>
          <span>/</span>
          <Link to="/agencies" className="">
            آژانس های املاک
          </Link>
        </div>

        {/* section agencies page*/}
        <section className="agencies-page my-10">
          <div className="flex flex-wrap lg:flex-nowrap gap-6">
            <div className="wrapper-agance w-full lg:w-10/12">
              <h4 className="text-black text-center md:text-right text-lg s-medium">
                تعداد آژانس های املاک که در حال همکاری با ما هستند :{" "}
                {dataAgancies.length}
              </h4>

              <div className="wrapper-agancy-cart grid grid-cols-1 gap-6 mt-6">
                {/* {dataAgancies.map((item) => (
                  <CartAganc2 {...item} />
                ))} */}
                {dataAgancies.map((aganc) => (
                  <CartAganc2 {...aganc} />
                ))}
              </div>
            </div>
            <div className="sidebar w-full lg:w-4/12">
              {/* filter box */}
              <BoxFilterPr />
              {/* news property */}
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
