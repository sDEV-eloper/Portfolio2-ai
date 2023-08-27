import Image from 'next/image'
import React from 'react'
import MyPic  from '@/public/images/myGif.gif'

const Loader = () => {
  return (
    <div class="relative flex justify-center items-center py-8">
    {/* <div class="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div> */}
    <div className='flex justify-center items-center gap-2'>
        <Image src={MyPic} alt='suraj' className="rounded-full h-10 w-10 shadow-lg bg-yellow-400" />
        <p className='text-md text-white font-medium'>Suraj is responding...</p>
    </div>
    </div>
  )
}

export default Loader