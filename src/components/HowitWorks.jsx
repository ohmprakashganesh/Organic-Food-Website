import React from 'react'
import img from '../assets/process.jpg'

const steps = [
  {
    number: "01",
    title: "Place Your Order",
    desc: "Browse our organic range and place your order in a few easy clicks.",
  },
  {
    number: "02",
    title: "Harvest from Farm",
    desc: "We pick the freshest items straight from local organic farms.",
  },
  {
    number: "03",
    title: "Eco-Packaging",
    desc: "We use sustainable, hygienic packaging to ensure freshness.",
  },
  {
    number: "04",
    title: "Quick Delivery",
    desc: "Your order reaches your doorstep within hours, farm-fresh.",
  },
];
const HowitWorks = () => {
  return (
   <section className=' bg-green-50 py-16 px-5 lg:px-20'>
    {/* image section  */}

    <div className='flex flex-col lg:flex-row items-center gap-10'>
        <div className='lg:w-1/2'>
        <img src={img} alt="Organic process" className='w-full h-auto rounded-lg shadow-lg' />
        </div>

    {/* content section  */}
    <div className='lg:w-1/2'>
        <h2 className='text-3xl font-bold text-gray-800 mb-8'>How It Works</h2>
        <div className='space-y-8'>{steps.map((step,index)=>(
            <div key={index} className='flex items-start gap-5'> 
                <div className='text-3xl font-bold text-green-600 '>{step.number}</div>
                <div>
                <div className='text-2xl font-semibold text-gray-700'>{step.title}</div>
                <div className='text-gray-600 text-sm'>{step.desc}</div>
                </div>

            </div>
        ))}</div>
    </div>
        </div>

   </section>
  )
}

export default HowitWorks
