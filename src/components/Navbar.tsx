
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
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
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-neon-orange transition-colors duration-300"
          >
            <span className="text-neon-orange">Apply</span>
            <span className="text-neon-blue">Ai</span>
            <span className="text-white">.today</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path
                    ? "text-neon-blue"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.path
                      ? "w-full bg-neon-blue"
                      : "bg-neon-orange"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) with Magnetic Effect */}
          <div 
            className="hidden md:block"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              ref={buttonRef}
              to="/contact"
              className="neon-button-orange magnetic-button-enhanced px-6 py-2.5"
              style={{ 
                transform: `translate(${magneticPosition.x}px, ${magneticPosition.y}px)`,
                transition: 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fixed position to prevent scrolling */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-300 transform ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } md:hidden`}
      >
        <nav className="flex flex-col space-y-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-2xl font-medium transition-all duration-300 relative group ${
                location.pathname === link.path
                  ? "text-neon-blue"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path
                    ? "w-full bg-neon-blue"
                    : "bg-neon-orange"
                }`}
              ></span>
            </Link>
          ))}
          <Link
            to="/contact"
            className="neon-button-orange magnetic-button-enhanced px-8 py-3 mt-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10">Get Started</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
