import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import {
  Link,
  useParams,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import CartProperty from "../../components/cartProperty/CartProperty";
// aos
import Aos from "aos";
import "aos/dist/aos.css";
import { findNameArea } from "../../functions/findNameArea";

// icons
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import CartProperty2 from "../../components/cartProperty2/CartProperty2";
import Footer from "../../components/footer/Footer";
import NotFound from "../../components/not-found/NotFound";
import BoxNewProperties from "../../components/boxNewProperties/BoxNewProperties";
// img
import ReactPaginate from "react-paginate";
import BoxFilterPr from "../../components/boxFilterPr/BoxFilterPr";
import BoxBanner1 from "../../components/boxBanner1/BoxBanner1";

export default function Properties() {
  // locatios and query URL
  let params = useParams();
  let { search } = useLocation();
  let searchParams = new URLSearchParams(search);
  // states
  const [dataProperties, setDataProperties] = useState([]);
  const [isPending, setIsPending] = useState(true);
  // state type show properties
  const [typeShow, setTypeShow] = useState("grid");
  const [DataFilter, setDataFilter] = useState({
    location: "",
    for: "",
    type: "",
  });

  // animation aos
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    // get location path and save to object filter
    DataFilter.location = findNameArea(params["*"]);

    // condition get data URL

    // if url has a location
    if (findNameArea(params["*"]) === "" && searchParams.size == 0) {
      axios.get(`http://localhost:5000/properties`).then((res) => {
        setDataProperties(res.data);
      });
    } else if (findNameArea(params["*"]) !== "" && searchParams.size === 0) {
      let pathFilter = findNameArea(params["*"]);
      console.log(`http://localhost:5000/properties/?location=${pathFilter}`);
      axios
        .get(`http://localhost:5000/properties/?location=${pathFilter}`)
        .then((res) => {
          setDataProperties(res.data);
        });
      // if url has any query
    } else if (searchParams.size > 0 && findNameArea(params["*"]) === "") {
      axios
        .get(
          `http://localhost:5000/properties/?${
            searchParams.get("for") !== null
              ? "for=" + searchParams.get("for").split("-").join(" ")
              : ""
          }${
            searchParams.get("type") !== null
              ? "&overview.type=" +
                searchParams.get("type").split("-").join(" ")
              : ""
          }
        ${
          searchParams.get("rooms") !== null
            ? "&overview.numberOFrooms=" + searchParams.get("rooms")
            : ""
        }${
            searchParams.get("bathrooms") !== null
              ? "&overview.numberOFbathrooms" + searchParams.get("bathrooms")
              : ""
          }
        ${
          searchParams.get("constraction") !== null
            ? "&yearOFconstraction=" + searchParams.get("constraction")
            : ""
        }`
        )
        .then((res) => {
          setDataProperties(res.data);
        });
    }
    // if url has a location and any query
    else if (searchParams.size > 0 && findNameArea(params["*"]) !== "") {
      let pathFilter = findNameArea(params["*"]).split("/")[0];
      DataFilter.location = findNameArea(params["*"]);
      axios
        .get(
          `http://localhost:5000/properties/?location=${pathFilter}${
            searchParams.get("for") !== null
              ? "&for=" + searchParams.get("for").split("-").join(" ")
              : ""
          }${
            searchParams.get("type") !== null
              ? "&overview.type=" +
                searchParams.get("type").split("-").join(" ")
              : ""
          }${
            searchParams.get("rooms") !== null
              ? "&overview.numberOFrooms=" + searchParams.get("rooms")
              : ""
          }${
            searchParams.get("bathrooms") !== null
              ? "&overview.numberOFbathrooms" + searchParams.get("bathrooms")
              : ""
          }${
            searchParams.get("constraction") !== null
              ? "&yearOFconstraction=" + searchParams.get("constraction")
              : ""
          }`
        )
        .then((res) => {
          setDataProperties(res.data);
        });
    }
  }, [params]);

  return (
    <>
      <Header />
      <div className="container pt-8">
        {/* box location */}
        <div className="box-location bg-white h-[40px] rounded-md flex items-center gap-3 px-5">
          <Link to="/" className="text-myGreen-300 text-sm">
            صفحه نخست
          </Link>
          <span>/</span>
          {DataFilter["location"] ? (
            <>
              <Link to="/properties" className="text-sm text-myGreen-300">
                ملک ها
              </Link>
              <span>/</span>
              <span className="text-sm">{DataFilter.location}</span>
            </>
          ) : (
            <span className="text-sm">ملک ها</span>
          )}
        </div>

        {/* section properties and filters */}
        <section className="properties mt-10">
          <div className="flex gap-8 flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-9/12">
              <div className="top-box flex items-center justify-between mb-5">
                {dataProperties.length !== 0 && (
                  <div className="hidden md:flex items-center bg-white rounded-lg px-4 py-2 shadow-lg gap-4">
                    <button
                      type="button"
                      className="border-l border-l-solid pe-3"
                    >
                      <IoGrid
                        size="20px"
                        className="fill-gray3"
                        onClick={() => setTypeShow("grid")}
                      />
                    </button>
                    <button
                      type="button"
                      className=""
                      onClick={() => setTypeShow("list")}
                    >
                      <FaThList size="20px" className="fill-gray3" />
                    </button>
                  </div>
                )}
              </div>
              {/* if length property object === 0 */}
              {dataProperties.length === 0 ? (
                // component not found properties
                <NotFound />
              ) : (
                // section show properties
                <div
                  className={`grid grid-cols-1 ${
                    typeShow === "grid" ? "md:grid-cols-2" : "lg:grid-cols-1"
                  } gap-6 `}
                >
                  {dataProperties.map((property) =>
                    typeShow === "grid" ? (
                      <CartProperty
                        key={property.id}
                        aos="fade-up"
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
                    ) : (
                      <CartProperty2
                        key={property.id}
                        aos="fade-up"
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
                    )
                  )}
                </div>
              )}
              <div className="w-full flex items-center">
                {/* <ReactPaginate /> */}
              </div>
            </div>
            <div className="w-full lg:w-3/12">
              {/* box search and filter on properties */}
              <BoxFilterPr />
              {/* box news property */}
              <BoxNewProperties />
              {/* box find property for you */}
              <BoxBanner1 />
            </div>
          </div>
        </section>
      </div>

      {/* footer */}
      <div className="mt-14">
        <Footer />
      </div>
    </>
  );
}
