import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Instagram 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, data } = useLanguage();
  const { personal } = data;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="pt-20 sm:pt-28 pb-8 relative select-none">
      {/* Ambient Large Background Wireframe Circle (Sweeping behind the author name on left) */}
      <div className="absolute -bottom-28 -left-36 w-[620px] h-[620px] rounded-full border border-white/[0.05] pointer-events-none" />

      {/* Main Grid: Left Name & Title | Right Contacts, Mini Nav & Site Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12 sm:mb-16">
        
        {/* Left Column: Massive Author Typography (Exact replica of Nikita Khvatov style) */}
        <div className="lg:col-span-7 flex flex-col justify-end">
          {/* First Name */}
          <h2 className="text-[64px] sm:text-[88px] md:text-[104px] lg:text-[116px] font-bold text-white tracking-tight leading-[0.9] font-sans">
            {personal.firstName}
          </h2>

          {/* Subtitle & Last Name Row */}
          <div className="flex items-baseline gap-6 sm:gap-10 mt-2 sm:mt-4 flex-wrap">
            <div className="flex flex-col leading-snug">
              <span className="text-[14px] sm:text-[15px] text-[#8e929c] font-normal">
                {t('contact.role1', 'Full-stack')}
              </span>
              <span className="text-[14px] sm:text-[15px] text-[#8e929c] font-normal">
                {t('contact.role2', 'MERN')}
              </span>
              <span className="text-[14px] sm:text-[15px] text-[#8e929c] font-normal">
                {t('contact.role3', 'developer')}
              </span>
            </div>

            <h2 className="text-[64px] sm:text-[88px] md:text-[104px] lg:text-[116px] font-bold text-white tracking-tight leading-[0.9] font-sans">
              {personal.lastName}
            </h2>
          </div>
        </div>

        {/* Right Column: /Contacts, Mini Nav & Site Info Bento Box */}
        <div className="lg:col-span-5 flex flex-col lg:items-end gap-6">
          <div className="w-full max-w-sm flex flex-col gap-4">
            
            {/* ... /Contacts ... Header */}
            <span className="font-mono text-sm text-[#8e929c] tracking-wider">
              {t('contact.header', '... /Contacts ...')}
            </span>

            {/* Mini Nav Links */}
            <div className="flex items-center gap-5 sm:gap-7 text-[13px] text-[#8e929c] flex-wrap">
              <a href="#home" className="hover:text-white transition-colors">{t('contact.mainNav', 'Main')}</a>
              <a href="#about" className="hover:text-white transition-colors">{t('nav.about', 'About')}</a>
              <a href="#credentials" className="hover:text-white transition-colors">{t('nav.credentials', 'Credentials')}</a>
              <a href="#projects" className="hover:text-white transition-colors">{t('nav.projects', 'Projects')}</a>
              <a href="#accomplishments" className="hover:text-white transition-colors">{t('nav.accomplishments', 'Accomplishments')}</a>
            </div>

            {/* Site Info Card */}
            <div className="rounded-[24px] p-6 bg-[#121316] border border-white/10 hover:border-white/20 transition-all shadow-lg mt-1">
              <h3 className="font-semibold text-white text-[15px] mb-2.5">
                {t('contact.siteTitle', 'Site')}
              </h3>
              <div className="flex flex-col gap-1 text-[13px] text-[#8e929c] leading-relaxed font-sans">
                <span>{t('contact.siteLine1', 'Handcrafted by ME /')}</span>
                <span>{t('contact.siteLine2', 'Designed by Tushar /')}</span>
                <span>{t('contact.siteLine3', 'Powered by React & Tailwind')}</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Horizontal Social Pills Row (Exact 6 pills matching reference image) */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-6 border-t border-white/10">
        
        {/* 1. Github */}
        <a
          href="https://github.com/tusr23"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#131418] border border-white/10 hover:border-white/30 text-xs sm:text-[13px] text-[#9ca0aa] hover:text-white transition-all transform hover:-translate-y-0.5"
        >
          <Github size={14} className="fill-current" />
          <span>Github</span>
        </a>

        {/* 2. in Linkedin */}
        <a
          href="https://www.linkedin.com/in/tusr23/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#131418] border border-white/10 hover:border-white/30 text-xs sm:text-[13px] text-[#9ca0aa] hover:text-white transition-all transform hover:-translate-y-0.5"
        >
          <span className="font-bold text-xs lowercase">in</span>
          <span>Linkedin</span>
        </a>

        {/* 3. E-mail (Click copies email with instant feedback) */}
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#131418] border border-white/10 hover:border-white/30 text-xs sm:text-[13px] text-[#9ca0aa] hover:text-white transition-all transform hover:-translate-y-0.5 cursor-pointer"
        >
          <Mail size={14} />
          <span>{copied ? t('contact.copied', 'Email Copied!') : 'E-mail'}</span>
        </button>

        {/* 4. X (Twitter) */}
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

        {/* 5. Instagram */}
        <a
          href="https://www.instagram.com/tusr.ptel"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#131418] border border-white/10 hover:border-white/30 text-xs sm:text-[13px] text-[#9ca0aa] hover:text-white transition-all transform hover:-translate-y-0.5"
        >
          <Instagram size={14} />
          <span>Instagram</span>
        </a>

      </div>
    </section>
  );
}
