import React, { Fragment, useState } from "react";
import "./FilterSearch.css";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { StateProperties } from "../../data/dataFilter";
import { cityProperties } from "../../data/dataFilter";
import { optionsProperty } from "../../data/dataFilter";

export default function FilterSearch() {
  const [selectedState, setSelectedState] = useState(StateProperties[0]);
  const [selectedCity, setSelectedCity] = useState(cityProperties[0]);

  return (
    <form
      action="/properties"
      className="w-full flex flex-col items-center justify-center"
    >
      <div className="flex gap-7">
        <div class="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            value="آپارتمان"
            name="default-radio"
            class="w-4 h-4x"
          />
          <label for="default-radio-1" class="ms-2 text-sm c-white">
            آپارتمان
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4x"
          />
          <label for="default-radio-2" class="ms-2 text-sm c-white">
            ویلا
          </label>
        </div>
        <div class="flex items-center mb-4">
          <input
            id="default-radio-3"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4x"
          />
          <label for="default-radio-3" class="ms-2 text-sm c-white">
            ملک تجاری
          </label>
        </div>
      </div>

      {/* list boxes */}

      {/* 1 state property */}
      <div className="wrapper-select-boxes w-full flex items-center justify-center flex-wrap mt-4 gap-0  ">
        <div className="con-select-box w-44">
          <Listbox value={selectedState} onChange={setSelectedState}>
            <div className="relative ">
              <Listbox.Button className="button-select-option relative w-full h-12 cursor-default rounded-r-xl bg-white py-2 pl-3 pr-10 text-left shadow-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ">
                <span className="text-gray-500 block truncate absolute inset-y-0 right-0 flex items-center pr-2">
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
        {/* 2 city property */}
        <div className="con-select-box w-44">
          <Listbox value={selectedCity} onChange={setSelectedCity}>
            <div className="relative">
              <Listbox.Button className=" button-select-option relative w-full h-12 cursor-default  bg-white py-2 pl-3 pr-10 text-left shadow-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
        {/* 3 options property */}
        <div className="con-select-box w-44">
          <Listbox value={selectedState} onChange={setSelectedCity}>
            <div className="relative">
              <Listbox.Button className="button-select-option relative w-full h-12 cursor-default bg-white py-2 pl-3 pr-10 text-left shadow-lg focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {/* radio buttons */}
                  {optionsProperty.map((option) => (
                    <div class="flex items-center gap-1 mb-4 mx-2">
                      <input
                        id={option.value}
                        type="checkbox"
                        // value={option.name}
                        name={option.value}
                        class="w-4 h-4x"
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
        <div>
          <button className="btn-search-filter c-white shadow-2xl h-12 px-10 rounded-l-xl">
            جستجو
          </button>
        </div>
      </div>
    </form>
  );
}
