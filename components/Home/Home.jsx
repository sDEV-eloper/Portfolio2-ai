import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import Prompt from '../Prompt/Prompt';

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        id='home'
        className='flex mt-20 w-full min-h-screen text-center bg-gradient-to-t from-[#9864ff] via-[#25ddfe] to-[#ffffff] pt-8 items-center'
      >
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div className='flex flex-col justify-center items-center'>
            <p className='uppercase md:text-md sm:text-sm tracking-widest text-gray-600'>
              LET&#39;S TransforM Ideas into Digital Realities
            </p>
            <h2 className='py-4 text-gray-800'>
              Hi, I&#39;m <span className='text-[#5651e5]'> Suraj Singh</span>
            </h2>
            <h2 className='py-2 text-gray-800 text-4xl'>Front-End Web Developer</h2>
            <p className='py-4 text-black sm:max-w-[70%] m-auto'>
              I specialize in crafting dynamic and user-centric front-end web solutions seamlessly integrated with powerful back-end technologies.
            </p>
            <div className='flex justify-center p-2 w-full '>
              <Prompt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
