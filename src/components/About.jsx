import React from 'react';
import { ArrowUpRight, Github, Linkedin, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, data, language } = useLanguage();
  const { personal, bentoSkills } = data;

  return (
    <section id="about" className="py-20 sm:py-28 relative select-none">
      {/* Delicate Sweeping Background Wireframe Circles (Matching reference design) */}
      <div className="absolute top-1/2 -right-36 -translate-y-1/2 w-[680px] h-[680px] rounded-full border border-white/[0.05] pointer-events-none" />
      <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-white/[0.035] pointer-events-none" />

      {/* Top Header / Divider */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 mb-12 sm:mb-16 border-b border-white/10">
        <span className="font-mono text-sm text-[#8e929c] tracking-wider flex-shrink-0 pt-1">
          {t('about.header', '... /About me ...')}
        </span>

        <div className="text-right max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-[26px] text-white leading-snug font-normal">
            {language === 'hi' ? (
              <>
                मैं एक <span className="font-serif italic font-normal text-white">फुल स्टैक (MERN) डेवलपर</span> हूं, जो आधुनिक, स्केलेबल और उपयोगकर्ता के अनुकूल वेब एप्लिकेशन बनाने के लिए समर्पित हूं।
              </>
            ) : (
              <>
                I'm a <span className="font-serif italic font-normal text-white">Full Stack (MERN) Developer</span> passionate about building modern, scalable, and user-friendly web applications.
              </>
            )}
          </p>
        </div>
      </div>

      {/* Main 2-Column Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* ================= LEFT COLUMN: BENTO SKILL CARDS ================= */}
        <div id="skills" className="lg:col-span-7 flex flex-col gap-5">

          {/* Card 1: Front-end Development (Inverts to White on Hover) */}
          <div className="group rounded-[28px] p-7 sm:p-8 bg-[#121316] hover:bg-white border border-white/10 hover:border-white transition-all duration-300 shadow-xl cursor-default">
            <h3 className="font-semibold text-white group-hover:text-black text-xl sm:text-[22px] mb-3 font-sans transition-colors duration-300">
              {bentoSkills?.frontend?.title || 'Front-end Development'}
            </h3>
            <p className="text-[#8e929c] group-hover:text-black/85 text-xs sm:text-[14px] leading-relaxed font-sans font-medium transition-colors duration-300">
              {bentoSkills?.frontend?.tags}
            </p>
          </div>

          {/* Card 2: Developer Tools (Inverts to White on Hover) + Separate GitHub & LinkedIn Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            {/* Reduced Width Developer Tools Box */}
            <div className="group flex-1 max-w-[390px] rounded-[28px] p-6 sm:p-7 bg-[#121316] hover:bg-white border border-white/10 hover:border-white transition-all duration-300 shadow-xl cursor-default">
              <h3 className="font-semibold text-white group-hover:text-black text-lg mb-2 transition-colors duration-300">
                {bentoSkills?.tools?.title || 'Developer Tools'}
              </h3>
              <p className="text-[#8e929c] group-hover:text-black/85 text-xs sm:text-[13.5px] leading-relaxed transition-colors duration-300">
                {bentoSkills?.tools?.tags}
              </p>
            </div>

            {/* Standalone Badges Row: GitHub + LinkedIn + CV */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 flex-wrap sm:flex-nowrap">
              {/* GitHub Dual Badge */}
              <a
                href="https://github.com/tusr23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center -space-x-2.5 group cursor-pointer select-none"
                aria-label="View Tushar's GitHub Profile"
                title="GitHub Profile"
              >
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-[#16171d] border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:-translate-x-1">
                  <Github size={18} className="fill-current" />
                </div>
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
                  <ArrowUpRight size={20} className="stroke-[2.2]" />
                </div>
              </a>

              {/* LinkedIn Dual Badge (Right side of GitHub) */}
              <a
                href="https://www.linkedin.com/in/tusr23/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center -space-x-2.5 group cursor-pointer select-none"
                aria-label="View Tushar's LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-[#16171d] border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:-translate-x-1">
                  <Linkedin size={18} className="fill-current" />
                </div>
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white text-black group-hover:bg-[#0a66c2] group-hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1">
                  <ArrowUpRight size={20} className="stroke-[2.2]" />
                </div>
              </a>

              {/* CV / Resume Dual Badge (Right side of LinkedIn) */}
              <a
                href="assets/pdf/Tushar-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center -space-x-2.5 group cursor-pointer select-none"
                aria-label={t('about.cvAria', "View / Download Resume (CV)")}
                title={t('about.cvAria', "View / Download Resume (CV)")}
              >
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-[#16171d] border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:-translate-x-1">
                  <FileText size={17} className="stroke-[2.2]" />
                </div>
                <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white text-black group-hover:bg-amber-300 group-hover:text-black flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1">
                  <ArrowUpRight size={20} className="stroke-[2.2]" />
                </div>
              </a>
            </div>
          </div>

          {/* Card 3: Back-end Development (Inverts to White on Hover) */}
          <div className="group rounded-[28px] p-6 sm:p-7 bg-[#121316] hover:bg-white border border-white/10 hover:border-white transition-all duration-300 shadow-xl cursor-default">
            <h3 className="font-semibold text-white group-hover:text-black text-lg mb-2 transition-colors duration-300">
              {bentoSkills?.backend?.title || 'Back-end Development'}
            </h3>
            <p className="text-[#8e929c] group-hover:text-black/85 text-xs sm:text-[13.5px] leading-relaxed transition-colors duration-300">
              {bentoSkills?.backend?.tags}
            </p>
          </div>

          {/* Card 4: Split Row (Favorite technologies note on left, DevOps card on right) */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            {/* Note */}
            <div className="sm:col-span-5 pr-2">
              <p className="text-xs sm:text-[13px] text-[#7e828d] leading-relaxed">
                {language === 'hi' ? (
                  <>
                    मेरी पसंदीदा <span className="italic text-gray-300 font-medium">तकनीकें, टूल्स और कौशल</span> जिन पर मैंने काम किया है
                  </>
                ) : (
                  <>
                    Some of my <span className="italic text-gray-300 font-medium">favorite technologies, topics, or tools</span> that I worked with
                  </>
                )}
              </p>
            </div>

            {/* Core Components Card (Inverts to White on Hover) */}
            <div className="group sm:col-span-7 rounded-[26px] p-6 bg-[#121316] hover:bg-white border border-white/10 hover:border-white transition-all duration-300 shadow-xl cursor-default">
              <h3 className="font-semibold text-white group-hover:text-black text-base mb-2 transition-colors duration-300">
                {bentoSkills?.coreComponents?.title || 'Core Components'}
              </h3>
              <p className="text-[#8e929c] group-hover:text-black/85 text-xs sm:text-[13px] leading-relaxed transition-colors duration-300">
                {bentoSkills?.coreComponents?.tags}
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: PORTRAIT PHOTO CARD ================= */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end relative">
          <div className="w-full max-w-[310px] sm:max-w-[340px] aspect-[3.2/4] rounded-[32px] overflow-hidden bg-[#111216] border border-white/15 hover:border-white/35 shadow-2xl relative group flex items-end justify-center cursor-pointer transition-all duration-500">
            {/* Subtle atmospheric ambient glow behind the cutout */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-[#16171d]/60 to-transparent pointer-events-none" />

            <img
              src={personal.aboutImg || personal.portraitImg}
              alt={`${personal.firstName} ${personal.lastName}`}
              className="w-auto h-[85%] max-h-full object-contain object-bottom grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-500 relative z-10"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
