'use client';
import Image from 'next/image'
import Hero from './container/Hero'
import Client from './container/Client'
import About from './container/About'
import Features from './container/Features'
import Testimonial from './container/Testimonial'
import Pricing from './container/Pricing'
import CTA from './container/CTA'
import Footer from './container/Footer'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { MdOutlineExpandMore } from 'react-icons/md'
import React from 'react'


export default function Home() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  return (
    <main>
      <Hero />
      <Client />
      <About />
      <Features />
      <Testimonial />
      <Pricing />
      <section className='h-fit p-4 md:p-20'>
        <span className='border-l-4 border-[#5166F1] pl-2 text-sm md:text-base font-medium'>
          FAQ
        </span>
        <div className='grid grid-cols-12 mt-4 md:mt-6'>
          <div className='text-[#11131e] w-fit col-span-12 md:col-span-7'>
            <h2 className='font-semibold text-center md:text-left text-[26px] md:text-[40px]'>
              Unlock the answers to common queries about our CRM dashboard
            </h2>
            <p className='opacity-70 w-full text-center md:text-left mt-2'>
              Find answers to commonly asked questions about our CRM dashboard and its powerful features.
            </p>
          </div>
          <div className='col-span-12 px-0 text-center md:text-left md:px-12 mt-4 md:mt-0 md:col-span-5 flex flex-col space-y-6 items-center md:items-start justify-center md:justify-end'>
            <p className='opacity-70'>
              If you don&apos;t see the information you&apos;re looking for, feel free to contact our support team for more assistance.
            </p>
            <button className='text-white bg-[#5166F1] hover:bg-[#495cd9] rounded-full px-6 md:px-8 py-2.5 md:py-4'>
              Contact Us
            </button>
          </div>
        </div>
        <div className='mt-8 md:mt-16 1xl:mt-24 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8'>
          <div>
            <Accordion disableGutters onChange={
              (event, newExpanded) => setExpanded(newExpanded ? 'panel1' : false)
            }>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
                className={expanded === 'panel1' ? 'text-[#5166f1] font-semibold' : 'font-semibold'}
              >
                What is a CRM dashboard?
              </AccordionSummary>
              <AccordionDetails className='opacity-70'>
                A CRM dashboard is a centralized platform that helps businesses manage their customer relationships, streamline sales processes, and improve customer interactions. It provides a visual representation of data and key metrics, allowing you to make informed decisions and enhance your customer relationships.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters onChange={
              (event, newExpanded) => setExpanded(newExpanded ? 'panel2' : false)
            }>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore />}
                aria-controls="panel2-content"
                id="panel2-header"
                className={expanded === 'panel2' ? 'text-[#5166f1] font-semibold' : 'font-semibold'}
              >
                How can a CRM dashboard benefit my business?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters onChange={
              (event, newExpanded) => setExpanded(newExpanded ? 'panel3' : false)
            }>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore />}
                aria-controls="panel3-content"
                id="panel3-header"
                className={expanded === 'panel3' ? 'text-[#5166f1] font-semibold' : 'font-semibold'}
              >
                Is the CRM dashboard easy to use?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters onChange={
              (event, newExpanded) => setExpanded(newExpanded ? 'panel4' : false)
            }>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore />}
                aria-controls="panel4-content"
                id="panel4-header"
                className={expanded === 'panel4' ? 'text-[#5166f1] font-semibold' : 'font-semibold'}
              >
                Can I customize the CRM dashboard to suit my business needs?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <Accordion disableGutters onChange={
              (event, newExpanded) => setExpanded(newExpanded ? 'panel5' : false)
            }>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore />}
                aria-controls="panel5-content"
                id="panel5-header"
                className={expanded === 'panel5' ? 'text-[#5166f1] font-semibold' : 'font-semibold'}
              >
                Is my data safe with your CRM dashboard?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters onChange={
              (event, newExpanded) => setExpanded(newExpanded ? 'panel6' : false)
            }>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore />}
                aria-controls="panel6-content"
                id="panel6-header"
                className={expanded === 'panel6' ? 'text-[#5166f1] font-semibold' : 'font-semibold'}
              >
                What kind of support do you offer?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters onChange={
              (event, newExpanded) => setExpanded(newExpanded ? 'panel7' : false)
            }>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore />}
                aria-controls="panel7-content"
                id="panel7-header"
                className={expanded === 'panel7' ? 'text-[#5166f1] font-semibold' : 'font-semibold'}
              >
                Can I try the CRM dashboard before committing to a plan?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters onChange={
              (event, newExpanded) => setExpanded(newExpanded ? 'panel8' : false)
            }>
              <AccordionSummary
                expandIcon={<MdOutlineExpandMore />}
                aria-controls="panel8-content"
                id="panel8-header"
                className={expanded === 'panel8' ? 'text-[#5166f1] font-semibold' : 'font-semibold'}
              >
                Do you offer training for using the CRM dashboard?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </div>

        </div>
      </section>
      <CTA />
      <Footer />

    </main>
  )
}





