import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nameText, setNameText] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const fullName = "Bibin Hashley O P";
  const codeSnippets = [
    {
      code: 'def calculate_chakra():\n    naruto = "Uzumaki Naruto"\n    chakra = sum(ord(c) for c in naruto) % 9000\n    return f"Chakra Level: {chakra} (Believe it!)"',
      filename: 'chakra_meter.py'
    },
    {
      code: 'fun tesseractSignal(): String {\n    val murph = "Murph Cooper"\n    val gravity = murph.sumOf { it.code } % 42\n    return "Gravity Signal: $gravity ticks"\n}',
      filename: 'interstellar_gravity.kt'
    },
    {
      code: 'const tyler = {\n    name: "Tyler Durden",\n    rulesBroken: tyler?.name.split(" ").length ?? 0,\n    soapLevel: rulesBroken * 8\n};',
      filename: 'fight_club_rules.js'
    }
  ];

  // Name typing animation
  useEffect(() => {
    if (nameIndex < fullName.length) {
      const timer = setTimeout(() => {
        setNameText(fullName.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [nameIndex, fullName]);

  useEffect(() => {
    const currentSnippet = codeSnippets[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < currentSnippet.code.length) {
        setDisplayText(currentSnippet.code.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTransitioning(true);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % codeSnippets.length);
            setDisplayText('');
            setIsTransitioning(false);
          }, 300);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          {/* Main Heading with Gradient Text */}
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-gradient heading-style text-balance">
                {nameText}
              </span>
              {nameIndex < fullName.length && (
                <span className="inline-block w-1 h-8 md:h-16 lg:h-20 bg-gradient-to-b from-blue-400 to-purple-500 animate-pulse ml-2 align-text-bottom rounded-full"></span>
              )}
            </h1>
          </div>

          {/* Role with Enhanced Styling */}
          <div className="relative mb-4">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gradient-secondary mb-3">
              Python AI Developer | Kotlin Backend Developer
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Location and Experience */}
          <p className="text-base md:text-lg text-slate-300 font-medium">
            🌍 Kozhikode, Kerala, India • ⚡ 4+ Years Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="bg-black/20 backdrop-blur-xl rounded-2xl overflow-hidden max-w-3xl mx-auto mb-8 md:mb-12 border border-white/20 hover:border-white/30 transition-all duration-300 group shadow-2xl"
          style={{ 
            minHeight: '280px',
            background: 'linear-gradient(145deg, rgba(0,0,0,0.2), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          {/* Mac Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
            </div>
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center space-x-2"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300 font-mono font-medium">
                {codeSnippets[currentIndex].filename}
              </span>
            </motion.div>
            
            <div className="w-20"></div> {/* Spacer for center alignment */}
          </div>

          {/* Mac Terminal Content */}
          <div className="p-6">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: isTransitioning ? 0 : 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <pre className="text-left font-mono text-sm md:text-base leading-relaxed overflow-x-auto text-green-400">
                <code className="block whitespace-pre-wrap break-words">
                  {displayText}
                  <motion.span 
                    className="inline-block w-0.5 h-5 bg-green-400 ml-1 translate-y-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  />
                </code>
              </pre>
            </motion.div>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-6 md:space-x-8 mb-12 md:mb-16"
        >
          <a
            href="https://github.com/bibinhashley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            aria-label="GitHub Profile"
          >
            <Github size={24} className="md:w-7 md:h-7" />
          </a>

          <a
            href="https://linkedin.com/in/bibinhashley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} className="md:w-7 md:h-7" />
          </a>

          <a
            href="mailto:bibinhashley@gmail.com"
            className="text-slate-300 hover:text-green-400 transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            aria-label="Email Contact"
          >
            <Mail size={24} className="md:w-7 md:h-7" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        viewport={{ once: true }}
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;