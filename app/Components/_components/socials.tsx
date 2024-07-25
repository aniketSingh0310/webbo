import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='flex flex-col space-y-2'>
        <div className='w-[7px] h-[120px] bg-pink-300'>.</div>
        <div className='flex flex-col space-y-4 text-white size-[50px]'>
            <BsInstagram/>
            <BsLinkedin/>

        </div>
      
    </div>
  )
}

export default Socials
