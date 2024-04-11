import React from "react";
import Masonry from "react-responsive-masonry";
import { useState, useEffect } from "react";

const Tatoo = () => {
  const numberOfBoxes = 30
  const images = Array.from({ length: numberOfBoxes }, (_, index) => `/assets/imagesTattoo/Tattoos/${index + 1}.jpg`);
  const pick = (heights) => {
    return heights[Math.floor(Math.random() * heights.length)]; }
    const [columnsCount, setColumnsCount]= useState(3)
    useEffect(()=> {
      const updateColumnsCount = () => {
        if (window.innerWidth < 1280 ) {
          setColumnsCount(1)
        } else {
          setColumnsCount(3)
        }
      }
      window.addEventListener('resize', updateColumnsCount)
      updateColumnsCount();
      return () => window.removeEventListener('resize', updateColumnsCount);
    }, [] );
  return (
    <div className="pt-24 lg:px-20 px-4">

<Masonry columnsCount={columnsCount} gutter="60px">
    {images.map((img, index) => (
    <div
      key={index}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        height: `${pick([490, 330, 580, 500, 460, 350])}px`,
        
      }}
    >
  
    </div>
  ))}
  </Masonry>

      
     

    </div>
  )
}

export default Tatoo;