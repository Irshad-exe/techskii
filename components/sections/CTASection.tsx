'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/ui/Section'

export function CTASection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', visa: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <Section id="contact" background="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Start With Clarity</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Get your free profile audit and discover exactly what is holding you back.</p>
        </div>

        {isSubmitted ? (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/10 backdrop-blur-xl rounded-2xl p-12 text-center border border-white/20">
            <CheckCircle2 className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-slate-300">We will review your profile and get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="john@example.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Target Role *</label>
                <input type="text" required value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Software Engineer" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Visa Status *</label>
                <select required value={formData.visa} onChange={(e) => setFormData({ ...formData, visa: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option value="" className="bg-navy-900">Select status</option>
                  <option value="H1B" className="bg-navy-900">H1B</option>
                  <option value="OPT" className="bg-navy-900">OPT</option>
                  <option value="CPT" className="bg-navy-900">CPT</option>
                  <option value="Green Card" className="bg-navy-900">Green Card</option>
                  <option value="Citizen" className="bg-navy-900">U.S. Citizen</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-white mb-2">Phone Number (Optional)</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="+1 (555) 000-0000" />
            </div>

            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg rounded-xl font-semibold bg-gradient-to-r from-navy-900 via-blue-600 to-teal-500 text-white hover:shadow-lg">
              Get Free Profile Audit
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <p className="text-sm text-slate-400 text-center mt-4">No credit card required. We will respond within 24 hours.</p>
          </form>
        )}
      </div>
    </Section>
  )
}
