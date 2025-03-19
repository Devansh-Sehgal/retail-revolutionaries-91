
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const carouselContent = [
  {
    image: "/banner 1.jpg",
    title: "Quit speculating and begin to know.",
    subtitle: "With smart, cloud-based inventory systems, Inexterpsolution enables retailers to increase productivity and profitability."
  },
  {
    image: "/banner 2.jpg",
    title: "Transform your inventory management today.",
    subtitle: "Streamline operations and reduce costs with our innovative retail solutions."
  },
  {
    image: "/banner 3.jpg",
    title: "Data-driven decisions for modern retail.",
    subtitle: "Turn your inventory data into actionable insights and competitive advantage."
  },
  {
    image: "/banner 4.jpg",
    title: "Seamless omnichannel experience.",
    subtitle: "Unify your in-store and online inventory for a consistent customer experience."
  }
];

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setPreviousIndex(activeIndex);
      setIsTransitioning(true);
      setActiveIndex(prevIndex => (prevIndex + 1) % carouselContent.length);
      
      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      // Reduced animation effect
      bgRef.current.style.transform = `translate(${x * 5 - 2.5}px, ${y * 5 - 2.5}px)`;
    };

    const heroElement = heroRef.current;

    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative py-24 min-h-screen flex items-center overflow-hidden"
      id="hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 transition-opacity duration-300 -z-10"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-300/30 via-purple-300/20 to-pink-300/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-teal-300/20 via-cyan-200/10 to-blue-300/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="absolute inset-0 -z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/20 rounded-full"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.2,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="w-full h-full relative">
          <Carousel className="w-full h-full">
            <CarouselContent className="overflow-visible">
              {carouselContent.map((item, index) => (
                <CarouselItem 
                  key={index} 
                  className={`transition-all duration-700 ${
                    index === activeIndex ? 'block' : 'hidden'
                  }`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 transform ${
                    isTransitioning && index === activeIndex ? 'translate-x-0 opacity-100' : 
                    isTransitioning && index === previousIndex ? 'translate-x-[-100%] opacity-0' : ''
                  }`}>
                    <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        {item.title} {index === 0 && <span className="text-primary">Transform the way</span>} {index === 0 && 'you manage your inventory.'}
                      </h1>
                      <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                        {item.subtitle}
                      </p>
                    </div>
                    
                    <div className="relative animate-fade-up rounded-2xl" style={{ animationDelay: '0.3s' }}>
                      <div className={`relative rounded-2xl shadow-xl overflow-hidden p-1 transition-all duration-700 transform ${
                        isTransitioning && index === activeIndex ? 'translate-x-0 opacity-100 scale-100' : 
                        isTransitioning && index === previousIndex ? 'translate-x-[-30px] opacity-0 scale-95' : ''
                      }`}>
                        <img
                          src={item.image}
                          alt={`Banner ${index + 1}`}
                          className="rounded-xl w-full h-96 object-cover relative z-10 transition-transform duration-300 hover:scale-[1.02]"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-300 rounded-full blur-xl opacity-40 -z-10 animate-pulse"></div>
                      <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-40 -z-10 animate-pulse"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Carousel dots navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {carouselContent.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setPreviousIndex(activeIndex);
                  setIsTransitioning(true);
                  setActiveIndex(index);
                  setTimeout(() => {
                    setIsTransitioning(false);
                  }, 700);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'bg-primary w-6'
                  : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
