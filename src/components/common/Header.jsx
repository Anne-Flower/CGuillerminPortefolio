import React from "react";
import Logo from "./Logo.jsx";
import MobileNav from "../MobileNav.jsx";
import Socials from "../Socials.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <> 
  <header className="z-30 xl:sticky fixed w-full h-[100px] lg:h-[140px] flex items-center px-[26px] lg:px-[80px]">

    <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
      <div className="hidden md:inline">
  <Link to="/" className="max-w-[200px]">
  <Logo></Logo>
  </Link>
  </div>
  <nav className="hidden xl:flex gap-x-12 font-semibold">
  <Link to="/" className="text-[#696c6d] hover:text-black transition">Home</Link>
  <Link to="/about" className="text-[#696c6d] hover:text-black transition">About</Link>
  <Link to="/tatoo" className="text-[#696c6d] hover:text-black transition">Tattoo</Link>
  <Link to="/flash" className="text-[#696c6d] hover:text-black transition">Flash / Dessin</Link>
  <Link to="/body" className="text-[#696c6d] hover:text-black transition">Body-painting</Link>
  <Link to="/serigraphie" className="text-[#696c6d] hover:text-black transition">Sérigraphie</Link>
  <Link to="/ceramique" className="text-[#696c6d] hover:text-black transition">Céramique</Link>
  <Link to="/expo" className="text-[#696c6d] hover:text-black transition">Expo</Link>
  <Link to="/contact" className="text-[#696c6d] hover:text-black transition">Contact</Link>
 </nav>
 </div>
 <Socials></Socials>
 <MobileNav></MobileNav>
   </header>
   </>

   
  )
}

export default Header;