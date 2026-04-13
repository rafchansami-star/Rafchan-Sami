import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: 'Jan 2023 - Present',
    description: 'Leading the development of a cloud-native SaaS platform. Reduced deployment time by 40% using CI/CD automation.',
    tech: ['React', 'Node.js', 'AWS', 'Docker']
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: 'Jun 2021 - Dec 2022',
    description: 'Developed and maintained multiple client projects. Implemented real-time features using WebSockets.',
    tech: ['Next.js', 'PostgreSQL', 'Socket.io']
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'Creative Web Agency',
    period: 'Mar 2019 - May 2021',
    description: 'Focused on creating pixel-perfect, responsive user interfaces. Collaborated closely with designers.',
    tech: ['Vue.js', 'Sass', 'JavaScript']
  },
  {
    id: 4,
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: 'Jan 2018 - Feb 2019',
    description: 'Assisted in building MVP products for early-stage startups. Gained experience in Agile methodologies.',
    tech: ['HTML', 'CSS', 'jQuery', 'PHP']
  }
];

export default function Experience() {
  return (
    <Section id="experience" title="Professional Journey" subtitle="A timeline of my career growth and the impact I've made at various organizations.">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-neon-blue rounded-full md:-translate-x-1/2 shadow-[0_0_10px_rgba(0,245,255,0.8)] z-10" />

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ml-8 md:ml-0 ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="glass-card group hover:border-neon-blue/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-neon-blue bg-neon-blue/10 px-2 py-1 rounded border border-neon-blue/20">
                      {exp.period}
                    </span>
                    <Briefcase size={18} className="text-zinc-500 group-hover:text-neon-blue transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-neon-blue/70 font-medium mb-4">{exp.company}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, j) => (
                      <span key={j} className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
