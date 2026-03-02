'use client'

import { Section } from '@/components/ui/Section'
import { StatCounter } from '@/components/ui/StatCounter'

export function MetricsSection() {
  return (
    <Section background="dark" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Results That Matter</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Real outcomes from professionals who trusted the process.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              <StatCounter end={92.87} suffix="%" decimals={2} />
            </div>
            <div className="text-xl font-semibold text-white mb-2">Interview Success Rate</div>
            <p className="text-slate-400 text-sm">Of our candidates receive interview callbacks</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              <StatCounter end={566} suffix="+" />
            </div>
            <div className="text-xl font-semibold text-white mb-2">Professionals Supported</div>
            <p className="text-slate-400 text-sm">International tech candidates guided to success</p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              <StatCounter end={14} suffix=" days" />
            </div>
            <div className="text-xl font-semibold text-white mb-2">Avg. Time to First Interview</div>
            <p className="text-slate-400 text-sm">From profile optimization to first callback</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
