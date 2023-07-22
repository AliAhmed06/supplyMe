import Link from "next/link";
import Container1 from "./components/Container1";
import ProductSlider1 from "./components/sliders/ProductsSlider1";
import ProductItem1 from "./components/home/ProductItem1";
import Card1Item from "./components/home/Card1Item";
import ProductItem2 from "./components/home/ProductItem2";

import { LiaShippingFastSolid } from 'react-icons/lia';
import ServicesItem from "./components/home/ServicesItem";


export default function Home() {
  return (
    <div className="w-full min-h-screen mb-[150px]">
      {/* Hero Section */}
      <div className="h-[500px] flex items-center justify-center w-full bg-black">
        <div className="w-[60%] flex flex-col gap-5 ">
          <h3 className=" text-3xl md:text-5xl font-bold text-white">Buy Top </h3>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Quality Tools</h3>
          <p className="text-xl text-white font-semibold">At <span className="text-first">Affordable</span> Prices!</p>          
          <Link 
              href={"#"}
              className='py-3 px-8 rounded-md bg-first text-white hover:bg-second self-start'
          >
              Shop Now
          </Link>
        </div>
      </div>

      {/* Shop By Category Section */}
      <section className="mt-[50px]">
        <Container1 headingTitle={"Shop By Category"}>
          <ProductSlider1 
            data={[
              {'title':'Tulip Block1', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block2', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block3', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block4', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block5', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block6', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block7', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block8', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block9', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
            ]}
          />          
        </Container1>
      </section>


      {/* Deal of The Day Section */}
      <section className="mt-[50px]">
        <Container1 headingTitle={"Deal of The Day"}>
           <div className="flex items-center justify-start gap-10 w-full overflow-x-auto">
              <ProductItem1 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
              <ProductItem1 img={"/images/products/product1.jpg"} price={"95.00"} oldPrice={"105.00"} title={"Cordless Drill"} rating={5} discount={"18"} />
           </div>
        </Container1>
      </section>


      {/* Cards Section */}
      <section className="mt-[50px]">
        <div className="w-[80%] mx-auto p-2 grid grid-cols-1 md:grid-cols-2 gap-10 min-h-[250px]">
            <Card1Item title1={"Shop For New"} title2={"Drill Drivers"} link={"#"} />
            <Card1Item title1={"Shop For New"} title2={"Microscope"} link={"#"} />
        </div>
      </section>


      {/* New Products */}
      <section className="mt-[50px]">
        <Container1 headingTitle={"New Products"} HeadingButtonLink={"#"} headingButtonTitle={"View More Products"}>
           <div className="w-full flex">
              <div className="w-full lg:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />                
              </div>
              <div className="hidden w-[25%] min-h-max bg-gradient-to-b from-black to-first lg:flex lg:items-end justify-center py-20 px-5">
                <h2 className="text-white font-semibold text-3xl leading-normal ">Automatic Digital Equipment</h2>
              </div>
           </div>
        </Container1>
      </section>



      {/* Services Section */}
      <section className="min-h-[300px] bg-black mt-[50px] p-10 flex">
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mx-auto text-white  gap-10 lg:gap-24">
            <ServicesItem Icon={LiaShippingFastSolid} title1={"Fast Free Shipping"} title2={"On Orders $50 or More"} />            
            <ServicesItem Icon={LiaShippingFastSolid} title1={"Fast Free Shipping"} title2={"On Orders $50 or More"} />            
            <ServicesItem Icon={LiaShippingFastSolid} title1={"Fast Free Shipping"} title2={"On Orders $50 or More"} />            
            <ServicesItem Icon={LiaShippingFastSolid} title1={"Fast Free Shipping"} title2={"On Orders $50 or More"} />            
          </div>
      </section>
        
      
      {/* Featured Products */}
      <section className="mt-[50px]">
        <Container1 headingTitle={"Featured Products"} HeadingButtonLink={"#"} headingButtonTitle={"View More Products"}>
           <div className="w-full flex">
              <div className="hidden w-[25%] min-h-max bg-gradient-to-t from-black to-first lg:flex lg:items-start justify-center py-20 px-5">
                <h2 className="text-white font-semibold text-3xl leading-normal ">Automatic Digital Equipment</h2>
              </div>
              <div className="w-full lg:w-[75%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />
                <ProductItem2 img={"/images/products/product1.jpg"} price={"95.00"} title={"Cordless Drill"} rating={5} />                
              </div>              
           </div>
        </Container1>
      </section>
      

      {/* Services Section */}
      <section className="min-h-[300px] mt-[50px] p-10 flex">
          <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center justify-center mx-auto"> 
            <img src="/images/home/partners/partner1.PNG" alt="" className="h-[100px] mx-auto" />
            <img src="/images/home/partners/partner2.PNG" alt="" className="h-[100px] mx-auto" />
            <img src="/images/home/partners/partner3.PNG" alt="" className="h-[100px] mx-auto" />
            <img src="/images/home/partners/partner4.PNG" alt="" className="h-[100px] mx-auto" />
            <img src="/images/home/partners/partner5.PNG" alt="" className="h-[100px] mx-auto" />
            <img src="/images/home/partners/partner6.PNG" alt="" className="h-[100px] mx-auto" />
          </div>
      </section>

    </div>

  )
}
