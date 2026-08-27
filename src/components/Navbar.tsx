import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'blog', label: 'Publications' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 shadow-md'
          : 'bg-[#0F172A] border-b border-slate-800/80 shadow-xs'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 bg-[#2563EB] hover:bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-sm transition-transform group-hover:scale-105">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-tight text-base sm:text-lg">
                  Maruf Hossain
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-slate-800/90 text-[#38BDF8] border border-[#38BDF8]/30">
                  B.Sc. Engg. (ChemEng)
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">
                Dept. of Applied Chemistry & Chemical Engineering • RU
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs xl:text-sm font-medium transition-all duration-150 relative cursor-pointer ${
                    isActive
                      ? 'text-[#38BDF8] bg-slate-800 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#38BDF8] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Bento Theme Toggle & Quick Contact & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Pill Button */}
            <button
              id="theme-toggle-btn"
              type="button"
              onClick={toggleTheme}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleTheme();
                }
              }}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="relative flex items-center bg-slate-800/90 rounded-full p-1 w-14 h-8 cursor-pointer border border-slate-700 hover:border-[#38BDF8]/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/40"
            >
              <span className="sr-only">Toggle theme</span>
              <div
                className={`w-6 h-6 rounded-full shadow-xs flex items-center justify-center transition-all duration-300 transform-gpu ${
                  theme === 'light'
                    ? 'bg-white translate-x-0 text-amber-500 shadow-sm'
                    : 'bg-slate-950 translate-x-6 text-[#38BDF8] shadow-inner'
                }`}
              >
                {theme === 'light' ? (
                  <Sun className="w-3.5 h-3.5 transition-transform duration-300 rotate-0" />
                ) : (
                  <Moon className="w-3.5 h-3.5 transition-transform duration-300 -rotate-12" />
                )}
              </div>
            </button>

            {/* Quick Contact button on desktop */}
            <button
              id="nav-quick-contact-btn"
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white shadow-sm transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#38BDF8]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 hover:text-[#38BDF8] focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 px-4 pt-3 pb-6 shadow-xl"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleLinkClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-[#38BDF8] font-semibold border-l-2 border-[#38BDF8]'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />}
                </button>
              );
            })}

            {/* Mobile Theme Toggle Row */}
            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between px-2">
              <span className="text-xs font-semibold text-slate-400">
                Appearance ({theme === 'dark' ? 'Dark Mode' : 'Light Mode'})
              </span>
              <button
                id="mobile-theme-toggle-btn"
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-750 cursor-pointer"
              >
                {theme === 'light' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Switch to Dark</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Switch to Light</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
