import React from "react";
import Masonry from "react-responsive-masonry";
// import Masonry from 'react-layout-masonry';
// import { Masonry } from 'react-masonry'
// import { pick } from './random'

const BodyPainting = () => {
  // public/assets/imagesBody/2019/Alex-2019-1.jpg
    const numberOfBoxes = 16
    const images = Array.from({ length: numberOfBoxes }, (_, index) => `/assets/imagesBody/2019/${index + 1}.jpg`);
    const pick = (heights) => {
      return heights[Math.floor(Math.random() * heights.length)];
    }
   
  return (
    <div className="pt-36 px-20">
       <Masonry columnsCount={3} gutter="60px">
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
    

    </div>
  )}


export default BodyPainting;