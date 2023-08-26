import Image from 'next/image';
import React from 'react';
import { familiarTech, mainTech } from './constants';

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-2xl font-bold  tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>Favourite Stack</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

         {mainTech.map((item)=>
          (
          <div key={item.id} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={item.logo} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-xl '>{item.name}</p>
              </div>
            </div>
          </div>))}
        </div>
      </div>
    </div>
  );
};

export default Skills;