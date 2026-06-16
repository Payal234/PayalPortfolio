import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, Image, Bot } from 'lucide-react';
import { Github } from './Icons';


const projects = [
  {
    title: 'DiagnoOps - Lab Platform',
    status: 'In Development',
    desc: 'A comprehensive, full-stack Lab Management System. Streamlines diagnostic workflows, patient interactions, and automated reporting services for laboratory administrators.',
    icon: Layers,
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'SMTP Services', 'Role-Based Access'],
    liveUrl: 'https://diagno-website-seven.vercel.app',
    githubUrl: 'https://github.com/Payal234/DiagnoOps-',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'IMAGEZ',
    status: 'Completed',
    desc: 'An AI-powered web tool that turns natural language text prompts into high-quality generated images using GenAI integrations and optimized asset delivery workflows.',
    icon: Image,
    tags: ['React.js', 'Generative AI API', 'Node.js', 'ClipDrop API', 'Asset Optimization'],
    liveUrl: 'https://text-image-kappa.vercel.app',
    githubUrl: 'https://github.com/Payal234',
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'AI Assistant',
    status: 'Completed',
    desc: 'An interactive AI Assistant powered by Groq LLM API. Developed using a Python-based backend combined with a custom HTML/CSS responsive web interface.',
    icon: Bot,
    tags: ['Python', 'Groq API', 'HTML', 'CSS', 'REST APIs', 'LLM Integration'],
    liveUrl: 'https://github.com/Payal234/AI-Assistant',
    githubUrl: 'https://github.com/Payal234/AI-Assistant',
    color: 'from-indigo-500 to-pink-500'
  }
];


export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-darkBg relative overflow-hidden">
      {/* Background soft highlights */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-accentPurple/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="h-1 w-12 bg-accentTurquoise mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.15)" }}
                className="glass-panel rounded-2xl flex flex-col justify-between overflow-hidden border border-slate-800 hover:border-accentBlue/30 transition-all duration-300 group"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className={`h-32 bg-gradient-to-br ${project.color} relative p-6 flex items-end justify-between`}>
                    <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[2px]"></div>
                    <div className="relative z-10 bg-slate-900/90 backdrop-blur-sm p-3 rounded-xl border border-white/10 text-white shadow-lg">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="relative z-10 text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-gray-250">
                      {project.status}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-accentTurquoise transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Footer and tags */}
                <div className="px-6 pb-6 mt-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-medium tracking-wide text-gray-400 bg-slate-900/60 border border-slate-800 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                    {project.liveUrl !== '#' && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-accentTurquoise hover:text-white flex items-center gap-1.5 transition-colors font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
