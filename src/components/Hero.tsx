
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24">
          <div className="text-center">
            <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
              Python Developer
            </motion.h1>
            <motion.p
                className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting robust and efficient solutions with Python.
              Specialized in Django, FastAPI, and building scalable applications with modern Python frameworks.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
            >
              <a
                  href="#projects"
                  className="px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-opacity-90 transition-colors shadow-lg"
              >
                View Projects
              </a>
              <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-colors shadow-lg"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </motion.div>
        </div>
      </section>
  );
}