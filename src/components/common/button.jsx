import React from "react";



const Button = ({label, className, children}) => {
  const buttonClasses = `bg-black hover:bg-gray-400 text-white font-bold py-4 px-8 rounded-sm ${className || ''}`;
  return (
    <button className={buttonClasses}>{label || children}</button>

  )
}

export default Button;