
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-full w-full relative justify-around p-4 bg-yellow-300">
      <div className=" bg-green-900 h-96 m-4 flex justify-center items-center text-white">
          {/* Responsive Image size adjustments */}
          <Image 
            src="/header.jpg" 
            alt="Logo" 
            width={400} 
            height={400} 
            className=" mt-44 sm:w-[800px] sm:h-[400px] md:w-[600px] md:h-[400px] lg:w-[2000px] lg:h-[600px]" 
          />
        </div>
        {/* <div className=" bg-yellow-400 h-20 p-2 m-4 flex justify-center items-center text-white">
          NGO
        </div> */}
 <div className="bg-emerald-900 h-40 m-4 p-5 flex justify-center  text-white relative ">
          <h2 className=" text-yellow-300 font-bold underline text-xl">About Us</h2>
        </div>

        <div className=" h-20 p-2 m-4 mb-8  flex flex-row gap-10 justify-center items-center ">
          <div className=" border border-green-950 flex justify-center  p-6 w-1/2">
            Our Mission
          </div>
          <div className=" border border-green-950 flex  justify-center p-6 w-1/2">
            Our Vision
          </div>
        </div>
        <div>
        <div className="bg-emerald-900 h-20 m-4 p-8 flex justify-center items-center text-white  ">
        Bridging the Gap in Education
        </div>
        <div className="bg-emerald-900 h-20 m-4 p-8 flex justify-center items-center text-white  ">
        Clean Water for All
        </div>
        <div className="bg-emerald-900 h-20 m-4 p-8 flex justify-center items-center text-white  ">
        Creating Sustainable Jobs
        </div>
        </div>
        <div className="flex  justify-center items-center p-8">
       <h3 >
       Real Impact:
        </h3> 

        </div>
        <div className=" flex  justify-center items-center p-8">
       <h4 className=" ">  Get Involved:  </h4>
        </div>
        <footer className= " flex  justify-center items-center p-8 ">
          footer
        </footer>
       
       
      </div>
    
    </>
  );
}