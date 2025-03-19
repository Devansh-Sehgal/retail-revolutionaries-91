import React, { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    content: "The inventory management system completely transformed our retail operations. We've seen a 30% reduction in stockouts and improved customer satisfaction.",
    author: "Sarah Johnson",
    role: "Operations Director",
    company: "FashionForward",
    image: "/testimonial-1.jpg"
  },
  {
    content: "As a growing D2C brand, we needed a solution that could scale with us. This platform has been instrumental in helping us manage our rapid growth.",
    author: "Michael Chen",
    role: "Founder & CEO",
    company: "Urban Essentials",
    image: "/testimonial-2.jpg"
  },
  {
    content: "The data insights from this system have enabled us to make more informed purchasing decisions, significantly reducing excess inventory.",
    author: "Priya Patel",
    role: "Supply Chain Manager",
    company: "StyleHub",
    image: "/testimonial-3.jpg"
  },
  {
    content: "Integration was seamless, and the team provided exceptional support throughout the implementation process. Highly recommended!",
    author: "David Wilson",
    role: "IT Director",
    company: "Market Fresh",
    image: "/testimonial-4.jpg"
  },
  {
    content: "The real-time visibility across all our retail locations has been a game-changer for our multi-store operations.",
    author: "Elena Rodriguez",
    role: "Retail Operations Manager",
    company: "LuxeLifestyle",
    image: "/testimonial-5.jpg"
  },
  {
    content: "We've been able to reduce inventory costs by 25% while improving product availability. The ROI has been extraordinary.",
    author: "Thomas Wright",
    role: "CFO",
    company: "Fashion Republic",
    image: "/testimonial-6.jpg"
  },
  {
    content: "Their solution for managing seasonal inventory has helped us optimize our buying cycles and reduce clearance markdowns.",
    author: "Jennifer Lee",
    role: "Merchandise Planner",
    company: "Seasons Apparel",
    image: "/testimonial-7.jpg"
  },
  {
    content: "The forecasting tools have improved our accuracy by over 40%, which has been critical for our just-in-time manufacturing approach.",
    author: "Robert Martinez",
    role: "Production Manager",
    company: "Craft Manufacturing",
    image: "/testimonial-8.jpg"
  }
];

