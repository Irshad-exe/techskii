import FinalCTA from "@/components/FinalCTA";

export default function ProgramsPage() {
  return (
    <main>
      <section className="min-h-screen flex items-center justify-center px-6 py-32">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Programs</h1>
          <p className="text-gray-300 mb-6">Explore our bootcamps, upskilling, and hiring programs built for product teams.</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Featured Programs</h2>
          <p className="text-gray-300">Curated, role-specific programs to ramp talent quickly.</p>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
