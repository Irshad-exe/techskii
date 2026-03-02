'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/ui/Section'

export function AboutSection() {
  const features = ['Structured 6-step career journey', 'Expert guidance at every stage', 'Visa-aware job search strategies', 'Transparent pricing and process']

  return (
    <Section id="about" background="gradient">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">What is Techskii?</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">Techskii is a professional career support platform designed specifically for international tech professionals navigating the U.S. job market.</p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">We provide structured guidance, practical tools, and continuous support to help you move from confusion to clarity, from applications to offers.</p>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <motion.div key={feature} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-navy-900 via-blue-600 to-teal-500 p-1">
            <div className="w-full h-full rounded-2xl bg-white p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4">566+</div>
                <p className="text-slate-600 text-lg">Professionals Supported</p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy-900">92.87%</div>
                    <p className="text-sm text-slate-600 mt-1">Interview Success</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-navy-900">6</div>
                    <p className="text-sm text-slate-600 mt-1">Step Process</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
