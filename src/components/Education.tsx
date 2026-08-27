import React from 'react';
import { motion } from 'motion/react';
import { educationList } from '../data/portfolioData';
import {
  GraduationCap,
  Building2,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50/40 dark:bg-slate-950/40 border-t border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A chronological timeline of academic achievements, secondary preparation, and ongoing undergraduate engineering training.
          </p>
        </div>

        {/* Bento Grid Timeline & Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {educationList.map((item, index) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`rounded-3xl p-6 sm:p-7 border shadow-xs flex flex-col justify-between transition-all ${
                  item.isCurrent
                    ? 'bg-slate-50/80 dark:bg-slate-800/60 border-blue-500/50 dark:border-blue-500/50 ring-2 ring-blue-500/10'
                    : 'bg-white dark:bg-slate-900/70 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        item.isCurrent
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{item.statusBadge}</span>
                    </span>

                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                      {item.year}
                    </span>
                  </div>

                  {/* Degree Title */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-medium mb-4">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{item.institution}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Stats & Highlights */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 dark:text-slate-500 uppercase text-[10px] font-bold tracking-wider">
                      {item.scoreLabel}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {item.scoreValue}
                    </span>
                  </div>

                  <div>
                    <span className="text-slate-400 dark:text-slate-500 uppercase text-[10px] font-bold tracking-wider block mb-1.5">
                      Highlights:
                    </span>
                    <div className="space-y-1">
                      {item.highlights.slice(0, 2).map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
