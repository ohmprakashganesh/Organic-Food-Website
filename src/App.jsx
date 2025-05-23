import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Product from './components/Product'
import About from './components/About'
import HowitWorks from './components/HowitWorks'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
    <Navbar />
    <Hero/>
    <Features/>
    <Product />
    <About/>
    <HowitWorks />
    <Testimonials />
    </div>
  )
}

export default App
