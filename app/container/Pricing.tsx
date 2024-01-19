import React from 'react'
import { MdCheck } from 'react-icons/md'
import Image from 'next/image'


export default function Pricing() {
  return (
    <section id='pricing' className='relative h-fit pb-12 md:pb-0'>
      <Image

        width={1397}
        className='absolute top-0 left-0 w-full -translate-y-1/3'
        height={271}
        src="/pricing.svg"
        alt="pricing"
      />
      <div className='p-4 md:p-20 relative z-10 flex flex-col items-center translate-y-8'>
        <div className='text-center w-full md:w-1/2 mx-auto'>
          <h2 className='font-semibold text-[40px]'>
            Pricing That Fits Your Needs
          </h2>
          <p className='text-base opacity-70'>
            Choose the perfect plan for your business, and unlock a world of possibilities with our CRM dashboard.
          </p>
        </div>
        <div className='mt-12'>
          <div className='w-fit flex rounded-full bg-[#F5F6F9] p-1'>
            <div className='bg-white rounded-full px-5 py-2.5'>
              <p className='font-semibold'>Annual</p>
            </div>
            <div className='rounded-full px-5 py-2.5'>
              <p className='font-medium'>Monthly</p>
            </div>
          </div>
        </div>

        <div className='w-full 1xl:w-[90%] h-fit mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#F5F6F9] rounded-2xl p-4'>
          <div className='col-span-1 p-4 md:p-8 bg-white rounded-2xl h-fit'>
            <h1 className='text-2xl font-semibold text-[#11131e]'>
              Basic Plan
            </h1>
            <p className='opacity-70'>
              Best for personal business
            </p>
            <div className='flex gap-2 mt-8 items-end'>
              <h2 className='text-[#5166f1] font-semibold text-4xl md:text-5xl'>
                $19 <span className='inline-block text-lg font-normal'>/month</span>
              </h2>
              <h3 className='text-[#11131e] font-normal text-sm md:text-base opacity-60 mb-1 line-through'>
                $25 /month
              </h3>
            </div>
            <hr className='my-6' />
            <div>
              <h3 className='text-[#11131e] font-semibold'>Features</h3>
              <ul className='list-none space-y-5 mt-4'>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#5166f1] bg-opacity-10'>
                    <MdCheck className='text-[#5166f1]' />
                  </div>
                  <p>Contact Management</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#5166f1] bg-opacity-10'>
                    <MdCheck className='text-[#5166f1]' />
                  </div>
                  <p>Lead Scoring</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#5166f1] bg-opacity-10'>
                    <MdCheck className='text-[#5166f1]' />
                  </div>
                  <p>Email Integration</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#5166f1] bg-opacity-10'>
                    <MdCheck className='text-[#5166f1]' />
                  </div>
                  <p>Standard Support</p>
                </li>
              </ul>
            </div>
            <button className='text-[#5166f1] bg-[#5166F1] hover:bg-[#d5d7e5] bg-opacity-10 rounded-full w-full px-6 md:px-8 py-2.5 md:py-4 mt-28 font-medium'>
              Get Started
            </button>

          </div>
          <div className='col-span-1 p-4 md:p-8 bg-[#5166f1] rounded-2xl h-fit relative'>
            <Image
              width={290}
              height={170}
              src='/siluet-3.png'
              alt='star'
              className='absolute w-[19rem] top-0 right-0 z-10'
            />
            <div className='bg-[#7485F4] absolute top-4 right-4 md:top-6 md:right-6 px-4 py-[6px] rounded-full text-white font-medium'>
              <p>Best</p>
            </div>
            <h1 className=' text-2xl font-semibold text-white'>
              Pro Plan
            </h1>
            <p className='text-[#A8B3F8]'>
              Best for professional business
            </p>
            <div className='flex gap-2 mt-8 items-end'>
              <h2 className='text-white font-semibold text-4xl md:text-5xl'>
                $49 <span className='inline-block text-lg font-normal'>/month</span>
              </h2>
              <h3 className='text-[#A8B3F8] font-normal text-sm md:text-base opacity-60 mb-1 line-through'>
                $64 /month
              </h3>
            </div>
            <hr className='my-6 opacity-10' />
            <div>
              <h3 className='text-white font-semibold'>Features</h3>
              <ul className='text-white list-none space-y-5 mt-4'>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#6275f2]'>
                    <MdCheck className='text-[#A8B3F8]' />
                  </div>
                  <p>All Basic Plan Features</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#6275f2]'>
                    <MdCheck className='text-[#A8B3F8]' />
                  </div>
                  <p>Sales Forecasting</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#6275f2]'>
                    <MdCheck className='text-[#A8B3F8]' />
                  </div>
                  <p>Custom Reports</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#6275f2]'>
                    <MdCheck className='text-[#A8B3F8]' />
                  </div>
                  <p>Extended Support</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#6275f2]'>
                    <MdCheck className='text-[#A8B3F8]' />
                  </div>
                  <p>Data Export</p>
                </li>
              </ul>
            </div>
            <button className='text-[#5166f1] bg-white hover:bg-[#e6e6e6] rounded-full w-full px-6 md:px-8 py-2.5 md:py-4 mt-16 font-medium'>
              Get Started
            </button>

          </div>
          <div className='col-span-1 p-4 md:p-8 bg-white rounded-2xl h-fit'>
            <h1 className=' text-2xl font-semibold text-[#11131e]'>
              Premium Plan
            </h1>
            <p className='opacity-70'>
              Best for top company
            </p>
            <div className='flex gap-2 mt-8 items-end'>
              <h2 className='text-[#5166f1] font-semibold text-4xl md:text-5xl'>
                $99 <span className='inline-block text-lg font-normal'>/month</span>
              </h2>
              <h3 className='text-[#11131e] font-normal text-sm md:text-base opacity-60 mb-1 line-through'>
                $125 /month
              </h3>
            </div>
            <hr className='my-6' />
            <div>
              <h3 className='text-[#11131e] font-semibold'>Features</h3>
              <ul className='list-none space-y-5 mt-4'>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#5166f1] bg-opacity-10'>
                    <MdCheck className='text-[#5166f1]' />
                  </div>
                  <p>All Pro Plan Features</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#5166f1] bg-opacity-10'>
                    <MdCheck className='text-[#5166f1]' />
                  </div>
                  <p>Advanced Analytics</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#5166f1] bg-opacity-10'>
                    <MdCheck className='text-[#5166f1]' />
                  </div>
                  <p>Automation Workflows</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#5166f1] bg-opacity-10'>
                    <MdCheck className='text-[#5166f1]' />
                  </div>
                  <p>Priority Support</p>
                </li>
                <li className='flex items-center gap-2'>
                  <div className='p-1 rounded-full bg-[#5166f1] bg-opacity-10'>
                    <MdCheck className='text-[#5166f1]' />
                  </div>
                  <p>Data Import</p>
                </li>
              </ul>
            </div>
            <button className='text-[#5166f1] bg-[#5166F1] hover:bg-[#d5d7e5] bg-opacity-10 rounded-full w-full px-6 md:px-8 py-2.5 md:py-4 mt-16 font-medium'>
              Get Started
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}
