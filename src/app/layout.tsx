import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import MeteorShower from "@/components/MeteorShower";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechSkii - Transform Your Tech Career",
  description: "Navigate US tech hiring with transparency and expert guidance",
  keywords: ["tech career", "US tech jobs", "tech hiring", "career guidance", "tech recruitment"],
  authors: [{ name: "TechSkii" }],
  openGraph: {
    title: "TechSkii - Transform Your Tech Career",
    description: "Navigate US tech hiring with transparency and expert guidance",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSkii - Transform Your Tech Career",
    description: "Navigate US tech hiring with transparency and expert guidance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SplashScreen />
        <MeteorShower />
        <AnimatedBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
