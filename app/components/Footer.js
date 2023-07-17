import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='text-gray1 w-full bg-black '>
      <div className='w-[80%] mx-auto py-10'>
        <div className='bg-first p-7 mx-auto flex flex-col items-center justify-between gap-5 mt-[-100px] 
                        lg:w-[60%] md:flex-row'>
          <div>
            <h3 className='text-3xl font-semibold text-white'>We Shape Your Dreams</h3>
            <p className='text-sm'>CONTACT US FOR A FREE CONSULTATION FROM QUALIFIED EXPERTS</p>
          </div>
          <button className='bg-white py-3 px-5 rounded-md hover:opacity-80 text-second font-semibold text-sm'>
            Get A Free QUOTE
          </button>
        </div>
        <div className='bg-black grid grid-cols-1 gap-20 items-start pt-10
                        md:grid-cols-2 lg:grid-cols-4 lg:gap-10'>
          <div className='flex flex-col items-center justify-center gap-10'>
            <img src="/images/logo.jpg" alt="logo" className='h-[120px]' />
            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatibus necessitatibus rem omnis impedit eius illo doloribus pariatur voluptatum.</p>
            <div className='flex gap-5'>
              <Link href={"#"}><img src="/images/footer/visa.PNG" alt="" className='h-[40px]' /></Link>
              <Link href={"#"}><img src="/images/footer/master-card.PNG" alt="" className='h-[40px]' /></Link>
              <Link href={"#"}><img src="/images/footer/paypal.PNG" alt="" className='h-[40px]' /></Link>
            </div>
          </div> 

          <div className='flex flex-col items-start justify-center gap-10'>            
            <h3 className='text-xl font-semibold text-white'>Contact Us</h3>
            <span className=' bg-first self-start h-[2px] w-[60px] mt-[-20px]'></span>
            <div className='flex flex-col gap-5'>
              <Link href={"#"} className=' hover:text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
              <Link href={"#"} className=' hover:text-white'>123-456-78 </Link>
              <Link href={"#"} className='hover:text-white' >test@gmail.com </Link>
            </div>
          </div> 

          <div className='flex flex-col items-start justify-center gap-10'>            
            <h3 className='text-xl font-semibold text-white'>Our Services</h3>
            <span className=' bg-first self-start h-[2px] w-[60px] mt-[-20px]'></span>
            <div className='flex flex-col gap-5'>              
              <Link href={"#"} className=' hover:text-white'>Your Account</Link>
              <Link href={"#"} className=' hover:text-white'>Return Center</Link>
              <Link href={"#"} className=' hover:text-white'>Purchase</Link>
              <Link href={"#"} className=' hover:text-white'>App Download</Link>
              <Link href={"#"} className=' hover:text-white'>Latest News</Link>
            </div>
          </div> 

          <div className='flex flex-col items-start justify-center gap-10'>            
            <h3 className='text-xl font-semibold text-white'>Information</h3>
            <span className=' bg-first self-start h-[2px] w-[60px] mt-[-20px]'></span>
            <div className='flex flex-col gap-5'>
              <Link href={"#"} className=' hover:text-white' >About Us</Link>
              <Link href={"#"} className=' hover:text-white' >Contact Us</Link>
              <Link href={"#"} className=' hover:text-white' >Terms & Conditions</Link>
              <Link href={"#"} className=' hover:text-white' >Returns & Exchanges</Link>
              <Link href={"#"} className=' hover:text-white' >Shipping & Delivery</Link>
            </div>
          </div> 

        </div>
      </div>
    </div>
  )
}

export default Footer