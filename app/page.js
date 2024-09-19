
import Image from "next/image";
import Footer from "@/components/footer";

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
        
        <div className="bg-emerald-900 m-4 p-5 flex justify-center flex-col items-center text-white relative">
          <h2 className="text-yellow-300 font-semibold underline text-xl">About Us</h2>
          <p>Kijani Welfare is a non-profit organization dedicated to transforming lives in underprivileged communities by providing access to education, clean water, and sustainable job opportunities.</p>
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

        <div className=" flex flex-row gap-20   justify-center">
          <div className="p-10 border md:order-last ">
1
          </div>
          <div className=" p-10 border">
            2
          </div>
        </div>

        <div className="bg-emerald-900 m-4 flex flex-col justify-center items-center text-white">
    <h6 className="text-yellow-200 mb-4">Bridging the Gap in Education</h6>
    <div className="flex flex-row w-full order-3 md:order-4">
      <div
        className="bg-green-900 flex-1 flex justify-center  items-center"
        style={{
          backgroundImage: "url('/class.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
       
      </div>
      <div className="p-4 flex-1 order-4 md:order-3">
        <p className="text-white">
          &quot;We believe education is the key to breaking the cycle of poverty. Kijani Welfare offers scholarships, school supplies, and after-school programs to ensure that children in underserved communities have the opportunity to learn and succeed.&quot;
        </p>
      </div>
    </div>
  </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row gap-4 bg-emerald-900 p-1 m-4">
          
          <h6 className="text-yellow-200 mb-4">Clean Water for All</h6>

          <div className="order-3 md:order-4 p-4  flex-1">
            <p className="text-white">
              &quot;We believe education is the key to breaking the cycle of poverty. Kijani Welfare offers scholarships, school supplies, and after-school programs to ensure that children in underserved communities have the opportunity to learn and succeed.&quot;
            </p>
          </div>
          <div className="order-4 md:order-3 flex-1 flex">
            <div
              className="bg-green-900 flex-1 flex p-28 justify-center items-center"
              style={{
                backgroundImage: "url('/water.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* <div className="p-4 text-left">
                <h1 className="text-yellow-400 text-4xl font-bold mb-4">KIJANI WELFARE</h1>
                <h2 className="text-2xl">Empowering Communities through Education, Water, and Employment</h2> 
              </div> */}
            </div>
          </div>
        </div>

 {/* Second Section */}
 <div  className=" bg-emerald-900"> 
 {/* <h6 className="text-yellow-200 mb-4">Bridging the Gap in Education</h6> */}

 <div className="flex flex-col md:flex-row gap-4 bg-emerald-900 items-center p-1 m-4">
 <h6 className="text-yellow-200  ">Bridging the Gap in Education</h6>

          <div className="order-3 md:order-4 p-1  flex-1">
            <p className="text-white">
              &quot;We believe education is the key to breaking the cycle of poverty. Kijani Welfare offers scholarships, school supplies, and after-school programs to ensure that children in underserved communities have the opportunity to learn and succeed.&quot;
            </p>
          </div>
          <div className="order-4 md:order-3 flex-1 flex">
            <div
              className="bg-green-900 flex-1 flex p-28 justify-center items-center"
              style={{
                backgroundImage: "url('/class.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* <div className="p-4 text-left">
                <h1 className="text-yellow-400 text-4xl font-bold mb-4">KIJANI WELFARE</h1>
                <h2 className="text-2xl">Empowering Communities through Education, Water, and Employment</h2> 
              </div> */}
            </div>
          </div>
        </div>
        </div>

        <div className="bg-emerald-900 h-20 m-4 p-8 flex justify-center items-center text-white">
          Creating Sustainable Jobs
        </div>
        
        <div>
          <h7>Amount Raised & People helped:</h7>
        </div>

        <div className="flex justify-center items-center p-8">
          <h3>Real Impact:</h3>
        </div>

        <div className="border border-emerald-900 m-2 flex justify-center items-center p-8">
          <h4>Get Involved:</h4>
        </div>

        <Footer/>
        
        {/* This is a comment that was causing an error */}
      </div>
    </>
  );
}