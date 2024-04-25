import React, { useEffect, useState } from "react";
import TabAuth from "../../../components/tabAuth/TabAuth";
// import svg background this section
import bgReg from "../../../../public/images/Houses-bro.svg";
import { Link } from "react-router-dom";
import InputPass from "../../../components/inputPass/InputPass";
// icons
import { IoArrowForwardSharp } from "react-icons/io5";
import { GrFormRefresh } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
// use navigate from react router dom
import { useNavigate } from "react-router-dom";
// sweetalert2
import Swal from "sweetalert2";

export default function Regester() {
  let navigate = useNavigate();
  const [level, setLevel] = useState(1);
  const [dataForm, setDataForm] = useState({});
  const [dataUser, setDataUser] = useState({
    PhoneNumber: "",
    Email: "",
    FullName: "",
    Password: "",
    dateOFregestration: "",
  });
  // state tab active in component auth
  const [tabActive, setTabActive] = useState(true);
  const [countTimer, setCountTimer] = useState(30);

  // function ReGeX validate email
  const validateEmail = (email) => {
    let regEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.test(regEmail);
  };
  // function ReGeX validate email
  const validatePhone = (phone) => {
    const rp = /^9\d{9}^/;
    return phone.test(rp);
  };

  // level 1

  // useEfect after mount and updating state tab active
  useEffect(() => {
    setDataUser({ ...dataUser, Email: "", PhoneNumber: "" });
  }, [tabActive]);
  // eventt on change input phone and email
  const changesInputPE = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };
  const submitToSendSms = () => {
    if (tabActive === true) {
      if (
        true
        // logic
      ) {
        setLevel(2);
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else if (tabActive === false) {
      // logic
      Swal.fire({
        position: "center",
        icon: "success",
        title: `خوش آمدی`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  };

  // level 2

  // send sms
  const sendSMS = () => {
    setCountTimer(30);
  };

  // edit phonenumber
  const toEditPhone = () => {
    setLevel(1);
    setCountTimer(30);
  };
  // count timer code
  setTimeout(() => {
    if (level === 2 && countTimer !== 0) {
      setCountTimer(countTimer - 1);
    }
  }, 1000);

  // btn event onCLick sign in
  const signinHandler = () => {
    // logic
    Swal.fire({
      position: "center",
      icon: "success",
      title: `خوش آمدی`,
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <>
      {/* section regester */}
      <section className="sec-regester container h-[100vh] py-10">
        <div className="wrapper flex items-center gap-10 flex-wrap md:flex-nowrap h-full">
          <div className="w-full md:w-1/2 lg:w-1/3">
            {level === 1 ? (
              <>
                <div className="con-form bg-white shadow-lg rounded-xl p-5 md:p-8">
                  <h1 className="text-[28px] c-black s-medium">ثبت نام</h1>
                  {/* form regester */}
                  <form action="" className="my-4">
                    <div className="flex flex-col gap-5 ">
                      {/* compionent tab type auth */}
                      <TabAuth
                        active={tabActive}
                        setActive={setTabActive}
                        onChange={changesInputPE}
                        defValuePhone={dataUser.PhoneNumber}
                        defValueEmail={dataUser.Email}
                      />
                      {/*  input name */}
                      <input
                        type="text"
                        name="fullName"
                        className="inputs-auth bg-[#F8F8F8] w-full h-12 rounded-xl px-4 "
                        placeholder="نام و نام خانوادگی"
                      />
                      {/* component input pass */}
                      <InputPass />
                      {/* button regester to send SMS */}
                      <button
                        className="w-full py-3.5 text-white bg-myGreen-400 rounded-xl flex items-center justify-center gap-1"
                        onClick={submitToSendSms}
                      >
                        <IoArrowForwardSharp className="fill-gray3  " /> ادامه
                      </button>
                    </div>
                  </form>
                  {/* box link to page login */}
                  <div className="text-sm text-gray3 flex gap-1 mt-10">
                    <span>قبلا ثبت نام کرده اید؟</span>
                    <Link to="/login" className="text-myGreen-200">
                      ورود
                    </Link>
                  </div>
                </div>
                {/* button go to home */}
                <div className="flex flex-col items-center gap-5 mt-6">
                  <p className="text-center text-gray1">
                    با ورود و یا ثبت نام در این سایت شما شرایط و قوانین استفاده
                    از سرویس های سایت را می‌پذیرید.
                  </p>
                  <Link to="/">
                    <button className="text-sm text-myGreen-200 border border-solid border-myGreen-200 text-center py-3 px-5 rounded-lg duration-500 hover:scale-90">
                      بازگشت به صفحه اصلی
                    </button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="con-form bg-white shadow-lg rounded-xl p-5 md:p-8 text-center">
                <h4 className="text-[28px] c-black s-medium text-right">
                  کد ورود
                </h4>
                <div className="mt-5">
                  <span
                    className="text-gray1 transition hover:text-black pointer text-xs w-full flex items-center"
                    onClick={toEditPhone}
                  >
                    ویرایش شماره تلفن
                    <FaRegEdit size="14px" className="fill-gray1" />
                  </span>
                  <span>{dataUser.PhoneNumber}</span>
                  <input
                    type="number"
                    name="fullName"
                    className="inputs-auth bg-[#F8F8F8] w-full h-12 rounded-xl px-4 text-center mt-2"
                    placeholder="کد 4 رقمی ارسال شده را وارد کنید "
                    onChange={""}
                  />
                </div>
                {/* timer code */}
                <div className="flex">
                  <span
                    className={`text-gray1 text-sm w-full my-5  ${
                      countTimer !== 0 ? "inline" : "hidden"
                    }`}
                  >
                    {countTimer} : 00
                  </span>
                  <span
                    className={`text-gray1 transition hover:text-black pointer text-sm w-full my-5  flex items-center justify-center gap-1  ${
                      countTimer !== 0 ? "hidden" : "inline"
                    }`}
                    onClick={sendSMS}
                  >
                    ارسال مجدد
                    <GrFormRefresh size="14px" className="fill-gray1" />
                  </span>
                </div>

                {/* button login */}
                <button
                  type="button"
                  className="w-full py-3.5 text-white bg-myGreen-400 rounded-xl flex items-center justify-center gap-1"
                  onClick={signinHandler}
                >
                  <IoArrowForwardSharp className="fill-gray3  " /> ورود
                </button>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 bg-myGreen-100 ">
            <img src={bgReg} alt="regester bg" className="p-2 md:p-14" />
          </div>
        </div>
      </section>
    </>
  );
}
