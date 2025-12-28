import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Network, Github, Linkedin } from 'lucide-react';
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
    let isActive = true; // Flag to prevent state updates after unmount

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
        timeoutId = window.setTimeout(type, 2000); // Wait before deleting
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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 md:px-8 pt-20">

      {/* Floating Icons Background - Visible on all screens */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-4 md:top-32 md:right-32 text-accent-500/10 animate-pulse delay-75">
          <Network size={96} className="md:w-32 md:h-32" />
        </div>
        <div className="absolute bottom-20 left-4 md:bottom-32 md:left-32 text-primary-500/10 animate-pulse delay-150">
          <Database size={96} className="md:w-32 md:h-32" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Left Column: Headline & CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >


          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white mb-6 leading-tight">
            Python AI Developer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-primary-400">
              & ML Engineer
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 font-mono mb-6 h-8">
            <span className="text-accent-500">{`>`}</span> <span className="terminal-cursor">{typedText}</span>
          </div>



          <div className="flex flex-wrap gap-4">
            <Magnetic strength={40}>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-mono rounded border border-primary-500 transition-colors shadow-lg shadow-primary-500/20 flex items-center gap-2"
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
                className="px-6 py-3 bg-transparent border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-mono rounded transition-colors block" // added block to ensure anchor takes full width of magnetic wrapper if needed
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
          </div>
        </motion.div>

        {/* Right Column: Code Editor Visual - Hidden on Mobile/Tablet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >


          {/* Code Window */}
          <div className="glass-panel rounded-lg overflow-hidden border border-gray-800 bg-[#0d1117]/90 shadow-2xl">
            {/* Window Header */}
            <div className="bg-gray-900/50 px-4 py-3 flex items-center justify-between border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-gray-500 font-mono">developer.config.ts</div>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
              <pre>
                <code>
                  <span className="code-keyword">class</span> <span className="text-yellow-400">Developer</span> <span className="text-white">{`{`}</span><br />
                  <span className="text-white">  </span><span className="code-keyword">constructor</span><span className="text-white">() {`{`}</span><br />
                  <span className="text-white">    </span><span className="text-purple-400">this</span><span className="text-white">.name = </span><span className="code-string">"Bibin Hashley"</span><span className="text-white">;</span><br />
                  <span className="text-white">    </span><span className="text-purple-400">this</span><span className="text-white">.stack = [</span><span className="code-string">"Python"</span><span className="text-white">, </span><span className="code-string">"AI"</span><span className="text-white">, </span><span className="code-string">"Backend"</span><span className="text-white">];</span><br />
                  <span className="text-white">    </span><span className="text-purple-400">this</span><span className="text-white">.focus = </span><span className="code-string">"Scalability"</span><span className="text-white">;</span><br />
                  <span className="text-white">  {`}`}</span><br /><br />
                  <span className="text-white">  </span><span className="code-function">buildFuture</span><span className="text-white">() {`{`}</span><br />
                  <span className="text-white">    </span><span className="code-keyword">return</span> <span className="text-purple-400">this</span><span className="text-blue-400">.innovate</span><span className="text-white">();</span><br />
                  <span className="text-white">  {`}`}</span><br />
                  <span className="text-white">{`}`}</span>
                </code>
              </pre>
            </div>

            {/* Status Bar */}
            <div className="bg-gray-900/50 px-4 py-2 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><Cpu size={12} /> CPU: 12%</span>
                <span className="flex items-center gap-1"><Database size={12} /> MEM: 34%</span>
              </div>
              <div>Ln 12, Col 34</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
