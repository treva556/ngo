
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-full w-full relative p-4 bg-yellow-300">
        <div
          className="bg-green-900 h-96 m-4 flex justify-start items-center text-white"
          style={{
            backgroundImage: 'url("/header.jpg")',
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
          }}
        >
          <div className="p-4 text-left ml-8">
            <h1 className="text-4xl font-bold mb-4">Header 1</h1>
            <h2 className="text-2xl">Header 2</h2>
          </div>
        </div>
        
 <div className="bg-emerald-900 h-40 m-4 p-5 flex justify-center  text-white relative ">
          <h2 className=" text-yellow-300 font-semibold underline text-xl">About Us</h2>
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
        <div className="   flex  justify-center items-center p-8">
       <h3 >
       Real Impact:
        </h3> 

        </div>
        <div className=" border border-emerald-900 m-2 flex  justify-center items-center p-8">
       <h4 className=" ">  Get Involved:  </h4>
        </div>
        <footer className= " bg-emerald-900 flex  justify-center items-center p-8 ">
          <h5 className=" text-yellow-200 font-semibold text-xl"> footer </h5>
        </footer>
       
       
      </div>
    
    </>
  );
}