"use client"

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section ref={ref} id='contact' className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6'>Please contact me directly at <a href="mailto:arthur.kamenitchualeu@gmail.com" className='underline'>arthur.kamenitchualeu@gmail.com</a> or through this form.</p>

      <form className='mt-10 flex flex-col gap-2' action={async (formData) => {
        const { error } = await sendEmail(formData)
        if (error as string) {
          toast.error(error)
          return
        }
        toast.success('Email sent successfully!')
      }}>
        <input type='email' name='senderEmail' required maxLength={500} className='h-14 px-4 rounded-lg borderBlack' placeholder='Your email' />
        <textarea className='h-52 my-3 rounded-lg borderBlack p-4' name='message' required maxLength={5000} placeholder='Your message' />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
