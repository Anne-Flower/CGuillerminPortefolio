import React from "react";
import Masonry from "react-responsive-masonry";




const Serigraphie = () => {
  const numberOfBoxes = 16
  const images = Array.from({ length: numberOfBoxes }, (_, index) => `/assets/imagesSerigraphies/Sérigraphie/${index + 1}.jpg`);
  const pick = (heights) => {
    return heights[Math.floor(Math.random() * heights.length)]; }


  return (<div className="pt-36 px-20">
  <Masonry columnsCount={2} gutter="60px">
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
)}

export default Serigraphie;