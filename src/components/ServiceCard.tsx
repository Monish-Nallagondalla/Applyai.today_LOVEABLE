
import { ReactNode, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: "orange" | "blue" | "green";
  index: number;
  isVisible: boolean;
}

const ServiceCard = ({ icon, title, description, color, index, isVisible }: ServiceCardProps) => {
  const colorMap = {
    orange: "neon-orange",
    blue: "neon-blue",
    green: "neon-green"
  };
  
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [linkMagneticPosition, setLinkMagneticPosition] = useState({ x: 0, y: 0 });
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const neonColor = colorMap[color];
  
  const handleLinkMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linkRef.current) return;
    
    const rect = linkRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Calculate strength based on distance from center
    const strength = 10;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = rect.width / 2;
    
    if (distance < maxDistance) {
      const x = (distanceX / maxDistance) * strength;
      const y = (distanceY / maxDistance) * strength;
      setLinkMagneticPosition({ x, y });
    } else {
      setLinkMagneticPosition({ x: 0, y: 0 });
    }
  };

  const handleLinkMouseLeave = () => {
    setLinkMagneticPosition({ x: 0, y: 0 });
    setIsLinkHovered(false);
  };

  return (
    <div 
      className={cn(
        "glass-card p-8 rounded-xl transition-all duration-500",
        `hover:border-${neonColor}/30`,
        "hover:translate-y-[-5px]",
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        boxShadow: isVisible ? `0 10px 30px rgba(0, 0, 0, 0.3), 0 0 15px rgba(${color === 'orange' ? '255, 95, 31' : color === 'blue' ? '0, 255, 255' : '0, 255, 127'}, 0.3)` : ''
      }}
    >
      <div className={cn(
        "p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4", 
        `bg-${neonColor}/10 group-hover:bg-${neonColor}/25 transition-all duration-300`
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-5">{description}</p>
      <Link 
        ref={linkRef}
        to="/contact" 
        className={cn(
          "magnetic-button-enhanced inline-flex items-center transition-colors", 
          `text-${neonColor}`,
          `hover:text-${neonColor}`
        )}
        style={{
          transform: isLinkHovered ? `translate(${linkMagneticPosition.x}px, ${linkMagneticPosition.y}px)` : 'translate(0, 0)',
          transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
        }}
        onMouseMove={handleLinkMouseMove}
        onMouseEnter={() => setIsLinkHovered(true)}
        onMouseLeave={handleLinkMouseLeave}
      >
        Learn more <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
