import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

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
        <>
            {/* Desktop Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-dev-bg/95 backdrop-blur-md border-b border-dev-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="text-white font-mono font-bold text-xl hover:text-accent-400 transition-colors duration-300"
                        >
                            Bibin Hashley
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                                        activeSection === section.id
                                            ? 'text-accent-400 bg-dev-card border border-accent-400/30'
                                            : 'text-dev-text hover:text-accent-400 hover:bg-dev-card/50'
                                    }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg text-dev-text hover:text-accent-400 hover:bg-dev-card transition-all duration-300"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-dev-border bg-dev-card">
                        <div className="px-4 py-2 space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                                        activeSection === section.id
                                            ? 'text-accent-400 bg-dev-bg border border-accent-400/30'
                                            : 'text-dev-text hover:text-accent-400 hover:bg-dev-bg/50'
                                    }`}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navigation;
