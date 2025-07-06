import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Limelight Inc.",
      companyUrl: "https://www.limelight.inc/",
      period: "Dec 2024 – Present",
      location: "Remote",
      description: [
        "Kotlin-based QA and backend automation",
        "Zabbix for monitoring and alerting",
        "Working on enterprise-grade backend systems",
        "Agile workflow and version control with Git",
        "Unit & integration testing automation"
      ],
      current: true
    },
    {
      title: "Python AI Developer",
      company: "Biscuit Data Ltd",
      companyUrl: null, // Add URL if available
      period: "Nov 2020 – Dec 2024",
      location: "Remote",
      description: [
        "Built AI APIs using Flask, FastAPI, and OpenAI GPT models",
        "Integrated content generation tools and ML pipelines",
        "Deployed models to production using Docker & GCP",
        "Created internal automation tools and data pipelines",
        "Used Pandas, NumPy, and scikit-learn for ML workflows"
      ],
      current: false
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-slate-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 md:mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-blue-500/20 p-2 rounded-lg mr-3 md:mr-4">
                      <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-base md:text-lg text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300"
                        >
                          {exp.company}
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                        </a>
                      ) : (
                        <p className="text-base md:text-lg text-blue-400 font-semibold">{exp.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6">
                    <div className="flex items-center text-slate-300 text-sm md:text-base">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-slate-300 text-sm md:text-base">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.location}
                    </div>
                    {exp.current && (
                      <span className="bg-green-500/20 text-green-400 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 md:space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-slate-300 text-sm md:text-base">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;