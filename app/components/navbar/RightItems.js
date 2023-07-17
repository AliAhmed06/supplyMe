"use client";
import { IoPersonOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import LogoWithCircle from './LogoWithCircle';


const RightItems = () => {
  return (
    <div className='cursor-pointer hidden md:flex items-center justify-center gap-10 '>
        <div className=' flex items-center justify-center gap-2'>
            <IoPersonOutline size={30} />
            <span>My Account</span>
        </div>
        <div className='flex items-center justify-center gap-5'>
            <AiOutlineHeart size={30} />
            <LogoWithCircle Logo={AiOutlineShoppingCart} />
        </div>
    </div>
  )
}

export default RightItems