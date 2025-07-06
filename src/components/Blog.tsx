import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Code, Brain } from 'lucide-react';

const Blog = () => {
  const articles = [
    {
      title: "How to Calculate GPT-3 API Call Costs with Python",
      description: "Learn how to estimate GPT-3 API call costs programmatically using Python and tokenization techniques.",
      link: "https://bibinhashley.medium.com/how-to-estimate-gpt-3-api-call-costs-with-python-3a33f195a2dc",
      icon: Brain,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      title: "Creating a Sentence Similarity Checker API in Python FastAPI",
      description: "Build a semantic sentence similarity API using FastAPI and Google's Universal Sentence Encoder.",
      link: "https://bibinhashley.medium.com/sentence-similarity-api-creating-a-sentence-similarity-checker-api-fast-api-923aba21947e",
      icon: Code,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Blog & Articles</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-slate-700 text-center"
        >
          <div className="bg-blue-500/20 p-3 md:p-4 rounded-lg inline-block mb-4 md:mb-6">
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Medium Articles</h3>
          <p className="text-slate-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
            I share insights about backend development, AI integration, and modern software engineering practices on Medium.
          </p>
          <a
            href="https://bibinhashley.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors duration-300 text-sm md:text-base"
          >
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 mr-2" />
            Visit My Medium
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          {articles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 md:p-6 border ${article.borderColor} hover:border-slate-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group`}
              >
                <div className={`${article.bgColor} p-2 md:p-3 rounded-lg inline-block mb-3 md:mb-4`}>
                  <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${article.color}`} />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {article.title}
                </h4>
                <p className="text-slate-300 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {article.description}
                </p>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
                >
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  Read Article
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;