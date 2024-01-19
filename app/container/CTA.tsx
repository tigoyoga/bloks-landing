import React from 'react'
import Image from 'next/image'

export default function CTA() {
  return (
    <section id='contact' className='bg-[#5166f1] pt-12 md:pt-20 relative'>
      <Image
        width={1140}
        className='absolute top-0 right-0 w-[20rem] md:w-[40rem]'
        height={1130}
        src="/siluet-4.png"
        alt="desktop"
      />

      <div className='flex flex-col w-fit mx-auto items-center justify-center'>
        <h1 className='text-white font-semibold text-center text-4xl md:text-[56px] leading-tight'>
          Ready to Transform Your CRM ?
        </h1>
        <p className='text-white w-[80%] !font-normal text-center mt-6'>
          Get started today and discover the difference a powerful CRM dashboard can make for your business.
        </p>
        <button className='text-[#5166f1] hover:bg-[#e6e6e6] bg-white rounded-full px-6 md:px-8 py-2.5 md:py-4 mt-8 md:mt-12 font-medium'>
          Get Started
        </button>
      </div>
      <Image
        width={1943}
        className='w-[90%] md:w-[65%] mx-auto mt-16 md:mt-28'
        height={832}
        src="/transform.png"
        alt="desktop"
      />
    </section>
  )
}
