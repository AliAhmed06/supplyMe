import Link from 'next/link'
import React from 'react'

const Card1Item = ({img, title1, title2, link}) => {
  return (
    <div className="bg-gradient-to-r from-black to-second h-full w-full  rounded-md text-white flex flex-col px-16 py-5 items-start justify-center">
        <span className="text-2xl font-semibold">{title1}</span>
        <span className="text-2xl font-semibold">{title2}</span>
        <Link href={link} className="underline font-semibold text-xl mt-5 hover:opacity-80">SHOP NOW</Link>
    </div>
  )
}

export default Card1Item