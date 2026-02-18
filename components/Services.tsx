
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileCheck, Landmark, Plus, Minus, ArrowUpRight } from 'lucide-react';

const serviceList = [
  {
    title: 'Language Training',
    id: 'lang',
    icon: <BookOpen className="h-6 w-6" />,
    description: 'We offer N5 to N1 levels with certified instructors and mock tests that mirror the actual JLPT environment.',
    details: 'Daily 3-hour sessions, Native Sensei feedback, and specialized NAT-TEST preparation materials.'
  },
  {
    title: 'Visa Consultancy',
    id: 'visa',
    icon: <FileCheck className="h-6 w-6" />,
    description: '100% legal documentation for Student, SSW, and Dependent visas. Our experts handle the COE process from start to finish.',
    details: 'Documentation review, Interview coaching, and direct coordination with Japanese Immigration bureaus.'
  },
  {
    title: 'SSW Job Placement',
    id: 'job',
    icon: <Landmark className="h-6 w-6" />,
    description: 'Connecting skilled workers in Nepal to high-paying industries in Japan including Caregiving, Agriculture, and Food Services.',
    details: 'Direct recruitment drives, pre-departure orientation, and post-arrival support in Tokyo, Osaka, and Fukuoka.'
  }
];

export const Services: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('lang');

  return (
    <section id="consultancy" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full inline-block font-black text-xs uppercase tracking-widest mb-6">Our Expertise</div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
              A.S Nepal <br className="hidden lg:block"/> <span className="text-brand-primary">Elite Services</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12">
              Beyond just teaching, we provide the ultimate framework for success. From your first Hiragana character to your first salary in Japan.
            </p>
            <button className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:brightness-125 transition-all">
              Full Services <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4">
            {serviceList.map((item) => (
              <div 
                key={item.id} 
                className={`border rounded-[2.5rem] transition-all duration-500 overflow-hidden ${
                  openId === item.id 
                    ? 'border-brand-primary bg-slate-50 dark:bg-slate-900' 
                    : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950'
                }`}
              >
                <button 
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${openId === item.id ? 'bg-brand-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                      {item.icon}
                    </div>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</span>
                  </div>
                  {openId === item.id ? <Minus className="h-5 w-5 text-brand-primary" /> : <Plus className="h-5 w-5 text-slate-300" />}
                </button>
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8 pt-0"
                    >
                      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-sm italic font-medium text-brand-primary">
                        {item.details}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
