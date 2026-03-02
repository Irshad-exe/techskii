'use client'

import { AlertCircle, Clock, Users, TrendingDown } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { AnimatedCard } from '@/components/ui/AnimatedCard'

export function ProblemSection() {
  const problems = [
    { icon: AlertCircle, title: 'Confusion in Job Process', description: 'Unclear steps, conflicting advice, and no structured roadmap to follow.' },
    { icon: Clock, title: 'Visa Pressure', description: 'Time-sensitive deadlines with H1B, OPT, and CPT adding stress to every decision.' },
    { icon: Users, title: 'Isolation', description: 'Navigating alone without mentorship, guidance, or a support system.' },
    { icon: TrendingDown, title: 'No Interview Traction', description: 'Hundreds of applications sent, but no callbacks or meaningful progress.' },
  ]

  return (
    <Section id="problems" className="bg-slate-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">The Challenges You Face</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">International tech professionals face unique obstacles that traditional career services do not address.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {problems.map((problem, index) => {
          const Icon = problem.icon
          return (
            <AnimatedCard key={problem.title} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">{problem.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </AnimatedCard>
          )
        })}
      </div>
    </Section>
  )
}
