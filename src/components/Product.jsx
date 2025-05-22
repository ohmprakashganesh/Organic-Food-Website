import React, { useState } from 'react'
import products from '../data/ProductData';
import ProductCard from '../layouts/ProductCard';

const categories = [
  "FOOD & DRINKS",
  "FRESH FRUITS",
  "VEGETABLES",
  "DRIED FOODS & NUTS",
];

const Product = () => {
    const[category, setCategory]=useState( "FOOD & DRINKS");
    const filtered=products.filter(
        (Product)=>Product.category==category
    )

  return (
 <section  className='bg-gray-50 pb-10 px-5 lg:px-14' >
    <h2 className=' text-4xl text-center font-bold text-gray-800 mb-10'>  Our products</h2>
    <div className='flex cursor-pointer flex-wrap justify-center mb-6 space-x-5 text-green-600 text-sm font-medium'>
         {categories.map((item,index)=>(
        <div key={index} onClick={()=>setCategory(item)} className={`pb-1 border-b-2 ${
            category ==item 
            ?"border-green-600 ": 
            "border-transparent"} hover:border-green-400 transition duration-700`}>
            {console.log(index + item)}
                {item}
        </div>

         ))} 
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4'>
        {filtered.map((product,index)=>(
            <ProductCard key={index} {...product}/>
        ))}
    </div>
 </section>
  )
}

export default Product
