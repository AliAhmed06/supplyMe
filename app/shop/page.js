"use client";
import React, { useState } from 'react'
import Container2 from '../components/Container2'
import Sidebar from '../components/sidebar/Sidebar'
import ProductItem2 from '../components/home/ProductItem2'
import Link from 'next/link'
import ProductItem3 from '../components/home/ProductItem3'

const Shop = () => {
  const [grid, setGrid] = useState(true);
  return (
    <div className='mb-20'>
      {/* Page Title Section */}
      <div className='text-center py-10'>
        <h2 className='font-bold text-2xl'>Shop</h2>
        <p className='text-gray2 text-sm'>Home <span className='tracking-[-2px]'>&gt;&gt;</span>  Shop </p>
      </div>

      {/* Product Categories Section */}
      <Container2 headingTitle={"Product Categories"} gridView={grid} setGridView={setGrid} >
        <div className='w-full min-h-[700px] flex'>
          <div className='w-[40%] lg:w-[25%] '>
            <Sidebar />
          </div>
          <div className='w-[60%] lg:w-[75%]'>
            {/* List style 3 items in row */}
            { grid === true ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"160.00"} title={"Cordless Drill"} rating={5} discount={20} oldPrice={200} url="#"  />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} url="#" />
              </div>
            ) : (              
              <div className='grid grid-cols-1 '>
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"160.00"} title={"Cordless Drill"} rating={5} discount={20} oldPrice={200}  description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
                <ProductItem3 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} description="Lorem Ipsum has evolved as a filler text for prototyping in the English language. As it is written in a Latin looking language that has no meaning, it does not distract from analysing the layout of the page. While Lorem Ipsum is a useful tool for designers, it may not be sufficient when building software applications." url="#" />
              </div>
            )}
            
            
            <div className='mx-auto w-full  text-center py-10 space-x-3'>
              <Link href={"#"} className='bg-second text-white py-2 px-4 rounded-md hover:bg-black'>1</Link>
              <Link href={"#"} className='bg-second text-white py-2 px-4 rounded-md hover:bg-black'>2</Link>
            </div>
          </div>
        </div>
      </Container2>
    </div>
  )
}

export default Shop