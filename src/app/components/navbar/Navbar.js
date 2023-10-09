"use client";
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import Top from './Top';
import Bottom from './Bottom';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import SmallScreensNavbar from './SmallScreensNavbar';



const Navbar = () => {
// const [mobileNavbar , setMobileNavbar] = useState(false);
const [mobileNavOpen, setMobileNavOpen] = useState(false)
const path = usePathname();
const links = [
  {
    "title": "Home",
    "url" : "/"
  },
  {
    "title": "Products",
    "url" : "#",
    "sub_items" : [
      {
        "title": "Sub 1",
        "url" : "#"
      },
      {
        "title": "Sub 2",
        "url" : "#"
      },
    ],
  },
  {
    "title": "Media",
    "url" : "/media"
  },
  {
    "title": "About Us",
    "url" : "#"
  },
  {
    "title": "Contact Us",
    "url" : "#"
  },
]

// useEffect(() => {
//   setMobileNavbar(false);
// }, [path])
  
return (
    <div className={` w-full bg-white  text-black flex flex-col items-center justify-start`}>
        {/* Logic for desktop */}
        <Top />
        <Bottom links={links} />

        {/* Logic for mobile and Tablet */}
        <SmallScreensNavbar mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen} links={links} />
    </div>
  )
}

export default Navbar