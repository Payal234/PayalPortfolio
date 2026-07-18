import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Star, Compass, Award } from 'lucide-react';

const education = [
  {
    type: 'Post Graduation',
    degree: 'Master of Computer Application (MCA)',
    institute: 'Prof. Ram Meghe Institute of Research & Technology, Badnera, Amravati, Maharashtra',
    cgpa: '9.16 CGPA',
    duration: '2024 - 2026',
    icon: GraduationCap,
  },
  {
    type: 'Graduation',
    degree: 'Bachelor of Computer Application (BCA)',
    institute: 'G H Raisoni Institute of Engineering & Technology, Nagpur, Maharashtra',
    cgpa: '8.63 CGPA',
    duration: '2020 - 2023',
    icon: BookOpen,
  }
];

const softSkills = [
  { name: 'Effective Communication', desc: 'Capable of conveying technical ideas clearly to diverse stakeholders.' },
  { name: 'Team Collaboration', desc: 'Proven track record of working and delivering projects in coordinated settings.' },
  { name: 'Problem Solving', desc: 'Analytical mindset focused on resolving coding, routing, and deployment issues.' }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-12 md:py-24 bg-darkBg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <div className="h-1 w-12 bg-accentTurquoise mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Summary / Introduction */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accentTurquoise/10 rounded-full blur-2xl group-hover:bg-accentTurquoise/20 transition-all duration-500"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Overview</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                I am a passionate and motivated MCA student specializing in Full Stack Web Development. I thrive on translating abstract ideas into highly responsive, scalable, and optimized digital products.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4 text-sm md:text-base">
                Through my internships and individual projects, I have developed a strong foundation in modern Javascript architectures (React, Node, Express, MongoDB) and API design, maintaining clean, secure, and production-ready code.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-800">
                <div>
                  <h4 className="text-2xl font-extrabold text-accentTurquoise">MCA </h4>
                  <p className="text-xs text-gray-500">June 2026</p>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-accentPurple">9.16</h4>
                  <p className="text-xs text-gray-500"> CGPA</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-bold text-gray-300 flex items-center gap-2">
              <GraduationCap className="text-accentTurquoise h-6 w-6" /> Education Timeline
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {education.map((edu, idx) => {
                const Icon = edu.icon;
                return (
                  <motion.div 
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ x: 8, scale: 1.01, border: "1px solid rgba(6, 182, 212, 0.35)" }}
                    className="glass-card p-6 rounded-xl relative transition-all duration-300 flex gap-4 group cursor-default"
                  >
                    <div className="flex-shrink-0 bg-slate-900 border border-slate-800 p-3 rounded-lg flex items-center justify-center h-12 w-12 group-hover:border-accentTurquoise transition-colors">
                      <Icon className="h-6 w-6 text-accentTurquoise" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-semibold text-accentPurple tracking-wider uppercase">{edu.type}</span>
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <p className="text-sm text-gray-400">{edu.institute}</p>
                      <div className="flex items-center gap-4 mt-2 pt-2 border-t border-slate-800/40 text-xs">
                        <span className="bg-accentTurquoise/10 text-accentTurquoise px-2.5 py-0.5 rounded-full font-semibold">{edu.cgpa}</span>
                        <span className="text-gray-500">{edu.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Soft Skills */}
            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-300 flex items-center gap-2 mb-6">
                <Compass className="text-accentPurple h-6 w-6" /> Key Attributes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {softSkills.map((skill, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-xl text-center group hover:border-slate-700 transition-colors"
                  >
                    <h4 className="font-semibold text-white text-sm group-hover:text-accentTurquoise transition-colors">{skill.name}</h4>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
