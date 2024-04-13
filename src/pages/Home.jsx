import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {

  return (
    <section className="section bg-white ">
      <div className="container mx-auto h-screen relative">
        <div className="flex flex-col justify-start">
        <div className="z-10 w-full pt-36 lg:pt-80 lg:absolute flex flex-col justify-center items-start pl-4  ">
          <h1 className="xl:text-[100px] text-4xl pb-8 pt-12 font-infini">Chloé Guillermin</h1>
          <p className="text-2xl mb-4 lg:mb-12 font-zodiak text-[#544f4f]">Tattoo Artist</p>
      <div>
              <Link to='/contact' className="mb-[30px] ">
                <Button>Contact me</Button>
              </Link>
              </div>
        </div>
        <div className="flex justify-end  xl:max-h-[800px]">
      <img
      className="xl:w-[580px] xl:h-[660px] lg:w-[558px]  w-full  relative xl:bottom-0 overflow-hidden"
      src={`${process.env.PUBLIC_URL}/portrait1.jpeg`} alt="chloé"/>
      </div>
      </div>
      </div>

    </section>
  )
}

export default Home;