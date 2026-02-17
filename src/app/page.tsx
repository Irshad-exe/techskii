import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import { Analytics } from "@vercel/analytics/next"
export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
