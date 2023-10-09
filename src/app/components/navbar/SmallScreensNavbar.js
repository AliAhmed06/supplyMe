import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import BottomIcons from "./BottomIcons";
import Top from "./Top";

const SmallScreensNavbar = ({ mobileNavOpen, setMobileNavOpen, links }) => {
  const [openChildMenus, setOpenChildMenus] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  return (
    <div
      className={`w-full  bg-gray1 flex items-center justify-between lg:hidden py-5 px-10`}
    >
      <img src="/images/logo.png" alt="" className="w-[80px] object-cover" />
      <AiOutlineMenu size={25} onClick={() => setMobileNavOpen(true)} />

      <>
        <div
          className={`fixed top-0 left-0 h-screen w-full z-40 bg-black/60 ${
            !mobileNavOpen && "hidden"
          }`}
        ></div>
        <div
          className={`bg-first w-[75%] h-full  fixed top-0 left-0  flex flex-col items-center p-10 z-40 ${
            mobileNavOpen
              ? "left-0  duration-500 ease-in  "
              : "left-[-100%]  duration-500 ease-in"
          }  `}
        >
          <div className="flex items-center justify-between w-full cursor-pointer  ">
            <img
              src="/images/logo.png"
              alt=""
              className="w-[100px] object-cover"
            />
            <RxCross2
              onClick={() => setMobileNavOpen(false)}
              className="text-4xl  text-white border border-white hover:scale-110 transition rounded-full p-2 min-h-max"
            />
          </div>
          <div className="w-full flex items-center justify-end">
            <BottomIcons />
          </div>
          <div className="flex-1 w-full mt-5 flex flex-col gap-10 items-center justify-center">
            {links?.map((link) => (
              <div key={link.title} className="">
                <Link
                  onClick={() => setOpenChildMenus((prev) => !prev)}
                  href={link.url}
                  className={`text-lg hover:text-gray2  hover:underline ${
                    pathname === link.url
                      ? "text-gray2 underline"
                      : "text-white"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {link.title}
                    {link?.sub_items && <IoIosArrowDown size={12} />}
                  </div>
                </Link>
                {link?.sub_items && (
                  <div
                    className={`${
                      openChildMenus ? "flex" : "hidden"
                    } mt-5 flex-col`}
                  >
                    {link?.sub_items?.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.url}
                        className=" p-2 border-b hover:text-gray2 text-white text-lg"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* social icons  */}
          <div className="mx-auto flex flex-col items-center justify-center gap-10">
            <div className="flex items-center gap-5">
              <Link href="#">
                <img src="/images/social/twitter.png" alt="" />
              </Link>
              <Link href="#">
                <img src="/images/social/facebook.png" alt="" />
              </Link>
              <Link href="#">
                <img src="/images/social/google.png" alt="" />
              </Link>
              <Link href="#">
                <img src="/images/social/t.png" alt="" />
              </Link>
            </div>
            <div className="flex flex-col items-center gap-3 text-xs">
              <p>Call Us : 718-278-8479</p>
              <p>Mail : info@supplyme.com</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default SmallScreensNavbar;
