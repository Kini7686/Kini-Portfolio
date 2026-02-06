import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { downloadResume } from '@/lib/utils';

// ============================================
// UPDATE YOUR SOCIAL LINKS HERE
// ============================================
const socialLinks = [
  { icon: Github, href: 'https://github.com/Kini7686', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aditya-kini/', label: 'LinkedIn' },
  { icon: ExternalLink, href: 'https://kini7686.github.io/Portfolio/', label: 'Portfolio' },
  { icon: Mail, href: 'mailto:akini01@syr.edu', label: 'Email' },
];

interface Bubble {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  color: string;
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Golden bubbles animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const bubbles: Bubble[] = [];
    const bubbleCount = 30;
    const goldenColors = [
      'rgba(212, 175, 55, ',
      'rgba(244, 228, 188, ',
      'rgba(184, 134, 11, ',
      'rgba(201, 176, 55, ',
    ];

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 25 + 5,
        speedY: Math.random() * 0.8 + 0.3,
        speedX: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.4 + 0.2,
        color: goldenColors[Math.floor(Math.random() * goldenColors.length)],
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        bubble.y -= bubble.speedY;
        bubble.x += bubble.speedX;
        bubble.x += Math.sin(bubble.y * 0.01) * 0.3;

        if (bubble.y < -bubble.size) {
          bubble.y = canvas.height + bubble.size;
          bubble.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createRadialGradient(
          bubble.x - bubble.size * 0.3,
          bubble.y - bubble.size * 0.3,
          0,
          bubble.x,
          bubble.y,
          bubble.size
        );
        gradient.addColorStop(0, bubble.color + (bubble.opacity + 0.2) + ')');
        gradient.addColorStop(0.5, bubble.color + bubble.opacity + ')');
        gradient.addColorStop(1, bubble.color + '0)');

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        if (Math.random() > 0.98) {
          ctx.beginPath();
          ctx.arc(
            bubble.x + Math.random() * bubble.size - bubble.size / 2,
            bubble.y + Math.random() * bubble.size - bubble.size / 2,
            1,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-amber-50/30 to-white"
    >
      {/* Golden Bubbles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 z-5 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-amber-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-yellow-200/10 rounded-full blur-2xl animate-float-slow" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Greeting */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="text-amber-600 text-lg font-medium tracking-wide">
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1
              className={`mt-2 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                fontFamily: 'Montserrat, sans-serif',
                transitionDelay: '500ms',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Aditya <span className="text-gradient-gold">Kini</span>
            </h1>

            {/* Title */}
            <div
              className={`mt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <span className="text-2xl md:text-3xl text-amber-600 font-light">
                Full Stack Developer
              </span>
            </div>

            {/* Tagline */}
            <p
              className={`mt-6 text-lg text-gray-600 max-w-lg leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              MS in Computer Science at Syracuse University. I build scalable web applications 
              and create innovative digital solutions. Passionate about clean code, cloud technologies, 
              and AI-driven applications.
            </p>

            {/* CTA Buttons */}
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                transitionDelay: '1200ms',
                transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
              }}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center gap-2 hover:scale-105 glow-gold"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={downloadResume}
                className="px-8 py-4 border-2 border-amber-400 text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`mt-12 flex gap-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '1400ms' }}
            >
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-amber-200 text-amber-600 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:border-transparent transition-all duration-300 hover:scale-110 shadow-lg shadow-amber-100"
                  style={{ animationDelay: `${1500 + index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1200 ${
              isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-24 rotate-3'
            }`}
            style={{
              transitionDelay: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300/30 to-yellow-400/20 rounded-3xl blur-3xl scale-110" />
              
              {/* Image Container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-3xl overflow-hidden border-2 border-amber-200 group shadow-2xl shadow-amber-100">
                <img
                  src="/hero-portrait.jpg"
                  alt="Aditya Kini"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl shadow-[inset_0_0_30px_rgba(212,175,55,0.3)]" />
              </div>

              {/* Floating Badge - Experience */}
              <div
                className={`absolute -bottom-4 -left-4 px-6 py-3 bg-white rounded-2xl shadow-xl shadow-amber-100 border border-amber-100 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: '1500ms',
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
              >
                <span className="text-gradient-gold font-bold text-xl">3+ Years</span>
                <span className="text-gray-600 text-sm ml-2">Experience</span>
              </div>

              {/* Availability Badge */}
              <div
                className={`absolute -top-4 -right-4 px-4 py-2 bg-white rounded-full shadow-lg shadow-amber-100 border border-amber-100 transition-all duration-700 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
                }`}
                style={{
                  transitionDelay: '1600ms',
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-700">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1800ms' }}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-amber-400 hover:text-amber-600 transition-colors duration-300"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
