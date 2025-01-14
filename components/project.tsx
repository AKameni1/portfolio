"use client"

import { projectsData } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from 'next/image'

type ProjectProps = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: Readonly<ProjectProps>) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} className="group mb-3 sm:mb-8 last:mb-0">   
      <article  className='relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 sm:group-even:pl-8 hover:bg-gray-200 transition-all rounded-lg'>
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
          <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
            {tags.map(tag => (
              <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        
        <Image src={imageUrl} alt={title + " project"} quality={95} className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition-all'/>
        </article>
    </motion.div>
  )
}