const TestimonialsSection = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const setupInfiniteScroll = () => {
      if (scrollerRef.current && containerRef.current) {
        const originalContent = scrollerRef.current.innerHTML;
        scrollerRef.current.innerHTML += originalContent;
      }
    };

    setupInfiniteScroll();

    const handleMouseEnter = () => {
      setIsHovered(true);
      if (scrollerRef.current) {
        scrollerRef.current.style.animationPlayState = 'paused';
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (scrollerRef.current) {
        scrollerRef.current.style.animationPlayState = 'running';
      }
    };

    const container = containerRef.current;
    container?.addEventListener('mouseenter', handleMouseEnter);
    container?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container?.removeEventListener('mouseenter', handleMouseEnter);
      container?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Distribute testimonials into columns for masonry layout
  const column1 = testimonials.slice(0, 3);
  const column2 = testimonials.slice(3, 6);
  const column3 = testimonials.slice(6);

  console.log(testimonials[0].author)

  return (
    <section id="testimonials" className="py-8 px-4 relative overflow-hidden bg-secondary/50 dark:bg-gray-900/50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-violet-900/10 dark:to-indigo-900/10 -z-10"></div>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from the retailers and brands that have transformed their operations with our solutions.
          </p>
        </div>

        <div ref={containerRef} className="testimonial-container relative">
          <div
            ref={scrollerRef}
            className="testimonial-scroller absolute w-full"
            style={{
              animation: 'scroll-testimonials 40s linear infinite',
              animationPlayState: isHovered ? 'paused' : 'running',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-6">
                {column1.map((testimonial, index) => (
                  <div
                    key={`col1-${index}`}
                    className="testimonial-item bg-gradient-to-br from-background to-background/80 dark:from-gray-800 dark:to-gray-800/80 dark:border-gray-700 p-6 rounded-xl shadow-md border border-border"
                    style={{
                      animation: 'testimonial-up 0.8s forwards',
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
                        {testimonial.image ? (
                          <div
                            className="w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: `url(${testimonial.image})` }}
                          ></div>
                        ) : (
                          testimonial.author.charAt(0)
                        )}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground dark:text-gray-300">"{testimonial.content}"</p>
                  </div>
                ))}

                {/* Repeating column 1 for infinite scroll */}
                {column1.map((testimonial, index) => (
                  <div
                    key={`col1-repeat-${index}`}
                    className="testimonial-item bg-gradient-to-br from-background to-background/80 dark:from-gray-800 dark:to-gray-800/80 dark:border-gray-700 p-6 rounded-xl shadow-md border border-border"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
                        {testimonial.image ? (
                          <div
                            className="w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: `url(${testimonial.image})` }}
                          ></div>
                        ) : (
                          testimonial.author.charAt(0)
                        )}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground dark:text-gray-300">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                {column2.map((testimonial, index) => (
                  <div
                    key={`col2-${index}`}
                    className="testimonial-item bg-gradient-to-br from-background to-background/80 dark:from-gray-800 dark:to-gray-800/80 dark:border-gray-700 p-6 rounded-xl shadow-md border border-border"
                    style={{
                      animation: 'testimonial-up 0.8s forwards',
                      animationDelay: `${index * 0.2 + 0.1}s`,
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold overflow-hidden">
                        {testimonial.image ? (
                          <div
                            className="w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: `url(${testimonial.image})` }}
                          ></div>
                        ) : (
                          testimonial.author.charAt(0)
                        )}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground dark:text-gray-300">"{testimonial.content}"</p>
                  </div>
                ))}

                {/* Repeating column 2 for infinite scroll */}
                {column2.map((testimonial, index) => (
                  <div
                    key={`col2-repeat-${index}`}
                    className="testimonial-item bg-gradient-to-br from-background to-background/80 dark:from-gray-800 dark:to-gray-800/80 dark:border-gray-700 p-6 rounded-xl shadow-md border border-border"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold overflow-hidden">
                        {testimonial.image ? (
                          <div
                            className="w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: `url(${testimonial.image})` }}
                          ></div>
                        ) : (
                          testimonial.author.charAt(0)
                        )}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground dark:text-gray-300">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>

              {/* Column 3 (only visible on large screens) */}
              <div className="space-y-6 hidden lg:block">
                {column3.map((testimonial, index) => (
                  <div
                    key={`col3-${index}`}
                    className="testimonial-item bg-gradient-to-br from-background to-background/80 dark:from-gray-800 dark:to-gray-800/80 dark:border-gray-700 p-6 rounded-xl shadow-md border border-border"
                    style={{
                      animation: 'testimonial-up 0.8s forwards',
                      animationDelay: `${index * 0.2 + 0.2}s`,
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
                        {testimonial.image ? (
                          <div
                            className="w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: `url(${testimonial.image})` }}
                          ></div>
                        ) : (
                          testimonial.author.charAt(0)
                        )}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground dark:text-gray-300">"{testimonial.content}"</p>
                  </div>
                ))}

                {/* Repeating column 3 for infinite scroll */}
                {column3.map((testimonial, index) => (
                  <div
                    key={`col3-repeat-${index}`}
                    className="testimonial-item bg-gradient-to-br from-background to-background/80 dark:from-gray-800 dark:to-gray-800/80 dark:border-gray-700 p-6 rounded-xl shadow-md border border-border"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold overflow-hidden">
                        {testimonial.image ? (
                          <div
                            className="w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: `url(${testimonial.image})` }}
                          ></div>
                        ) : (
                          testimonial.author.charAt(0)
                        )}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold dark:text-white">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground dark:text-gray-300">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
