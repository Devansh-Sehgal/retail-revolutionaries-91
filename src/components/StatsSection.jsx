
import { useEffect, useRef, useState } from 'react';

const StatCounter = ({ value, label, suffix }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = parseInt(value.toString().replace(/,/g, ''));
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));

      if (start >= end) {
        clearInterval(timer);
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [value, isVisible]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="flex items-center justify-center text-3xl md:text-4xl font-bold text-primary">
        <span>{count}</span>
        {suffix && <span className="ml-1">{suffix}</span>}
      </div>
      <p className="text-lg text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 785, label: 'Global Brands', suffix: '+' },
    { value: 533, label: 'Happy Clients', suffix: '+' },
    { value: 865, label: 'Winning Awards', suffix: null },
    { value: 346, label: 'Team Members', suffix: '+' }
  ];

  return (
    <section className="py-6 mt-10 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
