'use client';

import Image from 'next/image';
import React from 'react';
import dojoImage from '@/assets/images/dojo-image.jpg';
import dojotwoImage from '@/assets/images/dojotwo-image.jpg';
import dojothreeImage from '@/assets/images/dojothree-image.jpg';
import dojoFourImage from '@/assets/images/dojofour-image.jpg';
import dojoFiveImage from '@/assets/images/dojofive-image.jpg';
import dojoSixImage from '@/assets/images/dojosix-image.jpg';
import dojoSevenImage from '@/assets/images/dojoseven-image.jpg';
import dojooooImage from '@/assets/images/dojoooo-image.jpg';
import dojoooooImage from '@/assets/images/dojooooo-image.jpg';
import dojooooooImage from '@/assets/images/dojoooooo-image.jpg';
import dojoooooooImage from '@/assets/images/dojooooooo-image.jpg';
import dojooImage from '@/assets/images/dojoo-image.jpg';
import sharkImage from '@/assets/images/shark-image.jpg'



import Nav from '@/sections/Nav';
import Footer from '@/sections/Footer';

const DOJOPage = () => {
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
          <p className="text-sm uppercase tracking-widest mb-4">DOJO</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center">MEET DOJO PHTOSHOOT</h1>
        </div>
        
        {/* Main Image - narrower with max-width */}
        <div className="w-full flex justify-center mb-8 relative z-10">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojoImage}
                alt="MULA Campaign Detail 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojotwoImage}
                alt="MULA Campaign Detail 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Gallery Section - Single Column Layout */}
        <div className="w-full flex flex-col items-center relative z-10">
          {/* First Gallery Image */}
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojothreeImage}
                alt="MULA Campaign Detail 1"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Second Gallery Image */}
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojoFourImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojoFiveImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojoSixImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojoSevenImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojooImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojooooImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={sharkImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojoooooImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojooooooImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={dojoooooooImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
         
          
       
          
        </div>
      </div>
      
      {/* Footer spacer */}
      <div className="py-8"></div>
      
      <Footer />
    </main>
  );
};

export default DOJOPage; 