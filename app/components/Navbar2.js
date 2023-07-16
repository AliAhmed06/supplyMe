"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { usePathname } from "next/navigation";
import { BiSolidChevronDown } from "react-icons/bi";
import { AiFillCaretDown } from "react-icons/ai";
import Logo from './navbar/Logo';
import SearchBar from './navbar/SearchBar';
import RightItems from './navbar/RightItems';


function NavBar2() {
  const [navbar, setNavbar] = useState(false);
  const [projectCaret, setProjectCaret] = useState(false);
  const [societiesCaret, setSocietiesCaret] = useState(false);
  {/* Get the current route */}
  const pathname = usePathname();

  // Change Nav color on scroll
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      } 
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  
  return (
      <nav className={`w-full fixed top-0 left-0 z-50  bg-black  text-white flex flex-col items-center justify-center 
                        ${navbar ? "bg-white " : "bg-red " }  
                        ${isScroll && 'bg-white shadow-md'} `}>
        <div className="w-[100%] mx-auto bg-red-500 min-h-[120px] flex flex-col items-center justify-between gap-5
                        lg:w-[80%] lg:flex-row 
                        ">
          <Logo navbar={navbar} setNavbar={setNavbar} />
          <SearchBar />
          <RightItems />
          {/* <div>
            <div
              className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex  pt-2 ">
                <li className={`${navbar ? 'text-black' : isScroll ? 'text-black' : 'text-white' } pb-6  uppercase text-md font-semibold hover:underline ${pathname == "/about" && "underline"} py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent`}>
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>               
              </ul>
            </div>
          </div> */}
        </div>
      </nav>
  );
}

export default NavBar2;