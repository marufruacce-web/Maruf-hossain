import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpen,
  Clock,
  Sparkles,
  FlaskConical,
  GraduationCap,
  ArrowRight,
  Atom,
  Layers,
  Activity,
  CheckCircle2,
  Mail
} from 'lucide-react';

interface ResearchTrack {
  title: string;
  category: string;
  focus: string;
  description: string;
  keyTopics: string[];
  status: string;
}

const researchTracks: ResearchTrack[] = [
  {
    title: 'Applied Chemical Analytics & Quality Control',
    category: 'Analytical Chemistry',
    focus: 'Wet-Bench Precision & Methodology',
    description: 'Investigating analytical titration accuracy, primary standard preparation, error propagation models, and quantitative inorganic chemistry protocols.',
    keyTopics: ['Volumetric Titrations', 'Qualitative Radical Identification', 'Statistical Error Bounds', 'Laboratory Safety & SOPs'],
    status: 'Active Lab Practice'
  },
  {
    title: 'Material and Energy Balances in Process Systems',
    category: 'Chemical Engineering Fundamentals',
    focus: 'Conservation Laws & Modeling',
    description: 'Systematic formulation of steady-state mass balances, degrees of freedom analysis, bypass/recycle streams, and non-isothermal enthalpy calculations.',
    keyTopics: ['Degrees of Freedom Analysis', 'Stoichiometric Solvers', 'Recycle & Bypass Balances', 'Phase Enthalpy Data'],
    status: 'Foundational Coursework'
  },
  {
    title: 'Reaction Kinetics & Catalytic Processes',
    category: 'Reaction Engineering',
    focus: 'Rate Modeling & Reactor Design',
    description: 'Exploring temperature-dependent rate equations, Arrhenius activation energies, and isothermal batch reactor performance.',
    keyTopics: ['Arrhenius Parameters', 'Reaction Mechanism Formulations', 'Isothermal Reactor Models', 'Catalyst Selectivity'],
    status: 'Upcoming Study'
  },
  {
    title: 'Environmental Chemical Engineering & Effluent Treatment',
    category: 'Sustainable Engineering',
    focus: 'Wastewater & Industrial Remediation',
    description: 'Understanding coagulation-flocculation chemistry, industrial wastewater characterization, and zero liquid discharge principles.',
    keyTopics: ['Coagulation Chemistry', 'Turbidity & COD Reduction', 'Water Quality Analytics', 'Sustainable Plant Operations'],
    status: 'Target Research Area'
  }
];

export const Blog: React.FC = () => {
  return (
    <section
      id="blog"
      className="py-16 md:py-24 bg-white/40 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xs transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#2563EB] dark:bg-blue-950/60 dark:text-[#38BDF8] border border-blue-100 dark:border-blue-900/60 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] dark:text-white tracking-tight">
            Publications & Research
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#64748B] dark:text-slate-300">
            Formal research papers and peer-reviewed publications will be presented here as I advance through my undergraduate degree at the University of Rajshahi.
          </p>
        </div>

        {/* Coming Soon Hero Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-850 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100/80 dark:bg-blue-950 text-[#2563EB] dark:text-[#38BDF8] border border-blue-200 dark:border-blue-800 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-[#38BDF8] animate-pulse" />
                <span>Coming Soon • In Preparation</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B] dark:text-white mb-2">
                Undergraduate Research & Publications Track
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-slate-300 leading-relaxed">
                Having completed my 1st year in Applied Chemistry & Chemical Engineering, I am focused on mastering laboratory methods, material and energy balances, and analytical chemistry. Formal journal papers and conference proceedings will be published here upon completion of advanced coursework and faculty-supervised thesis work.
              </p>
            </div>

            <div className="shrink-0 relative z-10 flex flex-col items-center sm:items-end gap-3">
              <div className="w-16 h-16 rounded-2xl bg-[#0F172A] text-white flex items-center justify-center shadow-md border border-slate-800">
                <Clock className="w-8 h-8 text-[#38BDF8]" />
              </div>
              <span className="text-xs font-semibold text-[#64748B] dark:text-slate-400">
                Expected: 2026 – 2028
              </span>
            </div>
          </motion.div>
        </div>

        {/* Prospective Research Interests & Focus Tracks */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#1E293B] dark:text-white">
                Prospective Research Interests & Academic Roadmaps
              </h3>
              <p className="text-xs text-[#64748B] dark:text-slate-400">
                Target areas of exploration aligned with Department of ACCE, University of Rajshahi
              </p>
            </div>
            <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              4 Target Domains
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {researchTracks.map((track, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800 shadow-2xs hover:border-[#38BDF8]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      {track.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#2563EB] dark:text-[#38BDF8]">
                      {track.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#1E293B] dark:text-white mb-2">
                    {track.title}
                  </h4>

                  <p className="text-xs text-[#64748B] dark:text-slate-300 leading-relaxed mb-4">
                    {track.description}
                  </p>
                </div>

                <div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60">
                    <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-2">
                      Key Focus Topics:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {track.keyTopics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-50 dark:bg-slate-700/60 text-[#1E293B] dark:text-slate-200 border border-slate-200/80 dark:border-slate-700"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#2563EB] dark:text-[#38BDF8]" />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Academic Collaboration Note */}
        <div className="max-w-4xl mx-auto mt-10 p-6 rounded-3xl bg-[#0F172A] text-white border border-slate-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-sm">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white mb-0.5">
                Interested in Academic or Research Collaboration?
              </h4>
              <p className="text-xs text-slate-300">
                Open to assisting professors, researchers, and student study groups with laboratory tasks and data calculations.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#2563EB] hover:bg-blue-600 text-white shadow-sm transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Connect via Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
};
