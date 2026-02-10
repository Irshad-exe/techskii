export default function Stats() {
  const stats = [
    { value: "10K+", label: "Candidates Placed" },
    { value: "500+", label: "Partner Companies" },
    { value: "48hrs", label: "Average Response" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto glass p-12">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-5xl font-semibold gradient-text mb-2">{s.value}</div>
              <p className="text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
