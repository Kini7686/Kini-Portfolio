import { useEffect, useRef, useState } from 'react';
import { Code2, Server, Cloud, Brain, Shield, Wrench } from 'lucide-react';

// ============================================
// EASY TO UPDATE - SKILL CATEGORIES
// Add or remove skills here as needed
// ============================================
interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'C/C++', 'Java', 'JavaScript', 'PHP', 'SQL', 'NoSQL', 'HTML', 'CSS', 'SASS', 'Bash Script'],
    color: 'from-amber-100 to-yellow-100',
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Bootstrap', 'Tailwind CSS', 'Socket.IO'],
    color: 'from-orange-100 to-amber-100',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Firebase', 'Docker', 'Git/GitHub', 'Postman', 'REST APIs', 'CI/CD Pipelines'],
    color: 'from-yellow-100 to-amber-100',
  },
  {
    title: 'AI/ML & Data',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'GenAI', 'Ollama'],
    color: 'from-amber-50 to-orange-100',
  },
  {
    title: 'Networking & Security',
    icon: Shield,
    skills: ['Wireshark', 'Nmap', 'Burp Suite', 'Cisco Packet Tracer', 'Firewalls', 'Network Monitoring'],
    color: 'from-yellow-50 to-amber-100',
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Figma', 'MongoDB', 'Neo4j', 'Streamlit', 'WordPress', 'AWS CloudFormation'],
    color: 'from-amber-100 to-yellow-50',
  },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
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
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-amber-50/30 overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-200/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-amber-600" />
            <span className="text-amber-600 text-sm font-medium tracking-widest uppercase">
              My Expertise
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
            Skills & <span className="text-gradient-gold">Technologies</span>
          </h2>
          
          <p
            className={`mt-4 text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            A comprehensive toolkit built over years of hands-on experience,
            constantly evolving with the latest technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-2'
              }`}
              style={{
                transitionDelay: `${200 + categoryIndex * 100}ms`,
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div
                className={`relative p-6 rounded-3xl border border-amber-100 bg-gradient-to-b ${category.color} backdrop-blur-sm transition-all duration-500 ${
                  hoveredCategory === categoryIndex
                    ? 'border-amber-400/50 -translate-y-2 shadow-xl shadow-amber-100'
                    : ''
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-5 transition-all duration-500 shadow-sm ${
                    hoveredCategory === categoryIndex ? 'scale-110 shadow-md' : ''
                  }`}
                >
                  <category.icon
                    className={`w-7 h-7 transition-colors duration-500 ${
                      hoveredCategory === categoryIndex ? 'text-amber-600' : 'text-amber-500'
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 bg-white border border-amber-100 rounded-full text-sm text-gray-600 transition-all duration-300 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-105 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
                      }`}
                      style={{
                        transitionDelay: `${400 + categoryIndex * 100 + skillIndex * 30}ms`,
                        transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
