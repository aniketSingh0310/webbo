import Image from 'next/image'
import React from 'react'

const MoonShip = () => {
  return (
    <div className='relative w-full h-max'>
      <div className='z-30 absolute bottom-0 right-1/2 transform translate-x-1/2  md:translate-x-0'>
        <Image
          src={"/moon.png"}
          width={700}
          height={250}
          alt="moon"
          className="w-[90vw] md:w-auto"
        />
        <Image
          src={"/rocket.png"}
          width={150}
          height={200}
          alt="rocket"
          className="absolute bottom-[3.75rem] left-[2rem] md:bottom-40 md:left-[35%]"
        />
        <Image
          src={"/spaceman.png"}
          width={70}
          height={100}
          alt="spaceman"
          className="absolute bottom-4 left-[4.25rem] md:bottom-20 md:left-[32%]  animate-bounce-soft-slow"
        />
      </div>
    </div>
  )
}

export default MoonShip
