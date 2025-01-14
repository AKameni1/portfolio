"use client"

import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

export default function Hero() {
  const { ref } = useSectionInView('Home')

  return (
    <section ref={ref} id='home' className='scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div className="" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
            <Image src={'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100'} alt={'Arthur\'s portrait'} width={192} height={192} quality={95} priority={true} className='h-24 w-24 rounded-full border-white border-[0.35rem] object-cover shadow-xl' />
          </motion.div>
          <motion.span className='absolute text-4xl bottom-0 right-0' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}>
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 125, delay: 0.2, duration: 0.7 }}>
        <span className="font-bold">Hello, I&apos;m Arthur.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building<span className="italic"> sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 125, delay: 0.3, duration: 0.7 }}>
        <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all'>Contact me here
          <BsArrowRight className='ml-[1/2] opacity-70 group-hover:translate-x-1 transition-all' />
        </Link>

        <a href="CV.pdf" download className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all border border-black/10'>Download CV
          <HiDownload className='ml-[1/2] opacity-60 group-hover:translate-y-1 transition-all' aria-hidden />
        </a>

        <a href="https://www.linkedin.com/in/arthur-kameni-0a8ba4291/" target='_blank' className='bg-white p-4 text-gray-700 flex items-center text-[1.25rem] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all border border-black/10'>
          <BsLinkedin aria-hidden />
        </a>

        <a href="https://github.com/AKameni1" target='_blank' className='bg-white p-4 text-gray-700 flex items-center text-[1.25rem] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all border border-black/10'>
          <FaGithub aria-hidden />
        </a>
      </motion.div>
    </section>
  )
}
