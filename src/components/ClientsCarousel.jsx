
import React, { useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useCallback } from 'react';

const ClientsCarousel = () => {
  const carouselRef = useRef(null);
  
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

  const scrollCarousel = useCallback(() => {
    const emblaApi = carouselRef.current?.__embla;
    
    if (!emblaApi) return;
    
    // Move forward by a small amount
    const scrollProgress = emblaApi.scrollProgress();
    
    // When we reach the end, loop back to the beginning
    if (scrollProgress >= 0.99) {
      emblaApi.scrollTo(0);
    } else {
      // Move slightly forward (adjust the 0.001 value to control speed)
      const nextScrollSnap = emblaApi.scrollProgress() + 0.0005;
      emblaApi.scrollTo(nextScrollSnap);
    }
  }, []);

  useEffect(() => {
    // Start automatic scrolling with requestAnimationFrame for smooth animation
    let animationId;
    let lastTime = 0;
    
    const animate = (time) => {
      // Throttle the scrolling to avoid too frequent updates
      if (time - lastTime > 16) { // Approx 60fps
        scrollCarousel();
        lastTime = time;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    // Start the animation loop after a short delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 1000);
    
    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timeoutId);
    };
  }, [scrollCarousel]);

  return (
    <div className="w-full py-10 bg-gradient-to-r from-muted/20 via-white to-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
          <span className="relative inline-block">
            Our Trusted Clients
            <div className="absolute -bottom-2 left-0 right-0 w-full h-1 bg-primary/70 rounded-full"></div>
          </span>
        </h2>
        
        <Carousel 
          ref={carouselRef}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="relative p-1 h-24 md:h-28 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain p-2"
                    width="100"
                    height="100"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ClientsCarousel;
