import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, ShieldAlert, BadgeCheck } from 'lucide-react';

const certs = [
  {
    title: 'Runner-up, GenAI Competition',
    issuer: 'Sugarcane AI',
    type: 'award',
    desc: 'Awarded runner-up positioning for engineering innovative generative AI applications in a competitive, fast-paced environment.',
    icon: Trophy,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    border: 'border-yellow-500/20'
  },
  {
    title: 'AI Agent Hackathon Participant',
    issuer: 'IIM Nagpur',
    type: 'hackathon',
    desc: 'Collaborated on developing context-aware AI agents utilizing cutting-edge LLMs and pipeline orchestration frameworks.',
    icon: Star,
    color: 'text-accentTurquoise',
    bgColor: 'bg-accentTurquoise/10',
    border: 'border-accentTurquoise/20'
  },
  {
    title: 'Python Programming',
    issuer: 'Cisco Skill Up',
    type: 'certification',
    desc: 'Validation of advanced core programming concepts, algorithm scripting, and software automation practices using Python.',
    icon: BadgeCheck,
    color: 'text-accentBlue',
    bgColor: 'bg-accentBlue/10',
    border: 'border-accentBlue/20'
  },
  {
    title: 'Generative AI Practitioner',
    issuer: 'Microsoft & LinkedIn',
    type: 'certification',
    desc: 'Deep-dive accreditation covering neural network models, LLM prompts, embeddings, and ethical AI implementation paths.',
    icon: Award,
    color: 'text-accentPurple',
    bgColor: 'bg-accentPurple/10',
    border: 'border-accentPurple/20'
  },
  {
    title: 'React.js Development Specialist',
    issuer: 'CodeWithRandom.com',
    type: 'certification',
    desc: 'Comprehensive study of frontend architectures, state lifecycle triggers, custom hook designs, and SPA routing structures.',
    icon: BadgeCheck,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    border: 'border-pink-500/20'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 md:py-24 bg-darkBg relative overflow-hidden">
      <div className="absolute left-[10%] top-[10%] w-[250px] h-[250px] bg-accentPurple/5 rounded-full blur-[90px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Honors & <span className="text-gradient">Certifications</span>
          </motion.h2>
          <div className="h-1 w-12 bg-accentPurple mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02, border: "1px solid rgba(255, 255, 255, 0.25)" }}
                className={`glass-card p-6 rounded-2xl border ${cert.border} relative transition-all duration-300 group`}
              >
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-slate-900 rounded-bl-3xl border-l border-b border-slate-800 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 group-hover:text-gray-300">
                    {cert.type === 'award' ? '🏆' : cert.type === 'hackathon' ? '⚡' : '📜'}
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`p-2.5 rounded-xl ${cert.bgColor} ${cert.color}`}>
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div className="pr-10">
                    <h3 className="font-bold text-white text-base leading-tight group-hover:text-accentTurquoise transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-semibold">{cert.issuer}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {cert.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
