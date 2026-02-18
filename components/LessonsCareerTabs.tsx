
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, ChevronRight, CheckCircle2, Star, Flame, MapPin, JapaneseYen } from 'lucide-react';

const academyData = [
  { level: 'N5', title: 'Start Your Journey', duration: '6 Months', students: '1200+', highlight: 'Essential Vocab' },
  { level: 'N4', title: 'The Daily Speaker', duration: '6 Months', students: '850+', highlight: 'Grammar Mastery' },
  { level: 'N3', title: 'Work-Ready Fluency', duration: '8 Months', students: '420+', highlight: 'JLPT Focused' },
  { level: 'N2/N1', title: 'The Elite Path', duration: 'Flexible', students: '150+', highlight: 'Business Expert' },
];

const jobData = [
  { title: 'SSW Nursing Care', salary: '¥220k - ¥280k', tags: ['High Demand', 'Free Training'], img: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=600' },
  { title: 'Hospitality & Tourism', salary: '¥200k - ¥260k', tags: ['Native Practice', 'Hokkaido'], img: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=600' },
  { title: 'Construction & Tech', salary: '¥250k - ¥350k', tags: ['Fast Visa', 'Male/Female'], img: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=600' },
];

export const LessonsCareerTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'academy' | 'careers'>('academy');

  return (
    <section id="academy" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Path Selector - Shadcn Inspired */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-brand-primary font-black uppercase tracking-[0.2em] text-sm mb-4">Choose Your Destiny</span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-10 max-w-2xl">
            Where do you want to start <br className="hidden lg:block"/> your <span className="hero-gradient-text">Japan Story?</span>
          </h2>
          
          <div className="relative flex p-1.5 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl border border-slate-200 dark:border-slate-800 w-full max-w-md">
            <motion.div 
              className="absolute h-[calc(100%-12px)] top-1.5 left-1.5 bg-brand-primary rounded-[1.8rem] z-0 shadow-lg shadow-brand-primary/20"
              initial={false}
              animate={{ 
                x: activeTab === 'academy' ? 0 : '100%',
                width: 'calc(50% - 1.5px)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              onClick={() => setActiveTab('academy')}
              className={`relative z-10 flex-1 py-4 text-sm font-black transition-colors ${activeTab === 'academy' ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
            >
              The Academy
            </button>
            <button 
              onClick={() => setActiveTab('careers')}
              className={`relative z-10 flex-1 py-4 text-sm font-black transition-colors ${activeTab === 'careers' ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
            >
              Job Careers
            </button>
          </div>
        </div>

        {/* Content Explorer */}
        <AnimatePresence mode="wait">
          {activeTab === 'academy' ? (
            <motion.div
              key="academy-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-4 gap-6"
            >
              {academyData.map((course, i) => (
                <div key={course.level} className="group bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-brand-primary/50 transition-all hover:shadow-2xl hover:shadow-brand-primary/10 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-5xl font-black text-slate-100 dark:text-slate-800 group-hover:text-brand-primary/20 transition-colors">{course.level}</div>
                    <div className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{course.highlight}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">{course.title}</h3>
                  <div className="text-sm text-slate-500 mb-8">{course.duration} Coursework</div>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Alumni</span>
                      <span className="font-black text-slate-900 dark:text-white">{course.students}</span>
                    </div>
                    <button className="w-12 h-12 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full flex items-center justify-center hover:bg-brand-primary dark:hover:bg-brand-primary dark:hover:text-white transition-all">
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="career-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-3 gap-10"
            >
              {jobData.map((job) => (
                <div key={job.title} className="group relative overflow-hidden rounded-[3rem] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 transition-transform duration-500">
                  <div className="h-64 overflow-hidden relative">
                    <img src={job.img} alt={job.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                    <div className="absolute top-6 right-6">
                      <div className="bg-emerald-500 text-white p-2 rounded-xl shadow-lg">
                        <Flame className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map(t => (
                        <span key={t} className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-wider rounded-lg border border-brand-primary/20">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">{job.title}</h3>
                    
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-2">
                        <JapaneseYen className="h-5 w-5 text-brand-secondary" />
                        <span className="text-lg font-black text-brand-secondary">{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin className="h-3 w-3" /> Worldwide Recruit
                      </div>
                    </div>

                    <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-brand-primary dark:hover:bg-brand-primary dark:hover:text-white transition-all shadow-xl">
                      Apply Opportunity
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
