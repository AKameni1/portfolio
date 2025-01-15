import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experience'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import SectionDivider from '@/components/section-divider'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <div className="min-h-screen pt-28 pb-20 font-[family-name:var(--font-geist-sans)] sm:pt-36">
      <main className="flex flex-col items-center px-4">
        <Hero />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
