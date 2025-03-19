
import { BarChart3, Cloud, Code, Palette, ShoppingBag, Truck } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useEffect, useRef, useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

const ServicesSection = () => {
  const containerRef = useRef(null);
  const [allCardsVisible, setAllCardsVisible] = useState(false);

  useEffect(() => {
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

    const cards = document.querySelectorAll('.service-item');
    cards.forEach((card) => observer.observe(card));

    // Create another observer to check if all cards have been viewed
    const lastCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAllCardsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the last card
    const lastCard = document.querySelector('.service-item:last-child');
    if (lastCard) {
      lastCardObserver.observe(lastCard);
    }

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      if (lastCard) {
        lastCardObserver.unobserve(lastCard);
      }
    };
  }, []);

  const services = [
    {
      icon: BarChart3,
      title: 'IT Consulting',
      description: 'Strategic IT planning and implementation services tailored to retail business needs and challenges.'
    },
    {
      icon: Palette,
      title: 'Design and Development',
      description: 'Custom software solutions with intuitive UI/UX design focused on enhancing retail operations.'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Secure, scalable cloud infrastructure optimized for retail inventory and operations management.'
    },
    {
      icon: ShoppingBag,
      title: 'Retail and Point of Sale',
      description: 'Integrated POS systems that streamline checkout and inventory updates in real-time.'
    },
    {
      icon: Code,
      title: 'Inventory Management',
      description: 'Advanced inventory tracking, forecasting, and optimization to minimize costs and stockouts.'
    },
    {
      icon: Truck,
      title: 'Manufacturing Solutions',
      description: 'End-to-end production tracking and supply chain management for retail manufacturers.'
    }
  ];

  return (
    <section 
      id="services" 
      className="py-4 bg-muted/50 relative"
      style={{ 
        height: "100vh", 
        overflowY: allCardsVisible ? "auto" : "hidden" 
      }}
    >
      <div className='flex flex-col p-2 gap-2 h-full' ref={containerRef}>
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 relative">
            Our Services
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/70 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Our software programs are made to manage the intricacies of retail inventory, regardless of the product or volume.
          </p>
        </div>

        <ScrollArea className="flex-1 w-full rounded-3xl">
          <div className="relative grid grid-cols-1 rounded-2xl md:grid-cols-2 gap-6 p-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-item animate-fade-up opacity-0 transform translate-y-10 transition-all duration-700 ${index === services.length - 1 ? 'last-service' : ''}`}
                style={{
                  animationDelay: `${0.1 + index * 0.1}s`,
                  transitionDelay: `${index * 0.05}s`
                }}
              >
                <ServiceCard {...service} index={index} />
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Navigation hint that appears until all cards are seen */}
        {!allCardsVisible && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
            <p className="text-primary font-medium">Scroll to see all services</p>
            <div className="w-6 h-6 mx-auto mt-2 border-b-2 border-r-2 border-primary transform rotate-45"></div>
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl z-0"></div>
      </div>
    </section>
  );
};

export default ServicesSection;
