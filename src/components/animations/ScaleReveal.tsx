"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScaleRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function ScaleReveal({
  children,
  delay = 0,
  className,
  once = true,
}: ScaleRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-80px" }}
      transition={{
        delay,
        type: "spring",
        stiffness: 200,
        damping: 24,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
