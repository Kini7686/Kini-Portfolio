import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, Folder } from 'lucide-react';

// ============================================
// EASY TO UPDATE - PROJECTS
// Just add a new project object here!
// ============================================
interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// ============================================
// ADD YOUR PROJECTS HERE
// Copy-paste a project block and modify
// ============================================
const projects: Project[] = [
  {
    title: 'KiniBot',
    description:
      'A real-time collaborative IDE enabling multi-user coding with <200ms latency. Features an integrated Ollama-based AI assistant for live code debugging and summarization, reducing error resolution time by 60%. Includes a secure browser compiler supporting Python, Java, and C/C++ with shared real-time outputs.',
    image: '/project-kinibot.png',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Socket.IO', 'Python', 'C/C++', 'Java', 'Ollama'],
    githubUrl: 'https://github.com/Kini7686/KiniBot-Real-Time-Code-Collaboration-with-Built-In-AI',
    featured: true,
  },
  {
    title: 'CleanClick',
    description:
      'An eco-conscious social platform for sharing sustainable products and building green communities. Features direct eco-product sharing, AWS-powered image storage, JWT and Google OAuth authentication with role-based access control.',
    image: '/project-cleanclick.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'JWT'],
    githubUrl: 'https://github.com/Kini7686',
    featured: true,
  },
  {
    title: 'AI Research Paper Scraper',
    description:
      'An AI-driven web application that fetches and summarizes IEEE and arXiv papers via keyword-based search. Uses TF-IDF and entity extraction to construct a Neo4j knowledge graph visualizing topic connections across research domains.',
    image: '/project-research.jpg',
    technologies: ['Python', 'Flask', 'Streamlit', 'Neo4j', 'OpenAI API'],
    githubUrl: 'https://github.com/Kini7686',
  },
  {
    title: 'FoodConnectSU',
    description:
      'An AI-powered campus food waste reduction platform that enables students to list and claim surplus meals in real time. Integrates food image recognition and QR-based pickup verification to ensure secure, efficient redistribution of unused food.',
    image: '/project-foodconnect.jpg',
    technologies: ['Python', 'Streamlit', 'Firebase', 'REST API', 'OpenCV', 'Tesseract OCR'],
    githubUrl: 'https://github.com/Kini7686/FoodConnect-SU',
  },  
  {
    title: 'Car and House Price Prediction Using Regression Model',
    description:
      'A data-driven machine learning application that predicts car and house prices using regression algorithms. Implements EDA, feature engineering, model training (Linear/Random Forest), and evaluation to deliver accurate price estimations based on real-world datasets.',
    image: '/project-car-house.png',
    technologies: ['Python', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    githubUrl: 'https://github.com/Kini7686/Car-and-House-Price-Prediction-Using-Regression-Model',
  },  
  // ============================================
  // ADD NEW PROJECTS HERE - Just copy this template:
  // {
  //   title: 'Your Project Name',
  //   description: 'Your project description...',
  //   image: '/project-image.jpg', // Add image to public folder
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   liveUrl: 'https://your-live-demo.com', // Optional
  //   githubUrl: 'https://github.com/yourusername/repo', // Optional
  //   featured: true, // Set true to highlight
  // },
  // ============================================
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Separate featured and other projects
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-amber-50/30 to-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl" />

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
              Featured Work
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
            Projects That Define <span className="text-gradient-gold">My Craft</span>
          </h2>

          <p
            className={`mt-4 text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            A selection of full-stack applications, AI-driven tools, and innovative
            solutions built with modern technologies.
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="space-y-16 mb-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{
                  transitionDelay: `${200 + index * 200}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-amber-100 group-hover:border-amber-300 transition-all duration-500 shadow-lg shadow-amber-100">
                      <div className={`absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
                      
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center">
                          <Folder className="w-20 h-20 text-amber-300" />
                        </div>
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* View Project Button */}
                      <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 ${hoveredProject === index ? 'opacity-100' : 'opacity-0'}`}>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/90 backdrop-blur-md border border-amber-200 rounded-full text-gray-900 font-medium flex items-center gap-2 hover:bg-white transition-all duration-300"
                          >
                            View Project
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        ) : project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/90 backdrop-blur-md border border-amber-200 rounded-full text-gray-900 font-medium flex items-center gap-2 hover:bg-white transition-all duration-300"
                          >
                            View on GitHub
                            <Github className="w-4 h-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">GitHub</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {index < featuredProjects.length - 1 && (
                  <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${600 + index * 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div className="relative h-full p-6 bg-white rounded-2xl border border-amber-100 hover:border-amber-300 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center">
                      <Folder className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-amber-600 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-amber-600 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Projects CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="https://github.com/Kini7686"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-amber-400 rounded-full text-amber-600 hover:bg-amber-50 transition-all duration-300 group"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
