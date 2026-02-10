"use client";

import { motion } from "framer-motion";

const testimonials = [
  { name: "Sarah Chen", role: "Engineering Manager", text: "Found exceptional talent within days. The quality and professionalism exceeded expectations." },
  { name: "Michael Rodriguez", role: "CTO, SaaS Startup", text: "TechSkii's structured approach made hiring seamless. Highly recommend." },
  { name: "Priya Sharma", role: "HR Director", text: "Transparent process, quality candidates, and excellent support throughout." },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Trusted by <span className="gradient-text">Industry Leaders</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="card">
              <p className="text-muted mb-6">"{t.text}"</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
