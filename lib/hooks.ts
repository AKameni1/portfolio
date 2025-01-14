'use client'

import { useActiveSectionContext } from '@/context/active-section-context'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import type { SectionName } from '@/lib/types'

export function useSectionInView(
  sectionName: Readonly<SectionName>,
  threshold: Readonly<number> = 0.75,
) {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return { ref }
}
