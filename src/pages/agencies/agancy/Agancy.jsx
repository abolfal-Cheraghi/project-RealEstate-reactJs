import React, { useEffect, useState } from "react";
import Header from "../../../components/header/Header";
import { Link, useParams } from "react-router-dom";
import Footer from "../../../components/footer/Footer";

// icons
import { FaLocationDot, FaPhoneVolume, FaMap } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import BoxNewProperties from "../../../components/boxNewProperties/BoxNewProperties";
import CartProperty from "../../../components/cartProperty/CartProperty";
import DOMPurify from "dompurify";
import CartProperty2 from "../../../components/cartProperty2/CartProperty2";

export default function Agancy() {
  const params = useParams().idAgency;

  const [thisAgency, setThisAgency] = useState({});
  const [agnencyProperties, setAgencyPropeties] = useState([]);
  const [showTabPr, setShowTabPr] = useState(false);

  useEffect(() => {
    // get all data this agency
    axios.get(`http://localhost:5000/agancies/${params}`).then((res) => {
      setThisAgency(res.data);

      setIsPending(false);
    });
    // get all propeties this agency
    axios
      .get(`http://localhost:5000/properties/?agency=${params}`)
      .then((resPr) => {
        setAgencyPropeties(resPr.data);
        if (!thisAgency) {
          setIsPending(true);
        }
        return;
      });
  }, [params]);
  return (
    <>
      {/* header */}
      <Header />
      <div className="container pt-4 lg:pt-8">
        {/* box location */}
        <div className="box-location bg-white h-[40px] rounded-md flex items-center gap-2  md:gap-3 px-5 text-xs md:text-sm">
          <Link to="/" className="text-myGreen-300 ">
            صفحه نخست
          </Link>
          <span>/</span>
          <Link to="/agencies" className="text-myGreen-300">
            آژانس های املاک
          </Link>
          <span>/</span>
          <Link to="/agencies" className="">
            {thisAgency.nameAg}
          </Link>
        </div>

        {/* section profile */}
        <section className="profile-agency mt-5">
          <div
            className={`bg-black/55 bg-blend-saturation bg-fixed rounded-lg  flex items-center justify-center flex-wrap md:flex-nowrap p-6 lg:p-8 lg:h-[300px] gap-4 lg:gap-10`}
            style={{ backgroundImage: `url('${thisAgency.bgProfile}')` }}
          >
            <div className="box-log-agency bg-white/15 rounded-lg p-8 w-full md:w-3/12">
              <img src={thisAgency.logoAg} alt="logo agency" />
            </div>
            <div className="w-full md:w-9/12 flex flex-col gap-2 lg:gap-3">
              <h2 className="text-fs18x lg:text-2xl text-white s-bold">
                {thisAgency.nameAg}
              </h2>
              <p className="flex gap-2 text-[13px] md:text-base text-white mt-3">
                <FaLocationDot className="fill-myGreen-300" /> آدرس دفتر آژانس :{" "}
                {thisAgency.Address}
              </p>

              <div className="flex flex-wrap gap-2 lg:gap-6">
                <div className=" text-[13px] md:text-base flex  items-center gap-2 text-white">
                  <FaPhoneVolume className="fill-myGreen-300" />
                  <span>شماره : {thisAgency.phoneNumber}</span>
                </div>
                <div className="text-[13px] md:text-base flex items-center gap-2 text-white">
                  <MdEmail className="fill-myGreen-300" />
                  <span>ایمیل : {thisAgency.email}</span>
                </div>
              </div>
              <div className="text-[13px] md:text-base flex items-center gap-2 text-white">
                <FaMap className="fill-myGreen-300" />
                <span>حوزه فعالیت : {thisAgency.activity}</span>
              </div>
            </div>
          </div>
        </section>

        {/* section about agency and them propeties | sidebar new properties*/}

        <section className="about-agency-page py-10 mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="box-about-agency">
                <div className="flex items-end gap-3">
                  <button
                    value="sale"
                    id={showTabPr === false && "active-btn"}
                    className="btn-filter-home text-black bg-white text-sm md:text-md  s-medium border border-solid border-gray2  px-6 py-2 rounded-xl  transition hover:bg-myGreen-300"
                    onClick={() => {
                      setShowTabPr(false);
                    }}
                  >
                    بررسی اجمالی
                  </button>
                  <button
                    value="rent"
                    id={showTabPr === true && "active-btn"}
                    className="btn-filter-home text-black bg-white text-sm md:text-md s-medium border border-solid border-gray2 px-3 md:px-6 py-2 rounded-xl  transition hover:bg-myGreen-300"
                    onClick={() => {
                      setShowTabPr(true);
                    }}
                  >
                    ملک های این آژانس
                  </button>
                </div>

                {/* content tab */}
                <div className="bg-white rounded-lg p-6 mt-4">
                  {showTabPr ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {agnencyProperties.map((property) => (
                        <CartProperty
                          aos="fade-up"
                          key={property.id}
                          {...property}
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
                  ) : (
                    <div
                      className="text-justify text-gray1 leading-8 text-sm md:text-md"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(thisAgency.overview),
                      }}
                    ></div>
                  )}
                </div>
              </div>
            </div>
            <div className="">
              <BoxNewProperties />
            </div>
          </div>
        </section>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
}
