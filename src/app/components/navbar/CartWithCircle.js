"use client";

import Link from "next/link";

const CartWithCircle = ({Logo}) => {
  return (
    <Link href={"#"} className='relative'>
        <div className='absolute right-[-10px] top-[-7px] bg-first border border-black h-[15px] w-[15px] rounded-full flex items-center justify-center'>
            <span className='text-[10px] text-black'>1</span>
        </div>
        <img src="/images/cart.png" alt="" className="h-[20px]" />        
    </Link>
  )
}

export default CartWithCircle