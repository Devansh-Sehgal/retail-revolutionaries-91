
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop"
  ];

  useEffect(() => {
    setIsLoaded(true);

    // Auto rotate carousel
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current || !heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      bgRef.current.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;

      // Add enhanced tilt effect to the image container
      const imageContainer = document.querySelector('.carousel-container');
      if (imageContainer) {
        imageContainer.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 10}deg) rotateX(${(y - 0.5) * -10}deg) scale(1.05)`;
      }
    };

    const handleMouseLeave = () => {
      const imageContainer = document.querySelector('.carousel-container');
      if (imageContainer) {
        imageContainer.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
      }
    };

    const heroElement = heroRef.current;

    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      id="hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] animated-bg opacity-20 transition-opacity duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-teal-400/30 via-cyan-300/20 to-blue-400/30 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="absolute inset-0 -z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/30 rounded-full"
            style={{
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Revolutionize Your <span className="text-primary">Retail Business</span> With Smart Inventory Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Streamline operations, boost efficiency, and make data-driven decisions with our comprehensive inventory management services tailored for modern retailers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-500" style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
            }}>
              <Button size="lg" className="animate-pulse">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="hover:border-primary/50 hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {/* Enhanced carousel container with 3D effect */}
            <div className="carousel-container relative bg-white rounded-2xl shadow-xl overflow-hidden p-1 transition-all duration-300">
              <div className="carousel-track relative h-[400px] overflow-hidden rounded-xl">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Retail inventory management slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Carousel navigation */}
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                onClick={goToPrevSlide}
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>
              
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                onClick={goToNextSlide}
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>

              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === index ? 'bg-white w-6' : 'bg-white/60'
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
