import { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, Code, Cloud } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
  delay: number;
  isVisible: boolean;
}

function AnimatedStat({ value, label, delay, isVisible }: StatProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const isDecimal = value.includes('.');
  const numericValue = isDecimal
    ? parseFloat(value)
    : parseInt(value.replace(/\D/g, ''), 10);
  const suffix = isDecimal ? '' : value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 1500;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = isDecimal
          ? easeOut * numericValue
          : Math.floor(easeOut * numericValue);

        setDisplayValue(isDecimal ? current.toFixed(1) : String(current) + suffix);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, numericValue, suffix, delay, isDecimal]);

  return (
    <div
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient-gold">
        {displayValue}
      </div>
      <div className="mt-2 text-sm text-gray-500">{label}</div>
    </div>
  );
}

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Built' },
  { value: '2', label: 'AWS Certifications' },
  { value: '3.6', label: 'GPA' },
];

const highlights = [
  {
    icon: Code,
    title: 'Full Stack Development',
    description: 'React.js, Node.js, Express.js, MongoDB',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'AWS, Firebase, Docker, CI/CD',
  },
  {
    icon: Award,
    title: 'Certified Professional',
    description: 'AWS Certified Developer - Associate',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'MS in CS at Syracuse University',
  },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-white to-amber-50/30 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
      <div className="absolute top-40 right-0 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-yellow-200/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div
            className={`flex items-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-amber-600" />
            <span className="text-amber-600 text-sm font-medium tracking-widest uppercase">
              About Me
            </span>
          </div>
          
          <h2
            className={`mt-4 text-4xl md:text-5xl font-bold text-gray-900 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: 'Montserrat, sans-serif',
              transitionDelay: '100ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            Crafting Digital Solutions with{' '}
            <span className="text-gradient-gold">Passion</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 -rotate-2'
            }`}
            style={{
              transitionDelay: '200ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-amber-200/50 rounded-3xl rotate-3 transition-transform duration-700 hover:rotate-6" />
              <div className="absolute -inset-8 border border-amber-100/30 rounded-3xl -rotate-2" />
              
              {/* Main Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-amber-100 group shadow-xl shadow-amber-100">
                <img
                  src="/about-portrait.jpg"
                  alt="Aditya Kini working"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div
                className={`absolute -bottom-6 -right-6 p-6 bg-white rounded-2xl shadow-xl shadow-amber-100 border border-amber-100 max-w-xs transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: '600ms',
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold">AWS Certified</div>
                    <div className="text-gray-500 text-sm">Developer - Associate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-6">
            <p
              className={`text-lg text-gray-700 leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              I'm Aditya Kini, a passionate Full Stack Developer currently pursuing my Master's in 
              Computer Science at Syracuse University. With a strong foundation in Computer Engineering 
              from the University of Mumbai and hands-on experience in the industry, I specialize in 
              building scalable web applications and cloud-based solutions.
            </p>

            <p
              className={`text-gray-600 leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              My expertise spans across the entire development stack - from crafting responsive 
              frontends with React.js to building robust backends with Node.js and Express. I'm 
              particularly passionate about cloud technologies and hold AWS Certified Developer 
              - Associate certification. I love solving complex problems and creating applications 
              that make a real impact.
            </p>

            <p
              className={`text-gray-600 leading-relaxed transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or diving into AI/ML research. I believe in continuous learning 
              and staying updated with the latest industry trends.
            </p>

            {/* Highlights Grid */}
            <div
              className={`grid grid-cols-2 gap-4 pt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 bg-white rounded-xl border border-amber-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all duration-300"
                  style={{ animationDelay: `${700 + index * 100}ms` }}
                >
                  <item.icon className="w-6 h-6 text-amber-500 mb-2" />
                  <div className="text-gray-900 font-medium text-sm">{item.title}</div>
                  <div className="text-gray-500 text-xs">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={800 + index * 150}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
