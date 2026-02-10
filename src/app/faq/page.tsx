"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import FinalCTA from "@/components/FinalCTA";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "Do you guarantee job placement?", 
      a: "We don't guarantee jobs, but we provide structured career support, resume optimization, interview preparation, and dedicated recruiter assistance to maximize your chances of success. Our transparent approach focuses on building your skills and marketability." 
    },
    { 
      q: "What types of roles do you support?", 
      a: "We work with both IT roles (Software Developer, Data Engineer, DevOps, QA, Cybersecurity) and Non-IT roles (Business Analyst, Financial Analyst, Operations, HR). Role selection is based on your background, skills, and career goals." 
    },
    { 
      q: "How long does the placement process take?", 
      a: "The timeline varies based on role, market conditions, and candidate readiness. On average, candidates see interview opportunities within 2-4 weeks of profile optimization. Our dedicated recruiters work to accelerate the process." 
    },
    { 
      q: "What are your fees and pricing structure?", 
      a: "All fees are transparent and discussed upfront during your profile review. We offer different service tiers based on your needs. There are no hidden charges - everything is clearly outlined before enrollment." 
    },
    { 
      q: "Do I need to be in the US to use your services?", 
      a: "We work with candidates globally who are seeking US employment opportunities. We help navigate visa sponsorship requirements and connect you with companies open to sponsoring qualified candidates." 
    },
    { 
      q: "What makes TechSkii different from other placement services?", 
      a: "We prioritize transparency, ethical practices, and structured preparation. As a US-registered, E-Verify certified company, we focus on genuine skill development and honest representation rather than shortcuts or misrepresentation." 
    },
    { 
      q: "How do you match candidates with roles?", 
      a: "We conduct thorough profile reviews to understand your education, experience, and skills. Our team then recommends roles that align with your background and provides targeted preparation to position you for success in those specific roles." 
    },
    { 
      q: "What support do I receive during the interview process?", 
      a: "You'll receive mock interviews, technical preparation, behavioral coaching, and real-time feedback. Our recruiters also coordinate with employers and provide guidance throughout the entire interview cycle." 
    },
  ];

  return (
    <main className="pt-20">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-semibold mb-6">
            <span className="gradient-text">Frequently Asked</span> Questions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted">
            Everything you need to know about our services and process
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="card cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold flex-1">{faq.q}</h3>
                <motion.svg
                  className="w-6 h-6 text-accent flex-shrink-0"
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </div>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-muted mt-4 leading-relaxed">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto glass p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-muted mb-6">Our team is here to help you make an informed decision</p>
          <a href="/contact" className="primary-btn inline-block">Contact Us</a>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
