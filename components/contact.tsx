'use client'

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6 text-gray-700 dark:text-white/80">
        Please contact me directly at{' '}
        <a href="mailto:arthur.kamenitchualeu@gmail.com" className="underline">
          arthur.kamenitchualeu@gmail.com
        </a>{' '}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col gap-2 dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData)
          if (error as string) {
            toast.error(error)
            return
          }
          toast.success('Email sent successfully!')
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          className="borderBlack h-14 rounded-lg px-4 outline-none transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          placeholder="Your email"
        />
        <textarea
          className="borderBlack my-3 h-52 max-h-72 min-h-52 resize-y rounded-lg p-4 outline-none transition-all dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100"
          name="message"
          required
          maxLength={5000}
          placeholder="Your message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}
