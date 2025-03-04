
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Building, Clock, Users, CheckCircle, Sparkles } from 'lucide-react';
import TeamMember from '../components/TeamMember';

// Sample team members data
const teamMembers = [
  {
    name: "Dr. Alex Chen",
    position: "CEO & Chief AI Scientist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Former AI Research Lead at Google with 15+ years of experience in machine learning and AI systems. PhD in Computer Science from Stanford University.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "alex@applyai.today"
  },
  {
    name: "Sarah Johnson",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    bio: "Expert in scalable AI infrastructure with previous leadership roles at Microsoft and Amazon. Master's in Computer Engineering from MIT.",
    linkedin: "https://linkedin.com",
    email: "sarah@applyai.today"
  },
  {
    name: "Michael Rodriguez",
    position: "Lead ML Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Specialist in neural networks and deep learning models. Previously developed AI solutions at Tesla and NVIDIA. PhD in AI from UC Berkeley.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "michael@applyai.today"
  },
  {
    name: "Emily Zhang",
    position: "AI Product Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80",
    bio: "Former Product Manager at Apple focusing on AI integrations. MBA from Harvard Business School with a focus on technology innovation.",
    linkedin: "https://linkedin.com",
    email: "emily@applyai.today"
  },
  {
    name: "David Williams",
    position: "Head of AI Ethics",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    bio: "Leading our efforts in responsible AI development and ethical considerations. Previously worked with the IEEE AI Ethics Initiative and OpenAI.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "david@applyai.today"
  },
  {
    name: "Sophia Lee",
    position: "AI Solutions Architect",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    bio: "Expert in designing custom AI implementations for enterprise clients. Previously led architecture teams at IBM Watson and Palantir.",
    linkedin: "https://linkedin.com",
    email: "sophia@applyai.today"
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    about: false,
    timeline: false,
    stats: false,
    values: false,
    team: false,
    cta: false
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);
  const [ctaMagneticPosition, setCtaMagneticPosition] = useState({ x: 0, y: 0 });
  
  // Refs for stat cards to add magnetic effects
  const statCardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  
  const [statCardPositions, setStatCardPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);
  
  // Refs for value cards
  const valueCardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  
  const [valueCardPositions, setValueCardPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  const headerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) {
            setIsVisible((prev) => ({ ...prev, header: true }));
          } else if (entry.target === aboutRef.current) {
            setIsVisible((prev) => ({ ...prev, about: true }));
          } else if (entry.target === timelineRef.current) {
            setIsVisible((prev) => ({ ...prev, timeline: true }));
          } else if (entry.target === statsRef.current) {
            setIsVisible((prev) => ({ ...prev, stats: true }));
          } else if (entry.target === valuesRef.current) {
            setIsVisible((prev) => ({ ...prev, values: true }));
          } else if (entry.target === teamRef.current) {
            setIsVisible((prev) => ({ ...prev, team: true }));
          } else if (entry.target === ctaRef.current) {
            setIsVisible((prev) => ({ ...prev, cta: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (headerRef.current) observer.observe(headerRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (timelineRef.current) observer.observe(timelineRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (valuesRef.current) observer.observe(valuesRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    // Background effect
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Handlers for magnetic effects
  const handleStatCardMouseMove = (e: React.MouseEvent, index: number) => {
    if (!statCardRefs[index].current) return;
    
    const rect = statCardRefs[index].current!.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Lighter magnetic effect for stat cards
    const strength = 12;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      
      const newPositions = [...statCardPositions];
      newPositions[index] = { x, y };
      setStatCardPositions(newPositions);
    }
  };
  
  const handleStatCardMouseLeave = (index: number) => {
    const newPositions = [...statCardPositions];
    newPositions[index] = { x: 0, y: 0 };
    setStatCardPositions(newPositions);
  };
  
  const handleValueCardMouseMove = (e: React.MouseEvent, index: number) => {
    if (!valueCardRefs[index].current) return;
    
    const rect = valueCardRefs[index].current!.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Lighter magnetic effect for value cards
    const strength = 12;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      
      const newPositions = [...valueCardPositions];
      newPositions[index] = { x, y };
      setValueCardPositions(newPositions);
    }
  };
  
  const handleValueCardMouseLeave = (index: number) => {
    const newPositions = [...valueCardPositions];
    newPositions[index] = { x: 0, y: 0 };
    setValueCardPositions(newPositions);
  };
  
  const handleCtaMouseMove = (e: React.MouseEvent) => {
    if (!ctaButtonRef.current) return;
    
    const rect = ctaButtonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Strong magnetic effect for CTA
    const strength = 15;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      setCtaMagneticPosition({ x, y });
    } else {
      setCtaMagneticPosition({ x: 0, y: 0 });
    }
  };
  
  const handleCtaMouseLeave = () => {
    setCtaMagneticPosition({ x: 0, y: 0 });
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-black min-h-screen">
      {/* Enhanced Grid Background with improved visibility */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40"></div>
      
      {/* Enhanced Gradient Overlay with smooth transitions */}
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95"></div>
      
      {/* Interactive Floating Elements */}
      <div 
        className="absolute w-96 h-96 rounded-full bg-neon-orange/10 blur-3xl"
        style={{ 
          top: `calc(20% + ${mousePosition.y * 40}px)`, 
          right: `calc(20% + ${mousePosition.x * -40}px)`,
          transition: 'top 0.3s ease-out, right 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl" 
        style={{ 
          bottom: `calc(30% + ${mousePosition.y * -40}px)`, 
          left: `calc(25% + ${mousePosition.x * 40}px)`,
          transition: 'bottom 0.3s ease-out, left 0.3s ease-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Page Header */}
        <div 
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm mb-6">
            <p className="text-sm font-medium text-gray-300">Our Story and Vision</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green py-2">
            About ApplyAI.today
          </h1>
          <p className="text-xl text-muted-foreground">
            We're pioneering AI innovations that transform businesses and redefine what's possible.
          </p>
        </div>
        
        {/* About Us Section */}
        <div 
          ref={aboutRef}
          className={`max-w-6xl mx-auto mb-24 glass-card p-8 rounded-xl backdrop-blur-md transition-all duration-700 border border-white/20 ${
            isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ 
            transitionDelay: "100ms",
            boxShadow: isVisible.about ? '0 10px 30px rgba(0, 0, 0, 0.25), 0 0 20px rgba(0, 255, 255, 0.1)' : ''
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At ApplyAI.today, we're on a mission to make cutting-edge artificial intelligence accessible, practical, and transformative for businesses of all sizes. We believe that AI should be a force multiplier for human potential, not a replacement for human ingenuity.
              </p>
              <p className="text-gray-300">
                Founded in 2019 by a team of AI specialists from leading tech companies and research institutions, we've grown into a global team of over 100 AI experts, developers, data scientists, and business strategists united by a common vision.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-gray-300 mb-4">
                We combine deep technical expertise with a practical business mindset. Every AI solution we create is designed with real-world applications in mind, focused on delivering measurable results that impact your bottom line.
              </p>
              <p className="text-gray-300">
                What sets us apart is our commitment to ethical AI development. We believe that artificial intelligence should be built responsibly, with careful consideration of privacy, bias, transparency, and human oversight.
              </p>
            </div>
          </div>
        </div>
        
        {/* Key Stats */}
        <div 
          ref={statsRef}
          className={`max-w-6xl mx-auto mb-24 transition-all duration-700 ${
            isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Stat Card 1 */}
            <div 
              ref={statCardRefs[0]}
              className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 text-center magnetic-client-block"
              style={{ 
                transform: `translate(${statCardPositions[0].x}px, ${statCardPositions[0].y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
                boxShadow: statCardPositions[0].x !== 0 || statCardPositions[0].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 95, 31, 0.3)' : ''
              }}
              onMouseMove={(e) => handleStatCardMouseMove(e, 0)}
              onMouseLeave={() => handleStatCardMouseLeave(0)}
            >
              <div className="text-4xl font-bold mb-2 text-neon-orange">100+</div>
              <div className="text-gray-300">AI Specialists</div>
            </div>
            
            {/* Stat Card 2 */}
            <div 
              ref={statCardRefs[1]}
              className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 text-center magnetic-client-block"
              style={{ 
                transform: `translate(${statCardPositions[1].x}px, ${statCardPositions[1].y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
                boxShadow: statCardPositions[1].x !== 0 || statCardPositions[1].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 255, 0.3)' : ''
              }}
              onMouseMove={(e) => handleStatCardMouseMove(e, 1)}
              onMouseLeave={() => handleStatCardMouseLeave(1)}
            >
              <div className="text-4xl font-bold mb-2 text-neon-blue">250+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            
            {/* Stat Card 3 */}
            <div 
              ref={statCardRefs[2]}
              className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 text-center magnetic-client-block"
              style={{ 
                transform: `translate(${statCardPositions[2].x}px, ${statCardPositions[2].y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
                boxShadow: statCardPositions[2].x !== 0 || statCardPositions[2].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 127, 0.3)' : ''
              }}
              onMouseMove={(e) => handleStatCardMouseMove(e, 2)}
              onMouseLeave={() => handleStatCardMouseLeave(2)}
            >
              <div className="text-4xl font-bold mb-2 text-neon-green">15+</div>
              <div className="text-gray-300">Industries Served</div>
            </div>
            
            {/* Stat Card 4 */}
            <div 
              ref={statCardRefs[3]}
              className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 text-center magnetic-client-block"
              style={{ 
                transform: `translate(${statCardPositions[3].x}px, ${statCardPositions[3].y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
                boxShadow: statCardPositions[3].x !== 0 || statCardPositions[3].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 95, 31, 0.3)' : ''
              }}
              onMouseMove={(e) => handleStatCardMouseMove(e, 3)}
              onMouseLeave={() => handleStatCardMouseLeave(3)}
            >
              <div className="text-4xl font-bold mb-2 text-neon-orange">4 Years</div>
              <div className="text-gray-300">Of Innovation</div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div 
          ref={valuesRef}
          className={`max-w-6xl mx-auto mb-24 transition-all duration-700 ${
            isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Value Card 1 */}
            <div 
              ref={valueCardRefs[0]}
              className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 magnetic-client-block"
              style={{ 
                transform: `translate(${valueCardPositions[0].x}px, ${valueCardPositions[0].y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
                boxShadow: valueCardPositions[0].x !== 0 || valueCardPositions[0].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 95, 31, 0.25)' : ''
              }}
              onMouseMove={(e) => handleValueCardMouseMove(e, 0)}
              onMouseLeave={() => handleValueCardMouseLeave(0)}
            >
              <div className="bg-neon-orange/15 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Sparkles className="text-neon-orange h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-300">We push the boundaries of what AI can achieve, constantly exploring new approaches and technologies.</p>
            </div>
            
            {/* Value Card 2 */}
            <div 
              ref={valueCardRefs[1]}
              className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 magnetic-client-block"
              style={{ 
                transform: `translate(${valueCardPositions[1].x}px, ${valueCardPositions[1].y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
                boxShadow: valueCardPositions[1].x !== 0 || valueCardPositions[1].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 255, 0.25)' : ''
              }}
              onMouseMove={(e) => handleValueCardMouseMove(e, 1)}
              onMouseLeave={() => handleValueCardMouseLeave(1)}
            >
              <div className="bg-neon-blue/15 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-neon-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Human-Centered</h3>
              <p className="text-gray-300">We design AI that augments human capabilities, creating partnerships between people and technology.</p>
            </div>
            
            {/* Value Card 3 */}
            <div 
              ref={valueCardRefs[2]}
              className="glass-card p-6 rounded-xl backdrop-blur-md border border-white/20 magnetic-client-block"
              style={{ 
                transform: `translate(${valueCardPositions[2].x}px, ${valueCardPositions[2].y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease',
                boxShadow: valueCardPositions[2].x !== 0 || valueCardPositions[2].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 127, 0.25)' : ''
              }}
              onMouseMove={(e) => handleValueCardMouseMove(e, 2)}
              onMouseLeave={() => handleValueCardMouseLeave(2)}
            >
              <div className="bg-neon-green/15 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CheckCircle className="text-neon-green h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ethical Excellence</h3>
              <p className="text-gray-300">We believe in building AI responsibly, with fairness, transparency, and privacy as core principles.</p>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div 
          ref={teamRef}
          className={`max-w-6xl mx-auto mb-24 transition-all duration-700 ${
            isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our diverse team of AI specialists combines deep technical expertise with industry experience to deliver innovative solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                image={member.image}
                bio={member.bio}
                linkedin={member.linkedin}
                twitter={member.twitter}
                email={member.email}
                index={index}
                isVisible={isVisible.team}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="glass-card p-10 rounded-2xl text-center border border-white/10 backdrop-blur-md cta-glow">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Partner with ApplyAI.today and discover how our cutting-edge AI solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div 
              onMouseMove={handleCtaMouseMove}
              onMouseLeave={handleCtaMouseLeave}
            >
              <Link 
                ref={ctaButtonRef}
                to="/contact" 
                className="neon-button-orange px-8 py-3 shadow-neon-orange magnetic-button-enhanced"
                style={{ 
                  transform: `translate(${ctaMagneticPosition.x}px, ${ctaMagneticPosition.y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
