import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <div className="h-[500px] flex items-center justify-center w-full bg-black">
        <div className="w-[60%] flex flex-col gap-5 ">
          <h3 className=" text-3xl md:text-5xl font-bold text-white">Buy Top </h3>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Quality Tools</h3>
          <p className="text-xl text-white font-semibold">At <span className="text-first">Affordable</span> Prices!</p>          
          <Link 
              href={"#"}
              className='py-3 px-8 rounded-md bg-first text-white hover:bg-second self-start'
          >
              test
          </Link>
        </div>
      </div>
    </div>

  )
}
