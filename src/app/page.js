import Link from "next/link";
import ProductCard1 from "./components/cards/ProductCard1";

export default function Home() {
  return (
    <div className="w-full min-h-screen mb-[150px] font-RobotoRegular">
      {/* Hero Section */}
      <div className="h-[530px] bg-[url('/images/home/hero1.png')] flex items-center justify-center w-full  bg-cover bg-bottom">
        <div className="lg:w-[40%] bg-white/80 shadow-md rounded-sm p-5 flex flex-col items-center gap-5 ">
          <h3 className="font-RobotoRegular text-2xl text-second">NEED HARDWARES?</h3>
          <h3 className="font-RobotoBold text-4xl text-second">CALL <span className="font-RobotoRegular">718-278-8479</span> </h3>
          <Link 
              href={"#"}
              className='py-3 px-5 rounded-full bg-first text-white hover:bg-second '
          >
              Shop Now
          </Link>
        </div>
      </div>

      {/* Featured Section */}
      <section className="py-10">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h4 className="text-2xl font-RobotoBold">FEATURED PRODUCTS</h4>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
            <div className="h-full min-h-[500px] bg-red bg-[url('/images/home/featured-bg1.png')] bg-no-repeat bg-center bg-cover">
              <div className="bg-white shadow-md h-[200px] mt-[100px] p-5">
                <h4 className=" text-first text-4xl [text-shadow:_0_2px_0_rgb(0_0_0_/_80%)] ">NEED BRANDED</h4>
                <h4 className="text-5xl font-RobotoBold [text-shadow:_0_2px_0_rgb(51_248_150_/_80%)]">HARDWARE TOOLS ?</h4>
                <button
                  className="bg-first py-2 px-5 rounded-full text-white hover:bg-opacity-80 mt-5"
                >SHOP NOW</button>
              </div>  
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ProductCard1 title={"Reducers & Adapters"} img={"/images/products/featured1.png"} />
                <ProductCard1 title={"The Vise"} img={"/images/products/featured2.png"} />
                <ProductCard1 title={"Spanner Set"} img={"/images/products/featured3.png"} />
                <ProductCard1 title={"Masonry equipments"} img={"/images/products/featured4.png"} />
              </div>
              <div className="text-center w-full  mt-5">
                <Link href={"#"} className="text-first text-lg hover:underline ">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* section 3 */}
      <div className="mt-10">
        <div className="bg-black h-[170px]">
          
        </div>
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <div className="bg-transparent grid grid-cols-1 md:grid-cols-3 gap-10 mt-[-80px]">
            {/* item 1 */}
            <div className="flex flex-col items-center justify-center ">
              <div className="rounded-full overflow-hidden h-[200px] w-[200px] border-4 border-first">
                <img src="/images/home/section3_1.png" alt=""  />
              </div>

              <h4 className="font-semibold mt-5">GENIUN PRODUCTS</h4>
              <p className="text-gray2 text-center mt-3">Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate</p>
            </div>

            {/* item 2 */}
            <div className="flex flex-col items-center justify-center ">
              <div className="rounded-full overflow-hidden h-[200px] w-[200px] border-4 border-first">
                <img src="/images/home/section3_2.png" alt=""  />
              </div>

              <h4 className="font-semibold mt-5">BRANDED PRODUCTS</h4>
              <p className="text-gray2 text-center mt-3">Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate</p>
            </div>

            {/* item 3 */}
            <div className="flex flex-col items-center justify-center ">
              <div className="rounded-full overflow-hidden h-[200px] w-[200px] border-4 border-first">
                <img src="/images/home/section3_3.png" alt=""  />
              </div>

              <h4 className="font-semibold mt-5">PRODUCTS</h4>
              <p className="text-gray2 text-center mt-3">Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate</p>
            </div>
          </div>
        </div>
        
      </div>

      {/* New Arrivals */}
      <section className="py-10 mt-10">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h4 className="text-2xl font-RobotoBold">NEW ARRIVALS</h4>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <ProductCard1 title={"Hacksaw Blades Kit"} img={"/images/products/new_arrivals_1.png"} />
                <ProductCard1 title={"The Vise"} img={"/images/products/new_arrivals_2.png"} />
                <ProductCard1 title={"Cutting Pliers Set"} img={"/images/products/new_arrivals_3.png"} />
                <ProductCard1 title={"Hardware Starter kit"} img={"/images/products/new_arrivals_4.png"} />
              </div>
              <div className="text-center w-full  mt-5">
                <Link href={"#"} className="text-first text-lg hover:underline ">View More</Link>
              </div>
            </div>
            <div className="h-full min-h-[500px] bg-[url('/images/home/arrivals-bg1.png')] bg-no-repeat bg-center bg-cover flex items-end justify-center pb-[50px]">
              <div className="shadow-md h-[200px] p-5 flex flex-col items-center">
                <h4 className=" text-black text-4xl text-center font-thin  [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)] ">CLICK HERE FOR YOUR</h4>
                <h4 className="text-3xl text-center mt-3 font-RobotoBold font-bold [text-shadow:_0_2px_0_rgb(51_248_150_/_80%)]">FREE ESTIMATE</h4>
                <button
                  className="bg-white py-2 px-5  rounded-full text-black hover:bg-opacity-80 mt-5"
                >SHOP NOW</button>
              </div>  
            </div>
            
          </div>
        </div>
      </section>


      {/* Section 5 */}
      <section className="h-[400px] bg-red flex items-center justify-center">
        <div className="p-5 flex flex-col items-center">
          <h4 className=" text-black text-4xl text-center">EXPLORE WIDE RANGE OF</h4>
          <h4 className="text-3xl text-center mt-3 font-RobotoBold ">HARDWARE TOOLS</h4>
          <button
            className="bg-first py-2 px-5  rounded-full text-black hover:bg-opacity-80 mt-5"
          >SHOP NOW</button>
        </div>  
      </section>

      {/* Our Clients */}
      <section className="my-20">
        <div className="w-[90%] lg:w-[80%] mx-auto ">
          <h4 className="text-2xl font-RobotoBold">OUR CLIENTS</h4>

          <div className="flex flex-wrap items-center justify-center gap-7 mt-10">
            <div className="w-[170px] h-[120px] border border-gray3 rounded-md flex items-center justify-center">
              <img src="/images/home/clinents1.png" alt="" />
            </div>
            <div className="w-[170px] h-[120px] border border-gray3 rounded-md flex items-center justify-center">
              <img src="/images/home/clinents2.png" alt="" />
            </div>
            <div className="w-[170px] h-[120px] border border-gray3 rounded-md flex items-center justify-center">
              <img src="/images/home/clinents3.png" alt="" />
            </div>
            <div className="w-[170px] h-[120px] border border-gray3 rounded-md flex items-center justify-center">
              <img src="/images/home/clinents4.png" alt="" />
            </div>
            <div className="w-[170px] h-[120px] border border-gray3 rounded-md flex items-center justify-center">
              <img src="/images/home/clinents5.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>    
  )
}
