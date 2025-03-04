import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cpu, Zap } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "Apply AI, Amplify Results.Today";
  const [typingComplete, setTypingComplete] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [magneticPosition1, setMagneticPosition1] = useState({ x: 0, y: 0 });
  const [magneticPosition2, setMagneticPosition2] = useState({ x: 0, y: 0 });
  const [featureCardPositions, setFeatureCardPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);
  
  const buttonRef1 = useRef<HTMLAnchorElement>(null);
  const buttonRef2 = useRef<HTMLAnchorElement>(null);
  const featureCardRefs = [
    useRef<HTMLDivElement>(null), 
    useRef<HTMLDivElement>(null), 
    useRef<HTMLDivElement>(null)
  ];
  
  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
  
  // Magnetic button effect handlers
  const handleMouseMove1 = (e: React.MouseEvent) => {
    if (!buttonRef1.current) return;
    
    const rect = buttonRef1.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Calculate strength based on distance from center
    const strength = 15;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      setMagneticPosition1({ x, y });
    } else {
      setMagneticPosition1({ x: 0, y: 0 });
    }
  };
  
  const handleMouseMove2 = (e: React.MouseEvent) => {
    if (!buttonRef2.current) return;
    
    const rect = buttonRef2.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Calculate strength based on distance from center
    const strength = 15;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      setMagneticPosition2({ x, y });
    } else {
      setMagneticPosition2({ x: 0, y: 0 });
    }
  };

  // New handler for feature cards
  const handleFeatureCardMouseMove = (e: React.MouseEvent, index: number) => {
    if (!featureCardRefs[index].current) return;
    
    const rect = featureCardRefs[index].current!.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Lighter magnetic effect for cards
    const strength = 10;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      
      const newPositions = [...featureCardPositions];
      newPositions[index] = { x, y };
      setFeatureCardPositions(newPositions);
    }
  };

  const handleFeatureCardMouseLeave = (index: number) => {
    const newPositions = [...featureCardPositions];
    newPositions[index] = { x: 0, y: 0 };
    setFeatureCardPositions(newPositions);
  };

  const handleMouseLeave = (setter: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>) => {
    setter({ x: 0, y: 0 });
  };

  return (
    <div className="relative overflow-hidden bg-black min-h-screen flex items-center justify-center">
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-block px-4 py-1.5 mb-6 md:mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-sm font-medium text-gray-300">
              <span className="text-neon-orange">Next-Generation</span> AI Solutions for Business Growth
            </p>
          </div>
          
          {/* Main Heading - With increased padding to avoid text being cut off */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="block shimmer-text mb-8 md:mb-10 bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green bg-clip-text text-transparent pb-4">
              Transforming Industries
            </div>
            <div className="block mt-6">
              Through <span className="text-neon-blue text-glow">Artificial Intelligence</span>
            </div>
          </h1>
          
          {/* Animated Tagline */}
          <div 
            className={`h-12 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "400ms" }}
          >
            <h2 className="text-xl md:text-2xl text-gray-300 relative">
              <span className="mr-1">{typedText}</span>
              <span className={`inline-block w-0.5 h-5 bg-neon-orange animate-pulse-glow ${typingComplete ? 'opacity-0' : 'opacity-100'}`}></span>
            </h2>
          </div>
          
          {/* Enhanced Description */}
          <p 
            className={`text-gray-400 text-lg max-w-2xl mx-auto mb-10 md:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "600ms" }}
          >
            We can help your business unlock the full potential of AI. From intelligent automation to predictive analytics, we deliver cutting-edge AI solutions that transform how you operate, innovate, and compete in today's market.
          </p>
          
          {/* CTA Buttons with magnetic effect restored */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: "800ms" }}
          >
            <div 
              onMouseMove={handleMouseMove1}
              onMouseLeave={() => handleMouseLeave(setMagneticPosition1)}
            >
              <Link 
                ref={buttonRef1}
                to="/contact" 
                className="neon-button-orange magnetic-button-enhanced w-full sm:w-auto px-12 py-4 shadow-neon-orange"
                style={{ 
                  transform: `translate(${magneticPosition1.x}px, ${magneticPosition1.y}px)`,
                  transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
            
            <div 
              onMouseMove={handleMouseMove2}
              onMouseLeave={() => handleMouseLeave(setMagneticPosition2)}
            >
              <Link 
                ref={buttonRef2}
                to="/services" 
                className="neon-button-blue magnetic-button-enhanced w-full sm:w-auto px-12 py-4 shadow-neon-blue"
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
        
        {/* Feature Cards with magnetic effect */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-20 md:mt-28 max-w-5xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "1000ms" }}
        >
          {/* Card 1 */}
          <div 
            ref={featureCardRefs[0]}
            className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/20 hover:border-neon-orange/40 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group magnetic-button-enhanced"
            style={{ 
              transform: `translate(${featureCardPositions[0].x}px, ${featureCardPositions[0].y}px)`,
              transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease, box-shadow 0.3s ease',
              boxShadow: featureCardPositions[0].x !== 0 || featureCardPositions[0].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 95, 31, 0.25)' : ''
            }}
            onMouseMove={(e) => handleFeatureCardMouseMove(e, 0)}
            onMouseLeave={() => handleFeatureCardMouseLeave(0)}
          >
            <div className="bg-neon-orange/15 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-orange/25 transition-all duration-300">
              <Brain className="text-neon-orange h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Strategy</h3>
            <p className="text-gray-400">We can develop a comprehensive AI roadmap tailored to your specific business challenges and growth objectives.</p>
          </div>
          
          {/* Card 2 */}
          <div 
            ref={featureCardRefs[1]}
            className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/20 hover:border-neon-blue/40 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group magnetic-button-enhanced"
            style={{ 
              transform: `translate(${featureCardPositions[1].x}px, ${featureCardPositions[1].y}px)`,
              transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease, box-shadow 0.3s ease',
              boxShadow: featureCardPositions[1].x !== 0 || featureCardPositions[1].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 255, 0.25)' : ''
            }}
            onMouseMove={(e) => handleFeatureCardMouseMove(e, 1)}
            onMouseLeave={() => handleFeatureCardMouseLeave(1)}
          >
            <div className="bg-neon-blue/15 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-blue/25 transition-all duration-300">
              <Cpu className="text-neon-blue h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Development</h3>
            <p className="text-gray-400">We can create custom AI solutions that automate complex processes, enhance decision-making, and drive measurable efficiency gains.</p>
          </div>
          
          {/* Card 3 */}
          <div 
            ref={featureCardRefs[2]}
            className="glass-card p-6 md:p-8 rounded-xl backdrop-blur-md border border-white/20 hover:border-neon-green/40 transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group magnetic-button-enhanced"
            style={{ 
              transform: `translate(${featureCardPositions[2].x}px, ${featureCardPositions[2].y}px)`,
              transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), border-color 0.3s ease, box-shadow 0.3s ease',
              boxShadow: featureCardPositions[2].x !== 0 || featureCardPositions[2].y !== 0 ? '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 255, 127, 0.25)' : ''
            }}
            onMouseMove={(e) => handleFeatureCardMouseMove(e, 2)}
            onMouseLeave={() => handleFeatureCardMouseLeave(2)}
          >
            <div className="bg-neon-green/15 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-neon-green/25 transition-all duration-300">
              <Zap className="text-neon-green h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
            <p className="text-gray-400">We can seamlessly integrate AI solutions into your existing technology infrastructure with minimal disruption and maximum impact.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
