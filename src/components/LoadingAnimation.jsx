import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-black z-50">
      <div className="relative w-72 h-72">
        {/* Outer rings */}
        {[1, 2, 3].map(ring => (
          <div
            key={`ring-${ring}`}
            className="absolute rounded-full border border-blue-500/30"
            style={{
              top: '50%',
              left: '50%',
              width: `${120 + ring * 25}px`,
              height: `${120 + ring * 25}px`,
              transform: `translate(-50%, -50%) rotate(${ring % 2 === 0 ? 45 : -45}deg)`,
              borderWidth: ring === 2 ? '2px' : '1px',
              boxShadow: `0 0 ${5 + ring * 3}px rgba(59, 130, 246, ${0.1 + ring * 0.05})`,
              opacity: 0.4 + (ring * 0.1)
            }}
          />
        ))}

        {/* Main center ring with gradient */}
        <div
          className="absolute rounded-full"
          style={{
            top: '50%',
            left: '50%',
            width: '100px',
            height: '100px',
            transform: 'translate(-50%, -50%)',
            background: 'conic-gradient(from 0deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8), rgba(59, 130, 246, 0.8))',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.7)',
            animation: 'spin 4s linear infinite'
          }}
        />

        {/* Inner center */}
        <div
          className="absolute rounded-full bg-white"
          style={{
            top: '50%',
            left: '50%',
            width: '80px',
            height: '80px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(219,234,254,1) 70%, rgba(191,219,254,1) 100%)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.9)',
            animation: 'pulse 2s ease-in-out infinite'
          }}
        />

        {/* Inner geometric shape - hexagonal prism */}
        <div
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            width: '40px',
            height: '46px',
            transform: 'translate(-50%, -50%)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)',
            backgroundSize: '200% 200%',
            boxShadow: '0 0 15px rgba(79, 70, 229, 0.7)',
            filter: 'drop-shadow(0 0 5px rgba(147, 197, 253, 0.8))',
            animation: 'rotate 3s linear infinite'
          }}
        />

        {/* Loading text */}
        <div
          className="absolute text-center font-bold tracking-widest text-xs"
          style={{
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255, 255, 255, 0.9)',
            textShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
            letterSpacing: '0.3em'
          }}
        >
          LOADING
        </div>
      </div>

      {/* Add keyframes animations to your global CSS */}
      <style jsx global>{`
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
        }
        
        @keyframes rotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;