import React from 'react'
import Container2 from '../components/Container2'
import Sidebar from '../components/sidebar/Sidebar'


const Shop = () => {
  return (
    <div className='mb-20'>
      {/* Page Title Section */}
      <div className='text-center py-10'>
        <h2 className='font-bold text-2xl'>Shop</h2>
        <p className='text-gray2 text-sm'>Home <span className='tracking-[-2px]'>&gt;&gt;</span>  Shop </p>
      </div>

      {/* Product Categories Section */}
      <Container2 headingTitle={"Product Categories"}>
        <div className='w-full min-h-[700px] flex'>
          <div className='w-[40%] lg:w-[25%] '>
            <Sidebar />
          </div>
          <div className='w-[60%] lg:w-[75%] bg-second'>
            right
          </div>
        </div>
      </Container2>
    </div>
  )
}

export default Shop