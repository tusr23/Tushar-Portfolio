import React from 'react';
import { ArrowRight, ArrowUpRight, Github, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Reusable 3-Device Hardware Mockup (Desktop iMac + Tablet iPad + Smartphone iPhone)
 * matching the uploaded horizontal studio device presentation style.
 */
function DeviceShowcase({ pcImg, tabImg, mobileImg, title, accentClass, imgPos = 'object-top', onClick, hoverText }) {
  return (
    <div
      onClick={onClick}
      className="relative w-full max-w-[660px] aspect-[16/10] cursor-pointer group select-none"
    >

      {/* 1. DESKTOP MONITOR (iMac — Center-Right Background) */}
      <div className="absolute left-[22%] right-[6%] top-[3%] bottom-[10%] z-10 flex flex-col items-center transition-transform duration-500 group-hover:scale-[1.015]">
        {/* Monitor Screen + Black Bezel */}
        <div className="w-full h-[76%] rounded-t-xl sm:rounded-t-2xl bg-[#0b0c10] p-[2.2%] border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Webcam dot */}
          <div className="absolute top-[1.2%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/20 z-20" />
          <div className="w-full h-full rounded-sm overflow-hidden bg-[#06070a] relative">
            <img
              src={pcImg}
              alt={`${title} Desktop PC Screen`}
              className={`w-full h-full object-cover ${imgPos}`}
            />
            {/* Diagonal glass glare */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.12]"
              style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 70% 100%)' }}
            />
          </div>
        </div>

        {/* Aluminum Chin */}
        <div className="w-full h-[10%] rounded-b-xl sm:rounded-b-2xl bg-gradient-to-b from-[#d9dde4] via-[#c3c8d1] to-[#9fa6b2] border-x border-b border-white/30 flex items-center justify-center shadow-lg">
          <div className="w-2 h-2 rounded-full bg-black/20" />
        </div>

        {/* Aluminum Neck */}
        <div
          className="w-[22%] h-[11%] bg-gradient-to-b from-[#7f8694] via-[#cfd4dc] to-[#aeb5c2] shadow-md"
          style={{ clipPath: 'polygon(12% 0, 88% 0, 100% 100%, 0% 100%)' }}
        />

        {/* Aluminum Stand Base */}
        <div className="w-[30%] h-[3%] rounded-full bg-gradient-to-r from-[#8d94a1] via-[#e2e6ec] to-[#8d94a1] shadow-[0_8px_20px_rgba(0,0,0,0.9)]" />
      </div>

      {/* 2. TABLET (iPad — Front Left) */}
      <div className="absolute left-[2%] bottom-[8%] w-[40%] aspect-[4/3] z-20 transition-transform duration-500 group-hover:-translate-y-1">
        {/* Ground shadow */}
        <div className="absolute -bottom-3 inset-x-3 h-4 bg-black/80 blur-md rounded-full pointer-events-none" />
        {/* Bezel */}
        <div className="w-full h-full rounded-[12px] sm:rounded-[16px] bg-[#0d0e13] px-[4.5%] py-[3.8%] border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative flex items-center">
          {/* Front camera */}
          <div className="absolute left-[2%] top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/25" />
          {/* Home button */}
          <div className="absolute right-[1.6%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full border border-white/20" />
          <div className="w-full h-full rounded-[3px] overflow-hidden bg-[#06070a] relative">
            <img
              src={tabImg}
              alt={`${title} Tablet Screen`}
              className={`w-full h-full object-cover ${imgPos}`}
            />
            {/* Diagonal glass glare */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.14]"
              style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 65% 100%)' }}
            />
          </div>
        </div>
      </div>

      {/* 3. SMARTPHONE (iPhone — Front Right, 350x800 aspect-[7/16]) */}
      <div className="absolute right-[2%] bottom-[7%] w-[16.5%] aspect-[7/16] z-30 transition-transform duration-500 group-hover:-translate-y-1.5">
        {/* Ground shadow */}
        <div className="absolute -bottom-3 inset-x-1 h-4 bg-black/85 blur-md rounded-full pointer-events-none" />
        {/* Bezel */}
        <div className="w-full h-full rounded-[14px] sm:rounded-[18px] bg-[#0d0e13] px-[6%] py-[13%] border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.95)] relative flex flex-col">
          {/* Speaker & camera */}
          <div className="absolute top-[5.5%] left-1/2 -translate-x-1/2 flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-white/25" />
            <div className="w-4 h-[2px] rounded-full bg-white/25" />
          </div>
          {/* Screen */}
          <div className="w-full h-full rounded-[2px] overflow-hidden bg-[#06070a] relative">
            <img
              src={mobileImg}
              alt={`${title} Mobile Screen`}
              className={`w-full h-full object-cover ${imgPos}`}
            />
            {/* Diagonal glass glare */}
            <div
              className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.15]"
              style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 65% 100%)' }}
            />
          </div>
          {/* Home button */}
          <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border border-white/20" />
        </div>
      </div>

      {/* Hover Action Pill */}
      <div className="absolute top-3 right-3 z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-[11px] font-mono text-white/90 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-xl">
          <Layers size={12} className={accentClass} />
          <span>{hoverText || "Live Project Demonstration • PC • Tablet • Mobile"}</span>
        </span>
      </div>
    </div>
  );
}

