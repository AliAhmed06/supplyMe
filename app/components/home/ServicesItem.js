import React from 'react'

const ServicesItem = ({Icon, title1, title2}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <div className="bg-gray1 rounded-full h-[70px] w-[70px] flex items-center justify-center ">
        <Icon size={30} className="" />
        </div>
        <h3 className="mt-3 font-semibold">{title1}</h3>
        <p className="text-sm">{title2}</p>
    </div>
  )
}

export default ServicesItem