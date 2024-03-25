import React from "react";
import Header from "../../components/header/Header";

export default function Agencies() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div className="h-46 w-full bg-sky-600 col-span-3">dsf</div>
          <div className="h-46 w-full bg-sky-600 ">dsfds</div>
          <div className="h-46 w-full bg-sky-600 ">fdsfsd</div>
          <div className="h-46 w-full bg-sky-600 col-span-3">fsd</div>
        </div>
      </div>
    </>
  );
}
