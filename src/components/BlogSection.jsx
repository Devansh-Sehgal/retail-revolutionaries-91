
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const sectionRef = useRef(null);
  const [allArticlesVisible, setAllArticlesVisible] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Optimizing Inventory Management for Fashion Retailers",
      excerpt: "Learn how modern inventory systems can help fashion retailers reduce stockouts and overstock situations across seasonal collections.",
      category: "Fashion Retail",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "/banner 1.jpg"
    },
    {
      id: 2,
      title: "The Future of Retail: AI-Powered Inventory Forecasting",
      excerpt: "Discover how artificial intelligence is transforming inventory forecasting for retailers of all sizes.",
      category: "Technology",
      date: "April 28, 2023",
      readTime: "8 min read",
      image: "/banner 2.jpg"
    },
    {
      id: 3,
      title: "Reducing Waste in Grocery Retail Through Smart Inventory",
      excerpt: "How supermarkets are using advanced inventory management to minimize food waste and maximize profits.",
      category: "Grocery",
      date: "April 10, 2023",
      readTime: "6 min read",
      image: "/banner 3.jpg"
    },
    {
      id: 4,
      title: "Omnichannel Success: Unifying Your Inventory Across Platforms",
      excerpt: "Strategies for creating a seamless inventory experience across physical stores and online channels.",
      category: "Omnichannel",
      date: "March 22, 2023",
      readTime: "7 min read",
      image: "/banner 4.jpg"
    }
  ];

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

    const articles = document.querySelectorAll('.blog-item');
    articles.forEach((article) => observer.observe(article));

    // Create another observer to check if all articles have been viewed
    const lastArticleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAllArticlesVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the last article
    const lastArticle = document.querySelector('.blog-item:last-child');
    if (lastArticle) {
      lastArticleObserver.observe(lastArticle);
    }

    return () => {
      articles.forEach((article) => observer.unobserve(article));
      if (lastArticle) {
        lastArticleObserver.unobserve(lastArticle);
      }
    };
  }, []);

  return (
    <section 
      id="blog" 
      className="py-4 bg-muted/50 relative" 
      ref={sectionRef}
      style={{ 
        height: "100vh", 
        overflowY: allCardsVisible ? "auto" : "hidden" 
      }}
    >
      <div className='flex flex-col p-2 gap-2 h-full'>
        <div className="text-center mb-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
            Latest Insights
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary/70 rounded-full"></div>
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            Expert articles and guides on retail inventory management and optimization
          </p>
        </div>

        <ScrollArea className="flex-1 w-full rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`blog-item animate-fade-up opacity-0 transform translate-y-10 transition-all duration-700 ${index === blogPosts.length - 1 ? 'last-blog' : ''}`}
                style={{ 
                  animationDelay: `${0.1 + index * 0.1}s`,
                  transitionDelay: `${index * 0.05}s`
                }}
              >
                <div className="bg-white dark:bg-gray-800 overflow-hidden rounded-xl shadow-md hover:shadow-lg border border-border group transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center">
                        <Tag className="mr-1 h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <Link to={`/blog/${post.id}`} className="text-primary font-medium flex items-center mt-auto hover:underline story-link">
                      Read more
                      <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Navigation hint that appears until all articles are seen */}
        {!allCardsVisible && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
            <p className="text-primary font-medium">Scroll to see all articles</p>
            <div className="w-6 h-6 mx-auto mt-2 border-b-2 border-r-2 border-primary transform rotate-45"></div>
          </div>
        )}

        <div className="text-center mt-8 mb-4">
          <Button variant="outline" size="lg" className="group">
            View all articles
            <BookOpen className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-300/10 rounded-full blur-3xl z-0"></div>
      </div>
    </section>
  );
};

export default BlogSection;
