import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-steal-700 px-3 py-10 text-center font-bold text-xl text-sky-700">
        <h3>Junior React Developer</h3>
      <nav className="mt-8">
        <Link
          to="/home"
          className="block text-cyan-800 mt-2 hover:text-black text-lg text-center cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/home/about"
          className="block text-cyan-800 mt-2 hover:text-black text-lg text-center cursor-pointer"
        >
          About
        </Link>
        <Link
          to="/home/projects"
          className="block text-cyan-800 mt-2 hover:text-black text-lg text-center cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="/home/skills"
          className="block text-cyan-800 mt-2 hover:text-black text-lg text-center cursor-pointer"
        >
          Skills
        </Link>
      </nav>
      </div>


      <div className="md:w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
