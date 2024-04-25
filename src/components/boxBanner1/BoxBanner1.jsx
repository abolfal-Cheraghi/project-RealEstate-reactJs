import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../public/images/tab-1.png";
export default function BoxBanner1() {
  return (
    <div className="box-news-properties bg-white rounded-xl p-3 mt-5">
      <Link to={"/properties"}>
        <img src={banner1} alt="banner find property" className="rounded-lg" />
      </Link>
    </div>
  );
}
