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
            <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-700 ease-out hidden lg:block ${isVisible && shouldShowNavigation ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                }`}>
                <div className="glass-effect rounded-3xl px-6 py-3 shadow-glass border border-white/20 backdrop-blur-2xl">
                    <div className="flex items-center space-x-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`relative group transition-all duration-300 ease-out ${activeSection === section.id
                                    ? 'text-white scale-105'
                                    : 'text-slate-300 hover:text-white'
                                    }`}
                            >
                                {/* Active background */}
                                <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ease-out ${activeSection === section.id
                                    ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 scale-100 shadow-inner-glow'
                                    : 'bg-white/5 scale-0 group-hover:scale-100'
                                    }`} />

                                {/* Glow effect */}
                                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ease-out ${activeSection === section.id
                                    ? 'bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-md scale-110'
                                    : 'opacity-0 group-hover:opacity-100 group-hover:bg-white/10 group-hover:blur-sm'
                                    }`} />

                                {/* Content */}
                                <div className="relative flex items-center px-4 py-2.5">
                                    <span className={`text-sm font-semibold transition-all duration-300 ${activeSection === section.id
                                        ? 'text-gradient'
                                        : ''
                                        }`}>
                                        {section.label}
                                    </span>
                                </div>


                                {/* Ripple effect on click */}
                                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                    <div className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 transition-transform duration-200 rounded-2xl"></div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className={`fixed top-4 right-4 z-50 lg:hidden transition-all duration-500 ease-out ${isVisible && (shouldShowNavigation || isMobileMenuOpen) ? 'opacity-100' : 'opacity-0'
                }`}>
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`glass-effect p-4 rounded-2xl shadow-glass border border-white/20 hover:bg-white/20 transition-all duration-300 group ${isMobileMenuOpen ? 'bg-white/20 shadow-glow' : ''
                        }`}
                >
                    <div className="relative">
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-white transition-transform duration-300 rotate-90 group-hover:rotate-180" />
                        ) : (
                            <Menu className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
                        )}
                    </div>
                </button>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full right-0 mt-3 w-56 glass-effect rounded-3xl shadow-glass border border-white/20 overflow-hidden animate-scale-in">
                        <div className="p-2 space-y-1">
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 group relative overflow-hidden ${activeSection === section.id
                                        ? 'text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30 shadow-inner-glow'
                                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                                        }`}
                                >
                                    {/* Active indicator */}
                                    {activeSection === section.id && (
                                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                                    )}

                                    <span className={`text-sm font-medium transition-all duration-300 ${activeSection === section.id ? 'ml-4' : ''
                                        }`}>
                                        {section.label}
                                    </span>

                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 rounded-2xl"></div>
                                </button>
                            ))}
                        </div>

                        {/* Menu footer */}
                        <div className="p-4 border-t border-white/10">
                            <div className="flex justify-center space-x-1">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 lg:hidden transition-all duration-500 animate-fade-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    );
};

export default Navigation;