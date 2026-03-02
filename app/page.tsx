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
