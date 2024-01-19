import React from 'react'
import Image from 'next/image'

export default function Client() {
  return (
    <section className='w-full relative z-[1] flex items-center justify-center space-x-8 md:space-x-16 h-44 md:h-52 bg-[#5166F1]'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-16'>

        <Image
          width={266}
          className='h-auto md:h-16 md:w-auto w-36'
          height={96}
          src="/adobe.png"
          alt="Adobe Logo"
        />
        <Image
          width={376}
          className='h-auto md:h-16 md:w-auto w-36'
          height={96}
          src="/doordash.png"
          alt="Adobe Logo"
        />
      </div>
      <div className='flex flex-col md:flex-row gap-4 md:gap-16'>

        <Image
          width={326}
          className='h-auto md:h-16 md:w-auto w-36'
          height={96}
          src="/dropbox.png"
          alt="Adobe Logo"
        />
        <Image
          width={360}
          className='h-auto md:h-16 md:w-auto w-36'
          height={96}
          src="/grammarly.png"
          alt="Adobe Logo"
        />
      </div>
    </section>
  )
}
