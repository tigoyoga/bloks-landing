import React from 'react'
import Image from 'next/image'
const features = [
  {
    img: '/feature-1.png',
    title: 'Reporting and Analytics',
    description: 'Create insightful reports and leverage advanced analytics tools to gain deeper insights into your customer data.'
  },
  {
    img: '/feature-2.png',
    title: 'Customer View',
    description: 'Get a comprehensive understanding of your customers. Access their history, interactions, and preferences all in one place.'
  },
  {
    img: '/feature-3.png',
    title: 'Real-Time Analytics',
    description: 'Make data-driven decisions with real-time analytics. Monitor sales, track customer engagement, and identify trends as they happen.'
  },
]

export default function Features() {
  return (
    <section className='p-4 md:p-20 md:pt-12' id='features'>
      <span className='border-l-4 border-[#5166F1] pl-2 text-sm md:text-base font-medium'>
        Features
      </span>
      <div className='grid grid-cols-12 mt-2 md:mt-6'>
        <div className='text-[#11131e] w-fit col-span-12 md:col-span-8'>
          <h2 className='font-semibold text-center md:text-left text-[26px] md:text-[40px]'>
            Unleash the Power of Our CRM Dashboard
          </h2>
          <p className='opacity-70 w-full md:w-[80%] 1xl:w-2/3 text-center md:text-left mt-2'>
            Our CRM Dashboard is designed to empower you with a suite of robust tools and features that will transform the way you manage customer relationships, streamline your operations, and drive sustainable growth.
          </p>
        </div>
        <div className='col-span-12 mt-4 md:mt-0 md:col-span-4 flex items-center md:items-end justify-center md:justify-end'>
          <button className='text-white bg-[#5166F1] hover:bg-[#495cd9] rounded-full px-6 md:px-8 py-2.5 md:py-4'>
            View All Features
          </button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-8 mt-10 text-[#11131e]'>
        {
          features.map((feature, index) => {

            return (
              <div key={index} className='col-span-3 md:col-span-1 flex flex-col gap-3 bg-[#F5F6F9] rounded-2xl p-6'>
                <Image
                  width={726}
                  className='w-full'
                  height={540}
                  src={feature.img}
                  alt="users"
                />
                <h2 className='text-2xl font-semibold'>
                  {feature.title}
                </h2>
                <p className='opacity-50'>
                  {feature.description}
                </p>
              </div>)
          })
        }


      </div>
    </section>
  )
}
