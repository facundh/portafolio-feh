import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-sky-500">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Facundo Herrera
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
          I'm a Junior React Developer
        </h2>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-300 hover:border-sky-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
