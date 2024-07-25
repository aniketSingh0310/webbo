import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Image src={"/webboLogo.svg"} width={180} height={80} alt='logo'/>
    </div>
  )
}

export default Logo
