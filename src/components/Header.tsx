
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
            >
              Bibin Hashley
            </motion.h1>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                  <X className="w-6 h-6" />
              ) : (
                  <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-purple-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors">Contact</a>
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-4">
              <a href="https://github.com/bibinhashley" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 hover:text-purple-600 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/bibinhashley/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-purple-600 transition-colors" />
              </a>
              <a href="mailto:bibinhashley@gmail.com">
                <Mail className="w-5 h-5 hover:text-purple-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-sm shadow-lg py-4"
              >
                <div className="flex flex-col items-center gap-4">
                  <a
                      href="#about"
                      className="hover:text-purple-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a
                      href="#projects"
                      className="hover:text-purple-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                  <a
                      href="#contact"
                      className="hover:text-purple-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <div className="flex items-center gap-6 pt-4 border-t w-full justify-center">
                    <a href="https://github.com/bibinhashley" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 hover:text-purple-600 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/in/bibinhashley/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 hover:text-purple-600 transition-colors" />
                    </a>
                    <a href="mailto:bibinhashley@gmail.com">
                      <Mail className="w-5 h-5 hover:text-purple-600 transition-colors" />
                    </a>
                  </div>
                </div>
              </motion.div>
          )}
        </nav>
      </motion.header>
  );
}