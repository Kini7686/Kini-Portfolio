import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

// ============================================
// EASY TO UPDATE - EDUCATION
// Add or remove education entries here
// ============================================
interface EducationItem {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa?: string;
  description?: string[];
  achievements?: string[];
  isCurrent?: boolean;
}

const education: EducationItem[] = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Syracuse University',
    location: 'Syracuse, NY, USA',
    period: '2024 - 2026',
    gpa: '3.60/4.00',
    description: [
      'Focusing on advanced software engineering, cloud computing, and artificial intelligence.',
      'Coursework includes Distributed Systems, Machine Learning, and Software Engineering.',
    ],
    // achievements: ['Deans List'],
    isCurrent: true,
  },
  {
    degree: 'Bachelor of Engineering in Computer Engineering',
    school: 'University of Mumbai',
    location: 'Mumbai, India',
    period: '2019 - 2023',
    gpa: '3.56/4.00',
    description: [
      'Built a strong foundation in computer science fundamentals, data structures, and algorithms.',
      'Completed projects in web development, database management, and networking.',
    ],
    // achievements: ['Deans List'],
  },
];

// Certifications
const certifications = [
  {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    year: '2024',
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'AWS Academy (SLRTCE)',
    year: '2022',
  },
];

export default function Education() {
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
      id="education"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-white to-amber-50/30 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-yellow-100/20 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-amber-600" />
            <span className="text-amber-600 text-sm font-medium tracking-widest uppercase">
              Education
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
            Academic <span className="text-gradient-gold">Background</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.school}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + index * 200}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="group p-8 bg-white rounded-3xl border border-amber-100 hover:border-amber-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Icon & Status */}
                  <div className="md:col-span-1">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center mb-4">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    {edu.isCurrent && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Currently Studying
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3">
                    {/* Degree */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {edu.degree}
                    </h3>

                    {/* School */}
                    <div className="flex items-center gap-2 text-amber-600 font-medium mb-4">
                      <BookOpen className="w-4 h-4" />
                      {edu.school}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center gap-1 px-3 py-0.5 bg-amber-50 text-amber-700 rounded-full">
                          <Award className="w-4 h-4" />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {edu.description && (
                      <div className="space-y-1 mb-4">
                        {edu.description.map((desc, i) => (
                          <p key={i} className="text-gray-600 text-sm">
                            • {desc}
                          </p>
                        ))}
                      </div>
                    )}

                    {/* Achievements */}
                    {edu.achievements && (
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <span
                            key={achievement}
                            className="px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs font-medium rounded-full"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          className={`mt-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Professional <span className="text-gradient-gold">Certifications</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`flex items-center gap-4 p-5 bg-white rounded-xl border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{cert.name}</div>
                  <div className="text-sm text-gray-500">
                    {cert.issuer} • {cert.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
