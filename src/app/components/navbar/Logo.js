"use client";

import Image from "next/image";

const Logo = ({navbar, setNavbar}) => {
  return (
    <div className="flex items-center justify-between">
        <div>
          <img src="/images/logo.png" alt="" className="h-[130px]" />
        </div>
        
        
        
    </div>
  )
}

export default Logo