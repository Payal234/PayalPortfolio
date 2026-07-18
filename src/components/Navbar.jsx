import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Mail, Download } from 'lucide-react';
import { Github, Linkedin } from './Icons';


const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? 'py-3 bg-darkBg/80 backdrop-blur-lg border-b border-blue-500/10 shadow-lg'
          : 'py-5 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 text-xl font-bold font-sans tracking-wide"
          >
            <Code className="h-6 w-6 text-accentTurquoise" />
            <span className="bg-gradient-to-r from-accentTurquoise to-accentPurple bg-clip-text text-transparent">
              Payal Dhobale
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="text-sm font-medium text-gray-300 hover:text-accentTurquoise transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-l border-slate-800 pl-6"
            >
              <a
                href="/PayalDhobale_R.pdf"
                download="Payal_Dhobale_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700 text-sm font-semibold text-accentTurquoise rounded-lg transition-colors border border-accentTurquoise/30 shadow-sm"
              >
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-darkBg/95 backdrop-blur-xl border-b border-blue-500/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      const targetId = item.href.replace('#', '');
                      const element = document.getElementById(targetId);
                      if (element) {
                        const navbarHeight = 90;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        window.history.pushState(null, '', item.href);
                      }
                    }, 150); // Delay scroll slightly to allow menu to unmount first
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-accentTurquoise hover:bg-slate-900/50 transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800/80">
                <a
                  href="/PayalDhobale_R.pdf"
                  download="Payal_Dhobale_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-800/50 hover:bg-slate-700 text-base font-semibold text-accentTurquoise rounded-lg transition-colors border border-accentTurquoise/30 shadow-sm"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
