import React, { useState } from 'react';
import { motion } from 'motion/react';
import { experiencesList } from '../data/portfolioData';
import { ExperienceItem } from '../types';
import {
  Briefcase,
  FlaskConical,
  GraduationCap,
  Sparkles,
  Building,
  CheckCircle2,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Academic & Laboratory' | 'Tutoring & Mentorship' | 'Target Co-op / Internship'>('All');

  const filteredExperiences = selectedFilter === 'All'
    ? experiencesList
    : experiencesList.filter((item) => item.type === selectedFilter);

  const getTypeIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Academic & Laboratory':
        return FlaskConical;
      case 'Tutoring & Mentorship':
        return BookOpen;
      case 'Target Co-op / Internship':
      default:
        return Building;
    }
  };

  const getTypeBadge = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Academic & Laboratory':
        return 'bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border-blue-200 dark:border-blue-800';
      case 'Tutoring & Mentorship':
        return 'bg-amber-50 text-amber-700 dark:bg-amber-950/80 dark:text-amber-300 border-amber-200 dark:border-amber-800';
      case 'Target Co-op / Internship':
        return 'bg-purple-50 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border-purple-200 dark:border-purple-800';
      default:
        return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
    }
  };

  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-white/40 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xs transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internships & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Laboratory Training
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            A comprehensive record of university laboratory training, academic tutoring, and future industrial co-op targets in chemical engineering.
          </p>
        </div>

        {/* Positive Current Academic Focus Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-blue-200/80 dark:border-blue-900/50 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center shrink-0 shadow-xs">
              <TrendingUp className="w-7 h-7" />
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 mb-2 border border-blue-100 dark:border-blue-900/50">
                <Sparkles className="w-3 h-3" />
                <span>Current Academic & Career Focus</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                Active Chemical Engineering Undergraduate at University of Rajshahi
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
                As a developing chemical engineering student, Maruf is dedicating his full efforts toward mastering fundamental process calculations, analytical laboratory procedures, computational tools (Python/Excel), and laboratory safety. He is actively seeking future industrial internship placements in fertilizer plants, petrochemical refineries, pharmaceutical facilities, and environmental testing labs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filter Controls */}
        <div className="max-w-4xl mx-auto mb-8 flex justify-center sm:justify-start">
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            {(['All', 'Academic & Laboratory', 'Tutoring & Mentorship', 'Target Co-op / Internship'] as const).map((filter) => (
              <button
                key={filter}
                id={`exp-filter-${filter.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline / Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredExperiences.map((exp, idx) => {
            const Icon = getTypeIcon(exp.type);
            return (
              <motion.div
                key={exp.id}
                id={`experience-entry-${exp.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={`p-6 sm:p-8 rounded-3xl border shadow-xs transition-all ${
                  exp.isCurrent
                    ? 'bg-slate-50/80 dark:bg-slate-800/70 border-blue-300 dark:border-blue-700/80 ring-1 ring-blue-500/10'
                    : 'bg-slate-50/50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-white dark:bg-slate-700/80 text-blue-600 dark:text-blue-400 shrink-0 shadow-xs border border-slate-200/80 dark:border-slate-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getTypeBadge(exp.type)}`}>
                          {exp.type}
                        </span>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border border-green-200 dark:border-green-800">
                            Current Role
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {exp.organization}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 text-xs text-slate-500 dark:text-slate-400 pl-11 sm:pl-0">
                    <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 pl-0 sm:pl-11">
                  {exp.description}
                </p>

                {/* Key Responsibilities & Accomplishments */}
                <div className="pl-0 sm:pl-11 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Key Responsibilities & Tasks:
                    </h4>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements.length > 0 && (
                    <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-700/50 border border-slate-200/80 dark:border-slate-700">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-1.5 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5" />
                        Key Accomplishments & Outcomes:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="text-xs text-slate-700 dark:text-slate-200 flex items-start gap-1.5">
                            <span className="text-blue-500 font-bold">•</span>
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills Gained */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
                      Skills Developed:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-600"
                        >
                          {skill}
                        </span>
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
