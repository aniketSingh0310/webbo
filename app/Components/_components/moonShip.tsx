import Image from 'next/image'
import React from 'react'

const MoonShip = () => {
  return (
    <div>
        <div className='absolute bottom-0'>
        <Image
          src={"/moon.png"}
          width={750}
          height={250}
          alt="moon"
          className="absolute bottom-0  md:left-[20%]"
        />
        <Image
          src={"/rocket.png"}
          width={200}
          height={200}
          alt="moon"
          className="absolute bottom-[3.75rem] left-[7rem]  md:bottom-40 md:left-[35%]"
        />
        <Image
          src={"/spaceman.png"}
          width={80}
          height={200}
          alt="moon"
          className="absolute bottom-4 left-[4.25rem] md:bottom-20 md:left-[32%] animate-bounce-soft-slow"
        />
      </div>
    </div>
  )
}

export default MoonShip