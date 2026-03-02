import { Metadata } from 'next'
import { Navbar } from '@/components/sections/Navbar'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { WhyTechskiiSection } from '@/components/sections/WhyTechskiiSection'
import { JourneySection } from '@/components/sections/JourneySection'
import { MetricsSection } from '@/components/sections/MetricsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { RolesSection } from '@/components/sections/RolesSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Techskii - Career Support for International Tech Professionals | H1B, OPT, CPT',
  description: 'Strategic career support platform helping international tech professionals navigate the U.S. job market. 92.87% interview success rate. Expert guidance for H1B, OPT visa holders. Resume optimization, interview prep, job search strategy.',
  alternates: {
    canonical: 'https://techskii.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <AboutSection />
      <WhyTechskiiSection />
      <JourneySection />
      <MetricsSection />
      <TestimonialsSection />
      <RolesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
