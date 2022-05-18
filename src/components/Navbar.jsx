import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'


const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className=' fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-700 text-sky-500'>
        <div>
            <h3 className='font-bold text-xl'>Junior React Developer</h3>
        </div>
        <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
            </ul>
        </div>

        <div  onClick={handleClick} className='md:hidden z-10'>
           { !nav ? <FaBars/> : <FaTimes/>}
        </div>

        <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-gray-700 flex flex-col justify-center items-center' }>
                <li className='p-6 text-4xl'>Home</li>
                <li className='p-6 text-4xl'>About</li>
                <li className='p-6 text-4xl'>Skills</li>
                <li className='p-6 text-4xl'>Projects</li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-600 '>
                        <a 
                        className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 '>
                        <a 
                        className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600 '>
                        <a 
                        className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-lime-700 '>
                        <a 
                        className='flex justify-between items-center w-full text-gray-300'
                        href="/">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                
                </ul>
        </div>
    </div>
  )
}

export default Navbar