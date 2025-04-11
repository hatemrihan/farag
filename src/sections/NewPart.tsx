'use client';

import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import fayaImage from '@/assets/images/faya-image.jpg';
import redGuyImage from '@/assets/images/redguy-image.jpg';
import mazenImage from '@/assets/images/mazen-image.jpg';
import sobhImage from '@/assets/images/sobh-image.jpg';
import groupImage from '@/assets/images/group-image.jpg';
import girlImage from '@/assets/images/girl-image.jpg';
import banwaImage from '@/assets/images/banwa-image.jpg';
import dojoImage from '@/assets/images/dojo-image.jpg';
import ahmedImage from '@/assets/images/ahmed-image.jpg';
// Dynamically import GSAP on the client side only
const initGSAP = async () => {
  const gsap = (await import('gsap')).default;
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
};

const LOCATIONS = [
  {
    name: 'Faya STudio',
    image: fayaImage,
    href: '/faya'
  },
  {
    name: 'RZMN',
    image: redGuyImage,
    href: '/RZMN'
  },
  {
    name: 'Mula',
    image: mazenImage,
    href: '/MULA'
  },
  {
    name: 'CIVIC',
    image: sobhImage,
    href: '/CIVIC'
  },
  {
    name: 'Ebn El-Mansoura',
    image: groupImage,
    href: '/EBN-ElMansoura'
  },
  {
    name: 'MALAK-CIVIC',
    image: girlImage,
    href: '/MALAK'
  },
  {
    name: 'BANWA',
    image: banwaImage,
    href: '/BANWA'
  },
  {
    name: 'DOJO',
    image: dojoImage,
    href: '/DOJO'
  },
  {
    name: 'AHMED-RAPPER',
    image: ahmedImage,
    href: '/AHMED'
  }
];

// Create a client-side only component
const NewPart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let cleanup: (() => void) | undefined;

    const setupAnimations = async () => {
      const container = containerRef.current;
      const cards = cardsRef.current;
      if (!container || !cards) return;

      const { gsap, ScrollTrigger } = await initGSAP();

      // Horizontal scroll animation
      const scrollTween = gsap.to(cards, {
        x: () => -(cards.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => "+=" + (cards.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true
        }
      });

      // Card animations
      const cardElements = document.querySelectorAll('.location-card');
      cardElements.forEach((card) => {
        gsap.fromTo(card,
          { 
            scale: 0.8, 
            opacity: 0.5,
            filter: 'grayscale(1)'
          },
          {
            scale: 1,
            opacity: 1,
            filter: 'grayscale(0)',
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              start: "left center",
              end: "right center",
              toggleActions: "play reverse play reverse",
              containerAnimation: scrollTween
            }
          }
        );

        // Text animation
        const textElement = card.querySelector('.card-text');
        if (textElement) {
          gsap.fromTo(textElement,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: card,
                start: "left center",
                end: "right center",
                toggleActions: "play reverse play reverse",
                containerAnimation: scrollTween
              }
            }
          );
        }
      });

      cleanup = () => {
        scrollTween.kill();
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    };

    setupAnimations();
    return () => cleanup?.();
  }, [isClient]);

  const handleNext = async () => {
    if (!isClient) return;
    const cards = cardsRef.current;
    if (!cards) return;
    
    const nextIndex = Math.min(currentIndex + 1, LOCATIONS.length - 1);
    const scrollAmount = nextIndex * (260 + 24); // card width + gap
    
    const { gsap } = await initGSAP();
    gsap.to(cards, {
      x: -scrollAmount,
      duration: 0.8,
      ease: "power2.inOut"
    });
    
    setCurrentIndex(nextIndex);
  };

  const handlePrev = async () => {
    if (!isClient) return;
    const cards = cardsRef.current;
    if (!cards) return;
    
    const prevIndex = Math.max(currentIndex - 1, 0);
    const scrollAmount = prevIndex * (260 + 24); // card width + gap
    
    const { gsap } = await initGSAP();
    gsap.to(cards, {
      x: -scrollAmount,
      duration: 0.8,
      ease: "power2.inOut"
    });
    
    setCurrentIndex(prevIndex);
  };

  if (!isClient) {
    return <div className="min-h-screen bg-stone-100" />; // SSR placeholder
  }

  return (
    <>
   
    <div className="relative min-h-screen overflow-hidden bg-stone-100" ref={containerRef} id="newpart">
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
  
        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '45px 45px',
            maskImage: 'linear-gradient(-25deg, transparent 30%, white)'
          }} />

        {/* Location Title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black z-10">
          <h1 className="text-6xl font-light tracking-[0.2em] uppercase">AF Studio</h1>
        </div>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 text-black z-10">
        <h2 className="text-2xl tracking-[0.2em]">(EXPLORE)</h2>
      </div>

        {/* Cards Container */}
        <div
          ref={cardsRef}
          className="flex items-center h-screen px-[50vw] gap-4 absolute left-0"
        >
          {LOCATIONS.map((location, index) => (
            <Link
              key={location.name}
              href={location.href}
              className="location-card relative w-[260px] aspect-[3/4] flex-shrink-0 overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              prefetch={true}
            >
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="260px"
                priority={index < 2}
              />

              <div className="card-text absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent flex flex-col justify-end items-center p-6">
                <div className="text-white text-2xl font-light tracking-wider mb-8">
                  {location.name}
                </div>
              </div>

              <div className="absolute inset-0 border-[3px] border-white/10 rounded-xl pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="absolute left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === LOCATIONS.length - 1}
          className="absolute right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div></>
  );
};

export default dynamic(() => Promise.resolve(NewPart), {
  ssr: false
});
