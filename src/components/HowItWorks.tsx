import Section from "./Section";

export default function HowItWorks() {
  const steps = [
    { title: "Profile Review", desc: "Understand your strengths and identify the perfect role fit." },
    { title: "Resume Optimization", desc: "Craft materials that resonate with US recruiters." },
    { title: "Strategic Placement", desc: "Dedicated recruiter support through the entire process." },
  ];

  return (
    <Section title="How It Works">
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map((s, i) => (
          <div key={i} className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-semibold">
              {i + 1}
            </div>
            <div className="card pt-8">
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass p-8 md:p-12">
        <h3 className="text-2xl font-semibold mb-8 text-center">Your Responsibilities</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Accurate Information", desc: "Honesty about skills and experience" },
            { title: "Punctuality", desc: "Attend interviews on time" },
            { title: "Active Participation", desc: "Engage in preparation sessions" },
            { title: "Clear Communication", desc: "Keep us updated on your status" },
          ].map((r, i) => (
            <div key={i} className="text-center">
              <h4 className="font-semibold mb-2">{r.title}</h4>
              <p className="text-sm text-muted">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
