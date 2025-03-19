import { ShoppingBag, ShoppingCart, Package, Store, ShirtIcon, Loader } from 'lucide-react';
import { useEffect, useRef } from 'react';

const SolutionsSection = () => {
  const sectionRef = useRef(null);

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

    const solutions = document.querySelectorAll('.solution-item');
    solutions.forEach((solution) => observer.observe(solution));

    return () => {
      solutions.forEach((solution) => observer.unobserve(solution));
    };
  }, []);

  const solutions = [
    {
      icon: ShirtIcon,
      title: 'Fashion Distribution',
      description: 'Streamline your fashion supply chain with real-time inventory tracking across warehouses and distribution centers.'
    },
    {
      icon: ShoppingBag,
      title: 'Lifestyle Brands',
      description: 'Unified inventory management for multi-category lifestyle products with seasonal demand forecasting.'
    },
    {
      icon: Store,
      title: 'Fashion Retail',
      description: 'Size/color matrix management, style-level analytics, and omnichannel inventory optimization for fashion retailers.'
    },
    {
      icon: ShoppingCart,
      title: 'Supermarkets',
      description: 'Fresh inventory management with shelf-life tracking, auto-replenishment, and waste reduction analytics.'
    },
    {
      icon: Package,
      title: 'D2C Brands',
      description: 'Direct-to-consumer inventory solutions with integrated fulfillment, returns management, and customer insights.'
    },
    {
      icon: Loader,
      title: 'Product Management',
      description: 'Comprehensive product lifecycle management from concept to retirement with full visibility.'
    }
  ];

  return (
    <section id="solutions" className="py-4 bg-muted/50 relative" ref={sectionRef}>
      <div className='flex flex-col p-2 gap-2'>
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Our Solutions
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/70 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Specialized inventory solutions for different retail segments, designed to address unique industry challenges.
          </p>
        </div>

        <div className="flex flex-col h-[370px] p-6 items-center md:justify-center w-full rounded-3xl gap-10 relative overflow-hidden">
          <div className="relative grid grid-cols-1 rounded-2xl md:grid-cols-2 gap-6 overflow-hidden overflow-y-scroll scrollbar-hide">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="solution-item animate-fade-up sticky top-0 rounded-2xl p-4 opacity-0 transform translate-y-10 transition-all duration-700"
                style={{ 
                  animationDelay: `${0.1 + index * 0.1}s`,
                  transitionDelay: `${index * 0.05}s`
                }}
              >
                <div
                  className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-border group transition-all duration-300 relative overflow-hidden service-card h-full min-h-[280px] flex flex-col ${index % 2 === 1 ? 'rotate-1' : '-rotate-1'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-1">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <solution.icon size={24} className="transform transition-transform group-hover:scale-110 duration-300" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>

                    <div className="h-0.5 w-0 bg-primary mt-6 transition-all duration-300 group-hover:w-full"></div>
                  </div>

                  {/* Subtle decorative elements */}
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl z-0"></div>
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300/10 rounded-full blur-3xl z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;