import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold tracking-tighter mb-8 md:mb-0"
          >
            <span className="text-neon-blue">RAFCHAN</span>
            <span className="text-white">.SAMI</span>
          </motion.div>

          <div className="flex space-x-8 mb-8 md:mb-0">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-zinc-500 hover:text-neon-blue transition-colors cursor-pointer text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex space-x-4">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 text-zinc-500 hover:text-neon-blue transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-zinc-600 text-sm">
          <p>© {currentYear} Rafchan Sami. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neon-blue transition-colors">Terms of Service</a>
          </div>
          
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="mt-8 md:mt-0 p-3 glass rounded-full text-neon-blue hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-300 cursor-pointer"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
