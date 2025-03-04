{`import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import { useIsMobile } from "./hooks/use-mobile"; // Import

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
        document.querySelector('nav')?.classList.add('fixed-nav');
      } else {
        setScrolled(false);
        document.querySelector('nav')?.classList.remove('fixed-nav');
      }
    };

    const setMobileHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setMobileHeight);
    setMobileHeight();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setMobileHeight);
    };
  }, []);

  return null;
};

const App = () => {
    const isMobile = useIsMobile(); // Use the hook
    return (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen min-h-[calc(var(--vh,1vh)*100)]">
            {/* Conditionally render CustomCursor */}
            {!isMobile && <CustomCursor />}
            <Navbar />
            <main className="flex-grow">
                <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
            </div>
        </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
    );
}

export default App;
`}
