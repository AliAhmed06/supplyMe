"use client"
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';


const ProductItem2 = ({title, price, oldPrice, rating, img}) => {

const stars = [1,2,3,4,5];




return (
    <div className="relative w-full min-h-max p-5 flex items-center flex-col border border-gray1 ">        
        <img src={img} alt="" className="h-[200px] object-contain" />
        <div className='mt-5 w-full'>
            <div className='flex'>
                { stars.map((item) => (
                    item <= rating ? <AiFillStar key={item} className='text-golden' /> : <AiOutlineStar key={item} className='text-golden' />
                )) }
            </div>
            <h3 className='text-gray2'>{title}</h3>
            <div className='space-x-3'>
                { oldPrice && <span className='text-red line-through'>${oldPrice}</span> }                
                <span className='text-red font-semibold'>${price}</span>
            </div>
                        
        </div>
    </div>
  )
}

export default ProductItem2