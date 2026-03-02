'use client'

import { Section } from '@/components/ui/Section'
import { FAQItem } from '@/components/ui/FAQItem'

export function FAQSection() {
  const faqs = [
    { question: 'Who is Techskii for?', answer: 'Techskii is designed for international tech professionals (H1B, OPT, CPT holders) navigating the U.S. job market. Whether you are a software engineer, data analyst, product manager, or any tech-adjacent role, we provide structured career support.' },
    { question: 'How is this different from other career coaches?', answer: 'We specialize in the unique challenges international candidates face: visa timelines, ATS optimization, cultural nuances, and strategic positioning. Our process is structured, transparent, and results-focused—not generic advice.' },
    { question: 'What is included in the free profile audit?', answer: 'A comprehensive review of your resume, LinkedIn profile, and current job search strategy. We identify gaps, opportunities, and provide actionable recommendations. No commitment required.' },
    { question: 'How long does the process take?', answer: 'It varies by individual, but most candidates see interview callbacks within 2-4 weeks of profile optimization. The full journey from audit to offer typically takes 6-12 weeks, depending on your target role and market conditions.' },
    { question: 'Do you guarantee job placement?', answer: 'We do not guarantee placement—no ethical service can. However, we do guarantee quality deliverables, structured support, and proven strategies. Our 92.87% interview success rate speaks to our effectiveness.' },
    { question: 'What if I am not satisfied?', answer: 'We offer a satisfaction guarantee on the initial profile audit. If you are not happy with the quality, we will refund you within 7 days. For ongoing services, we work with you to ensure you are getting value at every step.' },
  ]

  return (
    <Section id="faq" background="gradient">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything you need to know about working with Techskii.</p>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  )
}
