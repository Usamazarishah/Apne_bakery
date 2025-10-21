import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FiHeart } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";


const links = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Shop", link: "/shop" },
  { title: "Our Services", link: "/services" },
  { title: "Contact Us", link: "/contact" },
]



export default function Navbar() {
  return (
    <div className='flex justify-between items-center px-11 py-4 bg-primary sticky z-10 '>
      <img src={logo} alt="" className='w-20 text-[#fffefd]' />

      <ul className='flex gap-8'>
        {links.map((item, i) => {
          return (
            <li key={i} className='text-base text-[#fffefd] font-medium'>
              <Link to={item.link}> {item.title}</Link>
            </li>
          )
        })}
      </ul>

      <ul className='flex gap-8 text-[#fffefd] text-2xl'>
        <li className=' font-bold'><FiSearch />
</li>
        <li><HiOutlineShoppingBag /></li>
        <li><FiHeart />

</li>
        <li><GoLocation /></li>
        <li><FaRegUserCircle /></li>

      </ul>

    </div>

  )
}
