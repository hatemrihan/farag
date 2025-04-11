'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';


const About = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoContainerRef, { once: false, margin: "20%" });

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start end", "end start"]
  });

  // Different scales for mobile and desktop
  const videoScale = useTransform(scrollYProgress, 
    [0, 0.6, 0.9, 1], 
    ['100%', '120%', '120%', '100%']
  );
  
  // Width animation - starts contained and expands
  const videoWidth = useTransform(scrollYProgress, 
    [0, 0.6, 0.9, 1], 
    ['70%', '100%', '100%', '70%']
  );

  const videoHeight = useTransform(scrollYProgress,
    [0, 0.6, 0.9, 1],
    ['10vh', '100vh', '100vh', '10vh']
  );

  // Handle entrance animation when component comes into view
  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  // Handle mobile navigation
  const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={containerRef} className="bg-stone-100 text-black">
      <div className="relative min-h-screen flex flex-col items-center justify-center py-16">
      <div className="absolute inset-x-0 top-0 z-0 pointer-events-none" style={{ height: 'calc(100% - 100px)' }}>
          <div className="h-full w-full max-w-7xl mx-auto relative">
            {/* Left to right vertical lines */}
            <div className="absolute left-0 border-l border-gray-200 h-full"></div>
            <div className="absolute left-[20%] border-l border-gray-200 h-full"></div>
            <div className="absolute left-[40%] border-l border-gray-200 h-full"></div>
            <div className="absolute left-[60%] border-l border-gray-200 h-full"></div>
            <div className="absolute left-[80%] border-l border-gray-200 h-full"></div>
            <div className="absolute right-0 border-l border-gray-200 h-full"></div>
          </div>
        </div>
        <div className="fg-text text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold tracking-wider mb-6" ref={scope}>
          AF
        </div>
        <div 
          onClick={() => router.push('/about')}
          className="text-lg md:text-xl tracking-wide mb-16 cursor-pointer group relative inline-block"
        >
          <span className="inline-block transition-all duration-300 group-hover:tracking-[0.3em] text-red-700 underline">
            MEET ABDELRAHMAN
          </span>
        </div>
        <div className="description-text max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl sm:text-md leading-[1.6] tracking-wide font-light">
            A GLOBAL SENIOR CREATIVE WITH EXTENSIVE KNOWLEDGE OF THE INTERNATIONAL MARKETPLACE, HEAVILY INFLUENCED BY TIME SPENT LIVING IN MANSOURA AND CAIRO. WORKED WITH ACCLAIMED PHOTOGRAPHERS AND CELEBRATED CREATIVES, BUILDING A NETWORK OF CONTEMPORARIES AROUND EGYPT AND MIDDLE EAST THAT INSPIRE AND SUPPORT THE WORK.
          </p>
          
          <div className="flex justify-center items-center w-full mt-20">
            <motion.div 
              ref={videoContainerRef}
              className="relative overflow-hidden h-[70vh] md:h-[100vh]"
              style={{
                width: videoWidth,
                position: 'relative',
                margin: '0 auto'
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  scale: videoScale,
                  transformOrigin: 'center center'
                }}
              >
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    cursor: 'auto',
                    width: '100%',
                    height: '100%',
                    borderRadius: '0px',
                    display: 'block',
                    objectFit: 'cover',
                    objectPosition: '50% 50%'
                  }}
                >
                  <source src="/videos/TEASERRRR2.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 