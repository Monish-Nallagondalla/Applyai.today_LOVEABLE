
import React, { useState, useEffect, useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import { Code, Brain, GraduationCap, LineChart, Globe, Database, BarChart3, Layers, Share2, Lock, FileText, Radio, Smartphone, Zap, CloudCog, Bot, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Enhanced service descriptions with use cases
  const services = [
    {
      title: "AI Strategy & Consultation",
      description: "Develop a tailored AI roadmap aligned with your business goals, identifying opportunities for innovation and competitive advantage.",
      icon: <Brain className="w-6 h-6 text-neon-orange" />,
      color: "orange",
      category: "strategy",
      useCase: "A retail chain increased sales by 28% after implementing our AI-powered customer analytics and preference prediction strategy."
    },
    {
      title: "Natural Language Processing",
      description: "Extract insights from text data, automate content creation, and enhance customer interactions through advanced NLP solutions.",
      icon: <FileText className="w-6 h-6 text-neon-blue" />,
      color: "blue",
      category: "development",
      useCase: "A financial services company reduced document processing time by 83% using our NLP-powered contract analysis system."
    },
    {
      title: "Computer Vision Systems",
      description: "Implement visual intelligence for quality control, security monitoring, and automated image analysis across your operations.",
      icon: <Radio className="w-6 h-6 text-neon-green" />,
      color: "green",
      category: "development",
      useCase: "A manufacturing client achieved 99.8% defect detection accuracy with our computer vision quality control system."
    },
    {
      title: "Business Intelligence & Analytics",
      description: "Transform raw data into actionable business intelligence with interactive dashboards and predictive insights.",
      icon: <BarChart3 className="w-6 h-6 text-neon-orange" />,
      color: "orange",
      category: "analytics",
      useCase: "A healthcare provider reduced patient wait times by 45% after implementing our predictive analytics solution."
    },
    {
      title: "AI Implementation Roadmapping",
      description: "Strategic guidance on implementing AI across your organization with clear milestones, risk assessment, and ROI projections.",
      icon: <LineChart className="w-6 h-6 text-neon-blue" />,
      color: "blue",
      category: "strategy",
      useCase: "An e-commerce platform increased conversion rates by 32% following our AI transformation roadmap."
    },
    {
      title: "Conversational AI & Chatbots",
      description: "Intelligent conversational interfaces that understand context, learn from interactions, and deliver exceptional customer support.",
      icon: <Smartphone className="w-6 h-6 text-neon-green" />,
      color: "green",
      category: "development",
      useCase: "A telecommunications company reduced support costs by 40% while improving customer satisfaction scores with our conversational AI."
    },
    {
      title: "Deep Learning Solutions",
      description: "Custom neural networks for solving complex problems, pattern recognition, and autonomous decision-making systems.",
      icon: <Layers className="w-6 h-6 text-neon-orange" />,
      color: "orange",
      category: "development",
      useCase: "An energy company reduced maintenance costs by 35% using our deep learning predictive maintenance system."
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends, behaviors, and outcomes with precision using advanced predictive models and machine learning algorithms.",
      icon: <Code className="w-6 h-6 text-neon-blue" />,
      color: "blue",
      category: "analytics",
      useCase: "A retail client increased inventory efficiency by 27% with our predictive demand forecasting system."
    },
    {
      title: "AI Education & Training",
      description: "Customized AI training programs to upskill your team, accelerate adoption, and maximize return on AI investments.",
      icon: <GraduationCap className="w-6 h-6 text-neon-green" />,
      color: "green",
      category: "education",
      useCase: "A financial services team developed internal AI applications just 8 weeks after completing our comprehensive training program."
    },
    {
      title: "Computer Vision for Quality Control",
      description: "Visual recognition systems that identify defects, ensure consistency, and automate quality assurance processes.",
      icon: <Zap className="w-6 h-6 text-neon-orange" />,
      color: "orange",
      category: "development",
      useCase: "A food production company reduced quality control costs by 52% while improving accuracy with our vision system."
    },
    {
      title: "Cloud AI Integration",
      description: "Seamlessly integrate AI capabilities with your cloud infrastructure for scalable, flexible, and cost-effective intelligence.",
      icon: <CloudCog className="w-6 h-6 text-neon-blue" />,
      color: "blue",
      category: "development",
      useCase: "A SaaS provider reduced infrastructure costs by 38% after our cloud AI optimization services."
    },
    {
      title: "Personalization Engines",
      description: "Tailored recommendation systems that learn user preferences and deliver personalized experiences that drive engagement.",
      icon: <Share2 className="w-6 h-6 text-neon-green" />,
      color: "green",
      category: "analytics",
      useCase: "A media platform increased user session time by 41% after implementing our personalization engine."
    },
    {
      title: "AI Ethics & Governance",
      description: "Ensure your AI systems are secure, fair, ethical, and compliant with relevant regulations and industry standards.",
      icon: <Lock className="w-6 h-6 text-neon-orange" />,
      color: "orange",
      category: "strategy",
      useCase: "A healthcare AI implementation passed regulatory review in half the expected time with our governance framework."
    },
    {
      title: "Multilingual AI Solutions",
      description: "Cross-cultural and multilingual AI applications that serve diverse markets and break down language barriers.",
      icon: <Globe className="w-6 h-6 text-neon-blue" />,
      color: "blue",
      category: "development",
      useCase: "An international retailer increased global customer satisfaction by 36% with our multilingual customer service AI."
    },
    {
      title: "Big Data Processing",
      description: "Handle and analyze massive datasets with specialized AI algorithms designed for scale, speed, and accuracy.",
      icon: <Database className="w-6 h-6 text-neon-green" />,
      color: "green",
      category: "analytics",
      useCase: "A logistics company optimized routing efficiency by 23% using our big data processing platform."
    },
    {
      title: "AI Agents & Automation",
      description: "Autonomous AI agents that perform complex tasks, adapt to changing conditions, and continuously improve performance.",
      icon: <Bot className="w-6 h-6 text-neon-orange" />,
      color: "orange",
      category: "development",
      useCase: "A customer service department automated 78% of routine inquiries with our adaptive AI agent system."
    }
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "strategy", name: "AI Strategy" },
    { id: "development", name: "AI Development" },
    { id: "analytics", name: "Analytics & Intelligence" },
    { id: "education", name: "Training & Education" }
  ];

  // Filter services based on selected category
  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, filteredServices.length);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.findIndex(
              ref => ref === entry.target
            );
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(ref => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [cardsRef.current.length, filteredServices.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">Our AI Services</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          We offer a comprehensive range of AI solutions tailored to transform your business, 
          drive innovation, and deliver measurable ROI across operations
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div ref={categoriesRef} className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              // Reset visible items when changing category
              setVisibleItems([]);
            }}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-white/10 text-white font-medium border border-white/20'
                : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            ref={el => (cardsRef.current[index] = el)}
            className="group"
          >
            <div className={`glass-card p-8 rounded-xl hover:border-neon-${service.color}/30 transition-all duration-500 hover:translate-y-[-5px] h-full flex flex-col ${visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-neon-${service.color}/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-neon-${service.color}/20 transition-all duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              {/* Use Case Example */}
              <div className="mt-auto">
                <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="text-sm font-semibold text-white mb-1">Case Example:</h4>
                  <p className="text-gray-400 text-sm">{service.useCase}</p>
                </div>
                
                <Link 
                  to={`/contact?service=${encodeURIComponent(service.title)}`}
                  className={`inline-flex items-center text-neon-${service.color} hover:text-neon-${service.color} transition-colors group`}
                >
                  Request a Consultation <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
