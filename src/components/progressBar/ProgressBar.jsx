import React from "react";

export default function ProgressBar(props) {
  return (
    <div className="flex flex-col gap-2 ">
      <label className="text-white">{props.label}</label>
      <progress value={props.value} max={100}  data-label={`${props.value}%`}></progress>
    </div>
  );
}
