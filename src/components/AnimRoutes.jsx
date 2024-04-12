import React from "react";
import About from '../pages/About.jsx';
import BodyPainting from '../pages/BodyPainting.jsx';
import Ceramique from '../pages/Ceramique.jsx';
import Contact from '../pages/Contact.jsx';
import ExpoFestival from '../pages/ExpoFestival.jsx';
import FlashDessins from '../pages/FlashDessins.jsx';
import Home from '../pages/Home.jsx';
import Serigraphie from '../pages/Serigraphie.jsx';
import Tatoo from '../pages/Tatoo.jsx';
import { Route, Routes } from "react-router-dom";


const AnimRoutes = () => {
  return <>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/body' element={<BodyPainting/>}></Route>
    <Route path='/expo' element={<ExpoFestival/>}></Route>
    <Route path='/flash' element={<FlashDessins/>}></Route>
    <Route path='/serigraphie' element={<Serigraphie/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/tatoo' element={<Tatoo/>}></Route>
    <Route path='/ceramique' element={<Ceramique/>}></Route>
  </Routes>  
  </>
}

export default AnimRoutes;