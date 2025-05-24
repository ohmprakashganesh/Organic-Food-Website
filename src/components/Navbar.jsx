import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Icon for toggle button

function Header() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center px-5 py-5 lg:px-14 md:px-10 bg-teal-300 relative">
      {/* Logo */}
      <div className="w-52">
        <span className="text-xl font-bold">Farm_Root</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        <a className="navHover" href="/">Home</a>
        <a className="navHover" href="products">products</a>
        <a className="navHover" href="about">About-us</a>
        <a className="navHover" href="testimonials">testimonials</a>
        <a className="navHover" href="#">Recipes</a>
        <a className="navHover" href="#">Contact</a>

        {/* Icons */}
        <div className="flex gap-3 ml-8 items-center">
          <span className="icons hover:bg-green-700"><FiSearch /></span>
          <span className="icons hover:bg-green-700"><IoIosContact /></span>
          <span className="icons hover:bg-green-700"><FaShoppingCart /></span>
        </div>
      </nav>

      {/* Toggle Button for Mobile */}
      <button onClick={toggle} className="md:hidden absolute top-6 right-6 text-2xl">
        <GiHamburgerMenu />
      </button>

      {/* Mobile Nav */}
      {show && (
        <nav className=" w-full md:hidden flex-col flex  gap-y-2  divide-emerald-100 transition duration-300 relative divide-y-2 ">
          <a className="navHover" href="#">Home</a>
          <a className="navHover" href="#">Menu</a>
          <a className="navHover" href="#">About-us</a>
          <a className="navHover" href="#">Subscription</a>
          <a className="navHover" href="#">Recipes</a>
          <a className="navHover" href="#">Contact</a>

          <div className="flex gap-3 mt-2 items-center">
            <span className="icons hover:bg-green-700"><FiSearch /></span>
            <span className="icons hover:bg-green-700"><IoIosContact /></span>
            <span className="icons hover:bg-green-700"><FaShoppingCart /></span>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
