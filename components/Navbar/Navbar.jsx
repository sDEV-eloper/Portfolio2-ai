"use client";

import React, { useState } from "react";
import Logo from "@/public/images/slogo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp} from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={Logo} alt="Logo" width={40} height={40} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav?" md:hidden fixed left-0 top-0 w-full h-screen bg-black/70":""}>
        <div className={ nav?
    "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-100 p-10 ease-in duration-500":
    "fixed left-[-100%] top-0 ease-in duration-500"}>
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={Logo} width={40} height={40} alt="logo" />
              <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w[90%] py-4">Lets Build something</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-12">
              <p className="uppercase tracking-widest text-blue-600">
                Let's Connect
              </p>
              <div className="flex items-center jb my-4 wf sm:w-[80%] gap-2">
                <div className="bg-blue-600 text-white text-lg rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className="bg-gray-800 text-white text-lg rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className="bg-green-600 text-white text-lg rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaWhatsapp /> 
                </div>
                <div className="bg-red-600 text-white  text-lg rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
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
