import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='h-fit py-8 md:py-0 min-h-screen bg-[#11131E]'>
      <div className='w-full grid grid-cols-1 md:grid-cols-2'>
        <div className='text-white flex flex-col space-y-8 justify-center pl-0 mx-2 md:mx-0 md:pl-20 h-fit md:h-[calc(100vh-64px)]'>
          <span className='border-l-4 border-[#5166F1] pl-2 text-sm md:text-base font-medium'>
            Elevate Your Customer Relationship
          </span>
          <div className='relative flex md:hidden justify-end'>
            <Image
              width={1238}
              className='h-full w-auto absolute top-0 -right-2 z-[2]'
              height={1331}
              src="/hero-img.png"
              alt="Dashboard"
            />
            <Image
              width={1258}
              className='h-full w-auto relative right-0 z-[1]'
              height={1298}
              src="/siluet.png"
              alt="Dashboard"
            />
          </div>
          <h1 className='font-semibold leading-snug text-center md:text-left md:leading-[59px] 1xl:leading-[71.4px] text-[26px] md:text-5xl 2xl:text-6xl'>
            Unlock the Power of Connection and Customer Relationship Management
          </h1>
          <h3 className='text-[#B0B5C1] md:text-left text-center text-sm md:text-base w-[80%] mx-auto md:mx-0'>
            With a suite of intuitive features and real-time insights, managing your customer relationships has never been this seamless.
          </h3>
          <div className='flex justify-center md:justify-start space-x-8 pt-0 md:pt-8'>
            <button className='text-white bg-[#5166F1] hover:bg-[#495cd9] rounded-full px-6 md:px-8 py-2.5 md:py-4'>
              Get Started
            </button>
            <button className='text-white bg-[#292B34] hover:bg-[#25272f] rounded-full px-6 md:px-8 py-2.5 md:py-4'>
              Talk To Sales
            </button>
          </div>

          <div className='flex items-center space-x-2 md:space-x-4 pt-4 md:pt-6 2xl::pt-10'>
            <Image
              width={272}
              className='w-24 md:w-36'
              height={113}
              src="/users.png"
              alt="users"
            />
            <div className='flex flex-col space-y-1 md:space-y-2'>
              <span className='font-semibold text-xl md:text-4xl'>
                +10K
              </span>
              <span className='text-xs md:text-sm'>
                Thousands of users use our product
              </span>
            </div>
          </div>
        </div>
        <div className='md:flex justify-end relative hidden'>
          <Image
            width={1238}
            className='w-auto h-full absolute top-0 right-0 z-[2]'
            height={1331}
            src="/hero-img.png"
            alt="Dashboard"
          />
          <Image
            width={1258}
            className='w-auto h-full absolute top-0 right-0 z-[1]'
            height={1298}
            src="/siluet.png"
            alt="Dashboard"
          />
        </div>
      </div>
    </section>
  )
}
