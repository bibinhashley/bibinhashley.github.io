import React, { useState, useEffect } from 'react';
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
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Subtle animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 via-transparent to-blue-600/5 animate-pulse"></div>
        {/* Very subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%234B5563%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        {/* Very subtle radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/10 to-black/20"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
            {nameText}<span className="inline-block w-1 h-8 md:h-20 bg-slate-400 animate-cursor-blink ml-1 align-text-bottom"></span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-400 mb-2">
            Python AI Developer | Kotlin Backend Developer
          </p>
          <p className="text-base md:text-lg text-slate-300">
            Kozhikode, Kerala, India • 4+ Years Experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900/30 backdrop-blur-xl rounded-xl p-4 md:p-6 max-w-2xl mx-auto mb-6 md:mb-8 border border-white/10 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500"
          style={{
            minHeight: '200px',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(30, 58, 138, 0.2) 100%)'
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs md:text-sm text-slate-400 font-medium"
            >
              {codeSnippets[currentIndex].filename}
            </motion.span>
            <div className="flex space-x-1">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full shadow-sm"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full shadow-sm"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full shadow-sm"></div>
            </div>
          </div>
          <motion.pre
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="text-left text-green-400 font-mono text-xs md:text-sm leading-relaxed"
          >
            <code className="block bg-slate-800/50 rounded-lg p-4 backdrop-blur-sm border border-slate-700/50 whitespace-pre-wrap break-words">
              {displayText}<span className="animate-pulse">|</span>
            </code>
          </motion.pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4 md:space-x-6 mb-8 md:mb-12"
        >
          <a
            href="https://github.com/bibinhashley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
          >
            <Github size={24} className="md:w-7 md:h-7" />
          </a>
          <a
            href="https://linkedin.com/in/bibinhashley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
          >
            <Linkedin size={24} className="md:w-7 md:h-7" />
          </a>
          <a
            href="mailto:bibinhashley@gmail.com"
            className="text-slate-300 hover:text-green-400 transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
          >
            <Mail size={24} className="md:w-7 md:h-7" />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-slate-400 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;