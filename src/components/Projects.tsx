import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { ExternalLink, Github, Search, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const categories = ['All', 'Web', 'App', 'UI/UX'];

const projects = [
  {
    id: 1,
    title: 'Ultra Stream',
    category: 'Web',
    image: 'https://i.imgur.com/LjdcufM.png',
    description: 'A high-performance video streaming platform with real-time features and a modern UI.',
    tech: ['React', 'Node.js', 'Socket.io', 'Tailwind'],
    github: 'https://github.com/RafchanSami/Ultra-Stream',
    demo: 'https://ultra-stream.vercel.app/'
  },
  {
    id: 2,
    title: 'Family Health',
    category: 'App',
    image: 'https://i.imgur.com/NWgFUr1.png',
    description: 'A comprehensive health management system for families to track medical records and appointments.',
    tech: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com/RafchanSami/Family-Health',
    demo: 'https://family-health.vercel.app/'
  },
  {
    id: 3,
    title: 'Study Bondhu',
    category: 'Web',
    image: 'https://i.imgur.com/s2LdJhd.png',
    description: 'An educational platform designed to help students collaborate and share resources effectively.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com/RafchanSami/Study-Bondhu',
    demo: 'https://rafchansami.github.io/Study-Bondhu/'
  },
  {
    id: 5,
    title: 'Buildify AI',
    category: 'Web',
    image: 'https://i.imgur.com/yT9sgXv.png',
    description: 'An AI-powered website builder that generates professional landing pages from text prompts.',
    tech: ['React', 'OpenAI API', 'Tailwind'],
    github: '#',
    demo: 'https://buildify-com.onrender.com'
  },
  {
    id: 6,
    title: 'Uniconnect',
    category: 'Web',
    image: 'https://i.imgur.com/y0a5ZgS.png',
    description: 'A university networking platform connecting students, alumni, and faculty in one place.',
    tech: ['MERN Stack', 'Cloudinary', 'JWT'],
    github: '#',
    demo: 'https://uniconnect-com.onrender.com'
  }
];

function ProjectCard({ project }: { project: typeof projects[0]; key?: React.Key }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className="glass-card p-0 overflow-hidden group h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-neon-blue hover:text-black transition-all duration-300">
            <Github size={20} />
          </a>
          <a href={project.demo} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-neon-blue hover:text-black transition-all duration-300">
            <ExternalLink size={20} />
          </a>
        </div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-neon-blue/20 backdrop-blur-md border border-neon-blue/30 rounded-full text-xs font-mono text-neon-blue">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{project.title}</h3>
        <p className="text-zinc-400 text-sm mb-6 line-clamp-2">{project.description}</p>
        
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Section id="projects" title="Featured Projects" subtitle="A showcase of my latest work, ranging from complex web systems to elegant UI designs.">
      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
              activeCategory === cat 
                ? "bg-neon-blue text-black border-neon-blue shadow-[0_0_15px_rgba(0,245,255,0.5)]" 
                : "bg-white/5 text-zinc-400 border-white/10 hover:border-neon-blue/50 hover:text-neon-blue"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-16 text-center">
        <motion.a
          href="https://github.com/RafchanSami"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-4 glass-card hover:bg-neon-blue/10 border-neon-blue/30"
        >
          <Github className="mr-2" size={20} />
          <span>View More on GitHub</span>
        </motion.a>
      </div>
    </Section>
  );
}
