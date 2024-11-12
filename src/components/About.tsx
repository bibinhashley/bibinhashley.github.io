import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Coffee } from 'lucide-react';

const skills = [
  {
    category: "AI & Machine Learning",
    items: ["Python", "TensorFlow", "PyTorch", "Scikit-Learn", "OpenAI API"]
  },
  {
    category: "Backend Development",
    items: ["Flask", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "Frontend & Web Technologies",
    items: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "Next.js"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Google Cloud Platform", "AWS", "Docker", "Git", "Firebase"]
  }
];


const features = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code is my passion."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Creative Solutions",
    description: "Approaching problems with innovative and efficient solutions."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Perspective",
    description: "Working with international teams and diverse projects."
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Always Learning",
    description: "Continuously expanding knowledge and staying up-to-date with tech."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">Who I Am</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  I’m Bibin Hashley, a Python Developer with expertise in building intelligent, automated solutions that enhance user experiences. Skilled in Machine Learning and web frameworks like Flask, FastAPI, and Django, I’ve developed a range of APIs and web applications, particularly focused on SEO and content optimization. Leveraging prompt engineering and fine-tuning models, I create personalized content tools that streamline complex processes.</p> <p>My technical stack includes Python, JavaScript, SQL, and Google Cloud Platform, enabling me to deliver scalable, high-performance solutions across diverse projects.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Working space"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-purple-50 rounded-lg text-center"
              >
                <div className="text-purple-600 mb-4 inline-block">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-purple-50 rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
            <div className="grid gap-8 md:grid-cols-3">
              {skills.map((skillSet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="font-semibold mb-4 text-purple-600">{skillSet.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}