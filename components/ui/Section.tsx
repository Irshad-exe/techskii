'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'light' | 'dark' | 'gradient'
}

export function Section({ children, className, id, background = 'light' }: SectionProps) {
  const bgClasses = {
    light: 'bg-slate-50',
    dark: 'bg-gradient-to-b from-navy-950 to-navy-900 text-white',
    gradient: 'bg-gradient-mesh',
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={cn('py-20 md:py-32', bgClasses[background], className)}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {children}
      </div>
    </motion.section>
  )
}
