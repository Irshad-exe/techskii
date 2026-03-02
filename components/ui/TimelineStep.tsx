'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface TimelineStepProps {
  icon: LucideIcon
  title: string
  description: string
  step: number
  isLast?: boolean
}

export function TimelineStep({ icon: Icon, title, description, step, isLast }: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: step * 0.1 }}
      className="relative flex gap-6 pb-12"
    >
      {!isLast && (
        <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-blue-500 to-teal-400" />
      )}

      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-900 via-blue-600 to-teal-500 flex items-center justify-center shadow-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="flex-1 pt-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-semibold text-teal-600">Step {step}</span>
        </div>
        <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
