import React from "react";
import Button from "../components/common/Button";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-white from-30% to-[#fcfbf7]">
      <div className="mx-auto h-full">
        <div className="flex flex-col lg:flex-row  h-screen items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
        <div></div>
        <div className="lg:flex-1 lg:pt-22 px-4 ">
          <h1 className="font-bold py-8 text-4xl">Contact</h1>
          <form className="bg-transparent flex flex-col gap-y-4">
            <div className="flex gap-x-10">
              <input 
              className="focus:outline-none  bg-transparent h-[60px] w-full pl-3 placeholder:text-gray-600 border-b border-gray-600"
              type="text" 
              placeholder="Ton nom"/>
              <input 
              className="focus:outline-none bg-transparent h-[60px] w-full pl-3 placeholder:text-gray-600 border-b border-gray-600"
              type="text" 
              placeholder="Ton email"/>
            </div>
            <input 
              className="focus:outline-none bg-transparent h-[60px] w-full pl-3 placeholder:text-gray-600 border-b border-gray-600"
              type="text" 
              placeholder="Ton message"/>
              <div className="mt-12">
              <Button>Envoyer</Button>
              </div>
          </form>
        </div>
        <div></div>
        </div>

      </div>


    </section>
  )
}

export default Contact;