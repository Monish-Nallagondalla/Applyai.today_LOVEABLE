import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, MessageSquare, Star, Users } from "lucide-react";
import Hero from "../components/Hero";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    clients: false,
    services: false,
    testimonials: false,
    callToAction: false
  });
  
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const clientsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const [magneticPosition2, setMagneticPosition2] = useState({ x: 0, y: 0 });
  const [magneticPosition3, setMagneticPosition3] = useState({ x: 0, y: 0 });
  
  const clientBlockRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  
  const [clientBlockPositions, setClientBlockPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);
  
  const serviceCardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  
  const [serviceCardPositions, setServiceCardPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);
  
  const ctaButtonRef1 = useRef<HTMLAnchorElement>(null);
  const ctaButtonRef2 = useRef<HTMLAnchorElement>(null);
  const servicesButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          if (target === clientsRef.current) {
            setIsVisible((prev) => ({ ...prev, clients: true }));
          } else if (target === servicesRef.current) {
            setIsVisible((prev) => ({ ...prev, services: true }));
          } else if (target === testimonialsRef.current) {
            setIsVisible((prev) => ({ ...prev, testimonials: true }));
          } else if (target === ctaRef.current) {
            setIsVisible((prev) => ({ ...prev, callToAction: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (clientsRef.current) observer.observe(clientsRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handleMagneticMouseMove = (
    e: React.MouseEvent,
    buttonRef: React.RefObject<HTMLAnchorElement>,
    setMagneticPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    const strength = 15;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      setMagneticPosition({ x, y });
    } else {
      setMagneticPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = (
    setMagneticPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
  ) => {
    setMagneticPosition({ x: 0, y: 0 });
  };

  const handleClientBlockMouseMove = (e: React.MouseEvent, index: number) => {
    if (!clientBlockRefs[index].current) return;
    
    const rect = clientBlockRefs[index].current!.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    const strength = 10;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      
      const newPositions = [...clientBlockPositions];
      newPositions[index] = { x, y };
      setClientBlockPositions(newPositions);
    }
  };
  
  const handleClientBlockMouseLeave = (index: number) => {
    const newPositions = [...clientBlockPositions];
    newPositions[index] = { x: 0, y: 0 };
    setClientBlockPositions(newPositions);
  };
  
  const handleServiceCardMouseMove = (e: React.MouseEvent, index: number) => {
    if (!serviceCardRefs[index].current) return;
    
    const rect = serviceCardRefs[index].current!.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    const strength = 12;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      
      const newPositions = [...serviceCardPositions];
      newPositions[index] = { x, y };
      setServiceCardPositions(newPositions);
    }
  };
  
  const handleServiceCardMouseLeave = (index: number) => {
    const newPositions = [...serviceCardPositions];
    newPositions[index] = { x: 0, y: 0 };
    setServiceCardPositions(newPositions);
  };

  const clients = ["Tesla", "Amazon", "Google", "Microsoft", "Airbnb", "Uber"];
  
  const featuredServices = [
    {
      title: "AI Consultation & Strategy",
      description: "Develop a tailored AI roadmap aligned with your business goals. Our experts identify opportunities for innovation, cost reduction, and competitive advantage through strategic AI implementation.",
      icon: <Check className="h-6 w-6 text-neon-orange" />,
      color: "orange"
    },
    {
      title: "AI Agent Development",
      description: "Custom intelligent agents that transform how your business operates. From customer service to data analysis, our AI agents automate complex tasks while continuously learning and improving.",
      icon: <Users className="h-6 w-6 text-neon-blue" />,
      color: "blue"
    },
    {
      title: "Predictive Analytics",
      description: "Convert your data into actionable business intelligence. Our predictive models identify trends, forecast outcomes, and detect anomalies with precision, enabling proactive decision-making.",
      icon: <Star className="h-6 w-6 text-neon-green" />,
      color: "green"
    },
    {
      title: "AI-Powered Customer Support",
      description: "Revolutionary customer experience through context-aware AI. Our systems understand customer intent, resolve issues autonomously, and seamlessly escalate to human agents when needed.",
      icon: <MessageSquare className="h-6 w-6 text-neon-orange" />,
      color: "orange"
    }
  ];

  const testimonials = [
    {
      quote: "ApplyAi.today's solutions reduced our response times by 60% while increasing customer satisfaction from 3.8 to 4.7 out of 5. The ROI was visible within the first quarter, transforming how we approach customer service.",
      author: "Jane Smith",
      position: "CTO, TechCorp Inc.",
      rating: 5
    },
    {
      quote: "The predictive analytics system developed by ApplyAi.today anticipates market trends with 87% accuracy, giving us a significant competitive edge. We've now expanded our AI implementation across our entire supply chain.",
      author: "Michael Johnson",
      position: "CEO, Innovate Solutions",
      rating: 5
    },
    {
      quote: "Working with ApplyAi.today transformed our business intelligence capabilities. Their team integrated AI into our legacy systems, unlocking insights from previously unused unstructured data and opening entirely new revenue streams.",
      author: "Sarah Williams",
      position: "COO, Global Enterprises",
      rating: 5
    }
  ];

  return (
    <>
      <Hero />
      
      <section 
        ref={clientsRef}
        className="py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-100"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`text-center mb-12 transition-all duration-700 ${isVisible.clients ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">Trusted by Industry Leaders</h2>
            <p className="text-gray-400">Empowering businesses across various sectors with intelligent AI solutions</p>
          </div>
          
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center transition-all duration-700 ${isVisible.clients ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            {clients.map((client, index) => (
              <div 
                key={index}
                ref={clientBlockRefs[index]}
                className="glass-card px-6 py-4 rounded-lg flex items-center justify-center w-full h-20 hover:border-white/20 transition-all duration-300 hover:shadow-lg group magnetic-client-block"
                style={{ 
                  transitionDelay: `${200 + (index * 100)}ms`,
                  transform: `translate(${clientBlockPositions[index].x}px, ${clientBlockPositions[index].y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                  boxShadow: clientBlockPositions[index].x !== 0 || clientBlockPositions[index].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 255, 255, 0.2)' : ''
                }}
                onMouseMove={(e) => handleClientBlockMouseMove(e, index)}
                onMouseLeave={() => handleClientBlockMouseLeave(index)}
              >
                <span className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section 
        ref={servicesRef}
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-100"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transformative AI Solutions for Modern Businesses</h2>
            <p className="text-gray-300 text-lg">
              Our comprehensive suite of AI-powered solutions addresses your specific business challenges, drives innovation, and creates sustainable competitive advantages in today's rapidly evolving digital landscape.
            </p>
          </div>
          
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-all duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            {featuredServices.map((service, index) => (
              <div 
                key={index}
                ref={serviceCardRefs[index]}
                className={`glass-card p-8 rounded-xl hover:border-neon-${service.color}/30 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full group magnetic-button-enhanced`}
                style={{ 
                  transitionDelay: `${200 + (index * 100)}ms`,
                  transform: `translate(${serviceCardPositions[index].x}px, ${serviceCardPositions[index].y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: serviceCardPositions[index].x !== 0 || serviceCardPositions[index].y !== 0 
                    ? `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(${service.color === 'orange' ? '255, 95, 31' : service.color === 'blue' ? '0, 255, 255' : '0, 255, 127'}, 0.3)` 
                    : ''
                }}
                onMouseMove={(e) => handleServiceCardMouseMove(e, index)}
                onMouseLeave={() => handleServiceCardMouseLeave(index)}
              >
                <div className={`bg-neon-${service.color}/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-neon-${service.color}/20 transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-5">{service.description}</p>
                <Link 
                  to="/services" 
                  className={`inline-flex items-center text-neon-${service.color} hover:text-neon-${service.color} transition-colors mt-auto group`}
                >
                  Learn more <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          <div 
            className={`text-center transition-all duration-700 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "600ms" }}
            onMouseMove={(e) => handleMagneticMouseMove(e, servicesButtonRef, setMagneticPosition3)}
            onMouseLeave={() => handleMouseLeave(setMagneticPosition3)}
          >
            <Link 
              ref={servicesButtonRef}
              to="/services" 
              className="neon-button-green px-8 py-3 magnetic-button-enhanced"
              style={{ 
                transform: `translate(${magneticPosition3.x}px, ${magneticPosition3.y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      <section 
        ref={testimonialsRef}
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-100"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-gray-300 text-lg">
              See how our AI solutions have transformed operations and delivered measurable results for leading businesses
            </p>
          </div>
          
          <div 
            className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="relative">
              <div className="relative overflow-hidden glass-card rounded-xl border border-white/10 backdrop-blur-md cta-glow">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`p-6 transition-all duration-500 ease-in-out ${
                      index === activeTestimonial 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-full absolute inset-0'
                    }`}
                  >
                    <div className="flex mb-3 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-neon-orange fill-neon-orange" />
                      ))}
                    </div>
                    <p className="text-gray-200 italic text-base mb-4 leading-relaxed text-center">{testimonial.quote}</p>
                    <div className="text-center">
                      <p className="font-bold text-white text-lg">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-neon-orange w-6' 
                        : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 shadow-lg"
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 shadow-lg"
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section 
        ref={ctaRef}
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-100"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`max-w-4xl mx-auto glass-card p-10 md:p-16 rounded-2xl text-center border border-white/10 backdrop-blur-md cta-glow transition-all duration-700 ${isVisible.callToAction ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Partner with ApplyAi.today and discover how our cutting-edge AI solutions can drive innovation, efficiency, and growth for your organization. Our team of experts is ready to help you navigate the AI landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <div 
                onMouseMove={(e) => handleMagneticMouseMove(e, ctaButtonRef1, setMagneticPosition)}
                onMouseLeave={() => handleMouseLeave(setMagneticPosition)}
              >
                <Link 
                  ref={ctaButtonRef1}
                  to="/contact" 
                  className="neon-button-orange px-8 py-4 shadow-neon-orange magnetic-button-enhanced w-full sm:w-auto"
                  style={{ 
                    transform: `translate(${magneticPosition.x}px, ${magneticPosition.y}px)`,
                    transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>
              </div>
              
              <div 
                onMouseMove={(e) => handleMagneticMouseMove(e, ctaButtonRef2, setMagneticPosition2)}
                onMouseLeave={() => handleMouseLeave(setMagneticPosition2)}
              >
                <Link 
                  ref={ctaButtonRef2}
                  to="/services" 
                  className="neon-button-blue px-8 py-4 shadow-neon-blue magnetic-button-enhanced w-full sm:w-auto"
                  style={{ 
                    transform: `translate(${magneticPosition2.x}px, ${magneticPosition2.y}px)`,
                    transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Our Solutions
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
