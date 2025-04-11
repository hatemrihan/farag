'use client';

import Image from 'next/image';
import React from 'react';
import mazenImage from '@/assets/images/mazen-image.jpg';
import mazenTwoImage from '@/assets/images/mazenTwo-image.jpg';
import mazenThreeImage from '@/assets/images/mazenThree-image.jpg';
import mazenFourImage from '@/assets/images/mazenFour-image.jpg';
import Nav from '@/sections/Nav';
import Footer from '@/sections/Footer';

const MULAPage = () => {
  return (
    <main className="min-h-screen bg-neutral-100 text-black relative overflow-hidden">
      <Nav />
      
      {/* Main heading */}
      <div className="w-full text-center pt-16 pb-6">
        <h1 className="text-5xl md:text-6xl font-bold">MEET MAZEN</h1>
      </div>
      
      {/* Main content with overlapping images */}
      <div className="relative w-full h-[85vh] md:h-[90vh] lg:h-[95vh]">
        {/* Background large image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={mazenImage}
            alt="MULA in action"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Main header text positioned center */}
        <div className="absolute top-1/4 left-1/4 z-20">
          <h1 className="text-6xl md:text-8xl font-bold">
            MULA
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold">
            BW MOODY
          </h1>
        </div>
        
        {/* Bottom left image */}
        <div className="absolute bottom-0 left-0 w-[30%] h-[30vh] md:h-[35vh] z-20">
          <Image
            src={mazenTwoImage}
            alt="MULA perspective"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 text-[10px]">001</div>
        </div>
        
        {/* Bottom middle image */}
        <div className="absolute bottom-0 left-[30%] w-[40%] h-[35vh] md:h-[40vh] z-10">
          <div className="absolute -top-14 left-0 text-xs space-y-1">
            <p>MULA features an array of moody black and white presets,</p>
            <p>filters, and tools to help you create grayscale and vintage</p>
            <p>photos. This collection gives photographers creative</p>
            <p>looks in black & white that feel classic and cinematic.</p>
          </div>
          <Image
            src={mazenThreeImage}
            alt="MULA classic"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Bottom right image */}
        <div className="absolute bottom-0 right-0 w-[30%] h-[30vh] md:h-[35vh] z-20">
          <Image
            src={mazenFourImage}
            alt="MULA details"
            fill
            className="object-cover"
          />
          <div className="absolute top-2 left-2 text-[10px]">
            <div>MULA FILTER SERIES</div>
            <div>M4 • 13 — B & W</div>
          </div>
          <div className="absolute bottom-2 right-2 text-[10px]">
            <div>MULA COLLECTION</div>
            <div>2023</div>
          </div>
        </div>
      </div>
      
      {/* Second row of images - added as requested */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        {/* Left image */}
        <div className="absolute left-0 w-[33.33%] h-full z-10">
          <Image
            src={mazenTwoImage}
            alt="MULA additional 1"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 text-[10px]">002</div>
        </div>
        
        {/* Middle image */}
        <div className="absolute left-[33.33%] w-[33.33%] h-full z-10">
          <Image
            src={mazenThreeImage}
            alt="MULA additional 2"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 text-[10px]">003</div>
        </div>
        
        {/* Right image */}
        <div className="absolute right-0 w-[33.33%] h-full z-10">
          <Image
            src={mazenFourImage}
            alt="MULA additional 3"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 text-[10px]">004</div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default MULAPage; 