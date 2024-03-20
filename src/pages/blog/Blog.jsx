import React from "react";
import Header from "../../components/header/Header";
import Btn1 from "../../components/btn1/Btn1";

export default function Blog() {
  return (
    <>
      <Header />
      <div>Blog</div>
      <Btn1
        LinkBtn="/add-property"
        text="افزودن ملک"
        className="md:my-1 md:mx-1"
      />
    </>
  );
}
