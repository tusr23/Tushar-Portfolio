import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t, data } = useLanguage();
  const { personal } = data;

  const currentLangLabel = language === 'hi' ? 'हिन्दी' : 'English';

  const languages = [
    { label: 'English', code: 'en' },
    { label: 'हिन्दी', code: 'hi' }
  ];

  return (
    <footer className="w-full border-t border-white/10 py-5 sm:py-6 mt-16 select-none text-xs text-[#8e929c]">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left Side: All rights reserved */}
        <div className="flex items-center gap-2">
          <span className="text-[#8e929c] text-xs">
            &copy; {new Date().getFullYear()} {personal.firstName} {personal.lastName}. {t('footer.rights', 'All rights reserved.')}
          </span>
        </div>

        {/* Right Side: Language & Do not sell or share my personal information */}
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end text-[11px] sm:text-xs">
          
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="inline-flex items-center gap-1.5 text-[#8e929c] hover:text-white transition-colors cursor-pointer"
              aria-label="Select Language"
            >
              <Globe size={13} />
              <span>{currentLangLabel}</span>
              <ChevronDown size={11} className={`transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute right-0 bottom-full mb-2 bg-[#14151a] border border-white/10 rounded-xl p-2 shadow-2xl z-50 min-w-[130px] flex flex-col gap-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setLangOpen(false);
                    }}
                    className={`text-left px-3 py-1 rounded-lg text-xs hover:bg-white/10 transition-colors ${
                      language === l.code ? 'text-white font-semibold' : 'text-gray-400'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Do not sell or share my personal information */}
          <a 
            href="#contact" 
            className="hover:text-white transition-colors text-[#8e929c]"
          >
            {t('footer.privacy', 'Do not sell or share my personal information')}
          </a>
        </div>

      </div>
    </footer>
  );
}
