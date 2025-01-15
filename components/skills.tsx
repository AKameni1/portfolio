"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills')

  return (
    <section ref={ref} className='mb-28 max-w-[53rem] text-center scroll-mt-28' id='skills'>
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-4 mt-4 text-lg text-gray-800'>
        {
          skillsData.map((skill, index) => (
            <motion.li className='bg-white borderBlack rounded-xl px-5 py-3' variants={fadeInAnimationVariants} initial="initial" whileInView="animate" viewport={{
              once: true,
            }} custom={index} key={skill}>{ skill }</motion.li>
          ))
        }
      </ul>
    </section>
  )
}
