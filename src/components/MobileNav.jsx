import {React, useState} from "react";
import {IoMdClose} from 'react-icons/io';
import {CgMenuRight} from 'react-icons/cg';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = () => {
  const MenuVariants = {
    hidden: {
      x: '100%'
    },
    show: {
      x: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.9]
      } 

    }
  }
  const [isOpen, setIsOpen] = useState(false)
  
  const handleClose = () => {
    setIsOpen(!isOpen)}

  return (
    <nav className="text-black xl:hidden">
    <div 
    onClick={setIsOpen}
    className="text-3xl cursor-pointer relative">
      <CgMenuRight></CgMenuRight>
    </div>
    <motion.div 
    variants={MenuVariants}
    initial="hidden"
    animate= {isOpen ? 'show' : ''}
    className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20">
    <div
    onClick={handleClose}
    className="text-4xl z-30 left-10 top-8 cursor-pointer text-black absolute ">
      <IoMdClose></IoMdClose>
    </div>
      <div>
        <ul className="h-full flex flex-col gap-y-8 justify-center items-center text-black  font-bold text-2xl pt-16">
          <li className="hover:text-gray-400"
          >
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-500" onClick={handleClose}>
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-500" onClick={handleClose}>
            <Link to="/tatoo">Tattoo</Link>
          </li>
          <li className="hover:text-gray-500" onClick={handleClose}>
            <Link to="/flash">Flash / Dessin</Link>
          </li>
          <li className="hover:text-gray-500" onClick={handleClose}>
            <Link to="/serigraphie">Sérigraphie</Link>
          </li>
          <li className="hover:text-gray-500" onClick={handleClose}>
            <Link to="/body">Body-painting</Link>
          </li>
          <li className="hover:text-gray-500" onClick={handleClose}>
            <Link to="/expo">Expo / Festival</Link>
          </li>
          <li className="hover:text-gray-500" onClick={handleClose}>
            <Link to="/ceramique">Céramique</Link>
          </li>
          <li className="hover:text-gray-500" onClick={handleClose}>
            <Link to="/contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </motion.div>
   </nav>
  )
}

export default MobileNav;