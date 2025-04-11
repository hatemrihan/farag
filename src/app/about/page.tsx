'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import faragImage from '@/assets/images/farag-image.jpg';
import Nav from '@/sections/Nav';
import Footer from '@/sections/Footer';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import { useInView } from 'framer-motion';
import NewFooter from '@/sections/NewFooter';
import Images from '@/sections/Images';
import ImagesMarquee from '@/sections/ImagesMarquee';

const MULAPage = () => {
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
  return (
    <main className="min-h-screen bg-stone-100 text-black relative">
      <Nav />
      
      {/* Content container with vertical lines that don't extend to footer */}
      <div className="relative">
        {/* Vertical solid lines - contained within a specific height */}
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
        
        {/* Campaign Header Section */}
        <div className="w-full flex flex-col items-center justify-center pt-20 pb-10 px-4 relative z-10">
          <p className="text-sm uppercase tracking-widest mb-4" ref={scope}>AF</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-center" ref={scope}>ABDELRAHMAN FARAGALLA <p className='font-light'>graphic designer and photographer with a passion for visual storytelling. I create impactful designs—from branding to digital graphics—while capturing moments that evoke emotion through my photography.</p></h1>
        </div>
        
        {/* Main Image - narrower with max-width */}
        <div className="w-full flex justify-center mb-8 relative z-10">
          <div className="relative w-full max-w-4xl mx-auto px-4 md:px-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={faragImage}
                alt="MULA Campaign"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center pt-20 pb-10 px-4 relative z-10">
          <p className="text-sm uppercase tracking-widest mb-4" ref={scope}>AF</p>
          <h1 className="text-xl md:text-2xl lg:text-4xl font-normal text-center"><p className='font-light'>Abdelrahman Wells has spent the past two decades reshaping the visual identities of world-renowned contemporary and luxury brands. he brings his signature energy, emotion and dynamic instincts to every brand-building project with authentic results.
From brand positioning to art direction to strategic insight and implementation, Abdelrahman’ clarity of vision is compelling. he galvanises stakeholders, taking creatives and the C-suite on a journey with him as he builds brand equity for both creative and commercial SUCCESS.</p></h1>
        </div>
        
        
        {/* Gallery Section - Single Column Layout */}
        <div className="w-full flex flex-col items-center relative z-10">
        </div>
      </div>
      
      {/* Footer spacer */}
      <div className="py-8"></div>
      <div className="py-8"></div>
      <Images/>
      <NewFooter />
    </main>
  );
};

export default MULAPage; 