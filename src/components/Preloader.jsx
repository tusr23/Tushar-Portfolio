import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('entering'); // 'entering' | 'holding' | 'zooming' | 'complete'
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Progress counter animation from 0 to 100
    let start = performance.now();
    const duration = 1800; // 1.8 seconds loading count

    const updateProgress = (time) => {
      const elapsed = time - start;
      const progressFraction = Math.min(elapsed / duration, 1);
      // Ease out quad for natural counter deceleration near 100
      const current = Math.floor(100 * Math.sin((progressFraction * Math.PI) / 2));
      setProgress(current);

      if (progressFraction < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Start the signature ONTO zoom-through punch-out
        setPhase('zooming');
      }
    };

    const animId = requestAnimationFrame(updateProgress);

    // After zooming completes (~750ms), finish preloader
    const timer = setTimeout(() => {
      setPhase('complete');
      if (onFinish) onFinish();
    }, duration + 850);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timer);
    };
  }, [onFinish]);

  // Allow clicking anywhere to skip
  const handleSkip = () => {
    setPhase('zooming');
    setTimeout(() => {
      setPhase('complete');
      if (onFinish) onFinish();
    }, 450);
  };

  if (phase === 'complete') return null;

  const letters = ['T', 'U', 'S', 'H', 'A', 'R'];

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] bg-[#090a0d] text-white flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ${
        phase === 'zooming' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ cursor: 'pointer' }}
    >
      {/* Background Decorative Cosmic Circles / Ambient glow matching ONTO aesthetic */}
      <div 
        className={`absolute inset-0 pointer-events-none flex items-center justify-center transition-all duration-1000 ${
          phase === 'zooming' ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <div className="w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full border border-white/[0.04] animate-pulse" />
        <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full border border-white/[0.03]" />
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-t from-transparent via-white/[0.015] to-transparent blur-3xl" />
      </div>

      {/* Top Editorial Corner Metadata */}
      <div 
        className={`w-full flex items-center justify-between text-xs font-mono tracking-widest text-[#8e929c] transition-all duration-500 z-10 ${
          phase === 'zooming' ? '-translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <span className="uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-ping inline-block" />
          {language === 'hi' ? 'तुषार पटेल • पोर्टफोलियो' : 'Tushar Patel • 2026'}
        </span>
        <span className="text-white font-bold text-sm tracking-wider tabular-nums">
          {progress.toString().padStart(3, '0')}%
        </span>
      </div>

      {/* Center Stage: ONTO-style Iconic Kinetic Typography */}
      <div className="my-auto flex flex-col items-center justify-center text-center relative z-20">
        
        {/* Subtle Top Kicker ("Design for Disrupters" in ONTO) */}
        <p
          className={`font-mono text-xs sm:text-[13px] tracking-[0.25em] uppercase text-[#737887] mb-3 sm:mb-4 transition-all duration-700 ${
            phase === 'zooming' ? 'opacity-0 scale-90 -translate-y-4' : 'opacity-100 scale-100 translate-y-0'
          }`}
        >
          {language === 'hi' ? 'क्रिएटिव फुल-स्टैक इंजीनियर' : 'Creative Full-stack Engineer'}
        </p>

        {/* The Core Brand Name: T U S H A R */}
        <div
          className={`flex items-center justify-center tracking-[0.16em] sm:tracking-[0.22em] font-sans font-black transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            phase === 'zooming'
              ? 'scale-[8] sm:scale-[12] md:scale-[15] opacity-0 blur-sm'
              : 'scale-100 opacity-100 blur-0'
          }`}
          style={{ willChange: 'transform, opacity, filter' }}
        >
          {letters.map((letter, index) => (
            <div
              key={index}
              className="overflow-hidden inline-block leading-none"
            >
              <span
                className="inline-block transform transition-transform duration-700 text-5xl sm:text-7xl md:text-8xl lg:text-[108px] text-white"
                style={{
                  animation: `ontoLetterReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.08}s both`
                }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        {/* Elegant Serif Subtitle ("The Founder Studio" in ONTO) */}
        <div 
          className={`overflow-hidden mt-3 sm:mt-5 transition-all duration-500 ${
            phase === 'zooming' ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <h2
            className="font-serif italic text-xl sm:text-2xl md:text-3xl text-gray-300 font-normal tracking-wide animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500"
          >
            {language === 'hi' ? 'द फुल-स्टैक डेवलपर' : 'The Full-stack Developer'}
          </h2>
        </div>

        {/* Minimalist animated progress line beneath */}
        <div className="w-36 sm:w-48 h-[1px] bg-white/10 mt-7 sm:mt-9 relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 bottom-0 bg-white transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Bottom Editorial Corner Metadata */}
      <div 
        className={`w-full flex items-center justify-between text-[11px] sm:text-xs font-mono tracking-wider text-[#636875] transition-all duration-500 z-10 ${
          phase === 'zooming' ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <span>
          {language === 'hi' ? 'लोड हो रहा है...' : 'System Initializing...'}
        </span>
        <span className="hidden sm:inline-block text-gray-500">
          Click anywhere or press Esc to skip
        </span>
        <span className="text-gray-400">
          Odisha, India
        </span>
      </div>

      {/* CSS Keyframes for the Kinetic Letter Stagger */}
      <style>{`
        @keyframes ontoLetterReveal {
          0% {
            transform: translateY(115%) rotate(4deg);
            opacity: 0;
            filter: blur(8px);
          }
          100% {
            transform: translateY(0%) rotate(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }
      `}</style>
    </div>
  );
}
