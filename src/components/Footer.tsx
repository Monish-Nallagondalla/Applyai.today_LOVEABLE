
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black relative overflow-hidden pt-16 pb-8">
      {/* Consistent background elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-radial from-black/70 via-black/90 to-black opacity-95"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <h2 className="text-2xl font-bold">
                <span className="text-neon-orange">Apply</span>
                <span className="text-neon-blue">Ai</span>
                <span className="text-white">.today</span>
              </h2>
            </Link>
            <p className="text-gray-400 mb-6">
              Empowering businesses with cutting-edge AI solutions to drive innovation and growth. Apply AI, Amplify Results.Today
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-orange transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-orange transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-blue transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-neon-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-neon-blue transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-neon-blue transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services - Updated to match our service categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-blue transition-colors">AI Strategy & Advisory</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-blue transition-colors">AI Development & Implementation</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-blue transition-colors">AI Operations & Integration</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-blue transition-colors">AI-Powered Business Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-neon-blue transition-colors">View All Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Updated with Bangalore-specific information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-neon-orange mr-3 mt-0.5" />
                <span className="text-gray-400">42, Whitefield Main Road, EPIP Zone, Whitefield, Bangalore, Karnataka 560066, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-neon-blue mr-3" />
                <span className="text-gray-400">+91 80-4123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-neon-green mr-3" />
                <span className="text-gray-400">info@applyai.today</span>
              </li>
              <li className="flex items-center">
                <ExternalLink className="h-5 w-5 text-neon-orange mr-3" />
                <span className="text-gray-400">www.applyai.today</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} ApplyAi.today. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
