
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500); // Add a small delay after reaching 100% before hiding
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, [onComplete]);
  
  return (
    <motion.div 
      className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center"
        >
          RetailSolutions
        </motion.div>
        
        <div className="h-2 bg-muted rounded-full overflow-hidden mb-4">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <div className="flex justify-between items-center text-muted-foreground text-sm">
          <span>Loading experience</span>
          <span>{Math.round(progress)}%</span>
        </div>
        
        <div className="mt-8 flex justify-center">
          <div className="relative">
            <motion.div 
              className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full" 
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
