
import { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import ProductsSection from '../components/ProductsSection';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { ThemeProvider } from '../hooks/useTheme.jsx';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsWrapperRef = useRef(null);
  const totalSections = 3; // services, solutions, products
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Handle section scrolling when page loads with hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Add mousemove event listener for all service-card elements to handle radial gradient effect
    const cards = document.querySelectorAll('.service-card');
    
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Update the :before pseudo-element position
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
    });

    // Handle wheel events for section scrolling
    const handleWheel = (e) => {
      if (isScrolling || !sectionsWrapperRef.current) return;
      
      if (e.deltaY > 0 && currentSection < totalSections - 1) {
        goToNextSection();
      } else if (e.deltaY < 0 && currentSection > 0) {
        goToPrevSection();
      }
    };
    
    const parallaxContainer = sectionsWrapperRef.current;
    if (parallaxContainer) {
      parallaxContainer.addEventListener('wheel', handleWheel);
    }
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
      });
      
      if (parallaxContainer) {
        parallaxContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSection, isScrolling]);

  const goToNextSection = () => {
    if (isScrolling || currentSection >= totalSections - 1) return;
    setIsScrolling(true);
    setCurrentSection(prev => prev + 1);
    setTimeout(() => setIsScrolling(false), 800);
  };

  const goToPrevSection = () => {
    if (isScrolling || currentSection <= 0) return;
    setIsScrolling(true);
    setCurrentSection(prev => prev - 1);
    setTimeout(() => setIsScrolling(false), 800);
  };

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <StatsSection />
          
          {/* Card-style parallax container for Services, Solutions, and Products sections */}
          <div 
            className="parallax-container h-screen overflow-hidden relative" 
            ref={sectionsWrapperRef}
          >
            <div 
              id="services" 
              className={`parallax-section absolute inset-0 transition-all duration-800 ease-in-out ${
                currentSection === 0 
                  ? 'z-30 opacity-100 transform-none' 
                  : 'z-0 opacity-0 translate-y-full'
              }`}
            >
              <ServicesSection />
            </div>
            
            <div 
              id="solutions" 
              className={`parallax-section absolute inset-0 transition-all duration-800 ease-in-out ${
                currentSection === 1 
                  ? 'z-30 opacity-100 transform-none rotate-1' 
                  : currentSection < 1 
                    ? 'z-20 opacity-0 translate-y-full rotate-2' 
                    : 'z-0 opacity-0 -translate-y-full -rotate-1'
              }`}
              style={{
                transformOrigin: currentSection === 0 ? 'bottom center' : 'top center'
              }}
            >
              <SolutionsSection />
            </div>
            
            <div 
              id="products" 
              className={`parallax-section absolute inset-0 transition-all duration-800 ease-in-out ${
                currentSection === 2 
                  ? 'z-30 opacity-100 transform-none rotate-1' 
                  : currentSection < 2 
                    ? 'z-10 opacity-0 translate-y-full rotate-3' 
                    : 'z-0 opacity-0 -translate-y-full -rotate-1'
              }`}
              style={{
                transformOrigin: currentSection < 2 ? 'bottom center' : 'top center'
              }}
            >
              <ProductsSection />
            </div>

            {/* Section navigation indicators */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
              {[...Array(totalSections)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSection === index 
                      ? 'bg-primary w-10' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => {
                    if (!isScrolling) {
                      setIsScrolling(true);
                      setCurrentSection(index);
                      setTimeout(() => setIsScrolling(false), 800);
                    }
                  }}
                  aria-label={`Go to section ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <ClientsSection />
          <TestimonialsSection />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
