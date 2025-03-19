
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";

const blogPosts = [
    {
        id: 1,
        title: "The Future of Retail Inventory Management",
        excerpt: "Explore how AI and machine learning are transforming the way retailers manage inventory across channels.",
        author: "Jane Smith",
        date: "May 15, 2023",
        readTime: "5 min read",
        categories: ["Retail", "Technology"],
        image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 2,
        title: "10 Ways to Reduce Stock Discrepancies in Your Retail Business",
        excerpt: "Practical strategies to minimize inventory discrepancies and improve accuracy in your retail operations.",
        author: "Michael Chen",
        date: "Apr 28, 2023",
        readTime: "7 min read",
        categories: ["Inventory", "Best Practices"],
        image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 3,
        title: "How Omnichannel Inventory Management Increases Sales",
        excerpt: "Discover how a unified inventory approach can boost your retail business revenue and customer satisfaction.",
        author: "Sarah Johnson",
        date: "Apr 10, 2023",
        readTime: "6 min read",
        categories: ["Omnichannel", "Sales"],
        image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 4,
        title: "Sustainable Inventory Practices for Modern Retailers",
        excerpt: "How leading retailers are reducing waste and improving sustainability through better inventory management.",
        author: "David Rodriguez",
        date: "Mar 22, 2023",
        readTime: "8 min read",
        categories: ["Sustainability", "Trends"],
        image: "https://images.unsplash.com/photo-1610018556010-6a11691bc905?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 5,
        title: "Key Metrics Every Retailer Should Track for Inventory Health",
        excerpt: "Essential KPIs and metrics that help retailers maintain optimal inventory levels and improve turnover.",
        author: "Lisa Wong",
        date: "Mar 5, 2023",
        readTime: "6 min read",
        categories: ["Analytics", "Strategy"],
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
        id: 6,
        title: "Inventory Management Software: Build vs Buy Decision Guide",
        excerpt: "A comprehensive guide to help retailers decide whether to build custom inventory solutions or purchase existing ones.",
        author: "Robert Taylor",
        date: "Feb 18, 2023",
        readTime: "9 min read",
        categories: ["Software", "Decision Making"],
        image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    }
];

const BlogSection = () => {
    const sectionRef = useRef(null);
    const [visibleCards, setVisibleCards] = useState(new Set());
    const [allCardsVisible, setAllCardsVisible] = useState(false);

    useEffect(() => {
        if (visibleCards.size === blogPosts.length) {
            setAllCardsVisible(true);
        }
    }, [visibleCards]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const cardId = parseInt(entry.target.dataset.cardId);
                    setVisibleCards(prev => {
                        const newSet = new Set(prev);
                        newSet.add(cardId);
                        return newSet;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.7 });

        const blogItems = document.querySelectorAll('.blog-item');
        blogItems.forEach(item => observer.observe(item));

        return () => {
            if (blogItems) {
                blogItems.forEach(item => observer.unobserve(item));
            }
        };
    }, []);

    return (
        <section
            id="blog"
            className="py-10 bg-gradient-to-b from-background to-muted/30"
            ref={sectionRef}
        >
            <div className='flex flex-col p-2 gap-2 h-full'>
                <div className="container mx-auto px-4 md:px-6 mb-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">
                                Latest from Our <span className="text-primary">Blog</span>
                            </h2>
                            <p className="text-muted-foreground max-w-xl">
                                Insights, trends, and expert advice to help you optimize your inventory management
                            </p>
                        </div>
                        <Button variant="outline" className="hidden md:flex items-center gap-2 group">
                            View all articles
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogPosts.map((post, index) => (
                                <Card
                                    key={post.id}
                                    data-card-id={post.id}
                                    className="blog-item overflow-hidden border border-border/40 shadow-md hover:shadow-lg transition-all duration-300"
                                    style={{
                                        opacity: 1,
                                        transform: 'translateY(20px)',
                                        transition: 'all 0.5s ease-out',
                                        animationDelay: `${index * 150}ms`
                                    }}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                        <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">
                                            {post.categories[0]}
                                        </div>
                                    </div>
                                    <CardHeader className="p-4 pb-2">
                                        <CardTitle className="text-xl font-bold line-clamp-2">{post.title}</CardTitle>
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={12} />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={12} />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-2">
                                        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                                    </CardContent>
                                    <CardFooter className="p-4 border-t border-border/50 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <User size={14} />
                                            <span className="text-xs">{post.author}</span>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                                            Read more
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 flex justify-center md:hidden">
                        <Button className="w-full sm:w-auto flex items-center justify-center gap-2 group">
                            View all articles
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;