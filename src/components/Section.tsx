import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({ children, id, className, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 px-6 md:px-12 lg:px-24", className)}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-glow">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            <div className="w-24 h-1 bg-neon-blue mx-auto mt-6 rounded-full shadow-[0_0_10px_rgba(0,245,255,0.8)]" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
