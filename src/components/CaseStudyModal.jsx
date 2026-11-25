import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CaseStudyModal({ project, onClose }) {
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0f14] border border-white/15 p-6 sm:p-10 shadow-2xl flex flex-col gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-indigo-400 font-bold uppercase tracking-widest">
                {project.badge}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-xs uppercase font-bold text-gray-400">
                {project.subtitle}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center text-white transition-colors flex-shrink-0"
            aria-label={t('caseStudy.close', 'Close modal')}
          >
            <X size={20} />
          </button>
        </div>

        {/* Featured Banner Image */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Case Study Overview & Architecture */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t('caseStudy.overview', 'Overview')}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.caseStudy?.overview || project.description}
            </p>
          </div>

          {project.caseStudy?.architecture && (
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t('caseStudy.architecture', 'Architecture & Engineering')}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {project.caseStudy.architecture}
              </p>
            </div>
          )}

          {project.caseStudy?.keyFeatures && (
            <div>
              <h3 className="text-lg font-bold text-white mb-3">
                {t('caseStudy.keyFeatures', 'Key Features')}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.caseStudy.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
              {t('caseStudy.techUsed', 'Technologies Used')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 rounded-md bg-white/[0.05] border border-white/10 text-gray-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-white/10"
            >
              <span>{language === 'hi' ? 'लाइव डेमो खोलें' : 'Open Live Demo'}</span>
              <ExternalLink size={14} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-all"
            >
              <Github size={15} />
              <span>{language === 'hi' ? 'गिटहब रेपो' : 'GitHub Repo'}</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            {language === 'hi' ? 'विंडो बंद करें (Esc)' : 'Close Window (Esc)'}
          </button>
        </div>
      </div>
    </div>
  );
}
