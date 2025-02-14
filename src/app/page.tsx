import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import Contact from '@/components/Contact'
import TermsOfService from '@/components/TermsOfService'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <DownloadCTA />
      <Contact />
      <TermsOfService />
    </main>
  )
} 