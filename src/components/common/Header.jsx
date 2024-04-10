import React from "react";
// import Socials from "../../components/Socials.jsx"

import Logo from "./Logo.jsx"
import { Link } from "react-router-dom";

const Header = () => {
  return (
   <> 
   <header className="z-10 bg-pink-100 fixed w-full h-[100px] lg:h-[140px] flex items-center px-[26px] lg:px-[80px]">

    <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
 <Link to="/">
 <Logo></Logo>
 </Link>
 <nav className="hidden lg:flex gap-x-12 font-semibold">
  <Link to="/" className="text-[#696c6d] hover:text-black transition">Home</Link>
  <Link to="/about" className="text-[#696c6d] hover:text-black transition">About</Link>
  <Link to="/tatoo" className="text-[#696c6d] hover:text-black transition">Tatoo</Link>
  <Link to="/flash" className="text-[#696c6d] hover:text-black transition">Flash</Link>
  <Link to="/contact" className="text-[#696c6d] hover:text-black transition">Contact</Link>
 </nav>
 </div>
   </header>
   </>

   
  )
}

export default Header;