import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('show');
              }, 150 * index);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-16 overflow-hidden relative bg-gradient-to-b from-white to-muted/20">
      {/* Decorative elements */}
      <div className="absolute -top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4" ref={aboutRef}>
        <div className="text-center mb-12 animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            About Us
            <div className="absolute -bottom-2 left-0 right-0 w-full h-1 bg-primary/70 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            We're passionate about transforming how businesses manage inventory and operations
          </p>
        </div>

        {/* Updated grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section (Image first on small screens) */}
          <div className="order-1 lg:order-1 animate-on-scroll opacity-0 transform translate-x-10 transition-all duration-700">
            <div className="relative">
              <div className="bg-gradient-to-tr from-primary/10 to-blue-300/20 rounded-2xl p-1">
                <img
                  src="/aboutus1.jpg"
                  alt="Our Team"
                  className="rounded-2xl w-full object-cover shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-300/30 rounded-full blur-xl -z-10"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-2 lg:order-2 space-y-6">
            <div className="animate-on-scroll opacity-0 transform -translate-x-10 transition-all duration-700">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                Businesses need a solution that provides more than just the essentials when selecting retail ERP software.
                InextERP Solution distinguishes itself by providing a full range of capabilities at an affordable price,
                providing retailers of all sizes with unparalleled value.
              </p>
            </div>

            <div className="animate-on-scroll opacity-0 transform -translate-x-10 transition-all duration-700 delay-100">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Approach</h3>
              <p className="text-muted-foreground">
                Our retail ERP offers additional features right out of the box, like centralized data analytics,
                streamlined supply chain processes, effective point-of-sale (POS) billing software, and seamless
                inventory management, all of which can be customized to meet your specific business requirements.
                Modern retail management software is available to businesses thanks to the Inext retail ERP system,
                which adjusts to your workflow, decreasing the need for workarounds and increasing efficiency.
              </p>
            </div>

            <div className="pt-4 animate-on-scroll opacity-0 transform -translate-x-10 transition-all duration-700 delay-200">
              <Link to="/about">
                <Button className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
