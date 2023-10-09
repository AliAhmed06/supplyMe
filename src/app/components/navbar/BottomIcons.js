"use client"
import React, { useState } from 'react'
import CartWithCircle from './CartWithCircle'
import Link from 'next/link'

const BottomIcons = () => {
  const [showSearch, setShowSearch] = useState(false);

  const searchHandler = () => {
    setShowSearch(false);
  }
  return (
    <div className='flex items-center gap-5 relative'>
        {/* Search logic starts */}
        { showSearch ? (
          <div className='flex items-center'>
            <input type="text" className={` absolute right-[110%] outline-none border border-first py-1 px-5 w-[150px] md:w-[350px] lg:w-[200px] rounded-md text-gray2 text-sm`} placeholder='Search' />
            <button
              onClick={searchHandler}
            ><img src="/images/search.png" alt="" className='h-[18px] w-[18x] object-contain' /></button>
          </div>
        ) : (
          <Link 
            href={"#"}
            onClick={() => setShowSearch(true)}
          >
          <img src="/images/search.png" alt="" className='h-[18px] object-cover object-center' />
        </Link>
        ) }
        {/* Search logic ends */}
        <div className='flex gap-5 items-center'>
          <CartWithCircle />      
          <Link href={"#"}><img src="/images/user.png" alt="" className="" /></Link>
        </div>
        
        
    </div>
  )
}

export default BottomIcons