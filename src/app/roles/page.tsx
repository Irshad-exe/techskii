"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";

export default function RolesPage() {
  const itRoles = [
    { title: "Software Developer", desc: "Full-stack, frontend, backend development roles", skills: "Java, Python, JavaScript, React, Node.js", salary: "$80K - $150K" },
    { title: "Data Engineer", desc: "Build and maintain data pipelines and infrastructure", skills: "SQL, Python, Spark, AWS, ETL", salary: "$90K - $160K" },
    { title: "Data Analyst", desc: "Transform data into actionable business insights", skills: "SQL, Python, Tableau, Excel, Statistics", salary: "$70K - $120K" },
    { title: "DevOps Engineer", desc: "Automate deployment and infrastructure management", skills: "AWS, Docker, Kubernetes, CI/CD, Terraform", salary: "$95K - $165K" },
    { title: "QA Engineer", desc: "Ensure software quality through testing automation", skills: "Selenium, Java, Python, API Testing", salary: "$75K - $130K" },
    { title: "Cybersecurity Analyst", desc: "Protect systems and data from security threats", skills: "Security Tools, Networking, Compliance", salary: "$85K - $145K" },
  ];

  const nonItRoles = [
    { title: "Business Analyst", desc: "Bridge business needs with technical solutions", skills: "Requirements, SQL, Agile, Documentation", salary: "$75K - $125K" },
    { title: "Financial Analyst", desc: "Analyze financial data and create forecasts", skills: "Excel, Financial Modeling, SQL, Tableau", salary: "$70K - $120K" },
    { title: "Operations Analyst", desc: "Optimize business processes and operations", skills: "Process Improvement, Data Analysis, Excel", salary: "$65K - $110K" },
    { title: "HR Specialist", desc: "Manage talent acquisition and employee relations", skills: "Recruiting, HRIS, Compliance, Communication", salary: "$60K - $100K" },
  ];

  return (
    <main className="pt-20">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-semibold mb-6">
            Find Your <span className="gradient-text">Perfect Role</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg text-muted max-w-2xl mx-auto">
            Role alignment is critical for success. We help you identify positions that match your education, experience, and career goals.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-3 text-center">
              <span className="gradient-text">Technology Roles</span>
            </h2>
            <p className="text-center text-muted mb-12">High-demand positions in software and data</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itRoles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted mb-4">{role.desc}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-medium">Skills:</span>
                      <span className="text-muted">{role.skills}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-medium">Salary:</span>
                      <span className="text-white">{role.salary}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-3 text-center">
              <span className="gradient-text">Business Roles</span>
            </h2>
            <p className="text-center text-muted mb-12">Strategic positions across business functions</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nonItRoles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{role.title}</h3>
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted mb-4">{role.desc}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-accent font-medium">Skills:</span>
                      <span className="text-muted text-xs">{role.skills}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-medium">Salary:</span>
                      <span className="text-white text-xs">{role.salary}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Role Selection Matters</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">85%</div>
              <p className="text-sm text-muted">Success rate with proper role alignment</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">3x</div>
              <p className="text-sm text-muted">Faster placement with right role match</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">$20K+</div>
              <p className="text-sm text-muted">Higher average salary with expertise match</p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
