import {React, useState} from "react";
import {IoMdClose} from 'react-icons/io';
import {CgMenuRight} from 'react-icons/cg';
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const MobileNav = () => {
  return (
   <nav>
    <div className="text-3xl cursor-pointer">
      <CgMenuRight></CgMenuRight>
    </div>
    <div className="text-4xl z-30 left-4 top-14 cursor-pointer text-black">
      <IoMdClose></IoMdClose>
    </div>
    <div className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20">
      <div>
        <ul className="h-full flex flex-col gap-y-8 justify-center items-center text-black font-bold text-2xl pt-16">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Tatoo</Link>
          </li>
          <li>
            <Link to="/">Flash / Dessin</Link>
          </li>
          <li>
            <Link to="/">Sérigraphie</Link>
          </li>
          <li>
            <Link to="/">Body-painting</Link>
          </li>
          <li>
            <Link to="/">Expo / Festival</Link>
          </li>
          <li>
            <Link to="/">Céramique</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          
        </ul>
      </div>
    </div>
   </nav>
  )
}

export default MobileNav;