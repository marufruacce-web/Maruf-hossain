import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalData, socialLinks } from '../data/portfolioData';
import { RESUME_FILE_PATH, RESUME_FILE_NAME, handleResumeDownload } from '../utils/resumeDownload';
import {
  FlaskConical,
  GraduationCap,
  ArrowRight,
  Mail,
  Linkedin,
  Github,
  Camera,
  MapPin,
  Sparkles,
  Award,
  Zap,
  Wrench,
  ShieldCheck,
  Briefcase,
  ExternalLink,
  ChevronRight,
  Atom,
  Clock,
  FileDown,
  BookOpen,
  FileText,
  MessageCircle,
  Share2,
  CheckCircle2
} from 'lucide-react';

// Custom Brand Icons for Facebook & WhatsApp
const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.179-.176.2-.351.226-.652.075-1.966-.983-3.256-2.106-4.561-4.347-.344-.59-.036-.91.266-1.21.27-.27.601-.702.902-1.053.3-.351.401-.602.602-1.003.201-.401.1-.752-.05-1.053s-.676-1.631-.927-2.233c-.244-.585-.494-.506-.677-.515-.175-.008-.376-.01-.577-.01s-.526.075-.802.376c-.276.301-1.053 1.028-1.053 2.508 0 1.479 1.078 2.908 1.229 3.109.15.2 2.122 3.24 5.141 4.544 2.14.925 2.977.989 4.032.833.642-.095 1.78-.727 2.031-1.429.251-.702.251-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.108 1.517 5.836L.073 23.473l5.808-1.523A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.578-.506-5.068-1.385l-.363-.216-3.762.987.1-3.666-.237-.377A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  profilePhoto: string | null;
  onOpenPhotoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  profilePhoto,
  onOpenPhotoModal,
}) => {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 md:pt-28 md:pb-16 bg-slate-50/60 dark:bg-slate-950/60 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-auto">
          
          {/* Bento Tile 1: Main Profile / Hero Card (Span 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 lg:col-span-2 bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col items-center sm:items-start gap-6 sm:gap-7 justify-between relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-blue-500/10 dark:bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Profile Avatar / Photo & Info Row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7 w-full">
              {/* Profile Avatar with slightly larger option */}
              <div className="relative shrink-0 group">
                <div
                  id="profile-picture-container"
                  className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-3xl bg-blue-50 dark:bg-slate-800 border-3 border-blue-200 dark:border-slate-700 flex items-center justify-center overflow-hidden relative shadow-md ring-4 ring-blue-500/10 dark:ring-sky-400/10"
                >
                  {profilePhoto ? (
                    <img
                      id="maruf-profile-img"
                      src={profilePhoto}
                      alt="Maruf Hossain"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 text-blue-700 dark:text-blue-300">
                      <span className="text-4xl font-black tracking-tight">MH</span>
                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 mt-1">ACCE / RU</span>
                    </div>
                  )}

                  {/* Edit Photo Overlay */}
                  <button
                    id="hero-photo-trigger-btn"
                    onClick={onOpenPhotoModal}
                    aria-label="Change portrait photo"
                    className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-1.5 cursor-pointer"
                  >
                    <Camera className="w-6 h-6 text-white drop-shadow" />
                    <span className="text-xs font-bold uppercase tracking-wider">Change Photo</span>
                  </button>
                </div>

                {/* Verified Student Badge */}
                <div
                  className="absolute -bottom-2 -right-2 bg-[#2563EB] text-white p-2 rounded-xl shadow-md border-2 border-white dark:border-slate-900"
                  title="Department of Applied Chemistry & Chemical Engineering • University of Rajshahi"
                >
                  <Atom className="w-4 h-4 text-sky-200 animate-spin-slow" />
                </div>
              </div>

              {/* Hero Information */}
              <div className="flex flex-col gap-2.5 text-center sm:text-left flex-1 min-w-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <span className="text-[#2563EB] dark:text-[#38BDF8] font-extrabold text-xs uppercase tracking-wider">
                    B.Sc. Engg. Student in Chemical Engineering
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
                    RU • Class of '29
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {personalData.name}
                </h1>

                <p className="text-slate-600 dark:text-slate-200 text-sm sm:text-base font-normal leading-relaxed">
                  Undergraduate engineering student at the <strong className="font-semibold text-slate-900 dark:text-white">Department of Applied Chemistry &amp; Chemical Engineering</strong>, University of Rajshahi. Building deep foundations in laboratory qualitative analysis, process calculations, and material &amp; energy balances.
                </p>
              </div>
            </div>

            {/* Social Media Links Row with App Logos & Hyperlinks */}
            <div className="w-full pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Connect & Social Channels
                </span>
                <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Directly Available
                </span>
              </div>

              {/* Responsive Grid of Social Buttons */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 w-full">
                {/* 1. Email */}
                <a
                  id="social-link-email"
                  href="mailto:marufruacce@gmail.com"
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-red-400 dark:hover:border-red-500 hover:bg-red-50/80 dark:hover:bg-red-950/40 text-slate-700 dark:text-slate-200 hover:text-red-600 dark:hover:text-red-400 transition-all group shadow-2xs"
                  title="Email: marufruacce@gmail.com"
                >
                  <div className="w-7 h-7 rounded-xl bg-red-100 dark:bg-red-950/80 text-red-600 dark:text-red-400 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold">Email</span>
                </a>

                {/* 2. LinkedIn */}
                <a
                  id="social-link-linkedin"
                  href="https://www.linkedin.com/in/maruf-hossain-1a45b4431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/80 dark:hover:bg-sky-950/40 text-slate-700 dark:text-slate-200 hover:text-[#0A66C2] dark:hover:text-[#38BDF8] transition-all group shadow-2xs"
                  title="LinkedIn: Maruf Hossain"
                >
                  <div className="w-7 h-7 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-[#0A66C2] dark:text-[#38BDF8] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold">LinkedIn</span>
                </a>

                {/* 3. GitHub */}
                <a
                  id="social-link-github"
                  href="https://github.com/marufruacce-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all group shadow-2xs"
                  title="GitHub: marufruacce-web"
                >
                  <div className="w-7 h-7 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold">GitHub</span>
                </a>

                {/* 4. Facebook */}
                <a
                  id="social-link-facebook"
                  href="https://www.facebook.com/share/1DNmU9cnEg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/80 dark:hover:bg-blue-950/40 text-slate-700 dark:text-slate-200 hover:text-[#1877F2] dark:hover:text-blue-400 transition-all group shadow-2xs"
                  title="Facebook: Maruf Hossain"
                >
                  <div className="w-7 h-7 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-[#1877F2] dark:text-blue-400 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <FacebookIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold">Facebook</span>
                </a>

                {/* 5. WhatsApp */}
                <a
                  id="social-link-whatsapp"
                  href="https://wa.me/8801924004024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-400 dark:hover:border-emerald-500 hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-slate-200 hover:text-[#25D366] dark:hover:text-emerald-400 transition-all group shadow-2xs"
                  title="WhatsApp: +880 1924004024"
                >
                  <div className="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-[#25D366] dark:text-emerald-400 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold">WhatsApp</span>
                </a>

                {/* 6. CV Link */}
                <a
                  id="social-link-cv"
                  href={RESUME_FILE_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-2.5 rounded-2xl bg-blue-50/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-[#2563EB] dark:text-[#38BDF8] transition-all group shadow-2xs"
                  title="Maruf Hossain's cv (Google Drive)"
                >
                  <div className="w-7 h-7 rounded-xl bg-[#2563EB] text-white flex items-center justify-center mb-1 group-hover:scale-110 transition-transform shadow-xs">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-[#2563EB] dark:text-[#38BDF8] truncate max-w-full">
                    My CV
                  </span>
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 w-full pt-1">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate('skills')}
                className="bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-2.5 rounded-2xl text-sm font-bold shadow-md shadow-blue-500/20 dark:shadow-none transition-all flex items-center gap-2 cursor-pointer hover:translate-y-[-1px]"
              >
                <span>View Skills &amp; Lab</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                id="hero-download-resume-btn"
                href={RESUME_FILE_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-900 dark:text-white border-2 border-slate-300 dark:border-slate-700 px-5 py-2.5 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer group hover:border-[#2563EB] dark:hover:border-[#38BDF8]"
                title="Open Maruf Hossain's cv (PDF / Google Drive)"
              >
                <FileDown className="w-4 h-4 text-[#2563EB] dark:text-[#38BDF8] group-hover:-translate-y-0.5 transition-transform" />
                <span>Maruf Hossain's cv</span>
              </a>

              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate('contact')}
                className="bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 px-4 py-2.5 rounded-2xl text-sm font-bold transition-colors cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </motion.div>

          {/* Bento Tile 2: About Me Quick Tile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            onClick={() => onNavigate('about')}
            role="button"
            tabIndex={0}
            className="col-span-1 bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-md flex flex-col justify-between cursor-pointer hover:border-[#2563EB] dark:hover:border-[#38BDF8]/60 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-950/80 rounded-2xl text-[#2563EB] dark:text-[#38BDF8]">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">About Me</h3>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors" />
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "Building strong theoretical and laboratory foundations in chemical engineering, process calculation, and scientific inquiry."
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              <span className="text-[10px] font-bold px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Research Mindset
              </span>
              <span className="text-[10px] font-bold px-2.5 py-1 bg-blue-50 dark:bg-blue-950/60 rounded-xl text-[#2563EB] dark:text-[#38BDF8] border border-blue-100 dark:border-blue-900">
                Applied Chemistry
              </span>
            </div>
          </motion.div>

          {/* Bento Tile 3: Education Quick Tile (Tall column) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            onClick={() => onNavigate('education')}
            role="button"
            tabIndex={0}
            className="col-span-1 md:row-span-2 bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-md flex flex-col justify-between cursor-pointer hover:border-[#2563EB] dark:hover:border-[#38BDF8]/60 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-950/80 rounded-2xl text-[#2563EB] dark:text-[#38BDF8]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Education</h3>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors" />
              </div>

              {/* Timeline Items */}
              <div className="space-y-5">
                {/* BSc Item */}
                <div className="relative pl-5 border-l-2 border-[#2563EB] dark:border-[#38BDF8]">
                  <div className="absolute -left-[7px] top-0.5 w-3 h-3 bg-[#2563EB] dark:bg-[#38BDF8] rounded-full border-2 border-white dark:border-slate-900 shadow-xs" />
                  <div className="text-[#2563EB] dark:text-[#38BDF8] font-bold text-xs mb-0.5">2024 – 2029 (Expected)</div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm">B.Sc. Engg. in Chemical Engineering</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Dept. of Applied Chemistry &amp; Chemical Engineering, RU</div>
                </div>

                {/* HSC Item */}
                <div className="relative pl-5 border-l-2 border-slate-300 dark:border-slate-700">
                  <div className="absolute -left-[7px] top-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-0.5">2024 • GPA 5.00</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Higher Secondary Certificate</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Kushtia Govt College</div>
                </div>

                {/* SSC Item */}
                <div className="relative pl-5 border-l-2 border-slate-300 dark:border-slate-700">
                  <div className="absolute -left-[7px] top-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-slate-900" />
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-0.5">2022 • GPA 5.00</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm">Secondary School Certificate</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Kushtia Zilla School</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-[#2563EB] dark:text-[#38BDF8] font-bold">
              <span>View complete credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>

          {/* Bento Tile 4: Skills & Proficiencies (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16 }}
            onClick={() => onNavigate('skills')}
            role="button"
            tabIndex={0}
            className="md:col-span-2 bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-md cursor-pointer hover:border-[#2563EB] dark:hover:border-[#38BDF8]/60 transition-all group"
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-950/80 rounded-2xl text-[#2563EB] dark:text-[#38BDF8]">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Skills &amp; Proficiencies</h3>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <div className="text-[11px] uppercase font-extrabold text-slate-500 dark:text-slate-400 mb-2.5 tracking-wider">
                  Technical &amp; Wet-Lab
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-[#38BDF8] text-xs font-bold rounded-xl border border-blue-200 dark:border-blue-900/60">
                    Chemical Lab Techniques
                  </span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-[#38BDF8] text-xs font-bold rounded-xl border border-blue-200 dark:border-blue-900/60">
                    Qualitative Analysis
                  </span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-[#38BDF8] text-xs font-bold rounded-xl border border-blue-200 dark:border-blue-900/60">
                    Process Calculations
                  </span>
                  <span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-[#38BDF8] text-xs font-bold rounded-xl border border-blue-200 dark:border-blue-900/60">
                    Material &amp; Energy Balances
                  </span>
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase font-extrabold text-slate-500 dark:text-slate-400 mb-2.5 tracking-wider">
                  Software &amp; Digital Tools
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700">
                    Microsoft Excel
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700">
                    Microsoft Word
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700">
                    PowerPoint
                  </span>
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl border border-slate-200 dark:border-slate-700">
                    Google Workspace
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 5: Services (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            onClick={() => onNavigate('services')}
            role="button"
            tabIndex={0}
            className="col-span-1 bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-md flex flex-col justify-between cursor-pointer hover:border-[#2563EB] dark:hover:border-[#38BDF8]/60 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-950/80 rounded-2xl text-[#2563EB] dark:text-[#38BDF8]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Services</h3>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-[#38BDF8]" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Laboratory Assistance</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-[#38BDF8]" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Technical Documentation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-[#38BDF8]" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Academic Study Support</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-[#2563EB] dark:text-[#38BDF8] font-bold flex items-center justify-between">
              <span>Undergraduate scope</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.div>

          {/* Bento Tile 6: Publications & Research Track (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.24 }}
            onClick={() => onNavigate('blog')}
            role="button"
            tabIndex={0}
            className="md:col-span-2 bg-[#0F172A] text-white rounded-3xl p-6 sm:p-7 shadow-md flex flex-col justify-between border-2 border-slate-800 hover:border-slate-700 transition-all cursor-pointer group"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-800 text-[#38BDF8] border border-[#38BDF8]/40 mb-2">
                    <BookOpen className="w-3 h-3 text-[#38BDF8]" />
                    <span>Research Track</span>
                  </div>
                  <h3 className="font-extrabold text-white text-base sm:text-lg mb-1">
                    Publications &amp; Research
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
                    Undergraduate papers and academic research outputs in development for future terms.
                  </p>
                </div>
                <div className="px-3 py-1 bg-sky-500/20 text-[#38BDF8] border border-sky-400/40 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0">
                  Coming Soon
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-slate-800/80 rounded-2xl p-3.5 border border-slate-700 flex flex-col justify-center group-hover:border-slate-600 transition-colors">
                  <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider mb-0.5">Focus Track 01</span>
                  <span className="text-xs font-bold text-slate-100 line-clamp-1">Chemical Analytics &amp; QC</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Volumetric Precision</span>
                </div>
                <div className="bg-slate-800/80 rounded-2xl p-3.5 border border-slate-700 flex flex-col justify-center group-hover:border-slate-600 transition-colors">
                  <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider mb-0.5">Focus Track 02</span>
                  <span className="text-xs font-bold text-slate-100 line-clamp-1">Process Calculations</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">Material &amp; Energy Balances</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
              <span>View research roadmap &amp; focus areas</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </motion.div>

          {/* Bento Tile 7: Experience (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            onClick={() => onNavigate('experience')}
            role="button"
            tabIndex={0}
            className="col-span-1 bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-md flex flex-col justify-between cursor-pointer hover:border-[#2563EB] dark:hover:border-[#38BDF8]/60 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-950/80 rounded-2xl text-[#2563EB] dark:text-[#38BDF8]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Experience</h3>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors" />
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-[10px] font-extrabold text-[#2563EB] dark:text-[#38BDF8] uppercase tracking-wider mb-1">
                  Academic Focus
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 font-semibold">
                  1st Year Completed at RU (ACCE)
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 font-bold flex items-center justify-between">
              <span>Roadmap: 2024–2029</span>
              <ArrowRight className="w-3 h-3 text-[#2563EB] dark:text-[#38BDF8]" />
            </div>
          </motion.div>

          {/* Bento Tile 8: Quick Contact (Span 1) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.32 }}
            onClick={() => onNavigate('contact')}
            role="button"
            tabIndex={0}
            className="col-span-1 bg-white dark:bg-slate-900 border-2 border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 shadow-md flex flex-col justify-between cursor-pointer hover:border-[#2563EB] dark:hover:border-[#38BDF8]/60 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 bg-blue-50 dark:bg-blue-950/80 rounded-2xl text-[#2563EB] dark:text-[#38BDF8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">Contact</h3>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#2563EB] dark:group-hover:text-[#38BDF8] transition-colors" />
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 dark:text-slate-500 font-extrabold uppercase text-[10px] w-12 shrink-0">Email</span>
                  <span className="text-slate-800 dark:text-slate-200 font-bold truncate">marufruacce</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 dark:text-slate-500 font-extrabold uppercase text-[10px] w-12 shrink-0">LinkedIn</span>
                  <span className="text-[#2563EB] dark:text-[#38BDF8] font-bold truncate">in/maruf-hossain</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-400 dark:text-slate-500 font-extrabold uppercase text-[10px] w-12 shrink-0">Location</span>
                  <span className="text-slate-800 dark:text-slate-200 font-bold truncate">Rajshahi, BD</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-[#2563EB] dark:text-[#38BDF8] font-extrabold flex items-center justify-between">
              <span>Send Message</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
