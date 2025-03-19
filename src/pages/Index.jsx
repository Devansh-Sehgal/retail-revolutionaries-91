
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import BlogSection from '../components/BlogSection';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import AboutUsSection from '../components/AboutUsSection';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import CTA from '../components/CTA';

const Index = () => {
  useEffect(() => {
    // Handle section scrolling when page loads with hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top (hero section)
      window.scrollTo(0, 0);
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

    // Set up scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show-section');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all items with animation classes
    const animatedElements = document.querySelectorAll('.service-item, .solution-item, .blog-item, .animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
      });

      // Clean up the observer
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CTA />
        <AboutUsSection />
        <StatsSection />
        <ServicesSection />
        <SolutionsSection />
        <BlogSection />
        <ClientsSection />
        <TestimonialsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;