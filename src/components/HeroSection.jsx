import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const carouselContent = [
  {
    image: "/banner1.jpg",
    title: "Quit speculating and begin to know. Transform the way you manage your inventory.",
    subtitle: "With smart, cloud-based inventory systems, Inexterpsolution enables retailers to increase productivity and profitability."
  },
  {
    image: "/banner2.jpg",
    title: "Optimize Your Supply Chain with Real-Time Insights",
    subtitle: "Harness the power of AI-driven analytics to predict demand, reduce waste, and ensure your products are always in stock. Our solutions provide end-to-end visibility across your supply chain."
  },
  {
    image: "/banner3.jpg",
    title: "Empower Your Team with Data-Driven Decisions",
    subtitle: "Equip your team with intuitive dashboards and real-time reports. From inventory tracking to sales performance, our tools turn complex data into actionable insights for smarter decision-making."
  },
  {
    image: "/banner4.jpg",
    title: "Deliver a Seamless Omnichannel Experience",
    subtitle: "Unify your in-store and online operations with a single, integrated platform. Enhance customer satisfaction by ensuring consistent stock availability and faster order fulfillment."
  }
];

const HeroSection = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);


    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % carouselContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgRef.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width;
      const y = (clientY - top) / height;

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
      className="relative pt-24 min-h-screen flex items-center overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {carouselContent[activeIndex].title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                {carouselContent[activeIndex].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Image Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl"
            >
              <div className="relative rounded-2xl shadow-xl overflow-hidden p-1">
                <img
                  src={carouselContent[activeIndex].image}
                  alt={`Banner ${activeIndex + 1}`}
                  className="rounded-xl w-full h-96 object-cover relative z-10 transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-300 rounded-full blur-xl opacity-40 -z-10 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full blur-xl opacity-40 -z-10 animate-pulse"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel dots navigation */}
        <div className="flex justify-center mt-10 space-x-2">
          {carouselContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex
                ? 'bg-primary w-6'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;