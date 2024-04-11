import { useState, useEffect } from "react";
import React from "react";
import Masonry from "react-responsive-masonry";
// public/assets/imagesBody/2020/1.jpg

const BodyPainting = () => {
    const numberOfBoxes = 15
    const numberOfBoxess = 8
    const numberOfBoxesss = 13

    const images = Array.from({ length: numberOfBoxes }, (_, index) => `/assets/imagesBody/2019/${index + 1}.jpg`);
    const images2 = Array.from({ length: numberOfBoxess }, (_, index) => `/assets/imagesBody/2020/${index + 1}.jpg`);
    const images3 = Array.from({ length: numberOfBoxesss }, (_, index) => `/assets/imagesBody/2021/${index + 1}.jpg`);

    const pick = (heights) => {
      return heights[Math.floor(Math.random() * heights.length)];
    }
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
    <div className="pt-36 lg:px-20 px-8">
       <Masonry columnsCount={columnsCount}  gutter="60px">
       {images.map((img, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            height: `${pick([390, 230, 480, 300, 260, 350])}px`,
           
          }}
        >
   
        </div>
      ))}
    </Masonry>
    <Masonry columnsCount={columnsCount}  gutter="60px">
       {images2.map((img, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            height: `${pick([390, 230, 480, 320, 260, 350])}px`,
           
          }}
        >
   
        </div>
      ))}
    </Masonry>
    <Masonry columnsCount={columnsCount}  gutter="60px">
       {images3.map((img, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            height: `${pick([190, 230, 400, 300, 560, 350])}px`,
           
          }}
        >
   
        </div>
      ))}
    </Masonry>
    

    </div>
  )}


export default BodyPainting;