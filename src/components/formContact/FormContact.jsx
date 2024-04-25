import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
export default function FormContact() {
  return (
    <>
      <Formik
        initialValues={{
          fullName: "",
          phoneNumber: "",
          email: "",
          issue: "",
          message: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          if (
            !values.fullName &&
            !values.phoneNumber &&
            !values.email &&
            !values.issue &&
            !values.message
          ) {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "لطفا تمامی فیلدها را پر نمایید",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            axios
              .post("http://localhost:5000/PeoplesQuestions", values)
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
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="my-8">
            <div className="grid grid-cols-2  gap-2 md:gap-6">
              <div className="w-full flex flex-col gap-[6px]">
                <label htmlFor="fullName" className="label-input-contact">
                  نام و نام خانوادگی:
                </label>
                <Field
                  type="text"
                  name="fullName"
                  placeholder="ابولفضل چراغی"
                  className="field-input-conatact"
                />
              </div>
              <div className=" flex flex-col gap-[6px]">
                <label htmlFor="phoneNumber" className="label-input-contact">
                  شماره تماس
                </label>
                <Field
                  type="text"
                  name="phoneNumber"
                  placeholder="09121849080"
                  className="field-input-conatact"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="email" className="label-input-contact">
                  پست الکترونیک
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="yourmail@gmail.com"
                  className="field-input-conatact"
                />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label htmlFor="issue" className="label-input-contact">
                  موضوع
                </label>
                <Field
                  type="text"
                  name="issue"
                  placeholder="موضوع مکالمه"
                  className="field-input-conatact"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-[6px]">
                <label htmlFor="message" className="label-input-contact">
                  پیام
                </label>
                <div className="">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="برای ما بنویسید ..."
                  />
                </div>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg bg-myGreen-300 text-white duration-300 hover:bg-myGreen-400"
                >
                  ارسال درخواست
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
