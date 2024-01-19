import React from 'react'
import Image from 'next/image'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

export default function Testimonial() {
  return (
    <section className='p-4 py-8 md:py-20 md:p-20 bg-[#11131e] text-white relative'>
      <Image
        width={1354}
        className='absolute top-0 right-0 w-[98%] md:w-[35%]'
        height={904}
        src="/siluet-2.png"
        alt="siluet"
      />
      <span className='border-l-4 border-[#5166F1] pl-2 text-sm md:text-base font-medium'>
        Testimonial
      </span>
      <div className='grid grid-cols-12 mt-6'>
        <div className='col-span-12 md:col-span-8'>
          <h2 className='font-semibold text-center md:text-left text-[26px] md:text-[40px]'>
            Words from Our Valued Clients
          </h2>
          <p className='opacity-70 w-full !font-normal md:w-2/3 text-center md:text-left mt-2'>
            Discover What Our Customers Have to Say About Our CRM Dashboard
          </p>
        </div>
        <div className='col-span-12 md:col-span-4 flex items-center md:items-end justify-center md:justify-end mt-8 md:mt-0'>
          <div className='flex items-center justify-center gap-4'>
            <div className='w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center'>
              <FaArrowLeft />
            </div>
            <div className='w-8 md:w-10 h-2 rounded-sm bg-[#5166f1]'>

            </div>
            <div className='w-8 md:w-10 h-2 rounded-sm bg-[#292B34]'>

            </div>
            <div className='w-8 md:w-10 h-2 rounded-sm bg-[#292B34]'>

            </div>
            <div className='w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center'>
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      <hr className='my-8 md:my-10 opacity-50 !font-normal' />
      <h3 className='text-[26px] text-center md:text-left md:text-[40px]'>
        “Our business saw a dramatic improvement in customer relationships and sales after implementing this CRM dashboard. It&apos;s a game-changer!”
      </h3>
      <div className='w-full flex flex-row items-center justify-between mt-10 md:mt-16'>
        <div className='flex gap-3 md:gap-6'>
          <Image
            width={112}
            className='w-12 h-12 md:w-16 md:h-16 rounded-full'
            height={112}
            src="/profile.png"
            alt="avatar"
          />
          <div className='flex flex-col justify-between'>
            <p className='font-semibold text-lg md:text-xl'>
              Martin Westervelt
            </p>
            <p className='opacity-70 text-xs md:text-base'>
              CEO at Wadigidaw Company
            </p>
          </div>
        </div>
        <div>
          <p className='opacity-70 underline md:text-base text-xs'>View All <span className='hidden md:inline-block underline'>Testimoni</span></p>
        </div>
      </div>
    </section>
  )
}
