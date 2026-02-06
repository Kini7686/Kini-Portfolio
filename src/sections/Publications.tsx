import { useEffect, useRef, useState } from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

// ============================================
// EASY TO UPDATE - PUBLICATIONS
// Add or remove publications here as needed
// ============================================
interface Publication {
  title: string;
  journal: string;
  impactFactor: string;
  link?: string;
}

const publications: Publication[] = [
  {
    title: 'CAR AND HOUSE PRICE PREDICTION USING LINEAR, LASSO AND RIDGE REGRESSION',
    journal: 'International Journal of Advance and Innovative Research, Volume 8, Issue 4 (IX)',
    impactFactor: '8.126',
    link: 'https://iaraedu.com/pdf/ijair-volume-8-issue-4-ix-october-december-2021.pdf#page=81',
  },
  {
    title: 'OSINT Automation Application',
    journal: 'International Journal of Scientific Research in Computer Science, Engineering and Information Technology (IJSRCSEIT)',
    impactFactor: '7.254',
    link: 'https://ijsrcseit.com/paper/CSEIT232551.pdf',
  },
];

export default function Publications() {
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
      id="publications"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-white to-amber-50/30 overflow-hidden"
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
              Research
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
            Publications & <span className="text-gradient-gold">Papers</span>
          </h2>

          <p
            className={`mt-4 text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Academic papers published in peer-reviewed journals.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <div
              key={pub.title}
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
                className={`relative h-full p-6 bg-white rounded-2xl border border-amber-100 transition-all duration-500 shadow-sm ${
                  hoveredIndex === index
                    ? 'border-amber-400/50 -translate-y-2 shadow-xl shadow-amber-100'
                    : ''
                }`}
              >
                {/* Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center transition-all duration-500 ${
                      hoveredIndex === index ? 'scale-110 shadow-lg shadow-amber-200' : ''
                    }`}
                  >
                    <BookOpen className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-900 font-medium mb-2 leading-snug">
                  Published a paper on &quot;{pub.title}&quot;
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  in {pub.journal}
                </p>
                <p className="text-red-600 font-semibold text-sm mb-4">
                  Impact Factor = {pub.impactFactor}
                </p>

                {/* Link */}
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors"
                  >
                    Link
                    <ExternalLink className="w-4 h-4" />
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
