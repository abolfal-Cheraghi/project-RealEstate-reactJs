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

// axios package
import axios from "axios";
// sweetalert2
import Swal from "sweetalert2";
// use navigate from react router dom
import { useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();
  const [level, setLevel] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState(String);
  const [email, setEmail] = useState(String);
  const [pass, setPass] = useState(String);
  const [countTimer, setCountTimer] = useState(30);
  // state tab active in component auth
  const [tabActive, setTabActive] = useState(true);

  // useEfect on Change level
  useEffect(() => {
    if (level === 1) {
      setEmail("");
      setPhoneNumber("");
    }
  }, [level]);

  // function ReGeX validate email
  const validateEmail = (email) => {
    return String(email).test(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  // function ReGeX validate email
  const validatePhone = (phone) => {
    const rp = /^09\d{9}^/;
    return String(phone).test(rp);
  };

  // btn submit phone or email
  const submitToPass = () => {
    setCountTimer(30);
    if (tabActive === true) {
      axios.get(`http://localhost:5000/users/`).then((user) => {
        console.log(user.data[0].PhoneNumber);
        console.log(user.data.length);
        for (let index = 0; index < user.data.length; index++) {
          if (user.data[index].PhoneNumber === phoneNumber) {
            console.log("همین درسته");
            setLevel(2);
          } else {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "هچین شماره ای وجود ندارد .",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    } else if (tabActive === false) {
      axios.get("http://localhost:5000/users").then((user) => {
        console.log(user.data[0].Email);
        console.log(user.data.length);
        for (let index = 0; index < user.data.length; index++) {
          if (user.data[index].Email === email) {
            setLevel(3);
          } else {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: "هچین ایمیلی وجود ندارد .",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    }
  };

  // change adler inputs
  const changeInputsPE = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone") {
      setPhoneNumber(e.target.value);
    }
  };

  // btn re Send SMS
  const reSendSMS = () => {
    setCountTimer(30);
  };

  // to level 1 and edit email or phone
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

  // event click login With Phone & login With Email
  const loginWithEmail = () => {
    axios
      .get(`http://localhost:5000/users/?Email=${email}`)
      .then((authUser) => {
        if (authUser.data[0].Password === pass) {
          document.cookie =
            "username=not ; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
          navigate("/");
          Swal.fire({
            position: "center",
            icon: "success",
            title: ` خوش آمدید ${authUser.data[0].FullName} جان`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "رمز عبور اشتباه است!",
            text: "اگر رمز عبور خود را فراموش کردید با شماره وارد شوید .",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const loginWithPhone = () => {};
  return (
    <>
      {/* section login */}
      <section className="sec-regester container h-[100vh] py-10">
        <div className="wrapper flex items-center gap-10 flex-wrap md:flex-nowrap h-full">
          <div className="w-full md:w-1/2 lg:w-1/3">
            {/* form login */}

            {level === 1 ? (
              <div className="con-form bg-white shadow-lg rounded-xl p-5 md:p-8">
                <h1 className="text-[28px] c-black s-medium">ورود</h1>
                <form action="" className="my-4">
                  <div className="flex flex-col gap-5 ">
                    {/* compionent tab type auth */}
                    <TabAuth
                      onChange={changeInputsPE}
                      phoneValue={phoneNumber}
                      emailValue={email}
                      active={tabActive}
                      setActive={setTabActive}
                    />
                    {/*  input name */}

                    {/* component input pass */}
                    {/* <InputPass /> */}

                    {/* button regester to send SMS */}
                    <button
                      type="button"
                      className="w-full py-3.5 text-white bg-myGreen-400 rounded-xl flex items-center justify-center gap-1"
                      onClick={submitToPass}
                    >
                      <IoArrowForwardSharp className="fill-gray3" /> ادامه
                    </button>
                  </div>
                </form>
                {/* box link to page login */}
                <div className="text-sm text-gray3 flex gap-1 mt-10">
                  <span>هنوز عضو نشده اید؟</span>
                  <Link to="/regester" className="text-myGreen-200">
                    ثبت نام
                  </Link>
                </div>
              </div>
            ) : level === 2 ? (
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
                  <span>{phoneNumber}</span>
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
                    onClick={reSendSMS}
                  >
                    ارسال مجدد
                    <GrFormRefresh size="14px" className="fill-gray1" />
                  </span>
                </div>

                {/* button login */}
                <button
                  type="button"
                  className="w-full py-3.5 text-white bg-myGreen-400 rounded-xl flex items-center justify-center gap-1"
                  onClick={loginWithPhone}
                >
                  <IoArrowForwardSharp className="fill-gray3  " /> ورود
                </button>
              </div>
            ) : (
              <div className="con-form bg-white shadow-lg rounded-xl p-5 md:p-8 text-center">
                <div className="flex flex-col gap-4">
                  <h4 className="text-[28px] c-black s-medium text-right">
                    کد ورود
                  </h4>
                  <InputPass
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="w-full py-3.5 text-white bg-myGreen-400 rounded-xl flex items-center justify-center gap-1"
                    onClick={loginWithEmail}
                  >
                    <IoArrowForwardSharp className="fill-gray3" /> ورود
                  </button>
                </div>
              </div>
            )}

            {/* button go to home */}
            <div className="flex flex-col items-center gap-5 mt-6">
              <p className="text-center text-gray1">
                با ورود و یا ثبت نام در این سایت شما شرایط و قوانین استفاده از
                سرویس های سایت را می‌پذیرید.
              </p>
              <Link to="/">
                <button className="text-sm text-myGreen-200 border border-solid border-myGreen-200 text-center py-3 px-5 rounded-lg duration-500 hover:scale-90">
                  بازگشت به صفحه اصلی
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 bg-myGreen-100">
            <img src={bgReg} alt="regester bg" className="p-2 md:p-14" />
          </div>
        </div>
      </section>
    </>
  );
}
