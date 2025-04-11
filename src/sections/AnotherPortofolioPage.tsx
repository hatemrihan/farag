'use client';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import { useInView } from 'motion/react';
import React, { useEffect, useState } from 'react'

const AnotherPortofolioPage = () => {
  const {scope, entranceAnimation} =useTextRevealAnimation();
  useEffect(()=>{
entranceAnimation();
  },[entranceAnimation]);
  const handleClickMobileNavItem= (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({behavior:'smooth'});
  }
  const [isOpen, setIsOpen] = useState(false);
  const inView = useInView(scope);
  useEffect(()=>{
    if (inView){
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f1f1] text-black relative overflow-hidden">
      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-6 sm:py-8 md:py-16 relative z-10">
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
        {/* Main Content */}
        <div className="relative">
          {/* INCREASING Text */}
          <div className="mb-5 sm:mb-6 md:mb-8">
            <h1 className="text-[50px] sm:text-[90px] md:text-[120px] lg:text-[140px] xl:text-[160px] font-thin tracking-wide leading-[0.95] text-center" ref={scope}>
              INCREASING
            </h1>
          </div>

          {/* Subtitle and CTA Section - Space reduced between text and subtitle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-28 md:mb-40 lg:mb-56 mt-24">
            <div className="mb-8 md:mb-0">
              <h2 className="text-lg sm:text-xl md:text-2xl font-thin leading-relaxed tracking-wide">
                PHOTOGRAPHY
                <br />
                <span className="inline-flex items-center">
                  VALUE <span className="mx-2">&</span>
                </span>
                <br />
                REDEFINING BRAND SUCCESS
              </h2>
            </div>
            <div className="self-end md:self-auto">
              <button 
                onClick={scrollToContact}
                className="flex items-center group cursor-pointer"
              >
                <span className="text-sm sm:text-base font-normal border-b border-black pb-0.5 group-hover:opacity-80 transition-opacity">
                  LET'S DISCUSS ↓
                </span>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="space-y-12 md:space-y-16 lg:space-y-24">
            {/* First Row */}
            <div className="flex justify-between items-start border-t border-gray-300 pt-12">
              <div className="flex gap-4 md:gap-8 items-start">
                <span className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-light text-[#E1341E] leading-none" ref={scope}>05</span>
                <div className="mt-2 md:mt-4">
                  <p className="text-xs sm:text-sm uppercase">YEARS OF</p>
                  <p className="text-xs sm:text-sm uppercase">PHOTOGRAPHY</p>
                  <p className="text-xs sm:text-sm uppercase">& BUSINESS</p>
                  <p className="text-xs sm:text-sm uppercase">EXPERIENCE</p>
                </div>
              </div>
              <div className="hidden md:block text-xl lg:text-3xl font-light text-right" ref={scope}>
                YOUR SUCCESS IS
                <br /> 
                MY SUCCESS
              </div>
            </div>

            {/* Second Row */}
            <div className="flex items-start border-t border-gray-300 pt-12">
              <span className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-light text-[#E1341E] leading-none" ref={scope}>38</span>
              <div className="mt-2 md:mt-4 ml-4 md:ml-8">
                <p className="text-xs sm:text-sm uppercase">BRANDS</p>
                <p className="text-xs sm:text-sm uppercase">ARTISTS</p>
                <p className="text-xs sm:text-sm uppercase">AND</p>
                <p className="text-xs sm:text-sm uppercase">PROFESSIONALS</p>
              </div>
            </div>

            {/* Third Row */}
            <div className="flex justify-end border-t border-gray-300 pt-12">
              <div className="flex items-start">
                <span className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-light text-[#E1341E] leading-none" ref={scope}>73</span>
                <div className="mt-2 md:mt-4 ml-4 md:ml-8">
                  <p className="text-xs sm:text-sm uppercase">CLIENTS IN 9</p>
                  <p className="text-xs sm:text-sm uppercase">CITIES AND</p>
                  <p className="text-xs sm:text-sm uppercase">8 INDUSTRIES</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AnotherPortofolioPage