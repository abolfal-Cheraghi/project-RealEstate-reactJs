import React, { useState } from "react";
import "./RangeBox.css";

export default function RangeBox(props) {
 
  return (
    <div>
      <div class="box-rangeslider flex flex-col gap-3">
        <div className="rangeslider flex">
          <input
            className="min rotate-180"
            name="range_2"
            type="range"
            min={props.min2}
            max={props.max2}
            defaultValue={props.defNum2}
            onChange={props.onChange2}
          />
          <input
            className="max rotate-180"
            name="range_1"
            type="range"
            min={props.min1}
            max={props.max1}
            defaultValue={props.defNum1}
            onChange={props.onChange1}
          />
        </div>
        <div className="flex gap-2 text-gray1 text-sm justify-center">
          {/* <span class="range_min light left">
            {Number(props.number1).toLocaleString("fa")} {props.textB}
          </span>
          <span>تا</span>
          <span class="range_max light right">
            {props.number2} {props.textB}
          </span> */}
          {props.children}
        </div>
      </div>
    </div>
  );
}
