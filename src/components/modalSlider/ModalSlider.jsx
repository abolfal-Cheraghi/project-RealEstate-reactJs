import React from "react";
import "./ModalSlider.css";
export default function ModalSlider() {
  return ReactDOM.createPortal(
    <div className="modal-slider w-full h-screen bg-black ">ds</div>,

    document.getElementById("#modal-slider")
  );
}
