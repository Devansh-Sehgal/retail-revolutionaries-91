
import { BarChart3, Cloud, Code, Palette, ShoppingBag, Truck } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
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
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions designed to transform retail operations with cutting-edge technology and industry expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-up" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
