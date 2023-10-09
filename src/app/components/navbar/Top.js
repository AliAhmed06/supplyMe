import Link from 'next/link'
import React from 'react'

const Top = () => {
  return (
    <div className='bg-gray1 w-full p-3 hidden lg:block'>
        <div className='w-[90%] lg:w-[70%] mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <Link href="#"><img src="/images/social/twitter.png" alt="" /></Link>
                <Link href="#"><img src="/images/social/facebook.png" alt="" /></Link>
                <Link href="#"><img src="/images/social/google.png" alt="" /></Link>
                <Link href="#"><img src="/images/social/t.png" alt="" /></Link>                
            </div>
            <div className='flex items-center gap-8 text-xs'>
                <p>Call Us : 718-278-8479</p>
                <p>Mail : info@supplyme.com</p>
            </div>
        </div>
    </div>
  )
}

export default Top