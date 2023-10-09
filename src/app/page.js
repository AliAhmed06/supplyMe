import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen mb-[150px]">
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
    </div>    
  )
}
