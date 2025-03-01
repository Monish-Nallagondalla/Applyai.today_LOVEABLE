
import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, Calendar, Lightbulb, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isVisible, setIsVisible] = useState({
    mission: false,
    vision: false,
    values: false,
    timeline: false
  });

  useEffect(() => {
    setIsVisible({
      mission: true,
      vision: true,
      values: true,
      timeline: true
    });
  }, []);

  const timeline = [
    {
      year: "2020",
      title: "ApplyAi.today Founded",
      description: "Started with a mission to make AI accessible to businesses of all sizes."
    },
    {
      year: "2021",
      title: "First Enterprise Client",
      description: "Secured our first major enterprise client and expanded our team."
    },
    {
      year: "2022",
      title: "Product Launch",
      description: "Launched our flagship AI analytics platform with predictive capabilities."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations to Europe and Asia, with clients in over 15 countries."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Recognized as a leading AI solutions provider by major industry analysts."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About ApplyAi<span className="text-neon-orange">.today</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering the future of business through innovative AI solutions
          </p>
        </div>
        
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div 
            className={`glass-card p-8 rounded-xl backdrop-blur-md border border-white/10 transition-all duration-700 ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="bg-neon-orange/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
              <Target className="text-neon-orange h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Mission</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At ApplyAi.today, we're dedicated to democratizing artificial intelligence by creating accessible, 
              powerful solutions that solve real business challenges. We bridge the gap between complex AI technology 
              and practical business applications, empowering organizations to innovate and thrive in the digital age.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We believe in a future where AI augments human potential, automates routine tasks, and provides
              actionable insights that drive better decision-making across industries.
            </p>
          </div>
          
          <div 
            className={`glass-card p-8 rounded-xl backdrop-blur-md border border-white/10 transition-all duration-700 ${isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-neon-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5">
              <Lightbulb className="text-neon-blue h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white">Our Vision</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We envision a world where every organization, regardless of size or industry, can harness the 
              transformative power of artificial intelligence to solve their most pressing challenges, drive innovation, 
              and create sustainable value.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our goal is to be at the forefront of the AI revolution, continually pushing boundaries and 
              developing solutions that not only meet today's needs but anticipate tomorrow's challenges.
            </p>
          </div>
        </div>
        
        {/* Core Values */}
        <div 
          className={`max-w-4xl mx-auto mb-20 transition-all duration-700 ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Our Core Values</h2>
            <p className="text-gray-300">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
              <p className="text-gray-300">
                We embrace creativity and forward-thinking, constantly exploring new approaches to solve complex problems.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Excellence</h3>
              <p className="text-gray-300">
                We hold ourselves to the highest standards in everything we do, from code quality to client communication.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-3 text-white">Integrity</h3>
              <p className="text-gray-300">
                We build trust through honest practices, transparent communication, and ethical AI development.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Journey Timeline */}
        <div 
          className={`max-w-4xl mx-auto mb-16 transition-all duration-700 ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Our Journey</h2>
            <p className="text-gray-300">Key milestones in our evolution as an AI innovator</p>
          </div>
          
          <div className="relative pl-8 border-l-2 border-gray-700 space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[41px] bg-neon-orange text-black text-xs font-bold px-2 py-1 rounded">
                  {item.year}
                </div>
                <div className="absolute -left-[17px] w-8 h-8 bg-gray-900 border-2 border-neon-orange rounded-full flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-neon-orange" />
                </div>
                <div className="glass-card p-6 rounded-xl border border-white/10 ml-4">
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <Link to="/team" className="neon-button-blue px-8 py-3 shadow-neon-blue">
            <span className="relative z-10 flex items-center justify-center">
              Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
