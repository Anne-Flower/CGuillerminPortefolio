import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const Home = () => {
  return (
    <section className="section bg-white ">
      <div className="container mx-auto h-screen relative">
        <div className="flex flex-col justify-start">
        <div className="z-10 w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto lg:absolute flex flex-col justify-center items-start pl-4 lg:pt-80 ">
          <h1 className="lg:text-[100px] text-4xl pb-8 pt-12 font-infini">Chloé Guillermin</h1>
          <p className="text-2xl mb-4 lg:mb-12 font-zodiak">Tattoo Artist</p>
      <div>
              <Link to='/contact' className="mb-[30px] ">
                <Button>Contact me</Button>
              </Link>
              </div>
        </div>
        <div className="flex justify-end  xl:max-h-[800px]">
      <img
      className="lg:w-[580px] lg:h-[673px] min-h-full w-full  relative lg:bottom-0 overflow-hidden"
      src={`${process.env.PUBLIC_URL}/portrait1.jpeg`} alt="chloé"/>
      </div>
      </div>
      </div>

    </section>
  )
}

// src="../assets/imagesHome/portrait1.jpeg" alt="chloé" />
export default Home;