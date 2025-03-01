
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import TeamMember from "../components/TeamMember";

const Team = () => {
  const [isVisible, setIsVisible] = useState({
    heading: false,
    leadership: false,
    engineering: false,
    dataScience: false,
    cta: false
  });
  
  const headingRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);
  const engineeringRef = useRef<HTMLDivElement>(null);
  const dataScienceRef = useRef<HTMLDivElement>(null);
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
          if (target === headingRef.current) {
            setIsVisible((prev) => ({ ...prev, heading: true }));
          } else if (target === leadershipRef.current) {
            setIsVisible((prev) => ({ ...prev, leadership: true }));
          } else if (target === engineeringRef.current) {
            setIsVisible((prev) => ({ ...prev, engineering: true }));
          } else if (target === dataScienceRef.current) {
            setIsVisible((prev) => ({ ...prev, dataScience: true }));
          } else if (target === ctaRef.current) {
            setIsVisible((prev) => ({ ...prev, cta: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (headingRef.current) observer.observe(headingRef.current);
    if (leadershipRef.current) observer.observe(leadershipRef.current);
    if (engineeringRef.current) observer.observe(engineeringRef.current);
    if (dataScienceRef.current) observer.observe(dataScienceRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Team data - Using placeholder images
  const leadershipTeam = [
    {
      name: "Alexandra Chen",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Alexandra has over 15 years of experience in AI and machine learning. She founded ApplyAi.today with a vision to make AI accessible to businesses of all sizes.",
      linkedin: "#",
      twitter: "#",
      email: "alexandra@applyai.today"
    },
    {
      name: "Marcus Johnson",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Marcus leads our technical team and oversees the development of innovative AI solutions. He has a PhD in Computer Science from MIT.",
      linkedin: "#",
      twitter: "#",
      email: "marcus@applyai.today"
    },
    {
      name: "Sarah Williams",
      position: "COO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Sarah manages our day-to-day operations and ensures that our solutions are delivered on time and exceed client expectations.",
      linkedin: "#",
      twitter: "#",
      email: "sarah@applyai.today"
    }
  ];

  const engineeringTeam = [
    {
      name: "David Kim",
      position: "Lead AI Engineer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "David specializes in developing custom AI models and integrating AI solutions into existing technology stacks.",
      linkedin: "#",
      twitter: "#",
      email: "david@applyai.today"
    },
    {
      name: "Priya Patel",
      position: "Senior Developer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Priya has extensive experience in building scalable AI applications and optimizing machine learning algorithms.",
      linkedin: "#",
      twitter: "#",
      email: "priya@applyai.today"
    },
    {
      name: "Michael Rodriguez",
      position: "ML Engineer",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Michael focuses on developing and fine-tuning machine learning models for various client applications.",
      linkedin: "#",
      twitter: "#",
      email: "michael@applyai.today"
    },
    {
      name: "Zoe Thompson",
      position: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Zoe specializes in frontend and backend development for AI-powered applications and user interfaces.",
      linkedin: "#",
      twitter: "#",
      email: "zoe@applyai.today"
    }
  ];

  const dataScienceTeam = [
    {
      name: "James Wilson",
      position: "Lead Data Scientist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "James leads our data science team and specializes in predictive analytics and business intelligence solutions.",
      linkedin: "#",
      twitter: "#",
      email: "james@applyai.today"
    },
    {
      name: "Lin Wei",
      position: "Data Analyst",
      image: "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Lin specializes in data analysis and visualization, helping clients derive actionable insights from their data.",
      linkedin: "#",
      twitter: "#",
      email: "lin@applyai.today"
    },
    {
      name: "Aisha Johnson",
      position: "Research Scientist",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      bio: "Aisha conducts research on advanced AI algorithms and techniques to keep our solutions at the cutting edge.",
      linkedin: "#",
      twitter: "#",
      email: "aisha@applyai.today"
    }
  ];

  return (
    <div className="pt-20 bg-black grid-bg">
      {/* Hero Section */}
      <section className="py-20">
        <div 
          ref={headingRef}
          className="container mx-auto px-4 text-center"
        >
          <div 
            className={`inline-block px-4 py-1.5 mb-6 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-700 ${isVisible.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-sm font-medium text-gray-300">
              <span className="text-neon-orange">Meet Our</span> Experts
            </p>
          </div>
          
          <h1 
            className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${isVisible.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            The Minds Behind Our <br />
            <span className="shimmer-text">Innovative AI Solutions</span>
          </h1>
          
          <p 
            className={`text-gray-400 text-lg max-w-3xl mx-auto mb-10 transition-all duration-700 ${isVisible.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "400ms" }}
          >
            Our team of AI experts, data scientists, and engineers are passionate about creating cutting-edge solutions that drive business growth and innovation.
          </p>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="pb-20">
        <div 
          ref={leadershipRef}
          className="container mx-auto px-4"
        >
          <h2 
            className={`text-2xl md:text-3xl font-bold text-white mb-10 transition-all duration-700 ${isVisible.leadership ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
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
                isVisible={isVisible.leadership}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Engineering Team */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div 
          ref={engineeringRef}
          className="container mx-auto px-4"
        >
          <h2 
            className={`text-2xl md:text-3xl font-bold text-white mb-10 transition-all duration-700 ${isVisible.engineering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Engineering Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringTeam.map((member, index) => (
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
                isVisible={isVisible.engineering}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Data Science Team */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div 
          ref={dataScienceRef}
          className="container mx-auto px-4"
        >
          <h2 
            className={`text-2xl md:text-3xl font-bold text-white mb-10 transition-all duration-700 ${isVisible.dataScience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Data Science Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataScienceTeam.map((member, index) => (
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
                isVisible={isVisible.dataScience}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section 
        ref={ctaRef}
        className="py-20 bg-black"
      >
        <div 
          className={`container mx-auto px-4 max-w-4xl transition-all duration-700 ${isVisible.cta ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="glass-card p-10 md:p-16 rounded-2xl text-center border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Interested in Joining Our Team?</h2>
            <p className="text-gray-300 text-lg mb-10">
              We're always looking for talented individuals who are passionate about AI and innovation.
            </p>
            <Link to="/contact" className="neon-button-green">
              <span className="relative z-10 flex items-center justify-center">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
