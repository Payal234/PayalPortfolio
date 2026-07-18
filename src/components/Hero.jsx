import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import { Github, Linkedin } from './Icons';


const roles = ["Full Stack Developer Intern", "MCA Student", "GenAI Enthusiast", "MERN Stack Specialist"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedRole(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedRole(prev => currentRole.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && displayedRole === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedRole === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-darkBg">
      {/* Background Animated Orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-accentTurquoise/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-accentPurple/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[25vw] h-[25vw] bg-accentBlue/10 rounded-full blur-[90px] animate-float"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/5 backdrop-blur-md"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentTurquoise opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accentTurquoise"></span>
          </span>
          <span className="text-xs font-semibold text-accentTurquoise uppercase tracking-widest">Available for Hire & Internships</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          <span className="block text-gray-100">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-accentTurquoise via-accentBlue to-accentPurple bg-clip-text text-transparent pb-3">
            Payal Dhobale
          </span>
        </motion.h1>

        {/* Dynamic Typewriter Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 text-xl md:text-2xl text-gray-400 font-medium font-sans mb-8"
        >
          <span>{displayedRole}</span>
          <span className="inline-block w-[3px] h-5 ml-1 bg-accentTurquoise animate-ping"></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-400 text-base md:text-lg mb-10 leading-relaxed"
        >
          A motivated MCA candidate and Full Stack Developer Intern with hands-on experience building secured enterprise web portals, AI tools, and MERN applications.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a href="#projects" className="btn-primary flex items-center space-x-2 w-full sm:w-auto justify-center group">
            <span>View Projects</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="btn-secondary flex items-center space-x-2 w-full sm:w-auto justify-center">
            <span>Let's Connect</span>
          </a>
        </motion.div>

        {/* Social Icons & Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center items-center gap-6 text-gray-500"
        >
          <a
            href="https://github.com/Payal234"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accentTurquoise transition-colors duration-200 transform hover:scale-110"
            title="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/payal-dhobale/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accentTurquoise transition-colors duration-200 transform hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:payaldhobale399@gmail.com"
            className="hover:text-accentTurquoise transition-colors duration-200 transform hover:scale-110"
            title="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href="tel:+918459767521"
            className="hover:text-accentTurquoise transition-colors duration-200 transform hover:scale-110"
            title="Call Me"
          >
            <Phone className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
