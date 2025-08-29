import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isMouseMoving, setIsMouseMoving] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'blog', label: 'Blog' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        // Show navigation after a short delay
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    // Handle scroll-based functionality
    useEffect(() => {
        let scrollTimeout: number;
        let ticking = false;

        const handleScroll = () => {
            // Handle visibility
            setIsAtTop(window.scrollY < 50);
            setIsScrolling(true);

            // Clear previous timeout
            clearTimeout(scrollTimeout);

            // Hide navigation after scrolling stops for 1.5 seconds
            scrollTimeout = window.setTimeout(() => {
                setIsScrolling(false);
            }, 1500);

            // Handle active section detection
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollPosition = window.scrollY + 100;

                    sections.forEach(section => {
                        const element = document.getElementById(section.id);
                        if (element) {
                            const { offsetTop, offsetHeight } = element;
                            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                                setActiveSection(section.id);
                            }
                        }
                    });
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    // Handle mouse movement visibility
    useEffect(() => {
        let mouseTimeout: number;

        const handleMouseMove = () => {
            setIsMouseMoving(true);
            clearTimeout(mouseTimeout);
            
            mouseTimeout = window.setTimeout(() => {
                setIsMouseMoving(false);
            }, 2000);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(mouseTimeout);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for navigation height
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
            // Close mobile menu after clicking
            setIsMobileMenuOpen(false);
        }
    };

    // Show navigation when scrolling OR mouse moving
    const shouldShowNavigation = isScrolling || isMouseMoving || isAtTop;

    return (
        <>
            {/* Desktop Navigation */}
            <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out hidden lg:block ${isVisible && shouldShowNavigation ? 'opacity-100 translate-y-0 backdrop-blur-md' : 'opacity-0 -translate-y-4 backdrop-blur-none'
                } rounded-full`}>
                <div className="flex items-center space-x-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 ease-out">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`relative group transition-all duration-300 ease-in-out ${activeSection === section.id
                                ? 'text-blue-400 scale-110'
                                : 'text-white/70 hover:text-white'
                                }`}
                        >
                            {/* Animated background */}
                            <div className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${activeSection === section.id
                                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 scale-110'
                                : 'bg-white/5 scale-0 group-hover:scale-100'
                                }`} />

                            {/* Glow effect */}
                            <div className={`absolute inset-0 rounded-full transition-all duration-300 ease-in-out ${activeSection === section.id
                                ? 'bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-sm scale-125'
                                : 'bg-white/0 scale-0 group-hover:scale-100 group-hover:bg-white/10'
                                }`} />

                            {/* Content */}
                            <div className="relative flex items-center px-4 py-2">
                                <span className="text-sm font-medium transition-all duration-300 ease-in-out">
                                    {section.label}
                                </span>
                            </div>

                            {/* Active indicator */}
                            {activeSection === section.id && (
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full animate-pulse" />
                            )}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className={`fixed top-4 right-4 z-50 lg:hidden transition-all duration-500 ease-out ${isVisible && (shouldShowNavigation || isMobileMenuOpen) ? 'opacity-100 backdrop-blur-md' : 'opacity-0 backdrop-blur-none'
                }`}>
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-3 rounded-full bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
                    )}
                </button>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full right-0 mt-2 w-48 rounded-2xl bg-white/10 border border-white/20 shadow-xl overflow-hidden backdrop-blur-md transition-all duration-300">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`w-full text-left px-4 py-3 transition-all duration-300 hover:bg-white/10 ${activeSection === section.id
                                    ? 'text-blue-400 bg-blue-500/20'
                                    : 'text-white/80'
                                    }`}
                            >
                                <span className="text-sm font-medium">{section.label}</span>
                            </button>
                        ))}
                    </div>
                )}
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Navigation;