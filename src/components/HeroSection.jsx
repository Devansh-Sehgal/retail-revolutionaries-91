
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, Mouse } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const imageRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

      bgRef.current.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;

      // Add subtle tilt effect to the image
      if (imageRef.current) {
        imageRef.current.style.transform = `perspective(1000px) rotateY(${(x - 0.5) * 5}deg) rotateX(${(y - 0.5) * -5}deg)`;
      }
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
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      id="hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] animated-bg opacity-20 dark:opacity-30 transition-opacity duration-300"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-pink-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-teal-400/30 via-cyan-300/20 to-blue-400/30 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="absolute inset-0 -z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/30 dark:bg-indigo-500/30 rounded-full"
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
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#services" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
              >
                Explore Solutions
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors text-center"
              >
                Book a Demo
              </a>
            </div> */}
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
            <div ref={imageRef} className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-1 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-primary to-violet-600 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1664575198308-3959904fa430?q=80&w=2070&auto=format&fit=crop"
                alt="Retail inventory management dashboard"
                className="rounded-xl w-full h-full object-cover relative z-10"
              />
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
