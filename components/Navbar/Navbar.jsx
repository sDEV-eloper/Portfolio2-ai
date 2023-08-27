"use client";

import React, { useState } from "react";
import LogoCircle from "@/public/images/slogo_circle.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";


const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 0) {
        return setShadow(true);
      } else {
        return setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  },[]);
  return (
    <div
      className={
        shadow
          ? `fixed container top-0 left-0  w-full h-20 shadow-xl z-[999] ease-in-out duration-300 bg-gradient-to-b from-white to-[#c5fffe] `
          : `fixed container top-0 left-0 w-full h-20 z-[999] bg-gradient-to-b from-white to-white `
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" >
          <div className="flex gap-4 justify-between items-center">
          <Image src={LogoCircle} alt="Logo" width={60} height={60} className="rounded-full" />
          <span className="text-3xl font-bold">PORTFOLIO</span>
          </div>
        </Link>
        <div >
          <ul className="hidden md:flex">
            <Link href="/" >
              <li className={`ml-10 text-sm p-2 rounded-lg font-medium text-gray-700  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white `}>Home</li>
            </Link>
            <Link href="/#about">
              <li  className={`ml-10 text-sm p-2 rounded-lg font-medium text-gray-700  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white `}>About</li>
            </Link>
            <Link href="/#skills" >
              <li className={`ml-10 text-sm p-2 rounded-lg font-medium text-gray-700  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white`}>Skills</li>
            </Link>
            <Link href="/#projects" >
              <li className={`ml-10 text-sm p-2 rounded-lg font-medium text-gray-700  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white`}>
                Project
              </li>
            </Link>
            <Link href="/#contact" >
              <li className={`ml-10 text-sm p-2 rounded-lg font-medium text-gray-700  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white`}>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >

      {/* Left menu Navbar */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-100 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={LogoCircle} width={80}  alt="logo" />
              <div
                onClick={handleNav}
                className="rounded-full bg-black text-white  shadow-lg shadow-gray-400 p-2 cursor-pointer text-2xl "
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] text-xl md:w[90%] py-4">Lets explore the portfolio</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase" onClick={()=>setNav(false)}>
              <Link href="/">
                <li className="py-4 text-lg p-2 rounded-lg font-medium text-gray-500  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-lg p-2 rounded-lg font-medium text-gray-500  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-lg p-2 rounded-lg font-medium text-gray-500  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-lg p-2 rounded-lg font-medium text-gray-500  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white">Projects</li>
              </Link>
              <Link href="#/contact">
                <li className="py-4 text-lg p-2 rounded-lg font-medium text-gray-500  uppercase hover:bg-gradient-to-tl from-blue-500 to-purple-600 hover:text-white">Contact</li>
              </Link>
            </ul>
            <div className="pt-12">
              <p className="uppercase tracking-widest text-blue-600">
                Let's Connect
              </p>
              <div className="flex items-center jb my-4 wf sm:w-[80%] gap-8">
                <div className="bg-blue-600  text-white text-2xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className="bg-gray-800 text-white text-2xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className="bg-green-600 text-white text-2xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaWhatsapp />
                </div>
                <div className="bg-red-600 text-white  text-2xl rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
