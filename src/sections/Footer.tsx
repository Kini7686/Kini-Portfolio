import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, ExternalLink, Mail, Heart } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/Kini7686', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aditya-kini/', label: 'LinkedIn' },
  // { icon: ExternalLink, href: 'https://aditya-kini.vercel.app/', label: 'Portfolio' },
  { icon: Mail, href: 'mailto:akini01@syr.edu', label: 'Email' },
];

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-16 bg-gradient-to-b from-amber-50/30 to-white overflow-hidden"
    >
      {/* Top Border Gradient */}
      <div
        className={`absolute top-0 left-0 right-0 h-px transition-all duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl" />
      <div className="absolute top-0 right-1/4 w-48 h-48 bg-yellow-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{
              transitionDelay: '200ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-2xl font-bold tracking-wider hover:text-amber-600 transition-colors duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="text-gradient-gold">ADITYA </span>KINI
            </a>
          </div>

          {/* Tagline */}
          <p
            className={`mt-4 text-gray-500 text-center transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Full Stack Developer | Cloud Enthusiast | Problem Solver
          </p>

          {/* Navigation */}
          <nav
            className={`mt-8 flex flex-wrap justify-center gap-6 md:gap-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative text-gray-600 hover:text-amber-600 transition-colors duration-300 group text-sm"
                style={{ animationDelay: `${500 + index * 80}ms` }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div
            className={`mt-8 flex gap-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-amber-200 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600 hover:border-transparent transition-all duration-300 hover:scale-110 shadow-sm"
                style={{
                  transitionDelay: `${700 + index * 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="mt-12 w-full max-w-md h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

          {/* Copyright */}
          <div
            className={`mt-8 flex flex-col md:flex-row items-center gap-2 text-gray-500 text-sm transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <span>© {new Date().getFullYear()} Aditya Kini. All rights reserved.</span>
            <span className="hidden md:inline text-amber-300">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and lots of coffee
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
