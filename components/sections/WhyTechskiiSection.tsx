'use client'

import { Target, Wrench, Eye, HeartHandshake } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { AnimatedCard } from '@/components/ui/AnimatedCard'

export function WhyTechskiiSection() {
  const pillars = [
    { icon: Target, title: 'Strategic Positioning', description: 'We help you position yourself effectively in the market with targeted resume optimization, LinkedIn enhancement, and role-specific positioning strategies.' },
    { icon: Wrench, title: 'Practical Preparation', description: 'Hands-on training for technical interviews, behavioral questions, and real-world scenarios. Practice with feedback, not just theory.' },
    { icon: Eye, title: 'Transparent Process', description: 'Clear pricing, defined deliverables, and honest timelines. No hidden fees, no surprises. You know exactly what to expect at every step.' },
    { icon: HeartHandshake, title: 'Continuous Support', description: 'From profile audit to offer negotiation, we are with you throughout the journey. Regular check-ins, feedback loops, and ongoing guidance.' },
  ]

  return (
    <Section id="why-techskii" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Why Techskii?</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Four pillars that make us different from traditional career services.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon
          return (
            <AnimatedCard key={pillar.title} delay={index * 0.1}>
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-900 via-blue-600 to-teal-500 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            </AnimatedCard>
          )
        })}
      </div>
    </Section>
  )
}
