import React from "react";

const Contact = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto h-full">
        <div className="flex flex-col  h-screen items-center justify-start pt-36 lg:pt-0 gap-x-8 text-center lg:text-left">
        <div className="lg:flex-1 px-4 lg:pt-64 pt-56 ">
          <h1 className="py-8 text-4xl font-zodiac font-semibold flex justify-center">Contact</h1>
          <div className="lg:flex flex-row">
          <a className="py-8 text-2xl font-infini text-lg lg:pl-8 flex justify-center hover:text-cyan-900" href="mailto:chloe.guillermin@gmail.com? subject=subject text">chloe.guillermin@gmail.com</a>
          </div>          
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;