import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Network, Github, Linkedin, X, Minus } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const texts = [
    "Architecting Scalable AI Agents...",
    "Building Intelligent Automation...",
    "Engineering Robust Backends..."
  ];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let currentText = texts[textIndex];
    let index = 0;
    let isDeleting = false;
    let timeoutId: number;
    let isActive = true;

    const type = () => {
      if (!isActive) return;

      setTypedText(currentText.substring(0, index));

      if (!isDeleting && index < currentText.length) {
        index++;
        timeoutId = window.setTimeout(type, 100);
      } else if (isDeleting && index > 0) {
        index--;
        timeoutId = window.setTimeout(type, 50);
      } else if (!isDeleting && index === currentText.length) {
        isDeleting = true;
        timeoutId = window.setTimeout(type, 2000);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    timeoutId = window.setTimeout(type, 100);

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
    };
  }, [textIndex]);

  const codeSnippet = `class Developer {
  constructor() {
    this.name = "Bibin Hashley";
    this.stack = ["Python", "AI", "Backend"];
    this.focus = "Scalability";
  }

  buildFuture() {
    return this.innovate();
  }
}`;

  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8 pt-20">

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-4 md:top-32 md:right-32 text-accent-500/10 animate-pulse delay-75">
          <Network size={96} className="md:w-32 md:h-32" />
        </div>
        <div className="absolute bottom-20 left-4 md:bottom-32 md:left-32 text-primary-500/10 animate-pulse delay-150">
          <Database size={96} className="md:w-32 md:h-32" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white mb-6 leading-tight">
            Python & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">
              AI Systems Engineer
            </span>
          </h1>

          <div className="text-base md:text-2xl text-gray-300 font-mono mb-6 h-8">
            <span className="text-accent-500">{`>`}</span> <span className="terminal-cursor">{typedText}</span>
          </div>



          <div className="flex flex-wrap gap-4">
            <Magnetic strength={40}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 md:px-6 md:py-3 bg-primary-600 hover:bg-primary-700 text-white font-mono text-sm md:text-base rounded border border-primary-500 transition-colors shadow-lg shadow-primary-500/20 flex items-center gap-2"
              >
                <Terminal size={18} />
                View Projects
              </motion.a>
            </Magnetic>

            <Magnetic strength={40}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 md:px-6 md:py-3 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-mono text-sm md:text-base rounded transition-colors block"
              >
                Contact Me
              </motion.a>
            </Magnetic>
          </div>

          <div className="flex gap-6 mt-12 items-center relative z-20">
            <Magnetic strength={20}>
              <a href="https://github.com/bibinhashley" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 p-2 block">
                <Github size={24} />
              </a>
            </Magnetic>
            <Magnetic strength={20}>
              <a href="https://linkedin.com/in/bibinhashley" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 p-2 block">
                <Linkedin size={24} />
              </a>
            </Magnetic>

            {isClosed && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setIsClosed(false)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700 text-xs text-gray-400 hover:text-white hover:bg-gray-800 transition-all ml-auto md:ml-0"
              >
                <Terminal size={12} />
                Reopen Terminal
              </motion.button>
            )}
          </div>
        </motion.div>

        <div className="relative hidden lg:block h-[400px] flex items-center">

          {!isClosed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >

              <div className={`glass-panel rounded-lg overflow-hidden border border-gray-800 bg-[#0d1117]/90 shadow-2xl transition-all duration-300 ${isMinimized ? 'h-auto' : ''}`}>
                <div
                  className="bg-gray-900/50 px-4 py-3 flex items-center justify-between border-b border-gray-800 cursor-pointer"
                  onDoubleClick={() => setIsMinimized(!isMinimized)}
                >
                  <div className="flex gap-2 group">
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsClosed(true); }}
                      className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-[#FF5F56]/80 flex items-center justify-center transition-colors"
                      aria-label="Close"
                    >
                      <X size={10} className="text-[#4c0002] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
                      className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-[#FFBD2E]/80 flex items-center justify-center transition-colors"
                      aria-label="Minimize"
                    >
                      <Minus size={10} className="text-[#995700] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                    </button>
                  </div>
                  <div className="text-xs text-gray-500 font-mono">developer.py</div>
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: isMinimized ? 0 : 'auto', opacity: isMinimized ? 0 : 1 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                    <pre>
                      <code>
                        <span className="text-blue-400">class</span> <span className="text-yellow-400">Developer</span><span className="text-white">:</span><br />
                        <span className="text-white">    </span><span className="text-blue-400">def</span> <span className="text-yellow-200">__init__</span><span className="text-white">(</span><span className="text-purple-400">self</span><span className="text-white">):</span><br />
                        <span className="text-white">        </span><span className="text-purple-400">self</span><span className="text-white">.name = </span><span className="code-string">"Bibin Hashley"</span><br />
                        <span className="text-white">        </span><span className="text-purple-400">self</span><span className="text-white">.stack = [</span><span className="code-string">"Python"</span><span className="text-white">, </span><span className="code-string">"AI"</span><span className="text-white">, </span><span className="code-string">"Backend"</span><span className="text-white">]</span><br />
                        <span className="text-white">        </span><span className="text-purple-400">self</span><span className="text-white">.focus = </span><span className="code-string">"Scalability"</span><br /><br />
                        <span className="text-white">    </span><span className="text-blue-400">def</span> <span className="text-yellow-200">build_future</span><span className="text-white">(</span><span className="text-purple-400">self</span><span className="text-white">):</span><br />
                        <span className="text-white">        </span><span className="code-keyword">return</span> <span className="text-purple-400">self</span><span className="text-white">.innovate()</span>
                      </code>
                    </pre>
                  </div>

                  <div className="bg-gray-900/50 px-4 py-2 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500 font-mono">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Cpu size={12} /> CPU: 12%</span>
                      <span className="flex items-center gap-1"><Database size={12} /> MEM: 34%</span>
                    </div>
                    <div>Ln 12, Col 34</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
