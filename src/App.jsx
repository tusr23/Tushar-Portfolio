import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import Preloader from './components/Preloader';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function MainContent() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [loading, setLoading] = useState(true);
  const { data } = useLanguage();

  const selectedProject = data.projects.find(
    (p) => p.id === selectedProjectId
  );

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#9da3af] relative selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* ONTO-inspired signature TUSHAR Preloader */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* Full Screen Content Container (Edge-to-edge layout without bounding round line) */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 py-4 sm:py-6">
        {/* Navigation Bar */}
        <Navbar />

        {/* All Main Sections in Sequence */}
        <main>
          <Hero />
          <About />
          <Work />
          <Projects onOpenCaseStudy={(id) => setSelectedProjectId(id)} />
          <Articles onOpenCaseStudy={(id) => setSelectedProjectId(id)} />
          <Contact />
        </main>

        {/* Adobe Footer Bar */}
        <Footer />
      </div>

      {/* Deep-Dive Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
