import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

// ============================================
// EASY TO UPDATE - EXPERIENCES
// Just add a new experience object here!
// ============================================
interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
  isCurrent?: boolean;
}

// ============================================
// ADD YOUR EXPERIENCES HERE
// Copy-paste an experience block and modify
// ============================================
const experiences: ExperienceItem[] = [
  {
    title: 'Software Developer Intern',
    company: 'iConsult Collaborative',
    location: 'Syracuse University, USA',
    period: 'Mar 2025 - Present',
    description: [
      'Rebuilt the React.js onboarding flow to resolve performance issues, modularizing components and raising user engagement by 25%.',
      'Implemented Firebase Authentication to stabilize user sessions, adding token refresh logic that reduced login errors by 30%.',
      'Integrated Firebase services and REST APIs through modular design, improving deployment efficiency and scalability by 40%.',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Figma', 'AWS', 'Firebase'],
    isCurrent: true,
  },
  {
    title: 'Software Developer',
    company: 'RK Broadband',
    location: 'India',
    period: 'Apr 2022 - Jun 2024',
    description: [
      'Designed and developed a full-stack web application using React.js and Node.js/Express.js with modular architecture and RESTful design principles.',
      'Implemented secure authentication and authorization with admin-controlled user provisioning, session management, and credential validation.',
      'Built and optimized REST APIs and database schemas to manage users, billing records, and service states with CRUD operations.',
      'Integrated UPI-based payment workflows with backend verification and real-time transaction synchronization for automated service activation.',
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript', 'HTML', 'CSS', 'Git'],
  },
  {
    title: 'Cyber Security Intern',
    company: 'Cyber Security (SLRTCE)',
    location: 'Mumbai, Maharashtra, India',
    period: 'Nov 2022 - Jan 2023',
    description: [
      'Applied advanced cybersecurity techniques including Wireshark and forensic analysis to monitor network traffic, trace security incidents, and recover over 200 log records, improving network visibility and threat detection capabilities.',
      'Conducted Vulnerability Assessments and Penetration Testing (VAPT) on 5+ critical network devices, identifying vulnerabilities and implementing remediation strategies that contributed to a 30% improvement in network security.',
      'Worked closely with a multidisciplinary security team, collaborating on identifying and mitigating security threats to strengthen the organization\'s network infrastructure.',
      'Engaged in team-based security assessments and contributed to the formulation of security protocols aimed at safeguarding network assets, ensuring compliance with industry standards, and sharing best practices across teams.',
    ],
    techStack: ['VAPT', 'Wireshark', 'Network Traffic Analysis', 'Forensic Analysis', 'Routing & Network Monitoring', 'Linux', 'OSINT', 'Teamwork'],
  },
  {
    title: 'Cloud Intern',
    company: 'AWS Academy (SLRTCE)',
    location: 'India',
    period: 'Jul 2022 - Aug 2022',
    description: [
      'Completed hands-on training in AWS Cloud Services, focusing on secure deployments and resource optimization across all Services.',
      'Deployed a three-tier blog application on AWS using CloudFormation and WordPress with S3 storage and Lambda automation.',
      'Implemented CI/CD pipelines via CodePipeline and S3 lifecycle policies, reducing deployment time by 50% and storage costs by 30%.',
    ],
    techStack: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'CodePipeline', 'CloudFormation', 'CI/CD'],
  },
  // ============================================
  // ADD NEW EXPERIENCES HERE - Just copy this template:
  // {
  //   title: 'Your Job Title',
  //   company: 'Company Name',
  //   location: 'City, Country',
  //   period: 'Start Date - End Date',
  //   description: [
  //     'Achievement/responsibility 1...',
  //     'Achievement/responsibility 2...',
  //   ],
  //   techStack: ['Tech1', 'Tech2', 'Tech3'],
  //   isCurrent: true, // Set true if current job
  // },
  // ============================================
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-12 h-px bg-gradient-to-r from-amber-400 to-amber-600" />
            <span className="text-amber-600 text-sm font-medium tracking-widest uppercase">
              My Journey
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
            Professional <span className="text-gradient-gold">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-amber-300 to-transparent transition-all duration-1500 ${
              isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
            }`}
            style={{ transformOrigin: 'top', transitionDelay: '200ms' }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${300 + index * 200}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`relative pl-12 md:pl-0 ${index % 2 === 1 ? 'md:order-2 md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    {/* Timeline Node */}
                    <div
                      className={`absolute left-0 md:left-auto ${
                        index % 2 === 1
                          ? 'md:left-0 md:-translate-x-1/2'
                          : 'md:right-0 md:translate-x-1/2'
                      } top-2 w-4 h-4 rounded-full border-2 border-amber-400 bg-white z-10 transition-all duration-500 ${
                        exp.isCurrent ? 'animate-pulse shadow-[0_0_20px_rgba(212,175,55,0.5)]' : ''
                      }`}
                    >
                      {exp.isCurrent && (
                        <div className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-30" />
                      )}
                    </div>

                    {/* Card */}
                    <div 
                      className="group p-6 bg-white rounded-2xl border border-amber-100 hover:border-amber-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100 cursor-pointer"
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                      {/* Header */}
                      <div className={`flex items-center gap-2 mb-3 ${index % 2 === 1 ? '' : 'md:justify-end'}`}>
                        <Briefcase className="w-4 h-4 text-amber-500" />
                        <span className="text-amber-600 text-sm font-medium">
                          {exp.title}
                        </span>
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded-full">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Company */}
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {exp.company}
                      </h3>

                      {/* Meta */}
                      <div className={`flex flex-wrap gap-3 mb-4 text-sm text-gray-500 ${index % 2 === 1 ? '' : 'md:justify-end'}`}>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <div className={`space-y-2 ${expandedIndex === index ? '' : 'line-clamp-3'}`}>
                        {exp.description.map((desc, i) => (
                          <p key={i} className="text-gray-600 text-sm leading-relaxed">
                            • {desc}
                          </p>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 1 ? '' : 'md:justify-end'}`}>
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expand hint */}
                      {exp.description.length > 3 && (
                        <div className={`mt-4 text-xs text-amber-500 ${index % 2 === 1 ? '' : 'md:text-right'}`}>
                          {expandedIndex === index ? 'Click to collapse' : 'Click to expand'}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 1 ? 'md:order-1' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
