
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ayush Shrestha",
    role: "Placed at Tokyo Tech",
    content: "The JLPT N3 course at A.S Nepal was incredibly thorough. The teachers focus not just on grammar but on real-life conversation which helped me ace my interview.",
    avatar: "https://picsum.photos/seed/a/100/100"
  },
  {
    name: "Rejina Thapa",
    role: "SSW Program Candidate",
    content: "A.S Nepal's visa guidance is top-notch. They handled all my documentation for the SSW program seamlessly. Highly recommended for serious candidates!",
    avatar: "https://picsum.photos/seed/b/100/100"
  },
  {
    name: "Bikash Gurung",
    role: "Language Student",
    content: "I started from zero (N5) and now I'm studying for N2. The environment at the Academy is so supportive and the cultural workshops are a major bonus!",
    avatar: "https://picsum.photos/seed/c/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-secondary/[0.03] dark:bg-slate-900/50 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">What Our Students Say</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Success stories from 500+ global citizens every year.</p>
          </div>
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm">
            <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-slate-900 dark:text-white">4.9/5</span>
            <span className="text-slate-400 text-sm ml-1 font-medium">on Google Reviews</span>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-8 pb-12 snap-x hide-scrollbar">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[320px] md:min-w-[450px] bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none snap-center relative border border-slate-50 dark:border-slate-700 transition-colors"
            >
              <Quote className="absolute top-10 right-10 h-12 w-12 text-slate-50 dark:text-slate-700/50" />
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8 italic relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-brand-primary/20" />
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{t.name}</div>
                  <div className="text-sm text-brand-primary font-semibold">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
