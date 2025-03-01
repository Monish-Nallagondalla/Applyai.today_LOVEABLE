
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

  // Autoplay for testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Refined client logos with recognizable tech brands
  const clients = ["Tesla", "Amazon", "Google", "Microsoft", "Airbnb", "Uber"];
  
  // Enhanced featured services with more precise descriptions
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

  // Enhanced testimonials without images for a cleaner look
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
      {/* Hero Section */}
      <Hero />
      
      {/* Trusted By Section */}
      <section 
        ref={clientsRef}
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
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
                className="glass-card px-6 py-4 rounded-lg flex items-center justify-center w-full h-20 hover:border-white/20 transition-all duration-300 hover:shadow-lg group"
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
              >
                <span className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section - Enhanced with more compelling content */}
      <section 
        ref={servicesRef}
        className="py-24 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
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
                className={`glass-card p-8 rounded-xl hover:border-neon-${service.color}/30 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full group`}
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
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
          >
            <Link to="/services" className="neon-button-green px-8 py-3">
              <span className="relative z-10 flex items-center justify-center">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Improved Testimonials Section with perfect blending to CTA section */}
      <section 
        ref={testimonialsRef}
        className="py-24 relative overflow-hidden bg-transparent"
      >
        {/* Enhanced gradient overlays for perfect blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/70 to-gray-900/50 opacity-100"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10"></div>
        
        {/* Enhanced floating orbs that follow cursor */}
        <div className="absolute top-20 right-[20%] w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-40 left-[30%] w-96 h-96 rounded-full bg-neon-orange/5 blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
        <div className="absolute top-1/3 left-[15%] w-64 h-64 rounded-full bg-neon-green/5 blur-3xl animate-float" style={{ animationDelay: "-1.5s" }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-gray-300 text-lg">
              See how our AI solutions have transformed operations and delivered measurable results for leading businesses
            </p>
          </div>
          
          {/* Redesigned Testimonial Carousel with no images and compact design */}
          <div 
            className={`max-w-2xl mx-auto transition-all duration-700 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="relative">
              {/* Testimonial Slides */}
              <div className="relative overflow-hidden glass-card rounded-xl border border-white/10 backdrop-blur-md">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`p-6 transition-all duration-500 ease-in-out ${
                      index === activeTestimonial 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-full absolute inset-0'
                    }`}
                  >
                    {/* Testimonial Content with improved typography */}
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
              
              {/* Enhanced Navigation Dots */}
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
              
              {/* Previous/Next Buttons with enhanced styling */}
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
      
      {/* Call To Action Section - Perfect blending with testimonials */}
      <section 
        ref={ctaRef}
        className="py-24 relative overflow-hidden"
      >
        {/* Background Elements for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-black opacity-100"></div>
        <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10"></div>
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-glow-conic filter blur-3xl opacity-20 animate-gradient-x"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className={`max-w-4xl mx-auto glass-card p-10 md:p-16 rounded-2xl text-center border border-white/10 backdrop-blur-md shadow-xl transition-all duration-700 ${isVisible.callToAction ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Partner with ApplyAi.today and discover how our cutting-edge AI solutions can drive innovation, efficiency, and growth for your organization. Our team of experts is ready to help you navigate the AI landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link to="/contact" className="neon-button-orange px-8 py-3 shadow-neon-orange">
                <span className="relative z-10 flex items-center justify-center">
                  Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
              <Link to="/services" className="neon-button-blue px-8 py-3 shadow-neon-blue">
                <span className="relative z-10 flex items-center justify-center">
                  Explore Our Solutions
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
