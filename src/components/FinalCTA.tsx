import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass p-12 md:p-16 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Ready to <span className="gradient-text">Transform</span> Your Career?
        </h2>
        <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of professionals who've successfully navigated the US tech market with our guidance.
        </p>
        <Link href="/contact" className="primary-btn inline-block">Start Your Journey</Link>
      </div>
    </section>
  );
}
