'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const percentageRef = useRef({ value: 0 });

  useEffect(() => {
    // Create a timeline for the loading animation
    const tl = gsap.timeline({
      onComplete: () => {
        // After counter reaches 100%, wait a bit then fade out
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              setIsLoading(false);
              // Force a reflow to trigger inView calculations
              window.dispatchEvent(new Event('resize'));
            }
          });
        }, 800); // Wait 800ms at 100% before fading out
      }
    });

    // Animate the percentage counter from 0 to 100
    tl.to(percentageRef.current, {
      duration: 3, // Duration as set
      value: 100,
      roundProps: "value",
      onUpdate: () => setPercentage(Math.round(percentageRef.current.value)),
      ease: "power1.inOut"
    });

    return () => {
      tl.kill();
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 bg-stone-100 z-[9999] flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <h1 
          ref={textRef}
          className="text-2xl md:text-3xl font-normal mb-2"
        >
          AF ST®
        </h1>
        <span className="text-xl">{percentage}%</span>
      </div>
    </div>
  );
};

export default Loading; 