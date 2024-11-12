
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "SEO Optimization Platform",
    description: "A web application for SEO optimization, including a Content AI Editor with keyword addition, blog writing, meta title & description generation, sentiment analysis, and competitor analysis.",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tech: ["Python", "Flask", "OpenAI API", "SQL", "JavaScript"],
    live: "https://www.biscuitdata.com/",
    github:""
  },
];


export default function Projects() {
  return (
      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                >
                  <div className="relative group">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                          <span
                              key={techIndex}
                              className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}