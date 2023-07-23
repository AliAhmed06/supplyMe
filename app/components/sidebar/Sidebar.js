import Link from 'next/link'
import React from 'react'
import SidebarLink from './SidebarLink'

import { RiArrowDropDownLine } from 'react-icons/ri';


const Sidebar = () => {
  return (
    <div className='w-full h-full flex flex-col p-2 md:p-5'>
        <div className='flex flex-col gap-3'>
            <SidebarLink linkText={"Drill Drivers"} linkUrl={"#"} />
            <SidebarLink linkText={"Kitchen Faucets"} linkUrl={"#"} />
            <SidebarLink linkText={"Heavy Duty"} linkUrl={"#"} />
            <SidebarLink linkText={"Accessories"} linkUrl={"#"} />
            <SidebarLink linkText={"Hammer"} linkUrl={"#"} />
            <SidebarLink linkText={"Materials"} linkUrl={"#"} />
            <SidebarLink linkText={"Spanners"} linkUrl={"#"} />
            <SidebarLink linkText={"Wood Worker"} linkUrl={"#"} />
            <SidebarLink linkText={"Screwdriver"} linkUrl={"#"} />
            <SidebarLink linkText={"Glue gun"} linkUrl={"#"} />
            <SidebarLink linkText={"Hammer Drill"} linkUrl={"#"} />
            <SidebarLink linkText={"Generators"} linkUrl={"#"} />
            
            <div className='flex items-center gap-3 text-gray2 font-semibold cursor-pointer'>
              <p>More Categories</p>
              <RiArrowDropDownLine size={30} />
            </div>
        </div>

        {/* Filter by Price */}
        <div className='mt-10 flex flex-col gap-5 '>
          <h3 className='text-2xl font-bold border-b border-gray1 pb-3'>Filter by Price</h3>
          <input type="range" min="1" max="100" className='range pr-6 accent-second outline-none ' />
          <button className='self-start bg-second rounded-md text-white py-2 px-5 hover:opacity-80'>Filter</button>
        </div>
    </div>
  )
}

export default Sidebar