import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src={"/webboLogo.svg"} width={150} height={60} alt='logo'/>
    </div>
  )
}

export default Logo
