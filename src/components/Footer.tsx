import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 border-t border-slate-700">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-3 md:mb-4">
            <Code className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mr-2" />
            <span className="text-white font-semibold text-base md:text-lg">Bibin Hashley O P</span>
          </div>
          <p className="text-slate-400 mb-3 md:mb-4 text-sm md:text-base">
            Building the future with Python, Kotlin, and AI
          </p>
          <div className="flex items-center justify-center text-slate-400 text-sm md:text-base">
            <span>Made with</span>
            <Heart className="w-3 h-3 md:w-4 md:h-4 mx-2 text-red-400 fill-current" />
            <span>and lots of ☕</span>
          </div>
          <p className="text-slate-500 text-xs md:text-sm mt-3 md:mt-4">
            © 2024 Bibin Hashley O P. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;