import React from 'react'
import img from "../assets/hero.png"

const Hero = () => {
  return (
   <section className='min-h-[90vh] flex flex-col md:flex-row justify-center md:justify-between items-center px-5 lg:px-14 bg-gradient-to-r from-[#d7e8dc[ to-[#c4dbce]'>
 <div className='text-center mt-12 md:text-start md:mt-0 space-y-5 max-w-xl'>
    <h1 className='text-sm md:text-lg text-gray-700'> FRESH FORM FARM TO YOU PLATE </h1>
    <h3 className='text-4xl md:text-5xl font-bold leading-tight text-gray-900'>healthy eating <br/> the organic way </h3>
    <p className='text-gray-600'>discover fresh , organic and handpicked vegetable directly form local </p>
    <button className='bg-green-600 hover:bg-green-800 text-white py-3 px-5 w-fit rounded-full shadow-lg transition-shadow duration-700'>Explore Menu</button>
    </div>

    {/* img section */}
    <div className="w-4/5 md:w-3/5 flex justify-center-safe">
    <img  src={img} alt="image" className="rounded-full mt-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] border-2 border-white" />
    
    </div>
   </section>
  )
}

export default Hero;
