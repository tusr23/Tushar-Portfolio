import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Work() {
  const { t, data } = useLanguage();
  const { workExperience } = data;
  // Default active row matching first education row
  const [activeId, setActiveId] = useState(workExperience[0]?.id || 'college');

  const handleRowClick = (item) => {
    setActiveId(item.id);
    if (item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="credentials" className="py-20 sm:py-28 relative select-none">
      <div id="education" className="sr-only" />
      <div className="w-full">
        {/* Top Header: "Credentials" is aligned to the RIGHT (Exact match to reference style!) */}
        <div className="flex justify-end mb-8 sm:mb-14">
          <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold text-white tracking-tight leading-none">
            {t('credentials.title', 'Credentials')}
          </h2>
        </div>

        {/* Minimalist Editorial Table (Exact columns and borders from reference image) */}
        <div className="flex flex-col border-t border-white/10 w-full">
          {workExperience.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => handleRowClick(item)}
                tabIndex={0}
                className={`w-full grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center py-5 sm:py-6 px-4 sm:px-8 border-b border-white/10 cursor-pointer transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-white text-black shadow-xl'
                    : 'bg-transparent text-white hover:bg-white/[0.04]'
                }`}
              >
                {/* Column 1 (Left): Date & Duration */}
                <div className="md:col-span-3 flex flex-col justify-center">
                  <span className={`text-[14px] sm:text-[15px] font-medium leading-tight ${isActive ? 'text-black' : 'text-white'}`}>
                    {item.datePrimary}
                  </span>
                  <span className={`text-xs mt-0.5 ${isActive ? 'text-black/70' : 'text-[#8e929c]'}`}>
                    {item.dateSecondary}
                  </span>
                </div>

                {/* Column 2 (Center): Institution Name & Location */}
                <div className="md:col-span-4 flex flex-col justify-center">
                  <span className={`text-[15px] sm:text-[16px] font-medium leading-snug ${isActive ? 'text-black font-semibold' : 'text-white'}`}>
                    {item.company}
                  </span>
                  {item.companyTag && (
                    <span className={`text-xs mt-0.5 leading-snug ${isActive ? 'text-black/70' : 'text-[#8e929c]'}`}>
                      {item.companyTag}
                    </span>
                  )}
                </div>

                {/* Column 3 (Right): Degree on line 1, Field/Specialization on next line (Gently pushed right) */}
                <div className="md:col-span-5 flex items-center justify-between md:pl-8 lg:pl-14">
                  <div className="flex flex-col justify-center">
                    <span className={`text-[14px] sm:text-[15px] font-medium leading-snug ${isActive ? 'text-black' : 'text-white'}`}>
                      {item.role}
                    </span>
                    <span className={`text-xs sm:text-[13px] mt-0.5 leading-snug ${isActive ? 'text-black/75' : 'text-[#8e929c]'}`}>
                      {item.stack}
                    </span>
                  </div>

                  {/* Subtle link arrow indicator if link exists */}
                  {item.link && (
                    <span className={`text-sm ml-3 flex-shrink-0 ${isActive ? 'text-black font-semibold' : 'text-gray-500'}`}>
                      ↗
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Right Summary Metric */}
        <div className="flex flex-col items-end text-right mt-6 sm:mt-8 pr-2">
          <span className="text-xs text-[#8e929c] font-sans">
            {t('credentials.academicSummary', 'Academic Credentials')}
          </span>
          <span className="text-sm sm:text-base font-serif italic text-white mt-0.5">
            {t('credentials.academicLevels', 'College • +2 College • Schooling')}
          </span>
        </div>
      </div>
    </section>
  );
}
