import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';




const Footer = () => {
  return (
    <div className=' w-full bg-gray1 text-black font-RobotoRegular '>      
      <div className='w-[80%] lg:w-[70%] mx-auto py-10'>
        
        {/* portion1 */}
        <div className='flex items-center justify-between'>
          <img src="/images/logo.png" className='h-[100px]' alt="" />
          <div className='flex items-center gap-5'>
              <Link href="#"><img src="/images/social/twitter.png" alt="" /></Link>
              <Link href="#"><img src="/images/social/facebook.png" alt="" /></Link>
              <Link href="#"><img src="/images/social/google.png" alt="" /></Link>
              <Link href="#"><img src="/images/social/t.png" alt="" /></Link>                
          </div>
        </div>
        
        
        {/* portion 2 */}
        <div className='grid grid-cols-1 gap-20 items-start pt-10 text-gray2 text-sm 
                        md:grid-cols-2 lg:grid-cols-4 lg:gap-10'>          
          <div className='flex flex-col items-start justify-center gap-5'>            
            <h4 className='font-bold text-[16px] text-black'>Contact Us</h4>
            <div className='flex gap-3'>
              <AiFillHome />
              <p>18-07 Astoria Boulevard <br /> Long Island City, NY 11102</p>
            </div>
            <div className='flex gap-3'>
              <FaPhone />
              <p>718-278-8479</p>
            </div>
            <div className='flex gap-3'>
              <IoMdMail />
              <p>order@supplyme.com</p>
            </div>
          </div> 

          <div className='flex flex-col items-start justify-center gap-5 pl-[20px]'>            
            <h4 className='font-bold text-[16px] text-black'>Our Services</h4>
            <div className='flex flex-col gap-3'>
              <Link href={"#"} className='hover:text-black'>Your Account</Link>
              <Link href={"#"} className='hover:text-black'>Return Center</Link>
              <Link href={"#"} className='hover:text-black'>Purchase</Link>
              <Link href={"#"} className='hover:text-black'>App Download</Link>
              <Link href={"#"} className='hover:text-black'>Gallery</Link>
            </div>
          </div> 

          <div className='flex flex-col items-start justify-center gap-5 pl-[20px]'>            
            <h4 className='font-bold text-[16px] text-black'>Construction</h4>
            <div className='flex flex-col gap-3'>
              <Link href={"#"} className='hover:text-black'>Masonry trowel</Link>
              <Link href={"#"} className='hover:text-black'>Measurement Tape</Link>
              <Link href={"#"} className='hover:text-black'>Wheel Barrow</Link>
              <Link href={"#"} className='hover:text-black'>Concrete Mixer</Link>
              <Link href={"#"} className='hover:text-black'>Sand screening</Link>
            </div>
          </div>

          <div className='flex flex-col items-start justify-center gap-5 pl-[20px]'>            
            <h4 className='font-bold text-[16px] text-black'>Information</h4>
            <div className='flex flex-col gap-3'>
              <Link href={"#"} className='hover:text-black'>Contact Us</Link>
              <Link href={"#"} className='hover:text-black'>About Us</Link>
              <Link href={"#"} className='hover:text-black'>Shop</Link>
              <Link href={"#"} className='hover:text-black'>Media</Link>              
            </div>
          </div>  

        </div>

      </div>
      
      {/* portion 3 */}
      <div className='border-t border-[#E4E4E4] text-gray2 text-sm'>
        <div className='  w-[80%] lg:w-[70%] mx-auto p-5'>
          <div className='hidden lg:flex items-center justify-center gap-3 '>
            <Link href={"#"} className='hover:text-black'>Search Terms</Link> |
            <Link href={"#"} className='hover:text-black'>Advanced Search</Link> |
            <Link href={"#"} className='hover:text-black'>Help & FAQs</Link> |
            <Link href={"#"} className='hover:text-black'>Store Locations</Link> |
            <Link href={"#"} className='hover:text-black'>Orders and Returns</Link> 
          </div>

          <div className='flex items-center justify-between mt-5'>
            <p>© 2023 SupplyMe, Dev by GBC</p>
            <div className='flex items-center'>
              <img src="/images/footer/logo1.png" alt="" />
              <img src="/images/footer/logo2.png" alt="" />
              <img src="/images/footer/logo3.png" alt="" />
              <img src="/images/footer/logo4.png" alt="" />
              <img src="/images/footer/logo5.png" alt="" />
              <img src="/images/footer/logo6.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer