"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroWrapperProps {
  children: ReactNode;
  className?: string;
}

export function HeroBadge({ children, className }: HeroWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroHeadline({ children, className }: HeroWrapperProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}

export function HeroSubcopy({ children, className }: HeroWrapperProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

export function HeroCTAs({ children, className }: HeroWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.48 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroMascot({ children, className }: HeroWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.1,
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
