'use client'

import { FileSearch, FileEdit, GraduationCap, Send, MessageSquare, Handshake } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { TimelineStep } from '@/components/ui/TimelineStep'

export function JourneySection() {
  const steps = [
    { icon: FileSearch, title: 'Free Profile Audit', description: 'Comprehensive review of your resume, LinkedIn, and current positioning. Identify gaps and opportunities before you invest.' },
    { icon: FileEdit, title: 'Resume & LinkedIn Optimization', description: 'Professional rewrite of your resume and LinkedIn profile. ATS-optimized, keyword-rich, and tailored to your target roles.' },
    { icon: GraduationCap, title: 'Targeted Training', description: 'Role-specific interview preparation covering technical, behavioral, and situational questions with mock interviews and feedback.' },
    { icon: Send, title: 'Profile Marketing', description: 'Strategic outreach to recruiters and hiring managers. We help you get noticed by the right people at the right companies.' },
    { icon: MessageSquare, title: 'Interview Support', description: 'Ongoing guidance through your interview process. Prep sessions before each round, debrief after, and continuous refinement.' },
    { icon: Handshake, title: 'Offer Navigation', description: 'Negotiation strategies, offer evaluation, and decision support. Make informed choices about compensation, visa sponsorship, and career trajectory.' },
  ]

  return (
    <Section id="journey" background="gradient">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Your Journey with Techskii</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">A structured 6-step process designed to take you from confusion to confidence.</p>
      </div>
      <div className="max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <TimelineStep key={step.title} icon={step.icon} title={step.title} description={step.description} step={index + 1} isLast={index === steps.length - 1} />
        ))}
      </div>
    </Section>
  )
}
