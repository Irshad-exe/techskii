'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Section } from '@/components/ui/Section'

export function TestimonialsSection() {
  const testimonials = [
    { name: 'Priya S.', role: 'Software Engineer', company: 'Tech Startup', content: 'The structured approach helped me go from 0 callbacks to 3 offers in 6 weeks. The resume optimization alone was worth it.', visa: 'H1B' },
    { name: 'Raj M.', role: 'Data Analyst', company: 'Fortune 500', content: 'Finally, someone who understands the visa pressure. The guidance was practical, not generic. I felt supported throughout.', visa: 'OPT' },
    { name: 'Ananya K.', role: 'Product Manager', company: 'SaaS Company', content: 'The interview prep was incredibly targeted. They knew exactly what hiring managers look for. Landed my dream role.', visa: 'H1B' },
  ]

  return (
    <Section id="testimonials" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">What Professionals Say</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Real experiences from international tech professionals who found clarity.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-slate-50 rounded-2xl p-8 relative">
            <Quote className="w-10 h-10 text-teal-500/20 absolute top-6 right-6" />
            <div className="relative z-10">
              <p className="text-slate-700 leading-relaxed mb-6 italic">&quot;{t.content}&quot;</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-navy-900">{t.name}</div>
                  <div className="text-sm text-slate-600">{t.role}</div>
                  <div className="text-sm text-slate-500">{t.company}</div>
                </div>
                <div className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">{t.visa}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
