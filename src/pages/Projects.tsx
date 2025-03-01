
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, PlayCircle } from "lucide-react";

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Project data with detailed descriptions and results
  const projects = [
    {
      id: 1,
      title: "AI-Powered Customer Service Transformation",
      client: "Global Telecommunications Provider",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Implemented an advanced conversational AI system to handle 80% of customer inquiries automatically while maintaining high satisfaction scores.",
      results: [
        "Reduced average response time from 15 minutes to under 30 seconds",
        "Cut customer service operational costs by 42% annually",
        "Improved CSAT scores from 3.6 to 4.5 out of 5",
        "Seamless handling of 15,000+ daily customer interactions"
      ],
      technologies: ["Natural Language Processing", "Sentiment Analysis", "Knowledge Graph", "Multi-channel Integration"],
      category: "customer-service"
    },
    {
      id: 2,
      title: "Predictive Maintenance Platform for Manufacturing",
      client: "Industrial Equipment Manufacturer",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Developed a comprehensive predictive maintenance system using IoT sensors and machine learning to predict equipment failures before they occur.",
      results: [
        "Reduced unplanned downtime by 78% within the first year",
        "Increased equipment lifespan by an average of 34%",
        "Saved $4.2M in maintenance costs and productivity losses",
        "Optimized maintenance scheduling across 12 global facilities"
      ],
      technologies: ["Predictive Analytics", "IoT Integration", "Time Series Analysis", "Edge Computing"],
      category: "manufacturing"
    },
    {
      id: 3,
      title: "Retail Inventory Optimization System",
      client: "National Retail Chain",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Created an intelligent inventory management system that predicts demand patterns and optimizes stock levels across 230+ store locations.",
      results: [
        "Reduced excess inventory by 28% while maintaining 99.2% product availability",
        "Decreased logistics costs by $3.7M annually",
        "Improved gross margin by 3.2% through optimized purchasing",
        "Cut waste of perishable goods by 41% in food departments"
      ],
      technologies: ["Demand Forecasting", "Supply Chain Optimization", "Deep Learning", "Real-time Analytics"],
      category: "retail"
    },
    {
      id: 4,
      title: "Financial Fraud Detection System",
      client: "Multinational Banking Institution",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Implemented an advanced fraud detection system that analyzes transaction patterns in real-time to identify suspicious activities with high accuracy.",
      results: [
        "Detected 96.8% of fraudulent transactions, up from 73% with previous system",
        "Reduced false positive alerts by 67%, improving operational efficiency",
        "Saved an estimated $12.5M in potential fraud losses in the first year",
        "Decreased manual review requirements by 54%"
      ],
      technologies: ["Anomaly Detection", "Behavioral Analysis", "Graph Neural Networks", "Real-time Processing"],
      category: "finance"
    },
    {
      id: 5,
      title: "Healthcare Patient Outcome Prediction Platform",
      client: "Regional Healthcare Network",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Developed a predictive analytics platform that helps healthcare providers identify at-risk patients and optimize treatment plans based on comprehensive data analysis.",
      results: [
        "Improved early intervention rates by 58% for high-risk patients",
        "Reduced 30-day readmission rates by 32%",
        "Increased preventative care appointment compliance by 41%",
        "Enhanced resource allocation efficiency by 23% across network facilities"
      ],
      technologies: ["Clinical Data Analysis", "Risk Stratification", "Medical Imaging Analysis", "Protected Health Information Security"],
      category: "healthcare"
    },
    {
      id: 6,
      title: "Supply Chain Optimization for E-commerce",
      client: "International E-commerce Platform",
      image: "/placeholder.svg", // Replace with actual project image
      description: "Created an end-to-end supply chain optimization solution that improves logistics efficiency, reduces delivery times, and minimizes costs through intelligent routing and inventory placement.",
      results: [
        "Reduced average delivery time by 32% without increasing shipping costs",
        "Optimized warehouse utilization, increasing capacity by 28%",
        "Decreased logistics costs by 17% while handling 35% more volume",
        "Improved delivery time accuracy to 98.7% of estimated arrival times"
      ],
      technologies: ["Route Optimization", "Demand Forecasting", "Warehouse Management", "Last-mile Delivery Planning"],
      category: "logistics"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "customer-service", name: "Customer Service" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "retail", name: "Retail" },
    { id: "finance", name: "Finance" },
    { id: "healthcare", name: "Healthcare" },
    { id: "logistics", name: "Logistics" }
  ];

  // Filter projects based on selected category
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, filteredProjects.length);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefs.current.findIndex(
            (ref) => ref === entry.target
          );
          if (index !== -1 && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [filteredProjects.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Projects & Case Studies</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Explore our portfolio of successful AI implementations that have delivered
          measurable results and transformed business operations
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveFilter(category.id);
              setVisibleItems([]);
            }}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeFilter === category.id
                ? 'bg-white/10 text-white font-medium border border-white/20'
                : 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className={`transition-all duration-700 ${
              visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="glass-card overflow-hidden rounded-xl border border-white/10 h-full flex flex-col">
              {/* Project Image/Video Thumbnail */}
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-white flex items-center gap-2 bg-neon-orange/80 px-4 py-2 rounded-full hover:bg-neon-orange transition-colors duration-300">
                    <PlayCircle className="h-5 w-5" />
                    Watch Demo
                  </button>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-white/10 text-gray-300 rounded-full">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3 text-sm">Client: {project.client}</p>
                <p className="text-gray-300 mb-5">{project.description}</p>
                
                {/* Key Results */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Results</h4>
                  <ul className="space-y-2">
                    {project.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-neon-green/20 text-neon-green rounded-full flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies Used */}
                <div className="mb-5">
                  <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="mt-auto pt-4">
                  <Link 
                    to={`/contact?project=${project.id}`}
                    className="neon-button-blue w-full px-4 py-2 text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Request Similar Solution <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Build Your Success Story?</h3>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Let's discuss how we can apply our expertise to your unique business challenges and create measurable results.
        </p>
        <Link to="/contact" className="neon-button-orange px-8 py-3 inline-flex items-center">
          <span className="relative z-10 flex items-center justify-center">
            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
