
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import ProductsSection from '../components/ProductsSection';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
import { ThemeProvider } from '../hooks/useTheme.jsx';

const Index = () => {
  useEffect(() => {
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
    
    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <SolutionsSection />
          <ProductsSection />
          <ClientsSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
