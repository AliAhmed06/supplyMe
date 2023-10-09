import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { usePathname } from "next/navigation";

const Links = ({links}) => {
    const pathname = usePathname();

    return (
    <div className='flex gap-10'>
        { links?.map((link) => (
            <div key={link.title} className='relative group'>
                <Link href={link.url} className={` text-sm hover:text-first group-hover:text-first ${pathname === link.url && 'text-first'}`}>
                    <div className='flex items-center gap-1'>
                        {link.title}
                        { link?.sub_items && <IoIosArrowDown size={12} /> }
                    </div>                    
                </Link>
                { link?.sub_items && (
                    <div className=' hidden group-hover:flex flex-col absolute text-black bg-white w-[140px] shadow-md '>
                        { link?.sub_items?.map((sub) => (
                            <Link key={sub.title} href={sub.url} className='bg-white p-2 border-b border-gray1 hover:bg-first hover:text-white text-xs'>{sub.title}</Link>
                        )) }
                    </div>
                )}
            </div>
        )) }
    </div>
  )
}

export default Links