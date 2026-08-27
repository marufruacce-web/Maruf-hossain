import React from 'react';
import { motion } from 'motion/react';
import { personalData } from '../data/portfolioData';
import {
  FlaskConical,
  Microscope,
  Calculator,
  Scale,
  LineChart,
  FileText,
  Search,
  BookOpen,
  GraduationCap,
  Sparkles,
  Check
} from 'lucide-react';

const expertisePillars = [
  {
    title: 'Chemical Laboratory Techniques',
    desc: 'Standard wet-bench operations, glassware calibration, and laboratory safety protocols.',
    icon: FlaskConical,
  },
  {
    title: 'Chemical Analysis',
    desc: 'Qualitative testing, sample preparation, and volumetric titration methods.',
    icon: Microscope,
  },
  {
    title: 'Process Calculations',
    desc: 'Stoichiometric analysis, unit conversions, and physicochemical system parameters.',
    icon: Calculator,
  },
  {
    title: 'Material & Energy Balances',
    desc: 'Fundamental conservation laws applied to reacting and non-reacting process systems.',
    icon: Scale,
  },
  {
    title: 'Experimental Data Analysis',
    desc: 'Data tabulation, error analysis, graphical plotting, and statistical reporting.',
    icon: LineChart,
  },
  {
    title: 'Technical Writing',
    desc: 'Clear, structured documentation for lab notebooks, reports, and academic reviews.',
    icon: FileText,
  },
  {
    title: 'Research Assistance',
    desc: 'Scientific literature organization, bibliography management, and analytical assistance.',
    icon: Search,
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white/40 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A dedicated chemical engineering undergraduate laying the foundation for future laboratory, analytical, and research excellence.
          </p>
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Bento Tile 1: Biography & Context (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Biography & Academic Context
                </h3>
              </div>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <p>
                  <strong className="text-slate-900 dark:text-white font-semibold">Maruf Hossain</strong> is an undergraduate student pursuing a <strong className="font-semibold text-slate-900 dark:text-white">B.Sc. Engg. in Chemical Engineering</strong> at the{' '}
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Department of Applied Chemistry &amp; Chemical Engineering, University of Rajshahi</span>, with a strong foundation in science and a focused interest in chemical process calculations, wet-bench laboratory work, and applied research.
                </p>
                
                <p>
                  Having established a consistent record of academic discipline throughout secondary and higher secondary education (scoring perfect <span className="font-semibold text-slate-900 dark:text-white">GPA 5.00</span> in both SSC and HSC), Maruf is now focused on translating rigorous engineering theory into hands-on laboratory acumen.
                </p>

                <p className="text-slate-500 dark:text-slate-400 text-xs italic pt-2 border-t border-slate-100 dark:border-slate-800">
                  "Dedicated to academic integrity, precision in measurement, and continuous improvement in Applied Chemistry &amp; Chemical Engineering."
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Department &amp; Uni</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">ACCE, Univ. of Rajshahi</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Degree Program</div>
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mt-0.5">B.Sc. Engg. (ChemEng)</div>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 2: 7 Core Competencies Bento Grid (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 rounded-xl">
                  <FlaskConical className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Active Areas of Development
                </h3>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2.5 py-1 rounded-full border border-blue-100 dark:border-blue-900/60">
                7 Core Pillars
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {expertisePillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800/60 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-xl bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shrink-0 shadow-2xs border border-slate-200/60 dark:border-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
