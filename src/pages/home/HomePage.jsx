import React from "react";
import "./HomePage.css";
import Header from "../../components/header/Header";
import FilterSearch from "../../components/filterSearch/FilterSearch";

export default function HomePage() {
  return (
    <>
      <Header />

      {/* section hero home page */}
      <section className="hero-home-page con-fluid">
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
    </>
  );
}
