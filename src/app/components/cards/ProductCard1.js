import React from 'react'

const ProductCard1 = ({img, title}) => {
  return (
    <div className='h-[300px] flex flex-col rounded-3xl overflow-hidden bg-red'>
        <div className='bg-gray1 flex-1 flex items-center justify-center h-[75%] w-full'>            
            <img src={img} alt="" className='h-full w-full object-cover object-center' />
        </div>
        <div className='bg-first text-black flex items-center justify-center text-center h-[25%]'>
            <span className='text-sm'>{title}</span>
        </div>
    </div>
  )
}

export default ProductCard1