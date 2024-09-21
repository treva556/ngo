
import Image from "next/image";
import Footer from "@/components/footer";
import Counter from "@/components/counter";
import DonationSection from "@/components/don2";

export default function Home() {
  return (
    <>
      <div className="h-full w-full relative lg:p-2 bg-yellow-300">
        <div className=" mx-4">
        <div
          className="bg-green-800 h-72 md:h-96 lg:h-96 flex justify-start items-center text-white"
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
        
        <div className="bg-emerald-900  p-5 flex justify-center flex-col items-center text-white relative">
          <h2 className="text-yellow-300 font-semibold underline text-xl">About Us</h2>
          <p>Kijani Welfare is a non-profit organization dedicated to transforming lives in underprivileged communities by providing access to education, clean water, and sustainable job opportunities.</p>
        </div>
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

            {/* practice using order */}
            <div className=" bg-emerald-800 m-3">

            <div className=" flex justify-center">
            <h6 className= " mt-6 text-xl  mx-4 text-yellow-200">Bridging the Gap in Education</h6>

            </div>

            <div className="flex flex-col md:flex-row  m-4 rounded-xl  md:gap-4 justify-center items-center">
              <div className="p-10 border w-full  md:w-1/2 lg:w-1/2 h-1/2 m-4 border-green-950 flex  justify-center md:order-last">
              <p className="text-white">
                &quot;We believe education is the key to breaking the cycle of poverty. Kijani Welfare offers scholarships, school supplies, and after-school programs to ensure that children in underserved communities have the opportunity to learn and succeed.&quot;
              </p>
              </div>
              <div className="p-2 border w-full md:w-1/2 lg:w-1/2 h-72 border-emerald-950 m-4 flex">
                <div
                  className="flex-1"
                  style={{
                    backgroundImage: "url('/class.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%', // Ensure the image covers the full height
                  }}
                >
                  {/* Optional: You can add content here if needed */}
                </div>
              </div>
            </div>
            </div>

            {/* practice using order */}
            <div className=" bg-emerald-800 m-3">

            <div className=" flex justify-center">
            <h6 className= " mt-6 text-xl mx-4 text-yellow-200">Bridging the Gap in Education</h6>

            </div>

            <div className="flex flex-col md:flex-row  m-4 rounded-xl  md:gap-4 justify-center items-center">
              <div className="p-10 border w-full  md:w-1/2 lg:w-1/2 h-1/2 m-4 border-green-950 flex  justify-center">
              <p className="text-white">
                &quot;We believe education is the key to breaking the cycle of poverty. Kijani Welfare offers scholarships, school supplies, and after-school programs to ensure that children in underserved communities have the opportunity to learn and succeed.&quot;
              </p>
              </div>
              <div className="p-2 border w-full md:w-1/2 lg:w-1/2 h-72 border-emerald-950 m-4 flex">
                <div
                  className="flex-1"
                  style={{
                    backgroundImage: "url('/water.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%', // Ensure the image covers the full height
                  }}
                >
                  {/* Optional: You can add content here if needed */}
                </div>
              </div>
            </div>
            </div>

            {/* practice using order */}
            <div className=" bg-emerald-800 m-3">

            <div className=" flex justify-center">
            <h6 className= " mt-6 text-xl mx-4 text-yellow-200"> Creating Sustainable Jobs
            </h6>

            </div>

            <div className="flex flex-col md:flex-row  m-4 rounded-xl  md:gap-4 justify-center items-center">
              <div className="p-10 border w-full  md:w-1/2 lg:w-1/2 h-1/2 m-4 border-green-800 flex  justify-center md:order-last">
              <p className="text-white">
                &quot;We believe education is the key to breaking the cycle of poverty. Kijani Welfare offers scholarships, school supplies, and after-school programs to ensure that children in underserved communities have the opportunity to learn and succeed.&quot;
              </p>
              </div>
              <div className="p-2 border w-full md:w-1/2 lg:w-1/2 h-72 border-emerald-800 m-4 flex">
                <div
                  className="flex-1"
                  style={{
                    backgroundImage: "url('/learn.jpeg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%', // Ensure the image covers the full height
                  }}
                >
                  {/* Optional: You can add content here if needed */}
                </div>
              </div>
            </div>
            </div>

       
        
        <div className=" flex justify-center">
          <div className='p-2'>
            <div className=" flex justify-center">
            <h2 className='text-2xl font-semibold'> Amount Raised & People helped: </h2>

            </div>
          <div className=' flex flex-row justify-center gap-24 py-4'>
            <div className='text-xl font-bold'>People Helped: <Counter endValue={2000} duration={5000} /></div>
            {/* <div className='text-xl font-bold'>Properties: <Counter endValue={350} duration={5000} /></div> */}
            <div className='text-xl font-bold'>Total Ammount Raised Ksh. <Counter endValue={50} duration={4000} />M</div>
          </div>
        </div>

        </div>

        <div className=" ">
          <div className=" flex justify-center text-2xl font-bold ">
          <h3>Real Impact:</h3>

          </div>

        <div className="flex justify-center items-center p-8">
          <DonationSection/>
        </div>
        </div>
        

        <div className="border border-emerald-800 m-2 flex flex-col justify-center items-center p-8">
          <h4 className="flex justify-center text-2xl font-bold" >Get Involved:</h4>
          <div className=" flex items-center flex-col lg:flex-row w-full gap-2 text-white">
            <div className=" bg-emerald-800 w-full lg:w-1/2 flex flex-col justify-center ">
            <div className="p-2 border h-72 border-emerald-950  m-4 flex">
                <div
                  className="flex-1"
                  style={{
                    backgroundImage: "url('/vol.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%', // Ensure the image covers the full height
                  }}
                >
                  {/* Optional: You can add content here if needed */}
                </div>
              </div>
              <div className=" flex items-center justify-center">
              <button className=" text-black bg-yellow-300 p-1 rounded-2xl mb-5"> Volunteer</button>

              </div>
            </div>
            <div className=" bg-emerald-600 w-full mt-8 lg:m-0 lg:w-1/2 p-6  flex items-center justify-center">
              <button className=" bg-yellow-300 p-1 rounded-xl text-black flex justify-center items-center">
                  Donate
              </button>
            </div>
          </div>
        </div>

        <Footer/>
        
        {/* This is a comment that was causing an error */}
      </div>
    </>
  );
}