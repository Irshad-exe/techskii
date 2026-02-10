import Image from "next/image";
import Section from "./Section";

const services = [
  { title: "Software Developer", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c", desc: "Full-stack & specialized development" },
  { title: "Data Engineer", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", desc: "Pipeline & analytics expertise" },
  { title: "DevOps Engineer", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa", desc: "Cloud infrastructure & automation" },
  { title: "Cybersecurity", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b", desc: "Security architecture & compliance" },
  { title: "Business Analyst", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", desc: "Requirements & process optimization" },
  { title: "QA Engineer", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", desc: "Test automation & quality assurance" },
];

export default function Services() {
  return (
    <Section title="Talent We Place">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="card group cursor-pointer">
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
              <Image src={s.img + "?auto=format&fit=crop&w=800&q=80"} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
