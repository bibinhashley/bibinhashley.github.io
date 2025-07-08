import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Cpu, Monitor } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'cyan';
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "Kotlin", "Java", "SQL", "JavaScript"],
      color: "blue"
    },
    {
      title: "Frameworks",
      icon: <Server className="w-6 h-6" />,
      skills: ["Flask", "FastAPI", "Django", "OpenAI GPT APIs"],
      color: "green"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["ClickHouse", "PostgreSQL", "REST APIs"],
      color: "purple"
    },
    {
      title: "Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker", "GCP", "CI/CD", "Git"],
      color: "orange"
    },
    {
      title: "AI/ML Tools",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["scikit-learn", "NumPy", "Pandas", "OpenAI"],
      color: "pink"
    },
    {
      title: "Monitoring",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["Zabbix", "Agile practices", "Markdown"],
      color: "cyan"
    }
  ];

  const colorMap = {
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    green: "bg-green-500/20 text-green-400 border-green-500/30",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    pink: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    cyan: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-slate-700 hover:border-slate-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center p-2 md:p-3 rounded-lg mb-3 md:mb-4 ${colorMap[category.color]}`}>
                {category.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-700/50 text-slate-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm border border-slate-600"
                  >
                    {skill}
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

export default Skills;