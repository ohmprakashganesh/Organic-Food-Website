import React from 'react'
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoIosContact } from 'react-icons/io';

const Navbar = () => {
  return (
    <header  className='flex  flex-row justify-between items-center px-5 py-5 lg:px-14 md:px-10  bg-teal-300'>
    <div style={{width:'200px'}}>
      <span className=' text-xl gap-15 p-5 '> Farm_Root</span>
    </div>
    <nav className='hidden md:flex  gap-6 '>
        <a href="" className='navHover'>Home </a>
        <a href="" className='navHover'>Menu </a>
        <a  className='navHover' href="">About-us </a>
        <a  className='navHover'href="">subscription </a>
        <a className='navHover'href="">Recipes </a>
        <a className='navHover'href="">contact </a>

        {/* icons */}

           <div className="flex justify-center gap-3 ml-8 items-center">
               <span className='icons hover:bg-green-700'><FiSearch  /></span>
                <span className='icons hover:bg-green-700'><IoIosContact   /></span>
               <span className='icons hover:bg-green-700'><FaShoppingCart  /></span>
     </div>

    </nav>

    <button className=" md:hidden bg-green-500 hover:bg-white text-black py-3 px-6 rounded-full transform duration-700  ">shop now </button>
  
</header>
  )
}

export default Navbar;
