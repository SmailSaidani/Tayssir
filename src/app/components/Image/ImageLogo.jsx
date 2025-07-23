import { DotSquare, TriangleDashed } from 'lucide-react';
import { Poppins } from 'next/font/google';
import React from 'react'







const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });




function ImageLogo() {
  return (
    <div>




      <div className='flex flex-col md:flex-row justify-around mt-24'>
  {/* Main image - centered */}
  <div className="w-full md:w-1/2 lg:w-1/3 relative overflow-hidden rounded-xl shadow-xl h-[700px] mt-12">
  {/* Main background image - with object-cover and portrait orientation */}
  <img
    src="https://images.unsplash.com/photo-1612709060421-596380268eaf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Main image"
    className="w-full h-full object-cover absolute object-center "
  />
  

  <div 
    className="absolute top-0 left-5 w-3/5 h-full  transform origin-top-left" 
    style={{
      transform: "skewX(15deg) translateX(-10%)",
      

    }}
  >
        <img src='/assets/logoYassir.png'  style={{position:"absolute",width:"310%",maxWidth:"none"}}/>
   
  </div>
  
  
</div>

        <div className='bg-[#353C40] rounded-2xl shadow-xl w-full md:w-1/2 p-12 flex flex-col mt-12'>
          <Badge color='bg-red-50' text={'B2B SOLUTIONS | DISTRIBUTION'} />


          {/* First Feature */}
        <div className="mt-8 md:mt-12 text-white">
          <div className="w-full">
            <p className={`text-4xl font-bold ${poppins.className}`}>
            A complete fleet system for your business
            </p>
            
          </div>
        </div>
  
        {/* Second Feature */}
        <div className="mt-8 md:mt-10">
          <div className="w-full">
            <p className={`text-xl text-white font-bold ${poppins.className}`}>
            Reliability
            </p>
            <p className={`text-white  font-extralight mt-2 text-sm ${poppins.className}`}>
            Let your employees move around in security and on time with dedicated Yassir drivers.


            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-10">
          <div className="w-full">
            <p className={`text-xl text-white font-bold ${poppins.className}`}>
            A dashboard

            </p>
            <p className={`text-white  font-extralight mt-2 text-sm ${poppins.className}`}>
            Enjoy an easy to use and pleasant dashboard to monitor and control the fleet system.




            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-10">
          <div className="w-full">
            <p className={`text-xl text-white font-bold ${poppins.className}`}>
            Your own budget

            </p>
            <p className={`text-white  font-extralight mt-2 text-sm ${poppins.className}`}>
            Adjust your preferred budget and choose our services on the dashboard.




            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-10">
          <div className="w-full">
          <div className="mt-8">
          <button className={`${poppins.className} text-white rounded-3xl text-sm font-bold bg-red-900 py-2 px-4 md:px-6 self-start hover:bg-purple-800 transition-colors`}>
            Visit Yassir Business
          </button>
          </div>
          </div>
        </div>
        </div>






      </div>
    </div>
  )
}
const Badge = ({ text, color = "bg-blue-500" }) => (
  <span className={`flex flow-row items-center  w-72 h-12 px-3 py-1 text-sm font-semibold shadow-2xl text-red-800 rounded-full ${color}`}>
      <TriangleDashed className='w-4 mr-2' />
       <p className="text-red-900 font-bold">{text}</p>
  </span>
);
export default ImageLogo