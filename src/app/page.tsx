import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <Testimonials />
      <DownloadCTA />
    </main>
  )
} 