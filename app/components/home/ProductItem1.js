"use client"
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';


const ProductItem1 = ({title, price, oldPrice, rating, img, discount}) => {

const stars = [1,2,3,4,5];




return (
    <div className="relative min-w-max p-5 flex items-start flex-col ">
        {discount && (
        <div className='absolute top-0'>
            <div className=' bg-red text-white pl-1   text-xs flex items-center justify-center'>
                <span className=''>-{discount}%</span>
                <div className="h-0 w-0 border-t-[12px] border-r-[20px] border-b-[12px] 
                border-solid border-t-transparent border-b-transparent border-l-transparent "></div>
            </div>            
        </div>
        )}
        <img src={img} alt="" className="h-[150px] object-contain" />
        <div className='mt-5 space-y-2'>
            <h3 className='text-gray2'>{title}</h3>
            <div className='space-x-3'>
                { oldPrice && <span className='text-red line-through'>${oldPrice}</span> }
                
                <span className='text-red font-semibold'>${price}</span>
            </div>
                        
            <div className='flex'>
                { stars.map((item) => (
                    item <= rating ? <AiFillStar key={item} className='text-golden' /> : <AiOutlineStar key={item} className='text-golden' />
                )) }
            </div>
        </div>
    </div>
  )
}

export default ProductItem1