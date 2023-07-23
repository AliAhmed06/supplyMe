import Link from 'next/link'
import React from 'react'

const SidebarLink = ({linkText, linkUrl}) => {
  return (
    <Link href={linkUrl} className=' text-gray2 text-sm font-semibold hover:underline  md:text-lg ' >{linkText}</Link>
  )
}

export default SidebarLink