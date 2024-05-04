import React, { Fragment, useEffect, useRef, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  StateProperties,
  numberOfbathrooms,
  numberOfrooms,
  cityProperties,
  optionsProperty,
} from "../../data/dataFilter";

// icons
import { FaList } from "react-icons/fa6";
import RangeBox from "../rangeBox/RangeBox";
import { useLocation, useParams } from "react-router-dom";
import { findNameArea } from "../../functions/findNameArea";
export default function BoxFilterPr() {
  let params = useParams();
  let { search } = useLocation();
  let searchParams = new URLSearchParams(search);

  const [selectedState, setSelectedState] = useState(StateProperties[0]);
  const [selectedCity, setSelectedCity] = useState(cityProperties[0]);
  const [selectedRooms, setSelectedRooms] = useState(numberOfrooms[0]);
  // checkbox ref
  const checkboxesType = useRef();
  const [checkboxType, setCheckboxType] = useState("");
  const [selectedBathrooms, setSelectedBathrooms] = useState(
    numberOfbathrooms[0]
  );
  // state range price
  const [rangeLandArea, setRangeLandArea] = useState({ num1: 30, num2: 8000 });
  const [rangePrice, setRangePrice] = useState({
    deposit: {
      price1: 0,
      price2: 5000000000,
    },
    monthlyRent: {
      price1: 0,
      price2: 300000000,
    },
    Buy: {
      price1: 50000000,
      price2: 30000000000,
    },
  });
  // state box show more filter box
  const [moreShow, setMoreShoe] = useState({
    more: false,
    price1: false,
    price2: false,
  });

  // mount component
  useEffect(() => {
    // get location from url
    if (params["*"] !== "") {
      cityProperties.forEach((item, index) => {
        if (item.path === params["*"]) {
          setSelectedCity(cityProperties[index]);
        }
        return;
      });
    }
    // get state from url
    if (searchParams.get("for")) {
      StateProperties.forEach((state, index) => {
        if (state.name === searchParams.get("for").split("-").join(" ")) {
          setSelectedState(StateProperties[index]);
        }
      });
    }
    // get number of rooms from url
    if (searchParams.get("rooms")) {
      numberOfrooms.forEach((item, index) => {
        if (item.name === searchParams.get("rooms").split("-").join(" ")) {
          setSelectedRooms(numberOfrooms[index]);
        }
      });
    }

    // get number of rooms from url
    if (searchParams.get("bathrooms")) {
      numberOfbathrooms.forEach((item, index) => {
        if (item.name === searchParams.get("bathrooms").split("-").join(" ")) {
          setSelectedBathrooms(numberOfbathrooms[index]);
        }
      });
    }
  }, []);

  // evant handler btn search
  const serach_Filter_Handler = () => {};

  return (
    <div className="box-news-properties bg-white rounded-lg py-3 px-4">
      <h4 className="text-lg text-black s-medium">جستجوی پیشرفته</h4>

      {/* wrapper box filter pr */}
      <div className="flex flex-wrap gap-4 mt-4">
        {/* search box */}
        <div className="box-search-pr w-full h-[42px] ">
          <input
            type="text"
            className="w-full h-full rounded-lg px-3 text-sm text-gray1 border border-sloid"
            placeholder="دنبال چی میگردی ؟"
          />
        </div>

        {/* select box state property */}
        <div className="w-full">
          <Listbox value={selectedState} onChange={setSelectedState}>
            <div className="relative ">
              <Listbox.Button className="button-select-option relative w-full h-[42px] text-gray1 border border-solid cursor-default rounded-lg bg-white py-2 pl-2 pr-10 text-left  focus:outline-none focus focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-myGreen-300 sm:text-sm ">
                <span className="text-gray1 truncate absolute inset-y-0 right-0 flex items-center pr-2">
                  {selectedState.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md sm:rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm ">
                  {StateProperties.map((state) => (
                    <Listbox.Option
                      key={state.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-myGreen-100 text-green-900"
                            : "text-gray-900"
                        }`
                      }
                      value={state}
                      disabled={state.id === 1 && true}
                      hidden={state.id === 1 && true}
                    >
                      {({ selectedState }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selectedState ? "font-medium" : "font-normal"
                            }`}
                          >
                            {state.name}
                          </span>
                          {selectedState ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* box radio box type propety */}

        <div className="my-1 flex flex-col gap-2">
          <h6 className="text-gray1 s-medium text-base">نوع ملک</h6>
          <div className="flex gap-3">
            <div class="flex items-center mb-4 bg-myGreen-100 py-1 px-2 rounded-lg">
              <input
                id="default-radio-1"
                type="radio"
                value="آپارتمان"
                name="default-radio"
                class="w-4 h-4x"
                checked={searchParams.get("type") === "آپارتمان" ? true : false}
              />
              <label for="default-radio-1" class="ms-1 text-sm text-gray1">
                آپارتمان
              </label>
            </div>
            <div class="flex items-center mb-4 bg-myGreen-100 py-1 px-2 rounded-lg">
              <input
                id="default-radio-2"
                type="radio"
                value="ویلا"
                name="default-radio"
                class="w-4 h-4x"
                checked={searchParams.get("type") === "ویلا" ? true : false}
              />
              <label for="default-radio-2" class="ms-1 text-sm text-gray1">
                ویلا
              </label>
            </div>
            <div class="flex items-center mb-4 bg-myGreen-100 py-1 px-2 rounded-lg">
              <input
                id="default-radio-3"
                type="radio"
                value="ملک-تجاری"
                name="default-radio"
                class="w-4 h-4x"
                checked={
                  searchParams.get("type") === "ملک-تجاری" ? true : false
                }
              />
              <label for="default-radio-3" class="ms-1 text-sm text-gray1">
                ملک تجاری
              </label>
            </div>
          </div>
        </div>

        {/* box location property */}
        <div className="w-full">
          <Listbox value={selectedCity} onChange={setSelectedCity}>
            <div className="relative">
              <Listbox.Button className="button-select-option relative w-full h-[42px] text-gray1 border border-solid cursor-default rounded-lg bg-white py-2 pl-2 pr-10 text-left  focus:outline-none focus focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-myGreen-300 sm:text-sm ">
                <span className="text-gray-500 block truncate absolute inset-y-0 right-0 flex items-center pr-2">
                  {selectedCity.name}
                </span>
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {cityProperties.map((state) => (
                    <Listbox.Option
                      key={state.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-myGreen-100 text-green" : "text-gray-900"
                        }`
                      }
                      value={state}
                      disabled={state.id === 1 && true}
                      hidden={state.id === 1 && true}
                    >
                      {({ selectedCity }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selectedCity ? "font-medium" : "font-normal"
                            }`}
                          >
                            {state.name}
                          </span>
                          {selectedCity ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* box options properties */}
        <div className="w-full">
          <Listbox value={selectedState} onChange={setSelectedCity}>
            <div className="relative">
              <Listbox.Button className="button-select-option relative w-full h-[42px] text-gray1 border border-solid cursor-default rounded-lg bg-white py-2 pl-2 pr-10 text-left  focus:outline-none focus focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-myGreen-300 sm:text-sm ">
                <span className="text-gray-500 block truncate absolute inset-y-0 right-0 flex items-center pr-2">
                  ویژگی های ملک ...
                </span>
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1  w-full overflow-auto rounded-md bg-gray2 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {/* radio buttons */}
                  {optionsProperty.map((option) => (
                    <div class="flex items-center gap-1 mb-4 mx-2">
                      <input
                        id={option.value}
                        type="checkbox"
                        name={option.name}
                        class="w-4 h-4x"
                        onChange={(e) => {
                          //  code
                        }}
                      />
                      <label for={option.value} class="text-xs  text-gray-500">
                        {option.name}
                      </label>
                    </div>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>

        {/* box range price */}
        <div className="w-full flex flex-col gap-3">
          {!moreShow.price1 && (
            <button
              className="bg-gray2 text-black border border-solid w-full py-2 rounded-lg duration-500 hover:bg-myGreen-300 hover:text-white "
              onClick={() => {
                setMoreShoe({ ...moreShow, price1: true });
              }}
            >
              فیلتر قیمت برای ملک های فروشی
            </button>
          )}
          {/* box range price Buy */}
          {moreShow.price1 && (
            <div className="flex flex-col gap-3 my-4">
              <span className="text-sm text-black">قیمت کل</span>
              <RangeBox
                min1="50000000"
                max1="29000000000"
                min2="55000000"
                max2="30000000000"
                defNum1={rangePrice["Buy"].price1}
                defNum2={rangePrice["Buy"].price2}
                onChange1={(e) => {
                  setRangePrice((prevState) => ({
                    ...prevState,
                    Buy: {
                      ...prevState.Buy,
                      price1: e.target.value,
                    },
                  }));
                }}
                onChange2={(e) => {
                  setRangePrice((prevState) => ({
                    ...prevState,
                    Buy: {
                      ...prevState.Buy,
                      price2: e.target.value,
                    },
                  }));
                }}
              >
                <span class="range_min light left">
                  {Number(rangePrice["Buy"].price1).toLocaleString("fa")} تومان
                </span>
                <span className="">تا</span>
                <span class="range_max light right">
                  {Number(rangePrice["Buy"].price2).toLocaleString("fa")} تومان
                </span>
              </RangeBox>
            </div>
          )}
          {!moreShow.price2 && (
            <button
              className="bg-gray2 text-black border border-solid w-full py-2 rounded-lg duration-500 hover:bg-myGreen-300 hover:text-white "
              onClick={() => {
                setMoreShoe({ ...moreShow, price2: true });
              }}
            >
              فیلتر قیمت برای ملک های اجاره ای
            </button>
          )}
          {/* box range price 1 */}
          {moreShow.price2 && (
            <>
              <div className="my-4">
                {/* range box price deposit*/}
                <div className="flex flex-col gap-3 my-4">
                  <span className="text-sm text-black">ودیعه</span>
                  <RangeBox
                    min1="0"
                    max1="4900000000"
                    min2="5000000"
                    max2="5000000000"
                    defNum1={rangePrice["deposit"].price1}
                    defNum2={rangePrice["deposit"].price2}
                    onChange1={(e) => {
                      setRangePrice((prevState) => ({
                        ...prevState,
                        deposit: {
                          ...prevState.deposit,
                          price1: e.target.value,
                        },
                      }));
                    }}
                    onChange2={(e) => {
                      setRangePrice((prevState) => ({
                        ...prevState,
                        deposit: {
                          ...prevState.deposit,
                          price2: e.target.value,
                        },
                      }));
                    }}
                  >
                    <span class="range_min light left">
                      {Number(rangePrice["deposit"].price1).toLocaleString(
                        "fa"
                      )}
                      تومان
                    </span>
                    <span className="">تا</span>
                    <span class="range_max light right">
                      {Number(rangePrice["deposit"].price2).toLocaleString(
                        "fa"
                      )}
                      تومان
                    </span>
                  </RangeBox>
                </div>
                {/* range box price monthly rent */}
                <div className="flex flex-col gap-3 my-4">
                  <span className="text-sm text-black">اجاره</span>
                  <RangeBox
                    min1="0"
                    max1="290000000"
                    min2="5000000"
                    max2="300000000"
                    defNum1={rangePrice["monthlyRent"].price1}
                    defNum2={rangePrice["monthlyRent"].price2}
                    onChange1={(e) => {
                      setRangePrice((prevState) => ({
                        ...prevState,
                        monthlyRent: {
                          ...prevState.monthlyRent,
                          price1: e.target.value,
                        },
                      }));
                    }}
                    onChange2={(e) => {
                      setRangePrice((prevState) => ({
                        ...prevState,
                        monthlyRent: {
                          ...prevState.monthlyRent,
                          price2: e.target.value,
                        },
                      }));
                    }}
                  >
                    <span class="range_min light left">
                      {Number(rangePrice["monthlyRent"].price1).toLocaleString(
                        "fa"
                      )}
                      تومان
                    </span>
                    <span className="">تا</span>
                    <span class="range_max light right">
                      {Number(rangePrice["monthlyRent"].price2).toLocaleString(
                        "fa"
                      )}
                      تومان
                    </span>
                  </RangeBox>
                </div>
              </div>
            </>
          )}
        </div>

        {/* box more show filter */}
        <div className="w-full flex flex-col gap-4">
          <span className="text-black s-medium">فیلتر های بیشتر ...</span>

          {!moreShow.more && (
            <div className="self-center">
              <div
                className="border border-solid p-3 w-fit rounded-lg pointer duration-500 hover:bg-myGreen-300 hover:*:fill-white"
                onClick={() => {
                  setMoreShoe({ ...moreShow, more: true });
                }}
              >
                <FaList size="23px" className=" fill-myGreen-300 " />
              </div>
            </div>
          )}

          {moreShow.more && (
            <>
              {/*select box number of room */}
              <div className="w-full">
                <Listbox value={selectedRooms} onChange={setSelectedRooms}>
                  <div className="relative">
                    <Listbox.Button className="button-select-option relative w-full h-[42px] text-gray1 border border-solid cursor-default rounded-lg bg-white py-2 pl-2 pr-10 text-left  focus:outline-none focus focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-myGreen-300 sm:text-sm ">
                      <span className="text-gray-500 block truncate absolute inset-y-0 right-0 flex items-center pr-2">
                        {selectedRooms.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {numberOfrooms.map((room) => (
                          <Listbox.Option
                            key={room.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-myGreen-100 text-green"
                                  : "text-gray-900"
                              }`
                            }
                            value={room}
                            disabled={room.id === 1 && true}
                            hidden={room.id === 1 && true}
                          >
                            {({ selectedRooms }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selectedRooms
                                      ? "font-medium"
                                      : "font-normal"
                                  }`}
                                >
                                  {room.name}
                                </span>
                                {selectedRooms ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              {/* select box number of bathroom */}
              <div className="w-full">
                <Listbox
                  value={selectedBathrooms}
                  onChange={setSelectedBathrooms}
                >
                  <div className="relative">
                    <Listbox.Button className="button-select-option relative w-full h-[42px] text-gray1 border border-solid cursor-default rounded-lg bg-white py-2 pl-2 pr-10 text-left  focus:outline-none focus focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-myGreen-300 sm:text-sm ">
                      <span className="text-gray-500 block truncate absolute inset-y-0 right-0 flex items-center pr-2">
                        {selectedBathrooms.name}
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pr-2">
                        <ChevronUpDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {numberOfbathrooms.map((bathroom) => (
                          <Listbox.Option
                            key={bathroom.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-myGreen-100 text-green"
                                  : "text-gray-900"
                              }`
                            }
                            value={bathroom}
                            disabled={bathroom.id === 1 && true}
                            hidden={bathroom.id === 1 && true}
                          >
                            {({ selectedBathrooms }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selectedCity ? "font-medium" : "font-normal"
                                  }`}
                                >
                                  {bathroom.name}
                                </span>
                                {selectedBathrooms ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600">
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-sm text-black">مساحت زمین</span>
                <RangeBox
                  min1="30"
                  max1="7999"
                  min2="31"
                  max2="8000"
                  setState={setRangeLandArea}
                  state={rangeLandArea}
                  defNum1={rangeLandArea.num1}
                  defNum2={rangeLandArea.num2}
                  onChange1={(e) => {
                    setRangeLandArea({
                      ...rangeLandArea,
                      num1: e.target.value,
                    });
                    console.log(e.target.value);
                  }}
                  onChange2={(e) => {
                    setRangeLandArea({
                      ...rangeLandArea,
                      num2: e.target.value,
                    });
                    console.log(e.target.value);
                  }}
                  textB="متر"
                >
                  <span class="range_min light left">
                    {rangeLandArea["num1"]} متر
                  </span>
                  <span>تا</span>
                  <span class="range_max light right">
                    {rangeLandArea["num2"]} متر
                  </span>
                </RangeBox>
              </div>
            </>
          )}
        </div>
      </div>
      <button
        type="button"
        className="mt-5 w-full bg-myGreen-300 text-white rounded-lg py-3"
        onClick={serach_Filter_Handler}
      >
        جستجو
      </button>
    </div>
  );
}
