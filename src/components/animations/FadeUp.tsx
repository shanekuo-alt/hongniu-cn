"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

const easing = [0.25, 0.46, 0.45, 0.94] as const;

export default function FadeUp({
  children,
  delay = 0,
  className,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.5, ease: easing, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
