import React, { useState } from 'react';
import { motion } from 'motion/react';
import { skillCategories } from '../data/portfolioData';
import {
  Wrench,
  Monitor,
  Users,
  Languages as LanguagesIcon,
  FlaskConical,
  CheckCircle2
} from 'lucide-react';

const categoryIcons = {
  technical: FlaskConical,
  computer: Monitor,
  soft: Users,
  languages: LanguagesIcon,
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'computer' | 'soft' | 'languages'>('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-16 md:py-24 bg-white/40 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60 backdrop-blur-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-100 dark:border-blue-900/60 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills Dashboard
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Categorized technical capabilities, software tools, collaborative strengths, and language proficiencies.
          </p>
        </div>

        {/* Bento Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            id="skill-tab-all"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white shadow-xs shadow-blue-200 dark:shadow-none'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`}
          >
            All Categories ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                id={`skill-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs shadow-blue-200 dark:shadow-none'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
                <span className="text-[10px] opacity-80">({cat.skills.length})</span>
              </button>
            );
          })}
        </div>

        {/* Bento Grid Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-full">
                      {category.skills.length} skills
                    </span>
                  </div>

                  {/* Skills Grid List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
                    {category.skills.map((skill, sIndex) => (
                      <div
                        key={sIndex}
                        className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all flex flex-col justify-between"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-xs font-semibold text-slate-900 dark:text-white">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 shrink-0">
                              {skill.level}
                            </span>
                          )}
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                            {skill.description}
                          </p>
                        )}
                        {skill.tag && (
                          <div className="mt-2 pt-2 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                              {skill.tag}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Structured curriculum competency</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
