import FinalCTA from "@/components/FinalCTA";

export default function CompliancePage() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Compliance & Ethics</h1>
          <p className="text-gray-300 mb-6">US UnCoded Talent operates with strict ethical standards. Transparency and legality are at our core.</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/6 border border-white/8">
            <h3 className="font-semibold mb-2">Our Standards</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-2">
              <li>E-Verify Participant</li>
              <li>Transparent Service Structure</li>
              <li>NO Fake Experience</li>
              <li>NO Resume Manipulation</li>
              <li>NO Guaranteed Placement Promises</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-white/6 border border-white/8">
            <h3 className="font-semibold mb-2">E-Verify Statement</h3>
            <p className="text-sm text-gray-300">US UnCoded Talent participates in the E-Verify program and follows applicable employment eligibility verification requirements as part of lawful hiring practices.</p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
