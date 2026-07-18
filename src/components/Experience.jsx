import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle, Globe } from 'lucide-react';

const achievements = [
  "Worked on a critical government committee portal project for ONGC (Oil and Natural Gas Corporation Limited).",
  "Designed and engineered a full-stack web application using React.js, Node.js, Express.js, and MongoDB.",
  "Built a secure, authenticated admin control panel to manage user profiles and system workflow configurations.",
  "Developed and integrated RESTful APIs for fluid, secure frontend-to-backend communication.",
  "Implemented Cloudinary configurations for efficient remote media uploading, storage, and rendering.",
  "Deployed the platform on custom enterprise domains as well as Vercel, solving real-world performance bottlenecks.",
  "Managed the complete software development lifecycle (SDLC) as an autonomous individual contributor."
];

const techUsed = ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Vercel", "REST APIs"];

export default function Experience() {
  return (
    <section id="experience" className="py-12 md:py-24 bg-darkBg relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute right-0 top-[20%] w-[350px] h-[350px] bg-accentPurple/5 rounded-full blur-[100px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Work <span className="text-gradient">Experience</span>
          </motion.h2>
          <div className="h-1 w-12 bg-accentPurple mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-12 pl-6 md:pl-10 space-y-12">
          
          {/* Timeline Node Badge */}
          <div className="absolute -left-[17px] top-1.5 flex items-center justify-center bg-accentPurple/20 border border-accentPurple rounded-full p-2.5 h-8 w-8 text-accentPurple z-10">
            <Briefcase className="h-4 w-4" />
          </div>

          {/* Internship Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 rounded-2xl relative"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
              <div>
                <span className="text-xs font-semibold text-accentTurquoise tracking-wider uppercase">Current Internship</span>
                <h3 className="text-2xl font-bold text-white mt-1">Full Stack Developer Intern</h3>
                <h4 className="text-lg font-medium text-gray-300 mt-1">TARS AI Pvt. Ltd.</h4>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1.5 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-accentPurple" />
                  <span>19 Dec 2025 – 19 June 2026</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-accentPurple" />
                  <span>Nagpur, Maharashtra (Fulltime)</span>
                </div>
              </div>
            </div>

            {/* Sub-project Detail (ONGC) */}
            <div className="mb-6 p-4 rounded-xl border border-blue-500/10 bg-blue-500/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h5 className="font-bold text-white text-sm">Major Project: ONGC (CWC Committee Member)</h5>
                <p className="text-xs text-gray-400 mt-0.5">Government application engineered for Oil and Natural Gas Corporation Limited.</p>
              </div>
              <a 
                href="https://sewacwc-ongc.com" 
                target="_blank" 
                rel="noreferrer" 
                className="flex-shrink-0 text-xs font-medium text-accentTurquoise hover:underline flex items-center gap-1"
              >
                <Globe className="h-3.5 w-3.5" />
                <span>sewacwc-ongc.com</span>
              </a>
            </div>

            {/* Accomplishments */}
            <div className="space-y-4">
              <h5 className="font-bold text-gray-200 text-sm tracking-wide uppercase">Key Contributions:</h5>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                    <CheckCircle className="h-4.5 w-4.5 text-accentTurquoise mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Chips */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
              {techUsed.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium text-accentPurple bg-accentPurple/10 border border-accentPurple/20"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
