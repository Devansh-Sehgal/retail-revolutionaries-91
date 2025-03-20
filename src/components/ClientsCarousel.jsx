
import React, { useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const ClientsCarousel = () => {
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const [position, setPosition] = useState(0);
  
  // Client logos from public/Clients directory
  const clients = [
    { name: "Mamta Saree", logo: "/Clients/MamtaSaree.jpg" },
    { name: "Paridhan", logo: "/Clients/Paridhan.jpg" },
    { name: "Sheesh Mahal Saree Wala", logo: "/Clients/SheeshMahalSareeWala.png" },
    { name: "Tanjor", logo: "/Clients/Tanjor.png" },
    { name: "UTSAV", logo: "/Clients/UTSAV.png" },
    { name: "Neha Saree", logo: "/Clients/nehasareemzf.jpg" },
    { name: "Vandana", logo: "/Clients/vandana.JPG" },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const contentEl = carousel.querySelector('.embla__container');
    if (!contentEl) return;
    
    // Setup: Clone items and append to make infinite loop
    const setupCarousel = () => {
      const items = Array.from(contentEl.children);
      
      // Clone all items for smooth continuous loop
      items.forEach(item => {
        const clone = item.cloneNode(true);
        contentEl.appendChild(clone);
      });
      
      // Set initial position
      contentEl.style.transform = `translateX(0px)`;
      contentEl.style.transition = 'transform 0.5s ease-out';
    };
    
    // Animation function for continuous movement
    const animate = () => {
      const contentWidth = contentEl.scrollWidth;
      const containerWidth = carousel.offsetWidth;
      const itemWidth = contentWidth / (clients.length * 2); // Total items (original + clones)
      
      // Move content continuously
      setPosition(prev => {
        // When we've moved one item width, reset to maintain illusion of infinity
        let newPos = prev - 1; // Speed of movement (adjust for faster/slower)
        
        // If we've moved beyond the original items set, reset to beginning
        if (Math.abs(newPos) >= contentWidth / 2) {
          newPos = 0;
        }
        
        // Apply the transform
        contentEl.style.transform = `translateX(${newPos}px)`;
        return newPos;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Initialize and start animation
    setupCarousel();
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full py-10 bg-gradient-to-r from-muted/20 via-white to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
          <span className="relative inline-block">
            Our Trusted Clients
            <div className="absolute -bottom-2 left-0 right-0 w-full h-1 bg-primary/70 rounded-full"></div>
          </span>
        </h2>
        
        <div 
          ref={carouselRef}
          className="w-full overflow-hidden"
        >
          <div className="embla__container flex">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="pl-4 flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6"
              >
                <div className="relative p-1 h-24 md:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain p-2"
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsCarousel;
