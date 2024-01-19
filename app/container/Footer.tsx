import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <section className='relative pb-16 md:pb-32 1xl:pb-[15rem]'>
      <div className='p-6 md:p-20 flex gap-8 md:gap-0 flex-col-reverse md:flex-row items-start justify-between'>
        <div className='flex flex-col space-y-4 text-[#11131e] text-opacity-70'>
          <Image
            width={278}
            className='w-24 md:w-36'
            height={48}
            src="/logo-black.png"
            alt="logo black"
          />
          <p>
            475 Cherry Dr, Troy, Michigan 48083
            <br />
            United States
          </p>
          <p>
            (248) 823-3200
          </p>
          <p>
            2023 ©️ All Rights Reserved
          </p>

          <div className='flex gap-4 pt-6'>
            <div className='p-1 rounded-md bg-[#5166f1]'>
              <FaLinkedinIn className='text-white text-lg' />
            </div>
            <div className='p-1 rounded-md bg-[#5166f1]'>
              <FaWhatsapp className='text-white text-lg' />
            </div>
            <div className='p-1 rounded-md bg-[#5166f1]'>
              <FaYoutube className='text-white text-lg' />
            </div>
            <div className='p-1 rounded-md bg-[#5166f1]'>
              <FaInstagram className='text-white text-lg' />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-4 w-full md:w-fit gap-8 md:gap-16 1xl:gap-24 text-[#11131e]'>
          <div className='col-span-2 md:col-span-1 flex flex-col'>
            <p className='font-semibold'>
              Company
            </p>

            <ul className='mt-6 flex flex-col space-y-3'>
              <li>
                Features
              </li>
              <li>
                Pricing
              </li>
              <li>
                About Us
              </li>
              <li>
                Contact
              </li>
              <li>
                Pricing
              </li>
            </ul>

          </div>
          <div className='col-span-2 md:col-span-1 flex flex-col'>
            <p className='font-semibold'>
              Resource
            </p>

            <ul className='mt-6 flex flex-col space-y-3'>
              <li>
                Blog
              </li>
              <li>
                Customer Stories
              </li>
              <li>
                Information
              </li>
              <li>
                Legal
              </li>
              <li>
                Payments
              </li>
            </ul>

          </div>
          <div className='col-span-2 md:col-span-1 flex flex-col'>
            <p className='font-semibold'>
              Career
            </p>

            <ul className='mt-6 flex flex-col space-y-3'>
              <li>
                Jobs
              </li>
              <li>
                Hiring
              </li>
              <li>
                News
              </li>
              <li>
                Tips & Tricks
              </li>

            </ul>

          </div>
          <div className='col-span-2 md:col-span-1 flex flex-col'>
            <p className='font-semibold'>
              Help
            </p>

            <ul className='mt-6 flex flex-col space-y-3'>
              <li>
                FAQ
              </li>
              <li>
                Help Center
              </li>
              <li>
                Support
              </li>
            </ul>

          </div>
        </div>
      </div>

      <Image
        width={1382}
        className='absolute bottom-0 left-0 w-full'
        height={213}
        src="/BLOKS.svg"
        alt="bloks"
      />
    </section>
  )
}
