import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(true);

  useEffect(() => {
    // Only enable custom cursor for mouse pointer devices
    if (!window.matchMedia('(pointer: fine)').matches) {
      setIsPointer(false);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    if (!isPointer) return;
    let animId;
    const updateTrail = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.16,
        y: prev.y + (pos.y - prev.y) * 0.16
      }));
      animId = requestAnimationFrame(updateTrail);
    };
    animId = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animId);
  }, [pos, isPointer]);

  if (!isPointer) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none rounded-full z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out ${
          isHovered 
            ? 'w-14 h-14 border border-white/80 bg-white/10 backdrop-blur-xs scale-110' 
            : 'w-8 h-8 border border-white/30 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%)`
        }}
      />
      {/* Inner Center Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`
        }}
      />
    </>
  );
}
