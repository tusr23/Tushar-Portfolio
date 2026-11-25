import React from 'react';
import {
  ArrowRight,
  ArrowDown,
  Github,
  Linkedin,
  Instagram,
  FileText
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, data } = useLanguage();
  const { personal } = data;

  return (
    <section id="home" className="relative min-h-[calc(100vh-90px)] flex flex-col justify-between pt-6 pb-8 sm:pb-12 select-none">
      {/* Ambient Large Decorative Background Wireframe Circles */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full border border-white/[0.06] pointer-events-none" />
      <div className="absolute -top-16 -right-16 w-[360px] h-[360px] rounded-full border border-white/[0.04] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[420px] h-[420px] rounded-full border border-white/[0.03] pointer-events-none" />

      {/* Main Centered Typographic Headline Header */}
      <div className="w-full my-auto py-8 sm:py-12">
        {/* Line 1: Full-stack + Pill [Projects] + Circle (->) */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-[64px] sm:text-[92px] md:text-[120px] lg:text-[144px] xl:text-[168px] font-black tracking-tight text-white leading-[0.92] font-sans">
            {t('hero.fullStack', 'Full-stack')}
          </h1>

          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all shadow-xl shadow-white/10 active:scale-95 cursor-pointer"
            >
              {t('hero.projectsBtn', 'Projects')}
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-11 sm:w-13 h-11 sm:h-13 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-all shadow-xl shadow-white/10 active:scale-95 cursor-pointer"
              aria-label="View Projects"
            >
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Line 2: Tagline (left under Full-stack) + Developer (right, grand serif italic) */}
        <div className="flex items-baseline justify-between gap-6 sm:gap-8 flex-wrap mt-3 sm:mt-5">
          <div className="max-w-[340px] sm:max-w-md">
            <p className="text-[#888b94] text-sm sm:text-base md:text-[16px] leading-[1.6] font-normal">
              {personal.tagline}
            </p>
          </div>

          <h2 className="font-serif italic text-[70px] sm:text-[100px] md:text-[130px] lg:text-[160px] xl:text-[185px] font-bold text-white tracking-tight leading-[0.88] ml-auto">
            {t('hero.developer', 'Developer')}
          </h2>
        </div>
      </div>

      {/* Bottom Bar: Social Pills + Resume CV on Left | Scroll down prompt on Right */}
      <div className="w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Social Badges Pill Bar */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {/* Github */}
          <a
            href="https://github.com/tusr23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#131418] border border-white/10 hover:border-white/30 text-xs sm:text-[13px] text-[#9ca0aa] hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            <Github size={14} className="fill-current" />
            <span>Github</span>
          </a>

          {/* in Linkedin */}
          <a
            href="https://www.linkedin.com/in/tusr23/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#131418] border border-white/10 hover:border-white/30 text-xs sm:text-[13px] text-[#9ca0aa] hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            <span className="font-bold text-xs lowercase">in</span>
            <span>Linkedin</span>
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/tusr_ptel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#131418] border border-white/10 hover:border-white/30 text-xs sm:text-[13px] text-[#9ca0aa] hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X (Twitter)</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/tusr.ptel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#131418] border border-white/10 hover:border-white/30 text-xs sm:text-[13px] text-[#9ca0aa] hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            <Instagram size={14} />
            <span>Instagram</span>
          </a>

          {/* Resume / CV Pill */}
          <a
            href="assets/pdf/Tushar-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-[13px] hover:bg-gray-200 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-white/5"
          >
            <FileText size={14} className="stroke-[2.2]" />
            <span>{t('hero.resumeBtn', 'Resume (CV)')}</span>
          </a>
        </div>

        {/* Scroll Down Hint */}
        <a
          href="#about"
          className="hidden md:inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors"
        >
          <span>{t('hero.scrollDown', 'Scroll down')}</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
