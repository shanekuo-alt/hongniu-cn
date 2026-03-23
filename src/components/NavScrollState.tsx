"use client";

import { useEffect, useState, type ReactNode } from "react";

interface NavScrollStateProps {
  children: ReactNode;
}

export default function NavScrollState({ children }: NavScrollStateProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-scrolled={scrolled || undefined}
      className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b border-surface-container-high transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md h-16" : "bg-white/60 h-20"
      }`}
    >
      <div
        className={`flex justify-between items-center max-w-7xl mx-auto px-6 transition-all duration-300 ${
          scrolled ? "h-full" : "h-20"
        }`}
      >
        {children}
      </div>
    </nav>
  );
}
