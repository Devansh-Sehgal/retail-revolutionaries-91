
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

    <section id="services" className="py-4 bg-muted/50">

      <div className='flex flex-col p-2 gap-2'>

        <div className="text-center mb-4 max-w-3xl mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions designed to transform retail operations with cutting-edge technology and industry expertise.
          </p>
        </div>


        <div className="flex flex-col h-[410px] p-3 items-center md:justify-center w-full rounded-3xl gap-10 overflow-y- scrollbar-hide">

          <div className="relative grid grid-cols-1 rounded-2xl md:grid-cols-2 gap-6 overflow-hidden overflow-y-scroll scrollbar-hide">

            {services.map((service, index) => (

              <div
                key={index}
                className="animate-fade-up sticky top-0 rounded-2xl p-4"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <ServiceCard {...service} index={index} />

              </div>
            ))}
          </div>
        </div>
      </div >

    </section >
  );
};

export default ServicesSection;
