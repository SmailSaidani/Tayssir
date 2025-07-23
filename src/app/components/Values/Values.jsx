import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Values() {
  const [hovered, setHovered] = useState(null);
  
  const values = [
    {
      title: "Ambition",
      description: "Our team's boundless ambition propels us to innovate, grow, and reach new horizons."
    },
    {
      title: "Transparency & Trust",
      description: "Open communication and transparency are the cornerstones of our relationships, fostering trust and collaboration."
    },
    {
      title: "Quality",
      description: "We are dedicated to delivering products of unparalleled quality, setting the standard for excellence."
    },
    {
      title: "Performance",
      description: "We ensure optimal performance in every aspect of our work, setting new standards and pushing the boundaries of what's possible."
    }
  ];

  return (
    <div className="flex flex-col w-full justify-center bg-red-900 p-6 md:p-16 lg:p-24">
      {/* Container for entire content - switched to column on mobile */}
      <div className="flex flex-col lg:flex-row w-full gap-8">
        {/* Left Section - Values */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start" style={{marginTop:"15%"}}>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white self-start mb-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our core values
          </motion.h2>
          
          <div className="space-y-4 w-full">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl px-6 py-8 md:px-8 md:py-10 mt-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h6 className="font-semibold text-lg md:text-xl mb-2">{value.title}</h6>
                <p className="text-gray-700 text-xs md:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Right Section - Images */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-16">
          {/* Image grid */}
          <div className="grid grid-cols-12 gap-3">
            {/* Main large image */}
            <motion.div 
              className="col-span-12 relative overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover="hover"
            >
              <motion.img  
                src="https://images.pexels.com/photos/19110449/pexels-photo-19110449/free-photo-of-man-in-a-suit-driving-a-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Delivery person" 
                className="w-full h-full object-cover aspect-video" 
                variants={{ hover: { scale: 1.05 } }} 
                transition={{ duration: 0.3 }} 
              /> 
              <motion.div  
                className="absolute inset-0 opacity-0" 
                variants={{ hover: { opacity: 0 } }} 
              /> 
            </motion.div> 
            
            {/* Two smaller images below */}
            <motion.div  
              className="col-span-6 overflow-hidden rounded-2xl mt-3"  
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              whileHover="hover" 
            > 
              <motion.img  
                src="https://images.unsplash.com/photo-1621972750749-0fbb1abb7736?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Driver smiling" 
                className="w-full h-full object-cover aspect-square" 
                variants={{ hover: { scale: 1.05 } }} 
                transition={{ duration: 0.3 }} 
              /> 
            </motion.div> 
            
            <motion.div  
              className="col-span-6 overflow-hidden rounded-2xl mt-3" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.4 }} 
              whileHover="hover" 
            > 
              <motion.img  
                src="https://images.pexels.com/photos/4391226/pexels-photo-4391226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Person in car" 
                className="w-full h-full object-cover aspect-square"
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div 
              className="col-span-12 relative overflow-hidden rounded-2xl mt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover="hover"
            >
              <motion.img  
                src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Food delivery" 
                className="w-full object-cover aspect-video" 
                variants={{ hover: { scale: 1.05 } }} 
                transition={{ duration: 0.3 }} 
              /> 
              <motion.div  
                className="absolute inset-0 bg-red-700 opacity-20" 
                variants={{ hover: { opacity: 0 } }} 
              /> 
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}