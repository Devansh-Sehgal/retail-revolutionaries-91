
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, Sparkles, Zap } from 'lucide-react';

const CTA = () => {


    const getHref = (sectionId) => {
        if (location.pathname !== '/') {
          return `/#${sectionId}`;
        }
        return `#${sectionId}`;
      };


      const handleNavClick = (e, sectionId) => {
        if (location.pathname === '/') {
          e.preventDefault();
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };


    return (
        <section className="py-10 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-300/10 to-purple-300/5 -z-10"></div>

            {/* Decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-5"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl -z-5"></div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200/30 dark:border-gray-700/30 animate-on-scroll opacity-0 transform -translate-y-10 transition-all duration-700">
                    <div className="flex items-center justify-center mb-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Ready to Transform Your Retail Operations?
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                        Join the growing number of retailers who are optimizing their operations with InextERP Solutions. Start your journey to better inventory management today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="w-full sm:w-auto group">
                                Contact Us
                                <ArrowRightIcon className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to={getHref('services')} onClick={(e) => handleNavClick(e, 'services')}>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                                Explore Services
                                <Zap className="ml-1 w-4 h-4 group-hover:scale-110 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA