"use client"
import React from 'react'
import Logo from './logo'
import SoonText from '../_components/soonText'
import Image from 'next/image'
import Socials from '../_components/socials'

const Soon = () => {
  return (
    <div className='flex flex-col md:justify-normal  w-full h-[100vh] bg-[url("/soonBg.png")] bg-cover relative'>
     <div className='flex w-full py-6 px-5 justify-start items-center'>
        <Logo/>
     </div>
        <div>

        <SoonText/>
        </div>
        <div>
<Image src={"/moon.png"} width={750} height={250} alt='moon' className='absolute bottom-0  md:left-[20%]'/>
<Image src={"/rocket.png"} width={200} height={200} alt='moon' className='absolute bottom-[3.75rem] left-[7rem]  md:bottom-40 md:left-[35%]'/>
<Image src={"/spaceman.png"} width={80} height={200} alt='moon' className='absolute bottom-4 left-[4.25rem] md:bottom-20 md:left-[32%] animate-bounce-soft-slow'/>

        </div>
        {/* <Socials/> */}
    </div>
  )
}

export default Soon