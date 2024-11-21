"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"

const Navbar = () => {

    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);

    // Toggle function to handle the navbar's display
    const handleNav = () => {
      setNav(!nav);
    };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-slate-900'>
    {/* Logo */}
    <Link href="/">
      <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
    </Link>
    {/* Desktop Navigation */}
    <ul className='hidden md:flex'>
      {NAV_LINKS.map(item => (
        <li
          key={item.key}
          className='p-4 hover:font-medium rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
        >
          {item.label}
        </li>
      ))}
    </ul>

    {/* Mobile Navigation Icon */}
    <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>

    {/* Mobile Navigation Menu */}
    <ul
      className={
        nav
          ? 'fixed md:hidden left-0 top-0 w-[80%] h-full border-r border-r-gray-900 z-[9999] bg-[#00030086] backdrop-blur-md ease-in-out duration-500'
          : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
      }
    >
      {/* Mobile Logo */}
      {/* <Link href="/">
      <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
    </Link> */}

      {/* Mobile Navigation Items */}
      {NAV_LINKS.map(item => (
        <li
          key={item.key}
          className='p-4 border-b  hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer '
        >
          {item.label}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Navbar