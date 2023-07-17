import Link from "next/link";
import Container1 from "./components/Container1";
import ProductSlider1 from "./components/sliders/ProductsSlider1";

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
      <section>
        <Container1 headingTitle={"Shop By Category"}>
          <ProductSlider1 
            data={[
              {'title':'Tulip Block', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
              {'title':'Tulip Block', 'img':'/images/products/product1.jpg', 'quantity':'120','link':'#'},            
            ]}
          />          
        </Container1>
      </section>


      {/* Shop By Category Section */}
      <section className="mt-[100px]">
        <Container1 headingTitle={"Deal of The Day"}>
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


      
    </div>

  )
}
