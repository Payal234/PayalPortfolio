import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    color: 'text-accentTurquoise',
    bgColor: 'bg-accentTurquoise/10',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'HTML5 / CSS3', level: 90 }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'text-accentBlue',
    bgColor: 'bg-accentBlue/10',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'REST APIs', level: 90 }
    ]
  },
  {
    title: 'Databases & Storage',
    icon: Database,
    color: 'text-accentPurple',
    bgColor: 'bg-accentPurple/10',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'SQL', level: 75 },
      { name: 'Cloudinary Storage', level: 80 }
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: Settings,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 85 },
      { name: 'Vercel Deployment', level: 90 }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-12 md:py-24 bg-darkBg relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute left-0 bottom-[10%] w-[300px] h-[300px] bg-accentTurquoise/5 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <div className="h-1 w-12 bg-accentTurquoise mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-panel p-8 rounded-2xl relative group hover:border-blue-500/20 transition-all duration-300"
              >
                {/* Accent glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-accentTurquoise/0 via-accentBlue/0 to-accentPurple/0 group-hover:from-accentTurquoise/10 group-hover:via-accentBlue/10 group-hover:to-accentPurple/10 transition-all duration-500 -z-10"></div>
                
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${category.bgColor} ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills Progress list */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-gray-300">{skill.name}</span>
                        <span className="text-gray-500 text-xs">{skill.level}%</span>
                      </div>
                      
                      {/* Interactive Bar */}
                      <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 }}
                          className={`h-full bg-gradient-to-r from-accentTurquoise to-accentBlue rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
