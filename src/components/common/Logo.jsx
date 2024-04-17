import React from "react";

const Logo = () => {
  return (
   <div className="">
    {/* "/cglogo.jpg" */}
    {/* <img src="public/cglogo.jpg" alt="Portrait de Chloé Guillermin" ></img> */}
    <img src={`/assets/imagesHeader/cglogo.jpg`} alt="Logo" className="w-[80px] h-[80px]"/>
   </div>
  )
}

export default Logo;