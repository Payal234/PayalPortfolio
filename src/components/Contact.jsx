import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';

// Enter your Web3Forms Access Key here. You can get one for free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "380a2772-959b-4628-891f-b36128de9aed";

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formState.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formState.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        console.error("Web3Forms error:", data.message);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error("Web3Forms submission failed:", error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-darkBg relative overflow-hidden">
      {/* Background soft highlights */}
      <div className="absolute right-[10%] top-[40%] w-[300px] h-[300px] bg-accentTurquoise/5 rounded-full blur-[100px]"></div>
      <div className="absolute left-[5%] bottom-[5%] w-[250px] h-[250px] bg-accentPurple/5 rounded-full blur-[80px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl font-extrabold"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <div className="h-1 w-12 bg-accentTurquoise mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="glass-panel p-8 rounded-2xl h-full flex flex-col justify-between space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Let's Discuss Your Project</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  I'm always open to talking about full-stack web architectures, software internships, or collaborative engineering opportunities. Feel free to contact me directly!
                </p>
              </div>

              {/* Contact Information Chips */}
              <div className="space-y-4 my-6">
                <a 
                  href="mailto:payaldhobale399@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-accentTurquoise/30 transition-all duration-300 group"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-accentTurquoise/10 text-accentTurquoise group-hover:bg-accentTurquoise/20 transition-all shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Me</h4>
                    <p className="text-xs sm:text-sm font-medium text-white mt-0.5 break-all sm:break-normal">payaldhobale399@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+918459767521"
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-accentPurple/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-accentPurple/10 text-accentPurple group-hover:bg-accentPurple/20 transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Call Me</h4>
                    <p className="text-sm font-medium text-white mt-0.5">+91 8459767521</p>
                  </div>
                </a>

                <div 
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-accentBlue/30 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-accentBlue/10 text-accentBlue group-hover:bg-accentBlue/20 transition-all">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</h4>
                    <p className="text-sm font-medium text-white mt-0.5">Karanja[Gh], Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Social Networking Connections */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-800">
                <a 
                  href="https://linkedin.com/in/payal-dhobale" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-accentTurquoise hover:border-accentTurquoise/35 transition-all"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://github.com/Payal234" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-accentTurquoise hover:border-accentTurquoise/35 transition-all"
                  title="Check out GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-10 rounded-2xl h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-accentTurquoise/10 border border-accentTurquoise/30 flex items-center justify-center text-accentTurquoise shadow-xl shadow-accentTurquoise/5"
                  >
                    <CheckCircle2 className="h-10 w-10 text-accentTurquoise" />
                  </motion.div>
                  
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-white tracking-tight">Thank You!</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      Your message has been sent successfully.
                    </p>
                    <p className="text-gray-400 text-xs md:text-sm">
                      I have received your details and will get back to you shortly!
                    </p>
                  </div>

                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 btn-secondary text-xs px-5 py-2.5 rounded-lg border border-slate-800 hover:border-accentTurquoise text-gray-300 hover:text-white transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-panel p-8 rounded-2xl h-full flex flex-col justify-center"
                >
                  <h3 className="text-xl font-bold text-white mb-6 cursor-pointer">Send Me a Message</h3>

                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formState.name}
                        onChange={(e) => {
                          setFormState({ ...formState, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Enter your name"
                        className={`w-full bg-slate-950 border ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800 focus:border-accentTurquoise'
                        } text-white placeholder-gray-650 rounded-lg p-3 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 font-semibold mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formState.email}
                        onChange={(e) => {
                          setFormState({ ...formState, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="Enter your email address"
                        className={`w-full bg-slate-950 border ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800 focus:border-accentTurquoise'
                        } text-white placeholder-gray-650 rounded-lg p-3 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 font-semibold mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                      <textarea
                        id="message"
                        rows="4"
                        value={formState.message}
                        onChange={(e) => {
                          setFormState({ ...formState, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="Describe your project, ideas, or questions..."
                        className={`w-full bg-slate-950 border ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-slate-800 focus:border-accentTurquoise'
                        } text-white placeholder-gray-650 rounded-lg p-3 text-sm focus:outline-none transition-colors resize-none`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 font-semibold mt-1">{errors.message}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full btn-primary flex cursor-pointer items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                      >
                        <AnimatePresence mode="wait">
                          {status === 'sending' ? (
                            <motion.span 
                              key="sending" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending Message...
                            </motion.span>
                          ) : status === 'error' ? (
                            <motion.span 
                              key="error" 
                              initial={{ opacity: 0, scale: 0.8 }} 
                              animate={{ opacity: 1, scale: 1 }} 
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2 text-red-400 font-bold"
                            >
                              <span>Failed to Send. Try Again!</span>
                            </motion.span>
                          ) : (
                            <motion.span 
                              key="idle" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }} 
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-2"
                            >
                              <span>Send Message</span>
                              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Footer info line */}
        <div className="mt-20 pt-8 border-t border-slate-900 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Payal Dhobale. All Rights Reserved.</p>
        </div>

      </div>
    </section>
  );
}

