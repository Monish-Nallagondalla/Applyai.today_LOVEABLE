import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Success notification
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      companyName: "",
      service: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  // Magnetic button effect
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Create a magnetic pull effect (max 15px movement)
    const strength = 15;
    const magneticX = (x / rect.width) * strength * 2;
    const magneticY = (y / rect.height) * strength * 2;
    
    setButtonPosition({ x: magneticX, y: magneticY });
  };

  const handleMouseLeave = () => {
    setButtonPosition({ x: 0, y: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl border border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name <span className="text-neon-orange">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address <span className="text-neon-orange">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white"
            placeholder="+91 9876543210"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        
        {/* Company */}
        <div>
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white"
            placeholder="Your company"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
      </div>
      
      {/* Service - Fixed the background color */}
      <div className="mb-6">
        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
          Interested Service <span className="text-neon-orange">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="" disabled className="bg-background text-white">Select a service</option>
          <option value="AI Consultation" className="bg-background text-white">AI Consultation & Strategy</option>
          <option value="AI Integration" className="bg-background text-white">AI Technology Integration</option>
          <option value="AI Development" className="bg-background text-white">AI Agent Development</option>
          <option value="AI Automation" className="bg-background text-white">AI-Powered Automation</option>
          <option value="Predictive Analytics" className="bg-background text-white">Predictive Analytics</option>
          <option value="Business Intelligence" className="bg-background text-white">Business Intelligence</option>
          <option value="Other" className="bg-background text-white">Other</option>
        </select>
      </div>
      
      {/* Message */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Your Message <span className="text-neon-orange">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white"
          placeholder="Tell us about your project or inquiry..."
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      
      {/* Submit Button with Magnetic Effect */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`neon-button-blue w-full flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} magnetic-button`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
          transition: isSubmitting ? 'none' : 'transform 0.2s cubic-bezier(0.23, 1, 0.32, 1)'
        }}
      >
        <span className="relative z-10 flex items-center justify-center">
          {isSubmitting ? (
            <>
              <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
