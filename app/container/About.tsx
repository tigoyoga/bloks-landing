import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className='relative'>
      <Image
        width='1424'
        className='absolute top-0 left-0 w-full'
        height='157'
        src="/ABOUT US.svg"
        alt="about us"
      />
      <div className='p-4 md:p-20 -translate-y-0 md:-translate-y-8'>
        <h2 className='font-medium text-2xl md:text-6xl mt-4 text-center md:text-left md:mt-8 2xl:mt-12 !leading-relaxed text-[#555760]'>
          <span className='text-[#11131e]'>BLOKS</span> are <span className='text-[#11131e]'>passionate</span> about making your business operations run <span className='text-[#11131e]'>smoother</span> than ever before. With a <span className='text-[#11131e]'>dedicated</span> team of experts, we&apos;ve cultivated a platform that merges <span className='text-[#11131e]'>innovation</span> with your unique <span className='text-[#11131e]'>business</span> needs.
        </h2>
        <hr className='my-8 md:my-10' />
        <div className='flex flex-row items-center space-x-0 md:space-x-[10vw]'>
          <div className='flex flex-col text-[#11131e] gap-1 md:gap-4'>
            <span className='font-semibold text-2xl md:text-5xl'>
              10K+
            </span>
            <p className='opacity-50 text-xs md:text-base'>
              Used by bussiness owner
            </p>
          </div>
          <div className='flex flex-col text-[#11131e] gap-1 md:gap-4'>
            <span className='font-semibold text-2xl md:text-5xl'>
              95%
            </span>
            <p className='opacity-50 text-xs md:text-base'>
              Satisfied bussiness owner
            </p>
          </div>
          <div className='flex flex-col text-[#11131e] gap-1 md:gap-4'>
            <span className='font-semibold text-2xl md:text-5xl'>
              5+ years
            </span>
            <p className='opacity-50 text-xs md:text-base'>
              Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
