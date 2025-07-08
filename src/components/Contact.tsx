import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
  color: 'green' | 'purple' | 'blue' | 'orange';
}

const Contact = () => {
  const contactLinks: ContactLink[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "bibinhashley@gmail.com",
      href: "mailto:bibinhashley@gmail.com",
      color: "green"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "bibinhashley",
      href: "https://github.com/bibinhashley",
      color: "purple"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "bibinhashley",
      href: "https://linkedin.com/in/bibinhashley",
      color: "blue"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Kozhikode, Kerala, India",
      href: null,
      color: "orange"
    }
  ];

  const colorMap = {
    green: "bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/30",
    purple: "bg-purple-500/20 text-purple-400 border-purple-500/30 hover:bg-purple-500/30",
    blue: "bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30",
    orange: "bg-orange-500/20 text-orange-400 border-orange-500/30 hover:bg-orange-500/30"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just talking about technology.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {contactLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 md:p-4 rounded-lg border transition-all duration-300 ${colorMap[link.color]}`}
                  >
                    <div className="mr-3 md:mr-4">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm md:text-base">{link.label}</h3>
                      <p className="text-slate-300 text-xs md:text-sm">{link.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className={`flex items-center p-3 md:p-4 rounded-lg border ${colorMap[link.color]}`}>
                    <div className="mr-3 md:mr-4">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm md:text-base">{link.label}</h3>
                      <p className="text-slate-300 text-xs md:text-sm">{link.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-slate-700"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send a Message</h3>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-colors duration-300 text-sm md:text-base"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-colors duration-300 text-sm md:text-base"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-colors duration-300 text-sm md:text-base"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors duration-300 flex items-center justify-center text-sm md:text-base"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;