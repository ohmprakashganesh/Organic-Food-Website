import React from 'react'
import { FaLeaf,FaShippingFast,FaHandsHelping,FaCheckCircle } from 'react-icons/fa';



    const features = [
  {
    icon: <FaLeaf className="text-green-600 text-4xl mb-3" size={45} />,
    title: "100% Organic",
    desc: "All our produce is grown without harmful chemicals or pesticides.",
  },
  {
    icon: <FaShippingFast className="text-green-600 text-4xl mb-3" size={45} />,
    title: "Fast Delivery",
    desc: "We deliver fresh produce at your doorstep within hours of harvesting.",
  },
  {
    icon: <FaHandsHelping className="text-green-600 text-4xl mb-3" size={45} />,
    title: "Farmer Support",
    desc: "Empowering local farmers with fair trade and sustainable practices.",
  },
  {
    icon: <FaCheckCircle className="text-green-600 text-4xl mb-3" size={45} />,
    title: "Quality Assured",
    desc: "Every item is checked for freshness and quality before delivery.",
  },
];
const Features = () => {

  return (
   <section className='bg-white py-14 px-5 lg:px-14 text-center'>
    <h2 className='text-2xl mb-10 text-gray-600  font-bold'> Why Choose Us</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 '>
        {features.map((item,index)=>(
            <div key={index} className='w-4/6  p-6 shadow-md rounded-xl hover:shadow-xl transition duration-400   bg-gray-400'>
                <div className='flex justify-center text-4xl text-green-600 mb-3'>{item.icon}</div>
                <div className='text-xl font-semibold mb-2 text-gray-700'>{item.title}</div>
                <div className=' text-gray-600 text-sm'>{item.desc}</div>

            </div>
        ))}
    </div>
   </section>
  )
}

export default Features
