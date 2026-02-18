
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1526481280693-3bfa75ac8efd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800",
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white">Life at A.S Nepal</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto italic">
            "Your transformation into a global professional begins within our vibrant community."
          </p>
        </div>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-[2.5rem] shadow-xl border-4 border-white dark:border-slate-800"
            >
              <img 
                src={src} 
                alt={`A.S Nepal Gallery ${i}`} 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-secondary/0 hover:bg-brand-secondary/10 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
