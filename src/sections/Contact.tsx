import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle, Loader2, Github, Linkedin, ExternalLink, Download } from 'lucide-react';
import { downloadResume } from '@/lib/utils';

// ============================================
// UPDATE YOUR CONTACT INFO HERE
// ============================================
const contactInfo = [
  { icon: Mail, label: 'Email', value: 'akini01@syr.edu', href: 'mailto:akini01@syr.edu' },
  { icon: Phone, label: 'Phone', value: '+1 (315) 952-8827', href: 'tel:+13159528827' },
  { icon: MapPin, label: 'Location', value: 'Syracuse, NY, USA' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Kini7686', color: 'hover:bg-gray-800 hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/aditya-kini/', color: 'hover:bg-blue-600 hover:text-white' },
  { icon: ExternalLink, label: 'Portfolio', href: 'https://aditya-kini.vercel.app/', color: 'hover:bg-amber-500 hover:text-white' },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl" />

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
              Get In Touch
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
            Let's Build Something{' '}
            <span className="text-gradient-gold">Amazing</span> Together
          </h2>
          
          <p
            className={`mt-4 text-gray-600 max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Reach out and let's create something extraordinary.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-gray-900 font-medium hover:text-amber-600 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-gray-900 font-medium">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div
              className={`pt-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="text-gray-500 text-sm mb-4">Connect with me</div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white border border-amber-200 text-gray-600 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div
              className={`pt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <button
                type="button"
                onClick={downloadResume}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-white rounded-xl hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-200"
              >
                <Download className="w-5 h-5" />
                <span className="font-medium">Download Resume</span>
              </button>
            </div>

            {/* Availability Card */}
            <div
              className={`p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl border border-amber-100 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <div className="text-gray-900 font-medium">Open to Opportunities</div>
                  <div className="text-gray-500 text-sm">Available for full-time roles</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-12 rotate-1'
            }`}
            style={{
              transitionDelay: '400ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white rounded-3xl border border-amber-100 shadow-xl shadow-amber-100"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'name' || formState.name
                        ? '-top-2.5 text-xs text-amber-600 bg-white px-2'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border border-amber-100 rounded-xl text-gray-900 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'email' || formState.email
                        ? '-top-2.5 text-xs text-amber-600 bg-white px-2'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border border-amber-100 rounded-xl text-gray-900 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all duration-300"
                  />
                </div>

                {/* Subject Field */}
                <div className="relative md:col-span-2">
                  <label
                    htmlFor="subject"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'subject' || formState.subject
                        ? '-top-2.5 text-xs text-amber-600 bg-white px-2'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 bg-gray-50 border border-amber-100 rounded-xl text-gray-900 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div className="relative md:col-span-2">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focusedField === 'message' || formState.message
                        ? '-top-2.5 text-xs text-amber-600 bg-white px-2'
                        : 'top-4 text-gray-500'
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className="w-full px-4 py-4 bg-gray-50 border border-amber-100 rounded-xl text-gray-900 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/50 transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`mt-8 w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-500 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 hover:scale-[1.02]'
                } disabled:cursor-not-allowed shadow-lg shadow-amber-200`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
