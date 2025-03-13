
import { useEffect, useRef } from 'react';
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
  // Creating refs for the sections that will have parallax effects
  const sectionsWrapperRef = useRef(null);

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

    // Initialize scrollTrigger for parallax sections
    const initParallax = () => {
      const sections = document.querySelectorAll('.parallax-section');
      const sectionsContainer = document.querySelector('.parallax-container');
      
      if (!sectionsContainer) return;
      
      let currentSection = 0;
      let isScrolling = false;
      
      const goToSection = (index) => {
        if (isScrolling) return;
        isScrolling = true;
        currentSection = index;
        
        sections.forEach((section, i) => {
          if (i === index) {
            section.classList.add('active');
            section.style.transform = 'translateY(0)';
            section.style.opacity = '1';
          } else if (i < index) {
            section.classList.remove('active');
            section.style.transform = 'translateY(-100%)';
            section.style.opacity = '0';
          } else {
            section.classList.remove('active');
            section.style.transform = 'translateY(100%)';
            section.style.opacity = '0';
          }
        });
        
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      };
      
      // Set initial section
      sections.forEach((section, i) => {
        if (i === 0) {
          section.classList.add('active');
          section.style.transform = 'translateY(0)';
          section.style.opacity = '1';
        } else {
          section.style.transform = 'translateY(100%)';
          section.style.opacity = '0';
        }
      });
      
      // Handle wheel events for section scrolling
      const handleWheel = (e) => {
        if (isScrolling) return;
        
        if (e.deltaY > 0 && currentSection < sections.length - 1) {
          goToSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
          goToSection(currentSection - 1);
        }
      };
      
      // Attach wheel event to the container
      sectionsContainer.addEventListener('wheel', handleWheel);
      
      return () => {
        sectionsContainer.removeEventListener('wheel', handleWheel);
      };
    };
    
    const cleanup = initParallax();
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
      });
      
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <StatsSection />
          
          {/* Parallax container for Services, Solutions, and Products sections */}
          <div className="parallax-container h-screen overflow-hidden relative" ref={sectionsWrapperRef}>
            <div id="services" className="parallax-section h-screen transition-all duration-1000 ease-in-out">
              <ServicesSection />
            </div>
            
            <div id="solutions" className="parallax-section h-screen transition-all duration-1000 ease-in-out">
              <SolutionsSection />
            </div>
            
            <div id="products" className="parallax-section h-screen transition-all duration-1000 ease-in-out">
              <ProductsSection />
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
