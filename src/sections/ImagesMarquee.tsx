'use client';
import React from 'react';

const ImagesMarquee = () => {
  return (
    <div className="inset-0 flex items-center justify-center pointer-events-none z-50 text-black">
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="images-marquee-container">
            {[...Array(3)].map((_, index) => (
              <React.Fragment key={index}>
                <span className="images-marquee-item text-black">Explore the Luxury</span>
                <span className="images-marquee-item">Explore the Work</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .images-marquee-container {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        
        .images-marquee-item {
          font-size: 8vw;
          padding: 0 2vw;
          color: black;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          font-weight: 500;
          white-space: nowrap;
        }
        
        @keyframes marquee {
          0% {  
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .images-marquee-item {
            font-size: 8vw;
          }
        }
      `}</style>
    </div>
  );
};

export default ImagesMarquee; 