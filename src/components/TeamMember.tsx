
import { useState, useRef, useEffect } from "react";
import { Linkedin, Mail, Twitter } from "lucide-react";

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  index: number;
  isVisible: boolean;
}

const TeamMember = ({ 
  name, 
  position, 
  image, 
  bio, 
  linkedin, 
  twitter, 
  email, 
  index, 
  isVisible 
}: TeamMemberProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const socialButtonsRef = useRef<HTMLDivElement>(null);

  const colors = ["orange", "blue", "green"];
  const color = colors[index % 3];
  const colorMap = {
    orange: "neon-orange",
    blue: "neon-blue",
    green: "neon-green"
  };
  const neonColor = colorMap[color as keyof typeof colorMap];

  // Magnetic effect for social buttons
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!socialButtonsRef.current) return;
    
    const rect = socialButtonsRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Calculate strength based on distance from center (max 15px movement)
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

  const handleMouseLeave = () => {
    setMagneticPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-xl group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
    >
      {/* Image */}
      <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-10">
        <div className="transform transition-transform duration-300 ease-in-out" style={{ transform: isHovered ? 'translateY(-40px)' : 'translateY(0)' }}>
          <div className={`px-3 py-1 rounded-full inline-block bg-${neonColor}/20 border border-${neonColor}/30 mb-2`}>
            <span className={`text-${neonColor} text-xs font-medium`}>{position}</span>
          </div>
          <h3 className="text-xl text-white font-semibold mb-1">{name}</h3>
        </div>
        
        {/* Bio (hidden until hover) */}
        <div 
          className="overflow-hidden transition-all duration-300 ease-in-out opacity-0 transform translate-y-10 group-hover:opacity-100 group-hover:translate-y-0"
          style={{ maxHeight: isHovered ? '200px' : '0px', transitionDelay: isHovered ? '0.1s' : '0s' }}
        >
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{bio}</p>
          
          {/* Social Links with Magnetic Effect */}
          <div 
            ref={socialButtonsRef}
            className="flex space-x-3"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {linkedin && (
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-400 hover:text-${neonColor} transition-colors transform hover:scale-110`}
                aria-label="LinkedIn"
                style={{ 
                  transform: `translate(${magneticPosition.x}px, ${magneticPosition.y}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {twitter && (
              <a 
                href={twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`text-gray-400 hover:text-${neonColor} transition-colors transform hover:scale-110`}
                aria-label="Twitter"
                style={{ 
                  transform: `translate(${magneticPosition.x}px, ${magneticPosition.y}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {email && (
              <a 
                href={`mailto:${email}`} 
                className={`text-gray-400 hover:text-${neonColor} transition-colors transform hover:scale-110`}
                aria-label="Email"
                style={{ 
                  transform: `translate(${magneticPosition.x}px, ${magneticPosition.y}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
