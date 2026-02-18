
'use client';

import React from 'react';
import { GraduationCap, ArrowUpRight, Facebook, Instagram, Youtube, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-32 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <div className="bg-brand-secondary p-2.5 rounded-2xl shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white uppercase leading-none">
                A.S NEPAL<br />
                <span className="text-brand-primary text-[10px] font-black tracking-[0.4em]">ACADEMY</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm max-w-xs italic">
              "We don't just teach the language; we help you navigate the future in Japan."
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube, Globe].map((Icon, i) => (
                <button key={i} className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all text-slate-500">
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.3em] mb-10">Programs</h4>
            <ul className="space-y-5 text-sm font-bold">
              {['N5 Level (Noryoku)', 'N4 Level (Daily)', 'JLPT N3 Mastery', 'N2 Business Japan', 'NAT-TEST Training'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-brand-primary transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.3em] mb-10">Quick Links</h4>
            <ul className="space-y-5 text-sm font-bold">
              {['Academy Portal', 'SSW Job Board', 'Visa FAQ', 'Scholarships', 'Contact Sensei'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-brand-primary transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.3em] mb-10">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-6">Receive Japan news and intake dates directly.</p>
            <div className="flex gap-3">
              <input type="email" placeholder="Email" className="bg-slate-900 border-none rounded-2xl px-5 py-4 flex-grow focus:ring-2 focus:ring-brand-primary outline-none text-white text-sm" />
              <button className="bg-brand-primary text-white p-4 rounded-2xl hover:brightness-125 transition-all">
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8 text-[10px] font-black text-slate-600 uppercase tracking-widest">
            <span>Privacy Hub</span>
            <span>Terms of Study</span>
            <span>License: NP-921-X</span>
          </div>
          <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">
            © 2024 A.S Nepal Japanese Language Academy. Handcrafted Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};