export default function Projects({ onOpenCaseStudy }) {
  const { t, data } = useLanguage();
  const { projects } = data;

  // The 3 signature showcased projects
  const p1 = projects[0] || {}; // TwinMarket AI
  const p2 = projects.find((p) => p.id === 'spotify-clone') || projects[8] || {}; // Spotify Web Player Clone
  const p3 = projects[2] || {}; // Aura Analog Clock / Chronograph

  return (
    <section id="projects" className="py-24 sm:py-32 relative select-none">
      <div className="w-full">
        {/* ================= EDITORIAL TOP DIVIDER ================= */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 mb-16 sm:mb-24 border-b border-white/10">
          <span className="font-mono text-sm text-[#8e929c] tracking-wider flex-shrink-0 pt-1">
            {t('projects.header', '... /Projects ...')}
          </span>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-3xl leading-snug font-normal">
            {t('projects.headline', 'Curated showcase of full-stack web applications, tools & creative software engineering.')}
          </p>
        </div>

        {/* ================= 3 SIGNATURE MULTI-DEVICE SHOWCASES ================= */}
        <div className="space-y-36 sm:space-y-44">

          {/* ---------------- PROJECT 1: TWINMARKET AI (Text Left, Devices Right) ---------------- */}
          <div className="relative">
            {/* Ambient Background Cosmic Orbit Arcs */}
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-white/[0.04] pointer-events-none" />
            <div className="absolute top-1/2 right-12 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/[0.03] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Project Info */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-mono text-xs text-[#8e929c] tracking-wider mb-3 block">
                  {t('projects.header', '... /Projects ...')}
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight mb-5 font-sans">
                  {p1.title?.split('—')[0]?.trim() || "TwinMarket AI"}
                </h3>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['React.js', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'AI Advisor', 'Simulation'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full bg-[#16171d] border border-white/10 text-xs sm:text-sm font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Editorial Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 italic font-sans">
                  {t('projects.p1Desc', 'TwinMarket AI — a virtual market intelligence & business simulation platform built to test pricing strategies, model customer demand, and track revenue and profit margins in real time.')}
                </p>
                <p className="text-[#8e929c] text-xs sm:text-sm leading-relaxed mb-8">
                  {t('projects.p1Features', 'Includes an interactive Pricing Simulator, Competitor Intelligence, Inventory Management, Risk Analysis, and an AI Business Advisor for what-if scenario forecasting.')}
                </p>

                {/* Actions: Case study link + Overlapping Dual-Circle Badge */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10 max-w-md">
                  <a
                    href={p1.liveUrl || 'https://twin-market.vercel.app'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-400 hover:text-white font-mono flex items-center gap-1.5 cursor-pointer py-1 group/cs transition-colors"
                  >
                    <span>{t('projects.liveDemo', 'Live Project Demonstration')}</span>
                    <span className="group-hover/cs:translate-x-1 transition-transform">&rarr;</span>
                  </a>

                  {/* Overlapping Dual-Circle Badge */}
                  <div className="flex items-center -space-x-2.5 group/btn cursor-pointer select-none">
                    <a
                      href={p1.githubUrl || 'https://github.com/tusr23/TwinMarket'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-[#16171d] border border-white/20 hover:border-white/40 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover/btn:-translate-x-1"
                      aria-label="GitHub Repository"
                      title="GitHub Repository"
                    >
                      <Github size={18} className="fill-current" />
                    </a>
                    <a
                      href={p1.liveUrl || 'https://twin-market.vercel.app'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:translate-x-1"
                      aria-label="Live Demo"
                      title="Live Demo"
                    >
                      <ArrowUpRight size={20} className="stroke-[2.2]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: 3-Device Hardware Showcase */}
              <div className="lg:col-span-7 relative flex items-center justify-center">
                <DeviceShowcase
                  pcImg="assets/img/p1-pc.png"
                  tabImg="assets/img/p1-tab.png"
                  mobileImg="assets/img/p1-mobile.png"
                  title="TwinMarket AI"
                  accentClass="text-amber-400"
                  hoverText={t('projects.hoverAction', 'Live Project Demonstration • PC • Tablet • Mobile')}
                  onClick={() => window.open(p1.liveUrl || 'https://twin-market.vercel.app', '_blank', 'noopener,noreferrer')}
                />
              </div>
            </div>
          </div>


          {/* ---------------- PROJECT 2: SPOTIFY CLONE (Devices Left, Text Right — Alternating!) ---------------- */}
          <div className="relative">
            {/* Ambient Background Cosmic Orbit Arc */}
            <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-white/[0.04] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: 3-Device Hardware Showcase */}
              <div className="lg:col-span-7 lg:order-1 relative flex items-center justify-center">
                <DeviceShowcase
                  pcImg="assets/img/p2-spotify-pc.png"
                  tabImg="assets/img/p2-spotify-tab.png"
                  mobileImg="assets/img/p2-spotify-mobile.png"
                  title="Spotify Web Player Clone"
                  accentClass="text-emerald-400"
                  hoverText={t('projects.hoverAction', 'Live Project Demonstration • PC • Tablet • Mobile')}
                  onClick={() => window.open(p2.liveUrl || 'https://spotify-clone-gules-tau.vercel.app/', '_blank', 'noopener,noreferrer')}
                />
              </div>

              {/* Right Column: Project Info */}
              <div className="lg:col-span-5 lg:order-2 flex flex-col justify-center">
                <span className="font-mono text-xs text-[#8e929c] tracking-wider mb-3 block">
                  {t('projects.header', '... /Projects ...')}
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight mb-5 font-sans">
                  {p2.title?.split('—')[0]?.trim() || "Spotify Web Player"}
                </h3>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['HTML5', 'CSS3', 'JavaScript', 'Web Audio API', 'Playlists', 'Responsive'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full bg-[#16171d] border border-white/10 text-xs sm:text-sm font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Editorial Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 italic font-sans">
                  {t('projects.p2Desc', 'Spotify Web Player Clone — a sleek dark-mode music streaming web app built with the Web Audio API, featuring curated playlists, featured song banners, and real-time search.')}
                </p>
                <p className="text-[#8e929c] text-xs sm:text-sm leading-relaxed mb-8">
                  {t('projects.p2Features', 'Includes a full playback bar with play/pause, next/previous track switching, shuffle & repeat toggles, interactive timeline scrubber, volume slider, and Favorites library management.')}
                </p>

                {/* Actions: Live Project Demonstration + Overlapping Dual-Circle Badge */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10 max-w-md">
                  <a
                    href={p2.liveUrl || 'https://spotify-clone-gules-tau.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-400 hover:text-white font-mono flex items-center gap-1.5 cursor-pointer py-1 group/cs transition-colors"
                  >
                    <span>{t('projects.liveDemo', 'Live Project Demonstration')}</span>
                    <span className="group-hover/cs:translate-x-1 transition-transform">&rarr;</span>
                  </a>

                  {/* Overlapping Dual-Circle Badge */}
                  <div className="flex items-center -space-x-2.5 group/btn cursor-pointer select-none">
                    <a
                      href={p2.githubUrl || 'https://github.com/tusr23/Spotify-Clone'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-[#16171d] border border-white/20 hover:border-white/40 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover/btn:-translate-x-1"
                      aria-label="GitHub Repository"
                      title="GitHub Repository"
                    >
                      <Github size={18} className="fill-current" />
                    </a>
                    <a
                      href={p2.liveUrl || 'https://spotify-clone-gules-tau.vercel.app/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:translate-x-1"
                      aria-label="Live Demo"
                      title="Live Demo"
                    >
                      <ArrowUpRight size={20} className="stroke-[2.2]" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* ---------------- PROJECT 3: AURA CHRONOGRAPH (Text Left, Devices Right) ---------------- */}
          <div className="relative">
            {/* Ambient Background Cosmic Orbit Arc */}
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-white/[0.04] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Project Info */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <span className="font-mono text-xs text-[#8e929c] tracking-wider mb-3 block">
                  {t('projects.header', '... /Projects ...')}
                </span>

                <h3 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight mb-5 font-sans">
                  {p3.title?.split('—')[0]?.trim() || "Aura Chronograph"}
                </h3>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['HTML5', 'CSS3', 'JavaScript', 'requestAnimationFrame', '60 FPS', 'World Clocks'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-full bg-[#16171d] border border-white/10 text-xs sm:text-sm font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Editorial Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 italic font-sans">
                  {t('projects.p3Desc', 'Aura Chronograph — an interactive world time & analog clock web app engineered with continuous 60 FPS sweeping second-hand motion and real-time timezone synchronization.')}
                </p>
                <div className="text-[#8e929c] text-xs sm:text-sm leading-relaxed mb-8 space-y-1.5">
                  <p className="font-semibold text-gray-300">{t('projects.p3FeaturesTitle', 'Key Features:')}</p>
                  <p>&bull; {t('projects.p3Feature1', 'Live local time readout with automatic timezone detection.')}</p>
                  <p>&bull; {t('projects.p3Feature2', 'World Clocks panel tracking 6 global timezones side by side.')}</p>
                  <p>&bull; {t('projects.p3Feature3', 'Switchable dial themes (Cyber, Rose Gold, Stealth) with smooth CSS glow.')}</p>
                </div>

                {/* Actions: Case study link + Overlapping Dual-Circle Badge */}
                <div className="flex items-center justify-between pt-5 border-t border-white/10 max-w-md">
                  <a
                    href={p3.liveUrl || 'https://analog-clock-delta-vert.vercel.app/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-400 hover:text-white font-mono flex items-center gap-1.5 cursor-pointer py-1 group/cs transition-colors"
                  >
                    <span>{t('projects.liveDemo', 'Live Project Demonstration')}</span>
                    <span className="group-hover/cs:translate-x-1 transition-transform">&rarr;</span>
                  </a>

                  {/* Overlapping Dual-Circle Badge */}
                  <div className="flex items-center -space-x-2.5 group/btn cursor-pointer select-none">
                    <a
                      href={p3.githubUrl || 'https://github.com/tusr23/analog-clock'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-[#16171d] border border-white/20 hover:border-white/40 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover/btn:-translate-x-1"
                      aria-label="GitHub Repository"
                      title="GitHub Repository"
                    >
                      <Github size={18} className="fill-current" />
                    </a>
                    <a
                      href={p3.liveUrl || 'https://analog-clock-delta-vert.vercel.app/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:translate-x-1"
                      aria-label="Live Demo"
                      title="Live Demo"
                    >
                      <ArrowUpRight size={20} className="stroke-[2.2]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: 3-Device Hardware Showcase */}
              <div className="lg:col-span-7 relative flex items-center justify-center">
                <DeviceShowcase
                  pcImg="assets/img/p3-pc.png"
                  tabImg="assets/img/p3-tab.png"
                  mobileImg="assets/img/p3-mobile.png"
                  title="Aura Chronograph"
                  accentClass="text-sky-400"
                  imgPos="object-center"
                  hoverText={t('projects.hoverAction', 'Live Project Demonstration • PC • Tablet • Mobile')}
                  onClick={() => window.open(p3.liveUrl || 'https://analog-clock-delta-vert.vercel.app/', '_blank', 'noopener,noreferrer')}
                />
              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM-RIGHT ALL PROJECTS BUTTON ================= */}
        <div className="mt-20 flex justify-end">
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <a
              href="https://github.com/tusr23?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-white text-black font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all shadow-xl shadow-white/10 active:scale-95 cursor-pointer"
            >
              {t('projects.allProjects', 'All projects')}
            </a>
            <a
              href="https://github.com/tusr23?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 sm:w-13 h-11 sm:h-13 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-all shadow-xl shadow-white/10 active:scale-95 cursor-pointer"
              aria-label="All Projects on GitHub"
            >
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
