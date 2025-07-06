import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{
        background: 'linear-gradient(to bottom right, #0f172a, #1e3a8a, #1e40af, #0f172a)',
        scrollBehavior: 'smooth'
      }}
    >
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="about" className="pt-4 md:pt-8">
        <About />
      </section>
      <section id="experience" className="pt-4 md:pt-8">
        <Experience />
      </section>
      <section id="skills" className="pt-4 md:pt-8">
        <Skills />
      </section>
      <section id="projects" className="pt-4 md:pt-8">
        <Projects />
      </section>
      <section id="blog" className="pt-4 md:pt-8">
        <Blog />
      </section>
      <section id="contact" className="pt-4 md:pt-8">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;