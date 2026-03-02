'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Briefcase } from 'lucide-react'
import { Section } from '@/components/ui/Section'
import { cn } from '@/lib/utils'

export function RolesSection() {
  const [activeTab, setActiveTab] = useState<'it' | 'business'>('it')

  const roles = {
    it: ['Software Engineer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'Cloud Engineer', 'Data Engineer', 'Data Scientist', 'Machine Learning Engineer', 'QA Engineer', 'Security Engineer', 'Mobile Developer'],
    business: ['Product Manager', 'Project Manager', 'Business Analyst', 'Data Analyst', 'Scrum Master', 'Technical Writer', 'UX Designer', 'UI Designer', 'Marketing Manager', 'Sales Engineer', 'Customer Success Manager', 'Operations Manager'],
  }

  return (
    <Section id="roles" background="gradient">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">Roles We Support</h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Specialized guidance for both technical and business professionals.</p>
      </div>

      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 bg-white rounded-xl shadow-md">
          <button onClick={() => setActiveTab('it')} className={cn('flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all', activeTab === 'it' ? 'bg-gradient-to-r from-navy-900 via-blue-600 to-teal-500 text-white' : 'text-slate-600 hover:text-navy-900')}>
            <Code className="w-5 h-5" />
            IT & Software
          </button>
          <button onClick={() => setActiveTab('business')} className={cn('flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all', activeTab === 'business' ? 'bg-gradient-to-r from-navy-900 via-blue-600 to-teal-500 text-white' : 'text-slate-600 hover:text-navy-900')}>
            <Briefcase className="w-5 h-5" />
            Business & Non-IT
          </button>
        </div>
      </div>

      <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {roles[activeTab].map((role, index) => (
          <motion.div key={role} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.03 }} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            <span className="text-slate-700 font-medium">{role}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
