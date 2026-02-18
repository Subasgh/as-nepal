
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white">Let's Talk.</h2>
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-md">
              Start your application today. Our consultants respond to all queries within 2 hours during business time.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Phone />, label: 'Hotline', value: '+977 (015921369' },
                { icon: <Mail />, label: 'Enquiry', value: 'aslanguage2024.gakkou@gmail.com' },
                { icon: <MapPin />, label: 'Location', value: 'Pulchowk, Nepal' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-slate-100 dark:bg-slate-900 text-slate-400 rounded-[1.5rem] flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl border border-white dark:border-slate-800"
          >
            <form className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Your Name</label>
                  <input type="text" placeholder="Aayush Gurung" className="w-full bg-white dark:bg-slate-800 border-none rounded-2xl px-6 py-5 focus:ring-4 focus:ring-brand-primary/20 outline-none transition-all dark:text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Mobile Number</label>
                  <input type="tel" placeholder="+977 98..." className="w-full bg-white dark:bg-slate-800 border-none rounded-2xl px-6 py-5 focus:ring-4 focus:ring-brand-primary/20 outline-none transition-all dark:text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Service Needed</label>
                <select className="w-full bg-white dark:bg-slate-800 border-none rounded-2xl px-6 py-5 focus:ring-4 focus:ring-brand-primary/20 outline-none transition-all dark:text-white appearance-none">
                  <option>Language Classes</option>
                  <option>SSW Job Recruitment</option>
                  <option>University Admission</option>
                  <option>General Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">Describe Your Goal</label>
                <textarea rows={4} placeholder="Tell us about your Japan plans..." className="w-full bg-white dark:bg-slate-800 border-none rounded-2xl px-6 py-5 focus:ring-4 focus:ring-brand-primary/20 outline-none transition-all resize-none dark:text-white"></textarea>
              </div>
              <button className="w-full bg-brand-primary text-white py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-xl shadow-brand-primary/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3">
                Send Request <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
