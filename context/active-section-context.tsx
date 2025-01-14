"use client"

import React, { useState, createContext, useContext } from 'react'
import type { SectionName } from '@/lib/types'

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
  children
}: Readonly<ActiveSectionContextProviderProps>) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home")
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0) // we need to keep track of this to disable the observer temporarily when user clicks on a link

  const value = React.useMemo(() => ({ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }), [activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick])

  return <ActiveSectionContext.Provider value={value}>{children}</ActiveSectionContext.Provider>
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)
  if (!context) {
    throw new Error('useActiveSection must be used within a ActiveSectionContextProvider')
  }
  return context
}
