import React from "react";
import img from '../assets/about.jpg'

const About = () => {
  return (
    <section className="bg-white py-16 px-5 lg:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div>
            <h2 className="font-bold text-4xl mb-2"> About Us</h2>
            <p className="font-semibold text-green-600  text-2xl mb-2 ">Fresh . Local . Organic</p>
            <p className=" text-gray-600 text-xl mb-4">at NatureHarvest , we believe in produce directly from our partnered farmers. our  mission is to promote healthy living, sustainable farming, and fair trade for local communities. </p>
            <p className="text-gray-600 text-xl mb-6"> we carefully select farms that follow natural preactices  - no chemicals , no shortcuts. just pure, sholesome food delivered straight to your doorstep.</p>

            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition shadow-md shadow-gray-200 duration-500"> Learn more </button>
        </div>

        {/* imgate section  */}
        <div className="lg:w-1/2">
            <img src={img} 
            alt="" 
            className="w-full h-auto rounded-lg shadow-lg"
            />
            </div>
        

      </div>
    
    </section>
  );
};

export default About;
