import React from 'react'
import { Link } from 'react-router-dom'

export default function Btn2(props) {
  return (
   <Link to={props.link}><button className='py-2 text-myGreen-200 px-8 border-solid border-2 border-myGreen-200 rounded-xl duration-500 hover:bg-myGreen-200 hover:text-white' >{props.text}</button></Link>
  )
}
