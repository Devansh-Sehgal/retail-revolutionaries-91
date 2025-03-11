
import { useRef, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "The inventory forecasting tools have dramatically reduced our stockouts while keeping inventory levels lean. It's been transformative for our cash flow.",
      author: "Sarah Johnson",
      company: "Fashion Retailer",
      rating: 5
    },
    {
      quote: "Implementation was smooth and the support team was there every step of the way. Our staff picked up the system quickly.",
      author: "Michael Chen",
      company: "Supermarket Chain",
      rating: 5
    },
    {
      quote: "We've been able to scale our D2C operations without the usual growing pains thanks to their inventory system.",
      author: "Emma Rodriguez",
      company: "Lifestyle Brand",
      rating: 4
    },
    {
      quote: "The analytics have given us insights we never had before. We're making better purchasing decisions and seeing the results on our bottom line.",
      author: "David Wilson",
      company: "Department Store",
      rating: 5
    },
    {
      quote: "Their solution seamlessly connected our in-store and online inventory, creating a true omnichannel experience for our customers.",
      author: "Lisa Thompson",
      company: "Fashion Boutique",
      rating: 4
    },
    {
      quote: "The ROI was evident within the first quarter. Inventory costs down, availability up, and staff spending less time on manual processes.",
      author: "James Parker",
      company: "Electronics Retailer",
      rating: 5
    },
    {
      quote: "Their manufacturing module has streamlined our production planning and materials management, reducing waste significantly.",
      author: "Robert Garcia",
      company: "Apparel Manufacturer",
      rating: 5
    },
    {
      quote: "Customer support is exceptional. They've been responsive and proactive in helping us get the most out of the system.",
      author: "Olivia Kim",
      company: "Home Goods Retailer",
      rating: 4
    }
  ];

  const column1 = testimonials.slice(0, 4);
  const column2 = testimonials.slice(4);

  // Function to assign varying heights for masonry effect
  const getRandomHeight = () => {
    const heights = ['h-auto', 'h-auto']; // Using auto-height based on content
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <section id="testimonials" className="py-20 bg-muted/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from retailers who have transformed their operations with our solutions.
          </p>
        </div>
        
        <div className="relative h-[500px] md:h-[700px] overflow-hidden">
          <div className="absolute w-full flex space-x-8">
            {/* First scrolling column */}
            <div className="w-full md:w-1/2 space-y-6 scrolling-testimonials">
              {column1.map((testimonial, index) => (
                <div 
                  key={`col1-${index}`} 
                  className={getRandomHeight()}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
              {/* Duplicate for seamless scrolling */}
              {column1.map((testimonial, index) => (
                <div 
                  key={`col1-dup-${index}`} 
                  className={getRandomHeight()}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
            
            {/* Second scrolling column (delayed start) */}
            <div className="hidden md:block w-1/2 space-y-6 scrolling-testimonials-delayed">
              {column2.map((testimonial, index) => (
                <div 
                  key={`col2-${index}`} 
                  className={getRandomHeight()}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
              {/* Duplicate for seamless scrolling */}
              {column2.map((testimonial, index) => (
                <div 
                  key={`col2-dup-${index}`} 
                  className={getRandomHeight()}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
