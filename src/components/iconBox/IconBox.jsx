import React from 'react'
import { FaBuilding } from "react-icons/fa";
export default function IconBox(props) {
  return (

    <div className='my-icon-box flex gap-3 items-center w-full'>
        <div className="my-icon size-fit border border-solid p-2  rounded-lg shadow-md duration-300">
            {props.children}
        </div>
        <div className="content-icon-box flex flex-col gap-1">
            <h3 className='text-sm'>{props.title}</h3>
            <span className='text-gray1'>{props.subTitle}</span>
        </div>
    </div>
  )
}
