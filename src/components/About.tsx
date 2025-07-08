import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="py-16 md:py-20 px-4 -mt-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              I'm a backend developer with 4+ years of experience building AI-powered web applications,
              APIs, and automations. I combine strong skills in Python (Flask, FastAPI, ChatGPT integration)
              and Kotlin (with monitoring via Zabbix) to deliver scalable and production-ready systems.
            </p>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Passionate about clean code, dev automation, and developer tooling, I blend machine learning
              and modern backend development seamlessly to create impactful solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 md:gap-6"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-slate-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <div className="flex items-center mb-3 md:mb-4">
                <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-400 mr-3" />
                <h3 className="text-lg md:text-xl font-semibold text-white">Backend Development</h3>
              </div>
              <p className="text-slate-300 text-sm md:text-base">
                Expert in Python & Kotlin for building scalable backend systems and APIs
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-slate-700 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
              <div className="flex items-center mb-3 md:mb-4">
                <Brain className="w-6 h-6 md:w-8 md:h-8 text-green-400 mr-3" />
                <h3 className="text-lg md:text-xl font-semibold text-white">AI Integration</h3>
              </div>
              <p className="text-slate-300 text-sm md:text-base">
                Specialized in integrating AI models, OpenAI APIs, and ML pipelines
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-slate-700 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
              <div className="flex items-center mb-3 md:mb-4">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mr-3" />
                <h3 className="text-lg md:text-xl font-semibold text-white">Automation</h3>
              </div>
              <p className="text-slate-300 text-sm md:text-base">
                Building automation tools, CI/CD pipelines, and monitoring systems
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;