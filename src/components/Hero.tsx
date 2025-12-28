import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Bibin Hashley";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16 px-4">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 via-primary-500 to-accent-500 animate-pulse blur-xl opacity-50"></div>
            <div className="relative w-full h-full rounded-full bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center shadow-2xl border-4 border-dev-bg">
              <span className="text-white font-bold text-5xl md:text-6xl lg:text-7xl font-mono">BH</span>
            </div>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-mono">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-primary-400 to-accent-500">
              {text}
            </span>
            <span className="inline-block w-1 h-6 md:h-8 lg:h-10 bg-accent-500 animate-pulse ml-1 align-middle"></span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-dev-text mb-6 font-mono">
            <span className="text-white">Python AI Developer</span>
            <span className="text-accent-400"> | </span>
            <span className="text-primary-400">Backend Specialist</span>
          </p>

          <p className="text-sm md:text-base lg:text-lg text-dev-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Crafting intelligent systems with AI-powered solutions and scalable backend architectures
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-600 hover:to-primary-600 text-white font-mono rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/50 text-sm md:text-base font-semibold"
          >
            Get In Touch →
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center gap-3 md:gap-4"
        >
          <a
            href="https://github.com/bibinhashley"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 bg-dev-card border border-dev-border hover:border-accent-400 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20 hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <Github size={20} className="text-dev-text md:w-6 md:h-6" />
          </a>

          <a
            href="https://linkedin.com/in/bibinhashley"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 bg-dev-card border border-dev-border hover:border-primary-400 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} className="text-dev-text md:w-6 md:h-6" />
          </a>

          <a
            href="mailto:bibinhashley@gmail.com"
            className="p-2.5 md:p-3 bg-dev-card border border-dev-border hover:border-matrix-400 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-matrix-500/20 hover:-translate-y-1"
            aria-label="Email Contact"
          >
            <Mail size={20} className="text-dev-text md:w-6 md:h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
