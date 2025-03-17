
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Award, Clock, Target, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    // Scroll to top when about page loads
    window.scrollTo(0, 0);
    
    // Initialize animation observers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  // Timeline data
  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "InextERP Solutions was established with a vision to transform retail inventory management."
    },
    {
      year: "2013",
      title: "First Major Client",
      description: "Partnered with our first enterprise client, setting the foundation for our growth."
    },
    {
      year: "2016",
      title: "Cloud Platform Launch",
      description: "Launched our cloud-based ERP platform, making powerful tools accessible to businesses of all sizes."
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Expanded operations to serve clients across three continents with localized solutions."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Introduced AI-powered analytics and forecasting to our core platform."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-100">
                We're on a mission to revolutionize how retailers manage inventory and operations with innovative, accessible solutions.
              </p>
              <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 w-full text-white px-6">
                  <h2 className="text-2xl font-bold">InextERP Solutions Team</h2>
                  <p>Building the future of retail management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-100">
                These principles guide everything we do at InextERP Solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-muted/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-muted-foreground">We prioritize our customers' needs in every decision we make and product we build.</p>
              </div>

              <div className="bg-muted/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-100">
                <div className="bg-blue-300/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-blue-500 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-muted-foreground">We strive for excellence in our products, services, and customer support.</p>
              </div>

              <div className="bg-muted/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-200">
                <div className="bg-amber-300/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Clock className="text-amber-500 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Adaptability</h3>
                <p className="text-muted-foreground">We continuously evolve and adapt to the changing needs of the retail industry.</p>
              </div>

              <div className="bg-muted/20 p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-300">
                <div className="bg-teal-300/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-teal-500 h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">We push boundaries and explore new technologies to deliver cutting-edge solutions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0 transform -translate-x-10 transition-all duration-700">
                <div className="relative">
                  <div className="bg-gradient-to-tr from-primary/10 to-blue-300/20 rounded-2xl p-1">
                    <img 
                      src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                      alt="Our Approach" 
                      className="rounded-2xl w-full h-auto object-cover shadow-lg"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-xl -z-10"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-300/30 rounded-full blur-xl -z-10"></div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="animate-on-scroll opacity-0 transform translate-x-10 transition-all duration-700">
                  <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
                  <p className="text-muted-foreground mb-6">
                    Our retail ERP offers additional features right out of the box, like centralized data analytics, 
                    streamlined supply chain processes, effective point-of-sale (POS) billing software, and seamless 
                    inventory management, all of which can be customized to meet your specific business requirements.
                  </p>
                  <p className="text-muted-foreground">
                    Modern retail management software is available to businesses thanks to the Inext retail ERP system, 
                    which adjusts to your workflow, decreasing the need for workarounds and increasing efficiency.
                  </p>
                </div>

                <ul className="space-y-3 animate-on-scroll opacity-0 transform translate-x-10 transition-all duration-700 delay-100">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Customizable solutions for businesses of all sizes</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Centralized data management and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Seamless integration with existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Continuous support and improvement</span>
                  </li>
                </ul>

                <div className="pt-4 animate-on-scroll opacity-0 transform translate-x-10 transition-all duration-700 delay-200">
                  <Link to="/contact">
                    <Button className="group">
                      Contact Us
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-100">
                The evolution of InextERP Solutions over the years
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto pt-8">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-muted-foreground/20"></div>

              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center mb-12 animate-on-scroll opacity-0 transform ${index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'} transition-all duration-700`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-1/2 pr-8 pl-8 text-right">
                    <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                      <span className="text-xl font-bold text-primary">{item.year}</span>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="z-10 flex-shrink-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </div>
                  
                  <div className="w-1/2 pl-8 pr-8">
                    {/* Empty div to maintain spacing */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700 delay-100">
                The talented individuals behind InextERP Solutions
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Retail Operations?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the growing number of retailers who are optimizing their operations with InextERP Solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/#services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
