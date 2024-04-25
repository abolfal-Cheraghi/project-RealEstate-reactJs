import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Header from "../../components/header/Header";
import FilterSearch from "../../components/filterSearch/FilterSearch";
import CartProperty from "../../components/cartProperty/CartProperty";
import imgMain from "../../../public/images/main-page-pic-1.png";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import Btn2 from "../../components/btn2/Btn2";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TopAreas from "../../components/secTopAreas/TopAreas";
import CartAganc from "../../components/cartAganc/CartAganc";
import SecAgent from "../../components/secAgent/SecAgent";

// countup
import CountUp from "react-countup";
import Footer from "../../components/footer/Footer";

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
  const [dataPropertiesSale, setDataPropertiesSale] = useState([]);
  const [dataPropertieRent, setDataPropertiesRent] = useState([]);
  const [idPending, setIsPending] = useState(true);
  const [tabForProp, setTabForProp] = useState("rent");

  // animation mount
  useEffect(() => {
    Aos.init();
  }, [tabForProp]);

  // when page mount
  useEffect(() => {
    getAllProperties("برای فروش", setDataPropertiesSale);
    getAllProperties("برای اجاره", setDataPropertiesRent);
  }, []);
  // get all data properties than API
  const getAllProperties = (propFor, saveToState) => {
    axios
      .get(`http://localhost:5000/properties/?for=${propFor}&_limit=6`)
      .then((res) => {
        saveToState(res.data);
        setIsPending(false);
      });
  };
  return (
    <>
      <Header />
      {/* section hero home page */}
      <section className="hero-home-page bg-white con-fluid">
        <div className="box-hero-page">
          <h1 className="title-hero c-white s-bold text-center w-[480px]">
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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-13">
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
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <span className="top-title">ملک های موجود</span>
              <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
                آخرین ملک‌های اضافه شده
              </h2>
            </div>
            <div className="flex items-end justify-end gap-3">
              <button
                value="sale"
                id={tabForProp === "sale" && "active-btn"}
                className="btn-filter-home text-sm s-medium border border-solid border-myGreen-300  px-6 py-2 rounded-full c-gray-1 transition hover:bg-myGreen-300"
                onClick={(e) => {
                  setTabForProp(e.target.value);
                }}
              >
                برای فروش
              </button>
              <button
                value="rent"
                id={tabForProp === "rent" && "active-btn"}
                className="btn-filter-home text-sm s-medium border border-solid border-myGreen-300 px-6 py-2 rounded-full c-gray-1 transition hover:bg-myGreen-300"
                onClick={(e) => {
                  setTabForProp(e.target.value);
                }}
              >
                برای اجاره
              </button>
            </div>
          </div>
          <div
            className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4"
            data-aos="fade-up"
          >
            {tabForProp === "rent"
              ? dataPropertieRent.map((property) => (
                  <CartProperty
                    aos="fade-up"
                    key={property.id}
                    {...property}
                    all={property}
                    img={property.images}
                    type={property.overview.type}
                    rooms={property.overview.numberOFrooms}
                    bathrooms={property.overview.numberOFbathrooms}
                    landArea={property.overview.landArea}
                    price={
                      property.for == "برای فروش"
                        ? property.price.Buy
                        : property.price.monthlyRent
                    }
                  />
                ))
              : dataPropertiesSale.map((property) => (
                  <CartProperty
                    aos="fade-up"
                    key={property.id}
                    {...property}
                    all={property}
                    img={property.images}
                    type={property.overview.type}
                    rooms={property.overview.numberOFrooms}
                    bathrooms={property.overview.numberOFbathrooms}
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

      {/* section about us landing */}
      <section className="sec-aboutus-Home con-fluid bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 py-14 items-center gap-8 lg:gap-0">
            <div className="">
              <img src={imgMain} alt="main img" className="" />
            </div>
            <div className="content-aboutus-home flex flex-col gap-3">
              <span className="top-title">چرا ملک های ما را انتخاب کنید</span>
              <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
                کارشناسان ملک های داخلی و بین المللی
              </h2>
              <p className="text-gray1 text-justify leading-8 lg:pe-14 mt-4">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است با استفاده از چاپگرها است.
              </p>
              <div className="flex gap-14 mb-5">
                <div className="my-2">
                  <ul className="text-xs md:text-base flex flex-col gap-3 list-image-[url(../../../public/images/checkmark.png)] list-inside">
                    <li>ملک‌های برجسته</li>
                    <li>مکان های شهر مدرن</li>
                    <li>خدمات تخصصی</li>
                  </ul>
                </div>
                <div className="my-2">
                  <ul className="text-xs md:text-base flex flex-col gap-3 list-image-[url(../../../public/images/checkmark.png)] list-inside">
                    <li>کارشناسان مجرب</li>
                    <li>خدمات طبق قوانین</li>
                    <li>تحقیقات پیشرو در بازار</li>
                  </ul>
                </div>
              </div>
              <Btn2 text="درباره ما" link="/about-us" />
            </div>
          </div>
        </div>
      </section>

      {/* section Top areas */}
      <section className="top-areas container py-14">
        <div className="mb-8">
          <span className="top-title">چرا ملک های ما را انتخاب کنید</span>
          <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
            کارشناسان ملک های داخلی و بین المللی
          </h2>
        </div>
        <TopAreas />
      </section>

      {/* section news properties */}
      <section className="sec-slider-news-properties con-fluid bg-blue">
        <div className="container  py-14 ">
          <div className="flex">
            <div>
              <span className="top-title">مناطق جدید</span>
              <h2 className="c-white text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
                جدیدترین املاک و مستغلات اضافه شده
              </h2>
            </div>
          </div>
          <div className="slider-news-prop my-8">
            <Swiper
              spaceBetween={30}
              breakpoints={{
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 1,
                },
              }}
              className="mySwiper"
            >
              {dataPropertieRent.map((property) => (
                <SwiperSlide key={property.id}>
                  <CartProperty
                    border="border-none"
                    aos="fade-up"
                    gap="gap-1"
                    {...property}
                    all={property}
                    img={property.images}
                    type={property.overview.type}
                    rooms={property.overview.numberOFrooms}
                    bathrooms={property.overview.numberOFbathrooms}
                    landArea={property.overview.landArea}
                    price={
                      property.for == "برای فروش"
                        ? property.price.Buy
                        : property.price.monthlyRent
                    }
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* section agncies */}
      <section className="sec-aganies-home con-fluid bg-white py-14">
        <div className="container">
          <div className="flex flex-col items-center">
            <span className="top-title">متخصصین اینجا هستند</span>
            <h2 className="c-black text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
              نمایندگان انحصاری ما
            </h2>
          </div>

          <SecAgent />
        </div>
      </section>

      {/* section Our statistics */}
      <section className="sec-our-statistics con-fluid bg-blue bg-[url('../../../public/images/cover-bg-10.png')]  bg-bottom bg-no-repeat bg-[length:100%_130px] py-14">
        <div className="flex flex-col items-center gap-2">
          <h2 className="c-white text-2xl lg:text-3xl lg:leading-10 s-bold pe-4">
            املاک و مستغلات با اعداد
          </h2>
          <p className="c-white text-sm">
            در سال 2022 همه چیز شبیه این درصد است
          </p>
        </div>

        <div className="container pt-14">
          <div className="wrapper-counte-up flex gap-14 items-centerv justify-evenly flex-wrap c-white ">
            <div className="con-countup mt-8">
              <div className="box-countup">
                <div className="content-box-countup flex flex-col items-center ">
                  <div className="countup text-[33px] md:text-[53px] s-bold">
                    <CountUp end={50} duration={4} />%
                  </div>
                  <div className="title-countup">مالکیت خانه</div>
                </div>
              </div>
            </div>
            <div className="con-countup mt-8">
              <div className="box-countup">
                <div className="content-box-countup flex flex-col items-center">
                  <div className="countup text-[33px] md:text-[53px] s-bold text-center">
                    <CountUp end={99} duration={4} />%
                  </div>
                  <div className="title-countup ">مشتریان راضی</div>
                </div>
              </div>
            </div>
            <div className="con-countup mt-8">
              <div className="box-countup">
                <div className="content-box-countup flex flex-col items-center">
                  <div className="countup text-[33px] md:text-[53px] s-bold">
                    <CountUp end={27} duration={4} />%
                  </div>
                  <div className="title-countup">مالیات بر مستغلات</div>
                </div>
              </div>
            </div>
            <div className="con-countup mt-8">
              <div className="box-countup">
                <div className="content-box-countup flex flex-col items-center ">
                  <div className="countup text-[33px] md:text-[53px] s-bold">
                    <CountUp end={80} duration={4} />%
                  </div>
                  <div className="title-countup ">ملک تکمیل شده</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section news article */}

      <section className="bg-myWhite con-fluid py-14">
        <h2 className="text-3xl text-center">این بخش هنوز فکری به حالش نشده</h2>
        <h4 className="text-xl text-center mt-5">
          ولی این بخش مربوط به اخرین مقالات
        </h4>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
}
