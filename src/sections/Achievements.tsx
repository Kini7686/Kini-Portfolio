import { useEffect, useRef, useState } from 'react';
import { Award, BadgeCheck, Search } from 'lucide-react';

// ============================================
// EASY TO UPDATE - ACHIEVEMENTS
// Add or remove achievements here as needed
// ============================================
interface Achievement {
  title: string;
  description: string;
  icon: React.ElementType;
  date?: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: 'AWS Certified Developer - Associate',
    description: 'Professional certification validating expertise in developing, deploying, and debugging cloud-based applications using AWS.',
    icon: BadgeCheck,
    date: '2024',
    link: '#',
  },
  {
    title: 'AWS Academy Cloud Foundations',
    description: 'Completed comprehensive training in AWS Cloud Services with hands-on experience in secure deployments and resource optimization.',
    icon: Award,
    date: '2022',
    link: '#',
  },
  {
    title: 'OSINT Automation Application',
    description: 'Demonstrated project idea at WEschool\'s 4th International Conference, showcasing 6 modules designed to skim secured data and files across internet.',
    icon: Search,
    date: "2023",
  },
];

export default function Achievements() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="achievements"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
      <div className="absolute top-40 right-0 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-yellow-100/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-amber-600" />
            <span className="text-amber-600 text-sm font-medium tracking-widest uppercase">
              Achievements
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-amber-600 to-amber-400" />
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
            Milestones & <span className="text-gradient-gold">Recognition</span>
          </h2>
          
          <p
            className={`mt-4 text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            A collection of certifications, academic achievements, and professional 
            milestones that mark my journey in tech.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-full p-6 bg-white rounded-2xl border border-amber-100 transition-all duration-500 ${
                  hoveredIndex === index
                    ? 'border-amber-400/50 -translate-y-2 shadow-xl shadow-amber-100'
                    : 'shadow-sm'
                }`}
              >
                {/* Icon & Date */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center transition-all duration-500 ${
                      hoveredIndex === index ? 'scale-110 shadow-lg shadow-amber-200' : ''
                    }`}
                  >
                    <achievement.icon className="w-7 h-7 text-white" />
                  </div>
                  {achievement.date && (
                    <span className="px-3 py-1 bg-amber-50 text-amber-600 text-xs font-medium rounded-full">
                      {achievement.date}
                    </span>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Link if available */}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    className="inline-flex items-center gap-1 mt-4 text-amber-600 text-sm font-medium hover:text-amber-700 transition-colors"
                  >
                    View Certificate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-50 to-transparent rounded-tr-2xl opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
