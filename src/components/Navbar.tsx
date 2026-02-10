"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed w-full top-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold gradient-text">TechSkii</Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/roles" className="text-sm text-muted hover:text-white transition">Roles</Link>
          <Link href="/how-it-works" className="text-sm text-muted hover:text-white transition">How It Works</Link>
          <Link href="/faq" className="text-sm text-muted hover:text-white transition">FAQ</Link>
          <Link href="/contact" className="primary-btn text-sm">Get Started</Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 p-6 space-y-4">
          <Link href="/roles" className="block text-muted" onClick={() => setOpen(false)}>Roles</Link>
          <Link href="/how-it-works" className="block text-muted" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="/faq" className="block text-muted" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/contact" className="block primary-btn inline-block" onClick={() => setOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
}
