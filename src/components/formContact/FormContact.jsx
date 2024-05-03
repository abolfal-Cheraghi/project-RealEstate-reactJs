import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
export default function FormContact() {
  const [dataMessage, setDataMesssage] = useState({});
  // event change Field Form
  const changeFieldForm = (e) => {
    setDataMesssage({ ...dataMessage, [e.target.name]: e.target.value });
  };

  // btn isSubmitting send message
  const isSubmitting = () => {
    if (
      dataMessage.fullName &&
      dataMessage.phoneNumber &&
      dataMessage.email &&
      dataMessage.issue &&
      dataMessage.message
    ) {
      if (/09\d{9}/.test(dataMessage.phoneNumber)) {
        axios
          .post("http://localhost:5000/PeoplesQuestions", dataMessage)
          .then((response) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "فرم با موفقیت ارسال شده است",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((error) => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "خطایی رخ داده است",
              text: error.response.data.message,
            });
          });
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "لطفا یک ایمیل و تلفن درست وارد کن😒",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "لطفا تمامی فیلدها را پر نمایید",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <form className="my-8">
        <div className="grid grid-cols-2  gap-2 md:gap-6">
          <div className="w-full flex flex-col gap-[6px]">
            <label htmlFor="fullName" className="label-input-contact">
              نام و نام خانوادگی:
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="ابولفضل چراغی"
              className="field-input-conatact"
              onChange={changeFieldForm}
            />
          </div>
          <div className=" flex flex-col gap-[6px]">
            <label htmlFor="phoneNumber" className="label-input-contact">
              شماره تماس
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="09121849080"
              className="field-input-conatact"
              onChange={changeFieldForm}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="email" className="label-input-contact">
              پست الکترونیک
            </label>
            <input
              type="email"
              name="email"
              placeholder="yourmail@gmail.com"
              className="field-input-conatact"
              onChange={changeFieldForm}
            />
          </div>
          <div className="flex flex-col gap-[6px]">
            <label htmlFor="issue" className="label-input-contact">
              موضوع
            </label>
            <input
              type="text"
              name="issue"
              placeholder="موضوع مکالمه"
              className="field-input-conatact"
              onChange={changeFieldForm}
            />
          </div>
          <div className="col-span-2 flex flex-col gap-[6px]">
            <label htmlFor="message" className="label-input-contact">
              پیام
            </label>
            <div className="">
              <textarea
                name="message"
                placeholder="برای ما بنویسید ..."
                onChange={changeFieldForm}
              />
            </div>
          </div>
          <div className="col-span-2">
            <button
              type="button"
              onClick={isSubmitting}
              className="w-full py-3 rounded-lg bg-myGreen-300 text-white duration-300 hover:bg-myGreen-400"
            >
              ارسال درخواست
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
