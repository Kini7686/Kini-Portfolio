import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { downloadResume } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Publications', href: '#publications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-amber-100/50'
            : 'bg-transparent'
        }`}
        style={{
          height: isScrolled ? '64px' : '80px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl font-bold tracking-wider hover:text-amber-600 transition-colors duration-300"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <span className="text-gradient-gold">PORTFOLIO</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative text-sm text-gray-600 hover:text-amber-600 transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={downloadResume}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-amber-600 border border-amber-400/50 rounded-full hover:bg-amber-50 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 glow-gold"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-xl text-gray-800 hover:text-amber-600 transition-colors duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 mt-6">
            <button
              type="button"
              onClick={(e) => {
                downloadResume(e);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 px-8 py-3 text-amber-600 border border-amber-400 rounded-full"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="px-8 py-3 text-lg font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
