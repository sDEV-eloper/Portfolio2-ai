import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div id='home' className=' w-full h-screen text-center bg-gradient-to-t from-[#9864ff] via-[#25ddfe] to-[#ffffff] '>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-md tracking-widest text-gray-600  '>
            LET&#39;S  TransforM Ideas into Digital Realities
          </p>
          <h1 className='py-4 text-gray-800'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Suraj Singh</span>
          </h1>
          <h1 className='py-2 text-gray-800'>Front-End Web Developer</h1>
          <p className='py-4 text-black sm:max-w-[70%] m-auto'>
          I specialize in crafting dynamic and user-centric front-end web solutions seamlessly integrated with powerful back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/surajsingh09/'
              target='_blank'
              rel='noreferrer'
            >
               <div className="bg-blue-600 text-white text-4xl p-3 rounded-full shadow-lg shadow-gray-800  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
               
            </Link>
            <Link
              href='https://github.com/sDEV-eloper'
              target='_blank'
              rel='noreferrer'
            >
              <div className="bg-gray-700 text-white text-4xl p-3 rounded-full shadow-lg shadow-gray-800  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
               
            </Link>
            <Link href='tel:9528394139'>
            <div className="bg-green-600 text-white text-4xl p-3 rounded-full shadow-lg shadow-gray-800  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaWhatsapp />
                </div>
                
            </Link>
            <Link href='mailto:thisissurajdev@gmail.com'>
            <div className="bg-red-600 text-white  text-4xl p-3 rounded-full shadow-lg shadow-gray-800  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;