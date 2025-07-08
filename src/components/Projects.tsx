import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Bot, Shield, Database, Globe, Search } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'teal';
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Keyword Enrichment Tool",
      description: "Advanced AI-powered keyword enrichment system using OpenAI's GPT models for content optimization and SEO enhancement.",
      technologies: ["Python", "OpenAI API", "Flask", "NLP"],
      icon: <Bot className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "AI Editor Backend",
      description: "Custom AI-powered content editor backend with Flask and GPT-4 integration for intelligent content generation and editing.",
      technologies: ["Python", "FaseAPI", "Flask", "GPT-4", "REST API"],
      icon: <Zap className="w-6 h-6" />,
      color: "green"
    },
    {
      title: "QA Automation Framework",
      description: "Comprehensive Quality Assurance automation framework built with Kotlin for enterprise-grade testing and monitoring.",
      technologies: ["Kotlin", "JUnit", "WireMock", "Zabbix"],
      icon: <Shield className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "RESTful ML APIs",
      description: "High-performance machine learning APIs built with FastAPI, featuring real-time model inference and data processing.",
      technologies: ["FastAPI", "ML Models", "Docker", "GCP"],
      icon: <Database className="w-6 h-6" />,
      color: "orange"
    },
    {
      title: "IAB Category Classifier",
      description: "AI-powered website analyzer that automatically categorizes websites into IAB categories using fine-tuned ChatGPT models.",
      technologies: ["FastAPI", "ChatGPT", "Fine-tuning", "Web Scraping", "NLP"],
      icon: <Globe className="w-6 h-6" />,
      color: "red"
    },
    {
      title: "SEO Content Analyzer",
      description: "Advanced web content analyzer that evaluates SEO methods, content organization, and provides optimization recommendations.",
      technologies: ["Python", "BeautifulSoup", "NLTK", "FastAPI", "SEO Tools"],
      icon: <Search className="w-6 h-6" />,
      color: "teal"
    }
  ];

  const colorMap = {
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    red: "bg-red-500/20 text-red-400 border-red-500/30",
    teal: "bg-teal-500/20 text-teal-400 border-teal-500/30"
  };

  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-slate-700 hover:border-slate-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className={`inline-flex items-center justify-center p-2 md:p-3 rounded-lg mr-3 md:mr-4 ${colorMap[project.color]}`}>
                  {project.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-slate-700/50 text-slate-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;