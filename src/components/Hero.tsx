
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Zap } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Empowering Businesses Through AI Innovation";
  const [typingComplete, setTypingComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation for fade-in
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setTypingComplete(true);
    }
  }, [typedText, fullText]);

  // Mouse move effect for floating elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen grid-bg flex items-center justify-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black"></div>
      
      {/* Floating Elements that follow mouse movement slightly */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-neon-orange/5 blur-3xl animate-float"
        style={{ 
          top: `calc(25% + ${mousePosition.y * 0.02}px)`, 
          left: `calc(25% + ${mousePosition.x * 0.02}px)` 
        }}
      ></div>
      <div 
        className="absolute w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl animate-float" 
        style={{ 
          bottom: `calc(33% + ${mousePosition.y * -0.01}px)`, 
          right: `calc(25% + ${mousePosition.x * -0.01}px)`,
          animationDelay: "-3s"
        }}
      ></div>
      <div 
        className="absolute w-72 h-72 rounded-full bg-neon-green/5 blur-3xl animate-float"
        style={{ 
          top: `calc(50% + ${mousePosition.y * 0.015}px)`, 
          right: `calc(33% + ${mousePosition.x * 0.015}px)`,
          animationDelay: "-1.5s"
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Added more top spacing */}
          <div 
            className={`inline-block px-4 py-1.5 mt-12 mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-sm font-medium text-gray-300">
              <span className="text-neon-orange">Next-Generation</span> AI Solutions for Business Growth
            </p>
          </div>
          
          {/* Main Heading - Improved shimmer animation */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="block shimmer-text mb-6 bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green bg-clip-text text-transparent">
              Transforming Industries
            </div>
            <div className="block">
              Through <span className="text-neon-blue text-glow">Artificial Intelligence</span>
            </div>
          </h1>
          
          {/* Animated Tagline */}
          <div 
            className={`h-12 mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "400ms" }}
          >
            <h2 className="text-xl md:text-2xl text-gray-300 relative">
              <span className="mr-1">{typedText}</span>
              <span className={`inline-block w-0.5 h-5 bg-neon-orange animate-pulse-glow ${typingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
            </h2>
          </div>
          
          {/* Enhanced Description */}
          <p 
            className={`text-gray-400 text-lg max-w-2xl mx-auto mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "600ms" }}
          >
            We leverage cutting-edge AI technologies to create innovative solutions that help businesses automate processes, gain valuable insights, and achieve digital transformation with measurable ROI.
          </p>
          
          {/* CTA Buttons with enhanced glow effect */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link to="/contact" className="neon-button-orange w-full sm:w-auto px-8 py-3 shadow-neon-orange">
              <span className="relative z-10 flex items-center justify-center">
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
            <Link to="/services" className="neon-button-blue w-full sm:w-auto px-8 py-3 shadow-neon-blue">
              <span className="relative z-10 flex items-center justify-center">
                Explore Our Services
              </span>
            </Link>
          </div>
        </div>
        
        {/* Feature Cards with better spacing and hover effects */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "1000ms" }}
        >
          {/* Card 1 */}
          <div className="glass-card p-8 rounded-xl backdrop-blur-md border border-white/10 hover:border-neon-orange/30 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group">
            <div className="bg-neon-orange/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-orange/20 transition-all duration-300">
              <Brain className="text-neon-orange h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Strategy</h3>
            <p className="text-gray-400">Develop a comprehensive AI roadmap tailored to your specific business challenges and growth objectives.</p>
          </div>
          
          {/* Card 2 */}
          <div className="glass-card p-8 rounded-xl backdrop-blur-md border border-white/10 hover:border-neon-blue/30 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group">
            <div className="bg-neon-blue/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-blue/20 transition-all duration-300">
              <Cpu className="text-neon-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Development</h3>
            <p className="text-gray-400">Create custom AI solutions that automate complex processes, enhance decision-making, and drive measurable efficiency gains.</p>
          </div>
          
          {/* Card 3 */}
          <div className="glass-card p-8 rounded-xl backdrop-blur-md border border-white/10 hover:border-neon-green/30 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group">
            <div className="bg-neon-green/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-green/20 transition-all duration-300">
              <Zap className="text-neon-green h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
            <p className="text-gray-400">Seamlessly integrate AI solutions into your existing technology infrastructure with minimal disruption and maximum impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
