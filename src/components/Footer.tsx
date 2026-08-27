import React from 'react';
import {
  ArrowUp,
  Linkedin,
  Github,
  Mail,
  FileDown,
  MessageCircle,
  FileText
} from 'lucide-react';
import { RESUME_FILE_PATH, RESUME_FILE_NAME } from '../utils/resumeDownload';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.301-.776.979-.951 1.179-.176.2-.351.226-.652.075-1.966-.983-3.256-2.106-4.561-4.347-.344-.59-.036-.91.266-1.21.27-.27.601-.702.902-1.053.3-.351.401-.602.602-1.003.201-.401.1-.752-.05-1.053s-.676-1.631-.927-2.233c-.244-.585-.494-.506-.677-.515-.175-.008-.376-.01-.577-.01s-.526.075-.802.376c-.276.301-1.053 1.028-1.053 2.508 0 1.479 1.078 2.908 1.229 3.109.15.2 2.122 3.24 5.141 4.544 2.14.925 2.977.989 4.032.833.642-.095 1.78-.727 2.031-1.429.251-.702.251-1.304.175-1.43-.075-.125-.276-.2-.577-.35zM12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.108 1.517 5.836L.073 23.473l5.808-1.523A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.848 0-3.578-.506-5.068-1.385l-.363-.216-3.762.987.1-3.666-.237-.377A9.948 9.948 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          {/* Identity */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-1">
              <div className="w-8 h-8 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                M
              </div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
                Maruf Hossain
              </h3>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              B.Sc. Engg. in Chemical Engineering • Dept. of Applied Chemistry &amp; Chemical Engineering, University of Rajshahi
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400">
            <button onClick={() => onNavigate('home')} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] cursor-pointer">
              Home
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] cursor-pointer">
              About
            </button>
            <button onClick={() => onNavigate('education')} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] cursor-pointer">
              Education
            </button>
            <button onClick={() => onNavigate('skills')} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] cursor-pointer">
              Skills
            </button>
            <button onClick={() => onNavigate('services')} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] cursor-pointer">
              Services
            </button>
            <button onClick={() => onNavigate('blog')} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] cursor-pointer">
              Publications
            </button>
            <button onClick={() => onNavigate('experience')} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] cursor-pointer">
              Experience
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#2563EB] dark:hover:text-[#38BDF8] cursor-pointer">
              Contact
            </button>
          </div>

          {/* Actions: Direct Social Links & CV & Back to top */}
          <div className="flex items-center flex-wrap gap-2.5">
            <a
              id="footer-download-resume-btn"
              href={RESUME_FILE_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-[#38BDF8] border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/80 transition-all shadow-2xs cursor-pointer group"
              title="Maruf Hossain's cv (Google Drive)"
            >
              <FileDown className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#38BDF8] group-hover:-translate-y-0.5 transition-transform" />
              <span>Maruf Hossain's cv</span>
            </a>

            {/* Social Icons with direct hyperlinks */}
            <div className="flex items-center gap-1.5">
              <a
                href="mailto:marufruacce@gmail.com"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 transition-colors shadow-2xs"
                title="Email: marufruacce@gmail.com"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/maruf-hossain-1a45b4431"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#38BDF8] hover:bg-sky-50 dark:hover:bg-sky-950/50 transition-colors shadow-2xs"
                title="LinkedIn: Maruf Hossain"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/marufruacce-web"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                title="GitHub: marufruacce-web"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.facebook.com/share/1DNmU9cnEg/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#1877F2] dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-colors shadow-2xs"
                title="Facebook: Maruf Hossain"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/8801924004024"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-[#25D366] dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors shadow-2xs"
                title="WhatsApp: +8801924004024"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-[#2563EB] dark:hover:text-[#38BDF8] transition-colors ml-1 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} Maruf Hossain. Department of Applied Chemistry &amp; Chemical Engineering, RU.</p>
          <div className="flex items-center gap-2 font-medium">
            <span>Academic Portfolio</span>
            <span>•</span>
            <span className="text-[#2563EB] dark:text-[#38BDF8]">Class of '29</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
