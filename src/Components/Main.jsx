import React from 'react'
import hero_img from '../assets/images/hero_img.png'
export default function Main() {
  return (
    <div>
       <img src={hero_img} alt="" className='h-[calc(100vh-105px)] w-full '/>
    </div>
  )
}
