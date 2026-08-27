import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundAmbient } from './components/BackgroundAmbient';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Blog } from './components/Blog';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProfilePhotoModal } from './components/ProfilePhotoModal';
import { DEFAULT_PROFILE_PHOTO } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  // Local storage for custom profile photo with default to Maruf's photo
  const [profilePhoto, setProfilePhoto] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('maruf-portfolio-photo');
      return saved || DEFAULT_PROFILE_PHOTO;
    }
    return DEFAULT_PROFILE_PHOTO;
  });

  const handleUpdatePhoto = (photoUrl: string | null) => {
    if (photoUrl) {
      localStorage.setItem('maruf-portfolio-photo', photoUrl);
      setProfilePhoto(photoUrl);
    } else {
      localStorage.removeItem('maruf-portfolio-photo');
      setProfilePhoto(null);
    }
  };

  // Smooth Navigation handler
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  const handleInquireService = (serviceTitle: string) => {
    setContactSubject(`Inquiry regarding ${serviceTitle}`);
    handleNavigate('contact');
  };

  // Scrollspy to detect active section in view
  useEffect(() => {
    const sections = ['home', 'about', 'education', 'skills', 'services', 'blog', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#F8FAFC] dark:bg-[#0B1120] text-[#1E293B] dark:text-slate-100 flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-200 font-sans overflow-x-hidden">
        {/* Minimalist Ambient Background Graphics & Glow */}
        <BackgroundAmbient />

        {/* Sticky Top Navigation */}
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Main Content Sections with Bento Architecture */}
        <main className="flex-grow">
          <Hero
            onNavigate={handleNavigate}
            profilePhoto={profilePhoto}
            onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
          />

          <About />

          <Education />

          <Skills />

          <Services onInquireService={handleInquireService} />

          <Blog />

          <Experience />

          <Contact initialSubject={contactSubject} />
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />

        {/* Profile Photo Customizer Modal */}
        <ProfilePhotoModal
          isOpen={isPhotoModalOpen}
          onClose={() => setIsPhotoModalOpen(false)}
          currentPhoto={profilePhoto}
          onUpdatePhoto={handleUpdatePhoto}
        />
      </div>
    </ThemeProvider>
  );
}
