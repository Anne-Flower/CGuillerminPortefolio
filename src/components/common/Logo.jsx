import React from "react";

const Logo = () => {
  return (
   <div className="">
    {/* <img src="public/cglogo.jpg" alt="Portrait de Chloé Guillermin" ></img> */}
    <img src={`${process.env.PUBLIC_URL}/cglogo.jpg`} alt="Logo" className="w-[80px] h-[80px]"/>
   </div>
  )
}

export default Logo;