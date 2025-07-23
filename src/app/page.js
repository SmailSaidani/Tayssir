'use client'
import { MasonryGridGallery } from "./components/Header/Gallery";
import { Poppins } from "next/font/google";
import { useState } from "react";

import { Button, Card, Typography } from "antd";
import Values from "./components/Values/Values";
import { Car, Globe } from "lucide-react";
import ImageLogo from "./components/Image/ImageLogo";
import Image from "next/image";
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

const { Title, Text } = Typography;

export default function Home() {
  const tabs = [
    {
      title: "Yassir Ride",
      description: "Your ultimate solution for hassle-free ride-hailing, designed for your convenience and safety.",
      cards: [
        {title: "Quick & easy", content: "One click on the app is all it takes to get a driver at your location. Anytime, anywhere."},
        {title: "Secure", content: "Our drivers are verified and the rides are geolocalized, so you can travel with peace of mind."},
        {title: "The right price", content: "Rates adjusted to the service you choose, displayed in advance, no hidden fees!"}
      ]
    },
    {
      title: "Yassir Express",
      description: "Grab a bite!",
      cards: [
        {title: "Fast and easy", content: "One click on the app is all it takes to get a driver at your location. Anytime, anywhere."},
        {title: "A wide variety of restaurants", content: "Our drivers are verified and the rides are geolocalized, so you can travel with peace of mind."}
      ]
    },
    {
      title: "Yassir Grocery",
      description: "Grocery shopping from home.",
      cards: [
        {title: "Fast and easy", content: "One click on the app is all it takes to get a driver at your location. Anytime, anywhere."},
        {title: "A wide variety of restaurants", content: "Our drivers are verified and the rides are geolocalized, so you can travel with peace of mind."}
      ]
    },
    {
      title: "Yassir Cash",
      description: "Payments made easy.",
      cards: [
        {title: "Yassir services", content: "Pay for rides on Yassir Go and Yassir Express deliveries."},
        {title: "Money transactions", content: "Send money to friends and family from your contacts or to a new phone number."},
        {title: "Smooth & secure", content: "Experience seamless, secure, and fast transactions with Yassir Cash."}
      ]
    }
  ];
  
  const [activeTab, setActiveTab] = useState(0); // Using index for active tab


  
  const partners= [
    "Drive with Us",
    "Sell with Us",
    "Deliver with Us"
]


 const [activepart, setPart]=useState(0)



console.log(activepart)
 const ShowCard = ()=>{
  
  switch (activepart) {
    case 0:
     return(
     <div className="flex flex-row justify-center p-4 md:p-8 ">
      <div className="flex flex-col bg-white rounded-xl w-full sm:w-3/4 md:w-3/4 lg:w-1/2 xl:w-1/3 py-6 px-6 md:py-8 md:px-12 shadow-xl">
        <Badge text="Ride Hailing" color="bg-red-50" />
        <h1 className="mt-4 md:mt-8 text-2xl md:text-4xl font-bold">Drive With Us</h1>
  
        {/* First Feature */}
        <div className="mt-8 md:mt-12">
          <div className="w-full">
            <p className={`text-lg font-medium ${poppins.className}`}>
              Be Your Own Boss
            </p>
            <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
              Something usefull and convincing to read for the people Something usefull and convincing to read for the people
            </p>
          </div>
        </div>
  
        {/* Second Feature */}
        <div className="mt-8 md:mt-10">
          <div className="w-full">
            <p className={`text-lg font-medium${poppins.className}`}>
              Be Your Own Boss
            </p>
            <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
              Something usefull and convincing to read for the people Something usefull and convincing to read for the people
            </p>
          </div>
        </div>
  
        {/* Third Feature */}
        <div className="mt-8 md:mt-10">
          <div className="w-full">
            <p className={`text-lg font-medium ${poppins.className}`}>
              Be Your Own Boss
            </p>
            <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
              Something usefull and convincing to read for the people Something usefull and convincing to read for the people
            </p>
          </div>
        </div>
  
        {/* CTA Button */}
        <div className="mt-8">
          <button className={`${poppins.className} text-white rounded-3xl text-xs font-bold bg-red-900 py-2 px-4 md:px-6 self-start hover:bg-red-800 transition-colors`}>
            Download the App
          </button>
        </div>
      </div>
    </div>
    )
    case 1:
      return (
        <div className="flex flex-col md:flex-row w-full">
          {/* First Card */}
          <div className="flex justify-center w-full md:w-1/2 p-4">
            <div className="flex flex-col bg-white rounded-xl w-full md:w-2/3 lg:w-2/3 py-6 px-6 md:py-8 md:px-12 shadow-xl">
              <Badge text="Ride Hailing" color="bg-red-50" />
              <h1 className="mt-4 md:mt-8 text-xl md:text-4xl font-bold">Drive With Us</h1>
      
              {/* First Feature */}
              <div className="mt-8 md:mt-12">
                <div className="w-full">
                  <p className={`text-lg font-medium ${poppins.className}`}>
                    Be Your Own Boss
                  </p>
                  <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
                    Something usefull and convincing to read for the people Something usefull and convincing to read for the people
                  </p>
                </div>
              </div>
      
              {/* Second Feature */}
              <div className="mt-8 md:mt-10">
                <div className="w-full">
                  <p className={`text-lg font-medium ${poppins.className}`}>
                    Be Your Own Boss
                  </p>
                  <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
                    Something usefull and convincing to read for the people Something usefull and convincing to read for the people
                  </p>
                </div>
              </div>
      
              {/* Third Feature */}
              <div className="mt-8 md:mt-10">
                <div className="w-full">
                  <p className={`text-lg font-medium ${poppins.className}`}>
                    Be Your Own Boss
                  </p>
                  <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
                    Something usefull and convincing to read for the people Something usefull and convincing to read for the people
                  </p>
                </div>
              </div>
      
              {/* CTA Button */}
              <div className="mt-8">
                <button className={`${poppins.className} text-white rounded-3xl text-xs font-bold bg-red-900 py-2 px-4 md:px-6 self-start hover:bg-red-800 transition-colors`}>
                  Download the App
                </button>
              </div>
            </div>
          </div>
      
          {/* Second Card */}
          <div className="flex justify-center w-full md:w-1/3  p-4">
            <div className="flex flex-col bg-white rounded-xl w-full py-6 px-6 md:py-8 md:px-12 shadow-xl">
              <Badge text="Ride Hailing" color="bg-red-50" />
              <h1 className="mt-4 md:mt-8 text-xl md:text-4xl font-bold">Drive With Us</h1>
      
              {/* First Feature */}
              <div className="mt-8 md:mt-12">
                <div className="w-full">
                  <p className={`text-lg font-medium ${poppins.className}`}>
                    Be Your Own Boss
                  </p>
                  <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
                    Something usefull and convincing to read for the people Something usefull and convincing to read for the people
                  </p>
                </div>
              </div>
      
              {/* Second Feature */}
              <div className="mt-8 md:mt-10">
                <div className="w-full">
                  <p className={`text-lg font-medium ${poppins.className}`}>
                    Be Your Own Boss
                  </p>
                  <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
                    Something usefull and convincing to read for the people Something usefull and convincing to read for the people
                  </p>
                </div>
              </div>
      
              {/* Third Feature */}
              <div className="mt-8 md:mt-10">
                <div className="w-full">
                  <p className={`text-lg font-medium ${poppins.className}`}>
                    Be Your Own Boss
                  </p>
                  <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
                    Something usefull and convincing to read for the people Something usefull and convincing to read for the people
                  </p>
                </div>
              </div>
      
              {/* CTA Button */}
              <div className="mt-8">
                <button className={`${poppins.className} text-white rounded-3xl text-xs font-bold bg-red-900 py-2 px-4 md:px-6 self-start hover:bg-red-800 transition-colors`}>
                  Download the App
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    case 2:
      return(
        <div className="flex flex-row justify-center p-4 md:p-8">
         <div className="flex flex-col bg-white rounded-xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 py-6 px-6 md:py-8 md:px-12 shadow-xl">
           <Badge text="Ride Hailing" color="bg-red-50" />
           <h1 className="mt-4 md:mt-8 text-xl md:text-2xl font-bold">Drive With Us</h1>
     
           {/* First Feature */}
           <div className="mt-8 md:mt-12">
             <div className="w-full">
               <p className={`text-sm font-bold ${poppins.className}`}>
                 Be Your Own Boss
               </p>
               <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
                 Something usefull and convincing to read for the people Something usefull and convincing to read for the people
               </p>
             </div>
           </div>
     
           {/* Second Feature */}
           <div className="mt-8 md:mt-10">
             <div className="w-full">
               <p className={`text-sm font-bold ${poppins.className}`}>
                 Be Your Own Boss
               </p>
               <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
                 Something usefull and convincing to read for the people Something usefull and convincing to read for the people
               </p>
             </div>
           </div>
     
           {/* Third Feature */}
           <div className="mt-8 md:mt-10">
             <div className="w-full">
               <p className={`text-sm font-bold ${poppins.className}`}>
                 Be Your Own Boss
               </p>
               <p className={`text-black font-extralight mt-2 text-xs ${poppins.className}`}>
                 Something usefull and convincing to read for the people Something usefull and convincing to read for the people
               </p>
             </div>
           </div>
     
           {/* CTA Button */}
           <div className="mt-8">
             <button className={`${poppins.className} text-white rounded-3xl text-xs font-bold bg-red-900 py-2 px-4 md:px-6 self-start hover:bg-red-800 transition-colors`}>
               Download the App
             </button>
           </div>
         </div>
       </div>
       )

  }
 }
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row items-center md:items-stretch w-full mt-12">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <h1 className={`${poppins.className} text-7xl font-extrabold w-2/3`}>The amazing  app
          designed to look like </h1>
          <h1 className={`${poppins.className} text-7xl self-center font-extrabold w-2/3 text-red-900`}>Yassir</h1>
          <div className="w-2/3">
            <button className={`${poppins.className} text-white rounded-3xl text-sm font-semibold bg-red-900 p-3 self-start mt-2`}>Order Now</button>
          </div>
        </div>

        {/* Right Section (Gallery with Overlayed Image) */}
        <div className="w-full md:w-1/2 relative mt-12">
          {/* Gallery */}
          <div className="relative z-10 mt-4 md:mt-0">
            <MasonryGridGallery />
          </div>

          {/* Overlayed Image */}
          <div className="absolute bottom-0 inset-x-5 flex justify-center z-20">
            <Image
            width={800}
            height={800}
              src="/assets/phone.png"
              alt="Gallery Top Image"
              className="w-[600px] h-auto md:w-[600px]"   
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full mt-8 bg-red-50 ">
        <div className="md:w-full flex flex-row justify-center items-center mt-8">
          <h1 className={`${poppins.className} text-6xl font-extrabold`}>All your <span className="text-red-700">needs</span> in <span className="text-red-900">one</span> app</h1>
        </div>

        {/* Tabs navigation */}

        <div className="md:w-full flex flex-row justify-center items-center mt-8">
  <div className="flex flex-wrap items-center justify-center border-2 border-red-600 rounded-3xl py-2 px-4 sm:px-8 w-fit">
    {tabs.map((tab, index) => (
      <div key={index} className="w-1/2 md:w-auto px-1 py-3">
        <button
          className={`w-full px-2 sm:px-4 py-3 rounded-full text-sm sm:text-md font-semibold transition-all 
            ${activeTab === index
              ? "bg-red-800 text-white"
              : "text-red-600 hover:text-red-800"
            }`}
          onClick={() => setActiveTab(index)}
        >
          {tab.title}
        </button>
      </div>
    ))}
  </div>
</div>

        {/* Content section */}
        <div className="flex flex-col w-full mb-24">
  <div style={{width:"100%"}} className="flex flex-col md:flex-row">
    {/* Text content - centered on mobile, left-aligned on desktop */}
    <div className="flex flex-col items-center w-full md:w-2/3">
      <div className={`${poppins.className} flex flex-col w-full md:w-1/2 items-center md:items-start px-4`}>
        {/* Title section */}
        <div className="flex flex-row justify-center items-center mt-16">
          {tabs[activeTab].title.split(" ").length > 1 ? (
            <>
              <h1 className={`${poppins.className} text-5xl font-extrabold text-red-800`}>
                {tabs[activeTab].title.split(" ")[0]}{" "}
              </h1>
              <div className="w-4"></div> 
              <h1 className={`${poppins.className} text-5xl font-extrabold `}>
                {tabs[activeTab].title.split(" ").slice(1).join(" ")}
              </h1>
            </>
          ) : (
            <h1 className={`${poppins.className} text-5xl font-extrabold text-red-800`}>
              {tabs[activeTab].title}
            </h1>
          )}
        </div>
        
        {/* Description */}
        <p className={`${poppins.className} font-semibold mt-4 text-xl text-center md:text-left`}>
          {tabs[activeTab].description}
        </p>

        {/* Cards */}
        <div className={`flex flex-col items-center mt-8 max-w-2xl w-full space-y-4 ${poppins.className}`}>
          {tabs[activeTab].cards.map((card, index) => (
            <div className="bg-white p-6 rounded-3xl shadow-md w-full" key={index}>
              <p className={`text-md font-bold ${poppins.className}`}>
                {card.title}
              </p>
              <p className={`text-gray-500 mt-2 text-md font-bold ${poppins.className}`}>
                {card.content}
              </p>
            </div>
          ))}
        </div>
        
        {/* Download button - centered on mobile, left-aligned on desktop */}
        <button className="mt-8 px-6 py-3 border bg-white border-red-600 text-red-600 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-all self-center md:self-start">
          Download the app
        </button>
      </div>
    </div>
    
    {/* Phone and QR images - hidden on mobile, visible on desktop */}
    <div className="relative hidden md:block w-[300px] md:w-[600px] mx-auto">
      {/* Phone Image */}
      <Image
        width={800}
        height={800}
        src="/assets/phone.png"
        alt="Gallery Top Image"
        className="w-full h-auto"
      />

      {/* QR Code Overlay */}
      <Image  
        width={800}
        height={800}
        src="/assets/qr.png"
        alt="QR Code"
        className="absolute left-4 top-1/2 w-20 md:w-42 rounded-lg shadow-2xl"
      />
    </div>
  </div>
</div>
      </div>




      <div >
      <Values  />

      </div>
      
      <div className="flex flex-col w-full  bg-red-50  " style={{height:"1100px"}}>
  {/* Heading Section */}
  <div className="w-full flex flex-row justify-center items-center px-4 pt-8 md:pt-12 mt-12">
    <p className={`${poppins.className} text-xl md:text-6xl font-extrabold`}>
      Let s <span className="text-red-700">partner up</span>
    </p>
  </div>

  {/* Tabs Section */}
  <div className="w-full flex flex-row justify-center items-center mt-6 md:mt-12 px-4  " >
    <div className="flex flex-wrap items-center justify-center border-2 mt-8 border-red-800 rounded-full py-3 px-2 md:py-2 md:px-8 max-w-full overflow-x-auto">
      {partners.map((prt, index) => (
        <button
          key={index}
          className={`px-2 md:px-4 py-1 md:py-3 rounded-full text-lg font-semibold transition-all m-1
            ${activepart === index 
              ? "bg-red-800 text-white" 
              : "text-red-800 hover:text-red-800"
            }`}
          onClick={() => setPart(index)}
        >
          {prt}
        </button>
      ))}
    </div>
  </div>

  {/* Card Section */}
  
      <ShowCard />




</div>
   


   <ImageLogo />







   
   <div className={`${poppins.className} mt-8 bg-gray-900 flex flex-row justify-center items-center h-120 py-16 px-12`}>
  <div className="w-6/7 h-full flex flex-col justify-center align-center items-center neon-border">
    <h1 className="text-white font-bold text-7xl">Get Started</h1>
    <p className="text-white font-medium text-lg self-center">Start using our services by downloading Yassir</p>
    <div className="mt-8">
      <button className={`${poppins.className} text-white rounded-4xl text-lg font-bold bg-red-900 py-3 px-4 md:px-6 self-start hover:bg-red-800 transition-colors`}>
        Download the App
      </button>
    </div>
  </div>
</div>
    </div>
  );
}
const Badge = ({ text, color = "bg-blue-500" }) => (
  <span className={`flex flow-row items-center  w-36 px-3 py-1 text-sm font-semibold text-red-500 rounded-full ${color}`}>
      <Car className='w-4 mr-2' />
       <p className="text-black font-bold">{text}</p>
       
  </span>
);