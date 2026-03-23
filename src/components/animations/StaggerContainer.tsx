"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const easing = [0.25, 0.46, 0.45, 0.94] as const;

interface StaggerContainerProps {
  children: ReactNode;
  stagger?: number;
  className?: string;
  once?: boolean;
}

const containerVariants = (stagger: number) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export function StaggerContainer({
  children,
  stagger = 0.1,
  className,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={containerVariants(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
