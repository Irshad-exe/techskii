'use client'

import { Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold gradient-text mb-4">Techskii</div>
            <p className="text-sm text-slate-400 mb-4">Clarity. Structure. Confidence.</p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/techskii" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@techskii.com" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-sm hover:text-blue-400 transition-colors">Our Story</a></li>
              <li><a href="#why-techskii" className="text-sm hover:text-blue-400 transition-colors">Why Techskii</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#journey" className="text-sm hover:text-blue-400 transition-colors">Profile Audit</a></li>
              <li><a href="#journey" className="text-sm hover:text-blue-400 transition-colors">Resume Optimization</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Roles</h3>
            <ul className="space-y-2">
              <li><a href="#roles" className="text-sm hover:text-blue-400 transition-colors">IT & Software</a></li>
              <li><a href="#roles" className="text-sm hover:text-blue-400 transition-colors">Business</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#policies" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#policies" className="text-sm hover:text-blue-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Techskii. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
