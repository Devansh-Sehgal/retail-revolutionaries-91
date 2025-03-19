import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button";

const CTA = () => {
    return (
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
    )
}

export default CTA
