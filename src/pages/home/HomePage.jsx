import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../components/header/Header";
import FilterSearch from "../../components/filterSearch/FilterSearch";
import CartProperty from "../../components/cartProperty/CartProperty";
import axios from "axios";

let Customers = [
  {
    id: 1,
    logo: "https://pre-websites.ir/elementor/realestate/wp-content/uploads/2021/09/2524.png",
  },
  {
    id: 2,
    logo: "https://pre-websites.ir/elementor/realestate/wp-content/uploads/2021/09/6726.png",
  },
  {
    id: 1,
    logo: "https://pre-websites.ir/elementor/realestate/wp-content/uploads/2021/09/3332.png",
  },
  {
    id: 1,
    logo: "https://pre-websites.ir/elementor/realestate/wp-content/uploads/2021/09/5547.png",
  },
  {
    id: 1,
    logo: "https://pre-websites.ir/elementor/realestate/wp-content/uploads/2021/09/1073.png",
  },
  {
    id: 1,
    logo: "https://pre-websites.ir/elementor/realestate/wp-content/uploads/2021/09/2060.png",
  },
];
export default function HomePage() {
  const [dataProperties, setDataProperties] = useState([]);
  const [idPending, setIsPending] = useState(true);

  let l = "تماس بگیرید";

  console.log(Number(l).toLocaleString("fa"));

  // when page mount
  useEffect(() => {
    getAllProperties();
  }, []);
  // get all data properties than API
  const getAllProperties = () => {
    axios.get("http://localhost:5000/properties").then((res) => {
      setDataProperties(res.data);
      setIsPending(false);
    });
  };
  return (
    <>
      <Header />
      {/* section hero home page */}
      <section className="hero-home-page bg-white con-fluid">
        <div className="box-hero-page">
          <h1 className="title-hero c-white s-bold text-center">
            بهترین مکان برای زندگی با خانواده و عزیزان خود را پیدا کنید
          </h1>
          <div className="mt-10">
            <FilterSearch />
          </div>
        </div>
        <div className="box-bg-hero"></div>
      </section>

      {/* section Customers */}
      <section className="Customers bg-white py-14">
        <div className="container grid grid-cols-1 lg:grid-cols-3  lg:gap-[70px]">
          <div className="w-full flex flex-col gap-5">
            <span className="top-title">مشتریان ما</span>
            <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
              گروه هایی که به آژانس املاک ما اعتماد کردند
            </h2>
            <p className="c-gray-1 font-sm leading-8 lg:font-base">
              برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است.
            </p>
          </div>
          <div className="w-full col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Customers.map((Customer) => (
                <div className="w-full">
                  <img
                    src={Customer.logo}
                    alt="Customer"
                    className="logo-customers hover:shadow-xl hover:rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* section property news */}
      <section className="property-news">
        <div className="container py-10">
          <div className="flex">
            <div className="w-full lg:w-1/7 flex flex-col gap-2">
              <span className="top-title">ملک های موجود</span>
              <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
                آخرین ملک‌های اضافه شده
              </h2>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
            <CartProperty />
            <CartProperty />
            <CartProperty />
            <CartProperty />
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            <CartProperty />
            <CartProperty />
            
          </div> */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
            {dataProperties.map((property) => (
              <CartProperty
                key={property.id}
                {...property}
                img={property.images}
                type={property.overview.type}
                rooms={property.overview.numberOFrooms}
                bathrooms={property.overview.numberOFbathroom}
                landArea={property.overview.landArea}
                price={
                  property.for == "برای فروش"
                    ? property.price.Buy
                    : property.price.monthlyRent
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
