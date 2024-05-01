import { useState } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import logo from "../assets/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <nav className="flex justify-between items-center md:px-[100px] px-[50px] py-4 text-[18px] bg-[#F5F7FA]">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="hidden lg:flex space-x-10 ">
        <a href="/" className="text-gray-900 hover:text-[#388E3B]">
          Home
        </a>
        <a href="/about" className="text-gray-900 hover:text-[#388E3B]">
          Service
        </a>
        <a href="/feature" className="text-gray-900 hover:text-[#388E3B]">
          Feature
        </a>
        <a href="/product" className="text-gray-900 hover:text-[#388E3B]">
          Product
        </a>
        <a href="/testimonial" className="text-gray-900 hover:text-[#388E3B]">
          Testimonial
        </a>
        <a href="/faq" className="text-gray-900 hover:text-[#388E3B]">
          FAQ
        </a>
      </div>
      <div className="hidden lg:flex space-x-8">
        <button className="text-[#388E3B] hover:text-[#237D31]">Login</button>
        <button className="bg-[#388E3B] hover:bg-[#237D31] rounded-[5px] px-5 py-2 text-white">
          Sign up
        </button>
      </div>
      {/* Hide hamburger on medium and larger screens */}
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} onToggle={toggleMenu} />
        <motion.div
          className={`lg:hidden absolute top-15 left-0 w-full bg-[#388E3B] z-10 overflow-hidden flex flex-col items-center`}
          variants={menuVariants}
          animate={isOpen ? "open" : "closed"}
        >
          <a
            href="/"
            className="text-white block px-4 py-4 hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white block px-4 py-4 hover:text-gray-400"
          >
            Service
          </a>
          <a
            href="/contact"
            className="text-white block px-4 py-4 hover:text-gray-400"
          >
            Feature
          </a>
          <a
            href="/product"
            className="text-white block px-4 py-4 hover:text-gray-400"
          >
            Product
          </a>
          <a
            href="/testimonial"
            className="text-white block px-4 py-4 hover:text-gray-400"
          >
            Testimonial
          </a>
          <a
            href="/faq"
            className="text-white block px-4 py-4 hover:text-gray-400"
          >
            FAQ
          </a>
          <button className=" px-4 py-4 text-white">Login</button>
          <button className="border border-white text-white px-5 py-2 my-3 rounded-md">
            Sign up
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
