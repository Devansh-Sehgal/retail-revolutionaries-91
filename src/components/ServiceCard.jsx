
import { useRef, useEffect } from 'react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  const cardRef = useRef(null);
  const gradientRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !gradientRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    gradientRef.current.style.opacity = '1';
    gradientRef.current.style.left = `${x}px`;
    gradientRef.current.style.top = `${y}px`;
  };

  const handleMouseLeave = () => {
    if (gradientRef.current) {
      gradientRef.current.style.opacity = '0';
    }
  };

  return (
    <div 
      ref={cardRef}
      className="service-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border relative overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial gradient that follows mouse */}
      <div 
        ref={gradientRef}
        className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-r from-primary/20 to-transparent blur-xl opacity-0 transition-opacity duration-300 pointer-events-none -translate-x-1/2 -translate-y-1/2"
      ></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 transition-transform group-hover:scale-110 duration-300">
          <Icon size={24} />
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        
        <p className="text-muted-foreground">{description}</p>
        
        <div className="mt-6 pt-4 border-t border-border">
          <a href="#" className="text-primary font-medium inline-flex items-center hover:underline">
            Learn more
            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
