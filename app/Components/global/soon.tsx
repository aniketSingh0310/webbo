"use client"
import React from 'react'
import Logo from './logo'
import SoonText from '../_components/soonText'
import Image from 'next/image'
import Socials from '../_components/socials'

const Soon = () => {
  return (
    <div className='w-full h-[100vh] bg-[url("/soonBg.png")] bg-cover relative'>
     <div className='flex w-full py-6 px-5 justify-start items-center'>
        <Logo/>
     </div>
        <SoonText/>
        <div>
<Image src={"/moon.png"} width={1000} height={250} alt='moon' className='absolute bottom-0 left-[13%]'/>
<Image src={"/rocket.png"} width={350} height={200} alt='moon' className='absolute bottom-40 left-[35%]'/>
<Image src={"/spaceman.png"} width={130} height={250} alt='moon' className='absolute bottom-20 left-[32%] animate-bounce-soft-slow'/>

        </div>
        {/* <Socials/> */}
    </div>
  )
}

export default Soon