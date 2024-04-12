import React from "react";
import Logo from "./Logo.jsx";
import MobileNav from "../MobileNav.jsx";
import Socials from "../Socials.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <> 
  <header className="z-30 xl:sticky fixed w-full h-[100px] lg:h-[120px] flex items-center px-[26px] lg:px-[80px]">

    <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
      <div className="hidden md:inline">
  <Link to="/" className="max-w-[200px]">
  <Logo></Logo>
  </Link>
  </div>
  <nav className="hidden xl:flex gap-x-10 font-zodiak text-[#5d6666]">
  <Link to="/" className=" hover:text-black transition">Home</Link>
  <Link to="/about" className=" hover:text-black transition">About</Link>
  <Link to="/tatoo" className=" hover:text-black transition">Tattoos</Link>
  <Link to="/flash" className=" hover:text-black transition">Flashs</Link>
  <Link to="/body" className=" hover:text-black transition">Body-paintings</Link>
  <Link to="/serigraphie" className=" hover:text-black transition">Sérigraphies</Link>
  <Link to="/ceramique" className=" hover:text-black transition">Céramiques</Link>
  <Link to="/expo" className=" hover:text-black transition">Expos</Link>
  <Link to="/contact" className=" hover:text-black transition">Contact</Link>
 </nav>
 </div>
 <Socials></Socials>
 <MobileNav></MobileNav>
   </header>
   </>

   
  )
}

export default Header;