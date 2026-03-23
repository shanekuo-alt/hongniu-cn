"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}

const easing = [0.25, 0.46, 0.45, 0.94] as const;

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className,
  once = true,
}: SlideInProps) {
  const x = direction === "left" ? -60 : 60;

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.6, ease: easing, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
