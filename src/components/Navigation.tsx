import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, DollarSign } from 'lucide-react';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const sections = [
        { id: 'hero', label: './home', command: 'cd ~' },
        { id: 'about', label: './about', command: 'cat about.md' },
        { id: 'experience', label: './experience', command: 'git log' },
        { id: 'projects', label: './projects', command: 'ls ./projects' },
        { id: 'skills', label: './skills', command: 'cat package.json' },
        { id: 'contact', label: './contact', command: 'ssh connect' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            setScrolled(window.scrollY > 50);

            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="flex items-center gap-2 group"
                    >
                        <Terminal size={20} className="text-accent-500" />
                        <span className="text-gray-300 font-mono font-bold text-lg group-hover:text-white transition-colors">
                            ~/bibin_hashley<span className="terminal-cursor"></span>
                        </span>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`group relative px-4 py-2 rounded-md font-mono text-sm transition-all duration-300 overflow-hidden ${activeSection === section.id
                                    ? 'text-accent-400 bg-accent-500/10'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    {activeSection === section.id && <span className="text-accent-500">&gt;</span>}
                                    {section.label}
                                </span>
                                {activeSection === section.id && (
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-500"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-800 bg-[#0a0a0a]">
                    <div className="px-4 py-2 space-y-1">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`w-full text-left px-4 py-3 rounded-md font-mono text-sm transition-all duration-300 flex items-center gap-3 ${activeSection === section.id
                                    ? 'text-accent-400 bg-accent-500/10 border-l-2 border-accent-500'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                <span className="flex-1 font-bold text-white pl-2">{section.label}</span>
                                <div className={`flex items-center gap-1 text-xs opacity-50 ${activeSection === section.id ? 'text-accent-400' : 'text-gray-500'}`}>
                                    <DollarSign size={12} />
                                    <span>{section.command}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;

