import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, data } = useLanguage();
  const { personal } = data;

  return (
    <header className="w-full relative z-30 pt-4 pb-2">
      <nav className="flex items-center justify-between">
        {/* Brand: Stacked Name (Exact Nikita Khvatov style) */}
        <a href="#home" className="flex flex-col leading-tight select-none group">
          <span className="text-white font-medium text-[15px] sm:text-[16px] tracking-tight group-hover:text-gray-300 transition-colors">
            {personal.firstName}
          </span>
          <span className="text-white font-medium text-[15px] sm:text-[16px] tracking-tight group-hover:text-gray-300 transition-colors">
            {personal.lastName}
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-7 sm:gap-10">
          <a 
            href="#about" 
            className="text-[13px] sm:text-[14px] text-[#8e929c] hover:text-white transition-colors"
          >
            {t('nav.about', 'About')}
          </a>
          <a 
            href="#credentials" 
            className="text-[13px] sm:text-[14px] text-[#8e929c] hover:text-white transition-colors"
          >
            {t('nav.credentials', 'Credentials')}
          </a>
          <a 
            href="#projects" 
            className="text-[13px] sm:text-[14px] text-[#8e929c] hover:text-white transition-colors"
          >
            {t('nav.projects', 'Projects')}
          </a>
          <a 
            href="#accomplishments" 
            className="text-[13px] sm:text-[14px] text-[#8e929c] hover:text-white transition-colors"
          >
            {t('nav.accomplishments', 'Accomplishments')}
          </a>
          <a 
            href="#contact" 
            className="text-[13px] sm:text-[14px] text-[#8e929c] hover:text-white transition-colors"
          >
            {t('nav.contacts', 'Contacts')}
          </a>
        </div>

        {/* Right Language Toggle: En / हि */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-sans select-none text-[13px]">
            <button 
              onClick={() => setLanguage('en')} 
              className={`font-medium transition-colors cursor-pointer px-1 py-0.5 rounded ${language === 'en' ? 'text-white font-bold' : 'text-[#6e727c] hover:text-gray-300'}`}
              aria-label="Switch to English"
            >
              En
            </button>
            <span className="text-[#6e727c] text-xs">/</span>
            <button 
              onClick={() => setLanguage('hi')} 
              className={`font-medium transition-colors cursor-pointer px-1 py-0.5 rounded ${language === 'hi' ? 'text-white font-bold' : 'text-[#6e727c] hover:text-gray-300'}`}
              aria-label="Switch to Hindi"
            >
              हि
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1 rounded hover:bg-white/10"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 bg-[#121318]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-gray-300 hover:text-white py-1"
          >
            {t('nav.about', 'About')}
          </a>
          <a 
            href="#credentials" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-gray-300 hover:text-white py-1"
          >
            {t('nav.credentials', 'Credentials')}
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-gray-300 hover:text-white py-1"
          >
            {t('nav.projects', 'Projects')}
          </a>
          <a 
            href="#accomplishments" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-gray-300 hover:text-white py-1"
          >
            {t('nav.accomplishments', 'Accomplishments')}
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-base text-gray-300 hover:text-white py-1"
          >
            {t('nav.contacts', 'Contacts')}
          </a>
        </div>
      )}
    </header>
  );
}
