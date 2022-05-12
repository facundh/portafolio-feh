import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JS from "../assets/javascript.png";
import Firebase from "../assets/firebase.png";
import Github from "../assets/github.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-400">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-sky-400">
            Skills
          </p>
          <p className="py-4">
            These are the technologies in which I was trained
          </p>
        </div>
        <div  className="w-full grid grid-cols-1 sm:grid-cols-7 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML" />
            <p className="my-4">HTML 5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS" />
            <p className="my-4">CSS3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="Javascript" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="ReactImg" />
            <p className="my-4">React JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="Firebase" />
            <p className="my-4">Firebase</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Github} alt="Github" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
