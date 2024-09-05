import Image from 'next/image'
import React from 'react'

function Card() {
  return (
    <div>
      <Image
        alt='Icon_HTML'
        src="/assets/images/website_logo2.png"
        width={100}
        height={100}
      />
    </div>
  )
}

export default Card
