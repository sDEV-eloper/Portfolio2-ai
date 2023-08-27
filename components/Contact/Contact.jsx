"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '@/public/images/contact.jpg';

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    send("service_l089am7",
        "template_e6118aj", 
    data,
     "GFWHGBtjjnTUEH-SE").then(res=>{
        console.log("success", res.status, res.text);
        formSuccess();
    }).catch(err=>{
        console.log("Failed..", err)
    })
  };

  const formSuccess=()=>{
    toast("Thanks for submitting to Contact!")
    document.getElementById("queryForm").reset();
  }

  return (
    <div id='contact' className='w-full lg:min-h-screen px-20 py-10'>
      <ToastContainer />
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full  '>
        <p className='text-xl font-bold tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h3 className='py-4 text-2xl font-bold'>Get In Touch</h3>
        <div className='grid lg:grid-cols-5 gap-8 '>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-2 bg-gradient-to-bl from-green-300 via-blue-500 to-purple-600'>
            <div className='lg:p-4 h-full '>
              <div className='flex justify-center'>
                <Image
                  className='rounded-full w-1/2 h-1/2 hover:scale-105 ease-in duration-300 md:p-2 sm:p-8 '
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-4 text-center text-white'>Suraj Singh</h2>
                <p className='p-4 md:text-md sm:text-md text-center text-white'>
                I am actively seeking full-time positions and would welcome the opportunity to connect with you. Please feel free to reach out, and let's have a conversation about how I can contribute to your team.
                </p>
              </div>
              <div >
                <p className='uppercase pt-8 font-bold text-center text-gray-200'>Connect With Me</p>
                <div className='flex  items-center md:gap-8 sm:gap-16 justify-center py-4'>
                <Link
              href='https://www.linkedin.com/in/surajsingh09/'
              target='_blank'
              rel='noreferrer'
            >
               <div className="bg-blue-600  text-white text-4xl p-3 rounded-lg shadow-lg shadow-gray-800  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
               
            </Link>
            <Link
              href='https://github.com/sDEV-eloper'
              target='_blank'
              rel='noreferrer'
            >
              <div className="bg-gray-700 text-white text-4xl p-3 rounded-lg shadow-lg shadow-gray-800  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
               
            </Link>
            <Link href='tel:9528394139'>
            <div className="bg-green-600 text-white text-4xl p-3 rounded-lg shadow-lg shadow-gray-800  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaWhatsapp />
                </div>
                
            </Link>
            <Link href='mailto:thisissurajdev@gmail.com'>
            <div className="bg-red-600 text-white  text-4xl p-3 rounded-lg shadow-lg shadow-gray-800  cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
            </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className=' sm:p-16 col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4 '>
              <form
                id="queryForm" onSubmit={handleSubmit(onSubmit)}
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name="from_name" 
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name="phone_number" 
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name="reply_to"
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    placeholder="Type your message..."
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button type='submit' className='w-full p-4 text-gray-100 mt-4 bg-gradient-to-bl from-blue-500 to-purple-500 '>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
          
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;