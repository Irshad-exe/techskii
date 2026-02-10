import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";

export default function AboutPage() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About US UnCoded Talent</h1>
          <p className="text-gray-300 mb-6">A US-registered staffing firm in Sheridan, Wyoming, dedicated to helping professionals understand the US job market with clarity and confidence.</p>
          <Link href="/contact" className="primary-btn">Start Your Honest Career Journey</Link>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-300">We support candidates across IT and Non-IT domains through structured guidance, resume optimization, recruiter coordination, and interview preparation.</p>

          <h3 className="mt-8 text-xl font-semibold">How We Operate</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="p-4">
              <div className="font-semibold">US-Registered Entity</div>
              <p className="text-sm text-gray-300">Legally compliant business based in Wyoming.</p>
            </div>

            <div className="p-4">
              <div className="font-semibold">Compliance-Focused</div>
              <p className="text-sm text-gray-300">Adhering to strict US recruitment laws.</p>
            </div>

            <div className="p-4">
              <div className="font-semibold">Global Support</div>
              <p className="text-sm text-gray-300">24/7 coordination between US & India teams.</p>
            </div>

            <div className="p-4">
              <div className="font-semibold">Transparent Reporting</div>
              <p className="text-sm text-gray-300">Clear communication on every step.</p>
            </div>
          </div>

          <h3 className="mt-8 text-xl font-semibold">What We Do NOT Do</h3>
          <ul className="list-disc ml-5 text-gray-300 mt-2 space-y-2">
            <li>We do NOT create fake experience certificates.</li>
            <li>We do NOT fabricate resumes or projects.</li>
            <li>We do NOT guarantee job placement.</li>
          </ul>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
