import React, { useState, useEffect } from 'react';

export const BackgroundAmbient: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div
      id="ambient-background"
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none transition-colors duration-500"
    >
      {/* 1. Interactive Cursor Glow Spotlight */}
      {isHovered && (
        <div
          className="absolute w-96 h-96 rounded-full bg-radial from-blue-500/12 via-sky-400/6 to-transparent dark:from-blue-600/18 dark:via-sky-400/8 dark:to-transparent blur-2xl transform-gpu -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* 2. Soft Ambient Gradient Glows (Primary Blue, Electric Sky & Deep Indigo) */}
      <div className="absolute -top-24 -right-24 w-[38rem] h-[38rem] rounded-full bg-gradient-to-br from-blue-500/15 via-sky-400/10 to-transparent dark:from-blue-600/20 dark:via-sky-500/12 dark:to-transparent blur-3xl transform-gpu animate-pulse duration-[8000ms]" />
      <div className="absolute top-[35%] -left-32 w-[34rem] h-[34rem] rounded-full bg-gradient-to-tr from-sky-400/10 via-indigo-400/8 to-transparent dark:from-indigo-600/15 dark:via-blue-900/15 dark:to-transparent blur-3xl transform-gpu" />
      <div className="absolute bottom-10 right-[8%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-tl from-blue-400/10 via-sky-300/6 to-transparent dark:from-sky-600/12 dark:via-blue-950/15 dark:to-transparent blur-3xl transform-gpu" />

      {/* 3. Subtle Precision Grid with Radial Mask */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-85 dark:opacity-50"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, #000 45%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 35%, #000 45%, transparent 100%)',
        }}
      />

      {/* 4. Chemical / Molecular Interactive Graphic Accents */}
      <svg
        className="absolute top-20 right-8 w-52 h-52 text-blue-500/15 dark:text-sky-400/15 transition-all duration-700 hidden lg:block"
        viewBox="0 0 140 140"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <polygon points="70,18 112,42 112,94 70,118 28,94 28,42" />
        <line x1="70" y1="18" x2="70" y2="118" strokeDasharray="3 3" strokeWidth="0.8" />
        <line x1="28" y1="42" x2="112" y2="94" strokeDasharray="3 3" strokeWidth="0.8" />
        <line x1="28" y1="94" x2="112" y2="42" strokeDasharray="3 3" strokeWidth="0.8" />
        <circle cx="70" cy="18" r="3" fill="currentColor" />
        <circle cx="112" cy="42" r="3" fill="currentColor" />
        <circle cx="112" cy="94" r="3" fill="currentColor" />
        <circle cx="70" cy="118" r="3" fill="currentColor" />
        <circle cx="28" cy="94" r="3" fill="currentColor" />
        <circle cx="28" cy="42" r="3" fill="currentColor" />
        <circle cx="70" cy="68" r="28" strokeDasharray="4 4" strokeWidth="0.9" />
      </svg>

      {/* Floating chemical element symbol accent (Left side) */}
      <div className="absolute top-[45%] left-6 opacity-20 dark:opacity-25 hidden xl:flex flex-col items-center gap-1 font-mono text-[11px] text-blue-600 dark:text-sky-400">
        <div className="w-9 h-9 rounded-xl border border-blue-400/40 dark:border-sky-400/40 flex items-center justify-center font-bold">
          RU
        </div>
        <span className="text-[9px] tracking-widest uppercase">ACCE</span>
      </div>
    </div>
  );
};
