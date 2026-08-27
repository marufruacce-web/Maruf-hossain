import React from 'react';
import { motion } from 'motion/react';
import { servicesList } from '../data/portfolioData';
import {
  FlaskConical,
  FileText,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface ServicesProps {
  onInquireService: (serviceTitle: string) => void;
}

const serviceIcons = {
  'laboratory-assistance': FlaskConical,
  'technical-writing': FileText,
  'research-assistance': Search,
};

export const Services: React.FC<ServicesProps> = ({ onInquireService }) => {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50/40 dark:bg-slate-950/40 border-t border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Academic Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic & Student Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Support capabilities tailored to undergraduate laboratory coursework, technical documentation, and foundational academic study support.
          </p>
        </div>

        {/* 3 Service Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {servicesList.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || FlaskConical;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col justify-between rounded-3xl bg-slate-50/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700/60 transition-all p-6 sm:p-7 shadow-xs"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60">
                      {service.scopeBadge}
                    </span>
                  </div>

                  {/* Title & Core Description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                      Scope & Activities:
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools & Reagents Chip List */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-700 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                      Key Tools & Methods:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-600"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Inquiry CTA */}
                <button
                  onClick={() => onInquireService(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Inquire Regarding Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
