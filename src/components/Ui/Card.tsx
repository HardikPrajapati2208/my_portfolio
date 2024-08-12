import Image from 'next/image'
import React from 'react'

function Card() {
  return (
    <div className='bg-background-100 w-200 h-200'>
      <Image
        alt='Icon_HTML'
        src="assets/icons/icon_html.svg"
        width={100}
        height={100}
      />
    </div>
  )
}

export default Card
