import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Code2, Database, Layout, Terminal, Cpu, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Framer Motion', level: 85 },
      { name: 'Three.js', level: 70 },
    ]
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'PostgreSQL / MongoDB', level: 85 },
      { name: 'GraphQL', level: 80 },
      { name: 'Firebase', level: 88 },
      { name: 'Docker', level: 75 },
    ]
  },
  {
    title: 'Tools & Others',
    icon: Terminal,
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Figma / Adobe XD', level: 85 },
      { name: 'AWS / Vercel', level: 80 },
      { name: 'CI/CD Pipelines', level: 75 },
      { name: 'Agile / Scrum', level: 90 },
    ]
  }
];

export default function Skills() {
  return (
    <Section id="skills" title="My Expertise" subtitle="A comprehensive toolkit of modern technologies for building high-end digital solutions.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card group"
          >
            <div className="flex items-center mb-8">
              <div className="p-3 glass rounded-xl text-neon-blue mr-4 group-hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300">
                <category.icon size={24} />
              </div>
              <h3 className="text-2xl font-bold">{category.title}</h3>
            </div>

            <div className="space-y-6">
              {category.skills.map((skill, j) => (
                <div key={j} className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-zinc-300">{skill.name}</span>
                    <span className="text-neon-blue font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (j * 0.1) }}
                      className="h-full bg-gradient-to-r from-neon-blue to-neon-blue-dark shadow-[0_0_10px_rgba(0,245,255,0.6)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </Section>
  );
}
