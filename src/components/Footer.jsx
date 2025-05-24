import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-green-100 text-gray-800 pt-12 pb-6 px-5 lg:px-14'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mb-8'>
            <div>
                <h3 className='text-2xl font-bold text-green-700 mb-3'>OrganicRoot</h3>
                <p>fresh, healthy, and 100% organic products delivered to your doorstep. supporting local farmers and sustainable living.</p>
            </div>

            {/* quick liniks */}

            <div>
                <h4 className='text-xl font-bold text-green-700 mb-3'>Quick Links</h4>
                <ul>
                   <li><a className='hover:text-black hover:font-semibold'  href="/">Home</a></li>
                    <li><a className='hover:text-black hover:font-semibold'  href="">About us</a></li>
                     <li><a className='hover:text-black hover:font-semibold'  href="">Products</a></li>
                      <li><a className='hover:text-black hover:font-semibold'  href="">Contact</a></li>
                </ul>
            </div>
            {/* categories */}
            <div>
                <h4 className='text-xl font-bold text-green-700 mb-3'>Categories</h4>
                <ul className='flex flex-col gap-y-1'>
                   <li><a className='hover:text-black hover:font-semibold' href="">vegetables</a></li>
                    <li><a className='hover:text-black hover:font-semibold'  href="">fruits</a></li>
                     <li><a className='hover:text-black hover:font-semibold'  href="">dairy products</a></li>
                    <li><a className='hover:text-black hover:font-semibold'  href="">Beverages</a></li>
                </ul>
            </div>

            {/* contact and social */}
            <div className='flex flex-col sm:items-center  gap-y-1'>
                <h4 className='text-xl font-bold text-green-700 sm:text-center lg:px-10  mb-3'>Contact</h4>
                <p>123 organic street, London, UK</p>
                <p>Email: support@gmail.com</p>
                <p>phone: +44 123 432 8576</p>
                <div className='flex text-3xl space-x-5'>
                    <a href="/">
                    <FaFacebook />
                    </a>
                      <a href="/">
                    <FaInstagram />
                    </a>
                      <a href="/">
                    <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
