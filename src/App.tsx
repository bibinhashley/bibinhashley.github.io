
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-0"></div>
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Projects />
                    <Contact />
                </main>
                <footer className="bg-white/80 backdrop-blur-sm py-8 text-center text-gray-600">
                    <p>© {new Date().getFullYear()} Bibin Hashley. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}

export default App;