import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '@/public/images/3dboybg2.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen  flex items-center py-20'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3  gap-8 p-4'>
        <div className='col-span-2'>
          <p className=' uppercase text-xl font-bold tracking-widest text-[#5651e5]'>
            About
          </p>
          <h3 className='py-4 text-2xl'>Who I Am</h3>
          <p className='py-2 text-gray-600 text-md'>
          I am skilled in the creation of captivating mobile-responsive front-end UI applications that seamlessly interface with APIs and backend technologies. My boundless enthusiasm for acquiring new technological skills drives me forward, underpinned by a firm belief that there exists a multitude of avenues to conquer any given challenge. My proficiency shines brightest in developing front-end applications utilizing <span className='text-orange-700 font-bold'>HTML, CSS, JavaScript, React and NextJs</span>. Yet, I embrace the role of a quick learner, poised to swiftly adapt to fresh tech stacks as the situation demands. My guiding philosophy is rooted in the understanding that true development prowess transcends a singular programming language – it's all about employing the optimal tool for each unique task at hand.
          </p>
          <h4 className='py-1 text-2xl'>Status</h4>
          <div className='py-1 text-gray-600  text-md'>
           Currently, working virtually as a <span className='text-orange-700 font-bold'>Frontend Developer Intern at NetStack</span>, where I am working on some tech stacks:
           <ul className='flex flex-col list-disc ml-2  font-bold'>
            <li>Nextjs</li>
            <li>TypeScript</li>
            <li>TailwindCSS and other UI Frameworks</li>
           </ul>
          </div>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/'  width={500}/>
        </div>
      </div>
    </div>
  );
};

export default About;