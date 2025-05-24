import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Product from "./components/Product";
import About from "./components/About";
import HowitWorks from "./components/HowitWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Product />
            <About />
            <HowitWorks />
            <Testimonials />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
