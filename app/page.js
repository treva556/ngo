

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-full w-full relative lg:p-2 bg-yellow-300">
        <div
          className="bg-green-900 h-72 md:h-96 lg:h-96 flex justify-start items-center text-white"
          style={{
            backgroundImage: "url('/header.jpg')",
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
          }}
        >
          <div className="p-4 text-left ml-8">
            <h1 className="text-yellow-400 text-4xl font-bold mb-4">KIJANI WELFARE</h1>
            <h2 className="text-2xl">Empowering Communities through Education, Water, and Employment</h2>
          </div>
        </div>
        
        <div className="bg-emerald-900  m-4 p-5 flex justify-center flex-col items-center text-white relative">
          <h2 className="text-yellow-300 font-semibold underline text-xl row-span-1">About Us</h2>
          <p className="items-center row-span-1">Kijani Welfare is a non-profit organization dedicated to transforming lives in underprivileged communities by providing access to education, clean water, and sustainable job opportunities.</p>
        </div>

        <div className="p-2 m-4 flex flex-col md:flex-row lg:flex-row gap-10 justify-center items-center">
          <div className="border border-green-950 flex flex-col items-center justify-center p-6">
            <h6>Our Mission</h6>
            <p>&quot;Our mission is to uplift disadvantaged families by ensuring access to quality education, clean water, and dignified employment opportunities.&quot;</p>
          </div>
          <div className="border border-green-950 flex flex-col justify-center items-center p-6">
            <h6>Our Vision</h6>
            <p>&quot;We envision a world where every family has access to the resources they need to thrive, including education, clean water, and stable employment.&quot;</p>
          </div>
        </div>

        <div>
          <div className="bg-emerald-900  m-4 p-8 flex flex-col justify-center items-center text-white">

            <h6 className=" text-yellow-200 mb-4"> Bridging the Gap in Education </h6>
            <div className="flex flex-row justify-center items-center">
            <div
          className="bg-green-900 h-64 w-1/2 flex justify-start items-center text-white"
          style={{
            backgroundImage: "url('/class.jpg')",
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
          }}
        > <div className="p-4 text-left ">
        {/* <h1 className="text-yellow-400 text-4xl font-bold mb-4">KIJANI WELFARE</h1>
        <h2 className="text-2xl">Empowering Communities through Education, Water, and Employment</h2> */}
      </div>
          </div>
              <div className=" p-4 w-1/2 items-center">
                   <p> "We believe education is the key to breaking the cycle of poverty.
                     Kijani Welfare offers scholarships, school supplies, and after-school programs to ensure that children in underserved communities have the opportunity to learn and succeed." </p>
              </div>
            </div>

          </div>
          <div className="bg-emerald-900 h-20 m-4 p-8 flex justify-center items-center text-white">
            Clean Water for All
          </div>
          <div className="bg-emerald-900 h-20 m-4 p-8 flex justify-center items-center text-white">
            Creating Sustainable Jobs
          </div>
        </div>

        <div className="flex justify-center items-center p-8">
          <h3>Real Impact:</h3>
        </div>

        <div className="border border-emerald-900 m-2 flex justify-center items-center p-8">
          <h4>Get Involved:</h4>
        </div>

        <footer className="bg-emerald-900 flex flex-row gap-64 justify-center items-center p-8">
          <div>
          <h5 className="text-yellow-200 font-semibold text-xl w-1/2">footer</h5>
          </div>

          <div>
          <h5 className="text-yellow-200 font-semibold text-xl w-1/2">footer</h5>
          </div>
        </footer>
        
        {/* This is a comment that was causing an error */}
      </div>
    </>
  );
}