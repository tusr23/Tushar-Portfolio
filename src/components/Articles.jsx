import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Articles() {
  const [page, setPage] = useState(1);
  const { t, data, language } = useLanguage();
  const { certificates = [], internshipCertificate } = data;

  // Page 1: Strictly normal certifications (internship certificate completely excluded)
  const normalCertificates = certificates.filter(c => c.id !== 'intern-fullstack');
  
  // Page 2: Only Full-Stack Developer Internship certificate
  const internshipCert = internshipCertificate || {
    id: "intern-fullstack",
    titleLine1: language === 'hi' ? "फुल स्टैक डेवलपर इंटर्न" : "Full Stack Developer Intern",
    titleLine2: language === 'hi' ? "MERN स्टैक इंजीनियरिंग" : "MERN Stack Engineering",
    issuer: "Interntrack",
    badge: language === 'hi' ? "इंटर्नशिप सर्टिफिकेट" : "Internship Certificate",
    year: "2024 - 2025",
    description: language === 'hi'
      ? "उत्पादन-ग्रेड वेब एप्लिकेशन बनाने वाली गहन औद्योगिक इंटर्नशिप पूरी की। Node.js और Express के साथ स्केलेबल RESTful बैकएंड सेवाएं विकसित कीं, MongoDB डेटाबेस स्कीमा डिज़ाइन किए और React में रिस्पॉन्सिव यूजर इंटरफेस बनाए।"
      : "Completed intensive industrial internship building production-grade web applications. Developed scalable RESTful backend services with Node.js and Express, designed MongoDB database schemas, and built responsive, component-driven user interfaces in React.",
    url: "https://drive.google.com/file/d/1yCsbEYH0jGggocAbzEk6RWWiqxcyTC9D/view"
  };

  return (
    <section id="accomplishments" className="py-20 sm:py-28 relative select-none">
      <div id="certificates" className="sr-only" />
      <div className="w-full">
        
        {/* Section Top Header: "Accomplishments" is aligned to the RIGHT (Exact Behance luxury style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 mb-10 sm:mb-14 border-b border-white/10">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-sm text-[#8e929c] tracking-wider">
              {t('accomplishments.header', '... /Accomplishments ...')}
            </span>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-xl font-normal leading-snug">
              {page === 1 
                ? t('accomplishments.page1Intro', "Verified credentials, professional certifications & specialized technical accomplishments.")
                : t('accomplishments.page2Intro', "Professional full-stack software development internship certification.")}
            </p>
          </div>

          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold text-white tracking-tight leading-none text-right">
            {t('accomplishments.title', 'Accomplishments')}
          </h2>
        </div>

        {/* Main Content Area: Left Pagination Column + Right Content Area */}
        <div className="flex items-start gap-6 lg:gap-10">
          
          {/* ================= LEFT VERTICAL PAGINATION ================= */}
          <div className="hidden md:flex flex-col items-center gap-3 pt-4 flex-shrink-0">
            {/* Circle 1: Normal Certificates */}
            <button
              onClick={() => setPage(1)}
              className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all cursor-pointer ${
                page === 1
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-[#121316] border border-white/20 text-white hover:border-white/40'
              }`}
              title={t('accomplishments.normalCertsBtn', "Normal Certifications")}
              aria-label={t('accomplishments.normalCertsBtn', "Go to page 1: Normal Certificates")}
            >
              1
            </button>

            {/* Circle 2: Full-Stack Internship */}
            <button
              onClick={() => setPage(2)}
              className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all cursor-pointer ${
                page === 2
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-[#121316] border border-white/20 text-white hover:border-white/40'
              }`}
              title={t('accomplishments.internshipBtn', "Full-Stack Internship Certificate")}
              aria-label={t('accomplishments.internshipBtn', "Go to page 2: Full-Stack Internship")}
            >
              2
            </button>

            {/* Down Arrow Button */}
            <button
              onClick={() => setPage(page === 1 ? 2 : 1)}
              className="w-9 h-9 rounded-full bg-[#121316] border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer"
              aria-label="Toggle page"
            >
              <ArrowDown size={14} />
            </button>
          </div>

          {/* ================= RIGHT CONTENT AREA ================= */}
          {page === 1 ? (
            /* ================= PAGE 1: 3 NORMAL CERTIFICATES GRID (4th box deleted) ================= */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              {normalCertificates.slice(0, 3).map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-[26px] bg-[#121316] border border-white/10 p-6 sm:p-7 flex flex-col justify-between hover:border-white/25 transition-all duration-300 transform hover:-translate-y-1 shadow-lg group"
                >
                  <div>
                    {/* Top Badges Row */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#8e929c] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        {cert.badge || cert.issuer}
                      </span>
                      <span className="text-xs font-mono text-gray-500">
                        {cert.year}
                      </span>
                    </div>

                    {/* Certificate Title */}
                    <h3 className="font-bold text-white text-lg sm:text-[19px] leading-snug mb-2 font-sans">
                      {cert.titleLine1} <br />
                      <span className="text-gray-400 font-normal text-sm sm:text-base">{cert.titleLine2}</span>
                    </h3>

                    {/* Certificate Description */}
                    <p className="text-[#8e929c] text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                      {cert.description}
                    </p>
                  </div>

                  {/* Card Actions Footer: Accomplishment link on Left | Overlapping Dual-Circle Badge on Right */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-white group-hover:text-white transition-colors font-mono flex items-center gap-1 cursor-pointer py-1"
                    >
                      <span>{t('accomplishments.title', 'Accomplishment')}</span>
                      <span>&rarr;</span>
                    </a>

                    {/* Overlapping Dual-Circle Badge (Exact style as GitHub in About section) */}
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center -space-x-2.5 group/btn cursor-pointer select-none"
                      aria-label={`View ${cert.titleLine1} Certificate`}
                      title={t('accomplishments.viewCredential', 'View Credential')}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#16171d] border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover/btn:-translate-x-1">
                        <Award size={17} className="text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:translate-x-1">
                        <ArrowUpRight size={18} className="stroke-[2.2]" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ================= PAGE 2: ONLY FULL-STACK INTERNSHIP CERTIFICATE ================= */
            <div className="w-full">
              <div className="rounded-[28px] bg-[#121316] border border-white/15 p-8 sm:p-10 flex flex-col justify-between shadow-2xl transition-all relative overflow-hidden group">
                <div className="relative z-10">
                  {/* Top Badges Row */}
                  <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono uppercase tracking-wider text-white px-3.5 py-1 rounded-full bg-white/10 border border-white/15 font-semibold">
                        {language === 'hi' ? "फुल-स्टैक इंटर्नशिप" : "Full-Stack Internship"}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#8e929c] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                        Interntrack
                      </span>
                    </div>
                    <span className="text-xs font-mono text-gray-400">
                      {internshipCert.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 font-sans">
                    {internshipCert.titleLine1}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 font-normal mb-5">
                    {internshipCert.titleLine2} &bull; {language === 'hi' ? "औद्योगिक वेब विकास प्रशिक्षण" : "Industrial Web Development Training"}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "JavaScript (ES6+)", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Detailed Description */}
                  <p className="text-[#8e929c] text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
                    {internshipCert.description}
                  </p>
                </div>

                {/* Card Actions Footer: Internship credential on Left | Overlapping Dual-Circle Badge on Right */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4 relative z-10">
                  <a
                    href={internshipCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                  >
                    <span>{t('accomplishments.internshipBtn', 'Internship Certificate')}</span>
                    <span>&rarr;</span>
                  </a>

                  <div className="flex items-center gap-4">
                    <span className="hidden sm:inline text-xs font-mono text-gray-500">
                      {language === 'hi' ? "सत्यापित गूगल ड्राइव दस्तावेज़" : "Verified Google Drive Document"}
                    </span>

                    {/* Overlapping Dual-Circle Badge (Exact style as GitHub in About section) */}
                    <a
                      href={internshipCert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center -space-x-2.5 group/btn cursor-pointer select-none"
                      aria-label="View Internship Certificate"
                      title={t('accomplishments.viewCredential', 'View Credential')}
                    >
                      <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-[#16171d] border border-white/20 flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover/btn:-translate-x-1">
                        <Award size={18} className="text-white" />
                      </div>
                      <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:translate-x-1">
                        <ArrowUpRight size={20} className="stroke-[2.2]" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Mobile Page Indicator */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setPage(1)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              page === 1 ? 'bg-white text-black' : 'bg-white/10 text-white'
            }`}
          >
            1
          </button>
          <button
            onClick={() => setPage(2)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              page === 2 ? 'bg-white text-black' : 'bg-white/10 text-white'
            }`}
          >
            2
          </button>
        </div>

      </div>
    </section>
  );
}
