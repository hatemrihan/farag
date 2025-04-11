'use client';

import Image from 'next/image';
import React from 'react';
import banwaImage from '@/assets/images/banwa-image.jpg';
import banwaEtnenImage from '@/assets/images/banwaEtnen-image.jpg';
import banwaTalataImage from '@/assets/images/banwaTalata-image.jpg';
import banwaFourImage from '@/assets/images/banwaFour-image.jpg';
import banwaKhamsaImage from '@/assets/images/banwaKhamsa-image.jpg';
import banwaSixImage from '@/assets/images/banwaSix-image.jpg';
import banwaSevenImage from '@/assets/images/banwaSeven-image.jpg';
import Nav from '@/sections/Nav';
import Footer from '@/sections/Footer';

const MULAPage = () => {
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
          <p className="text-sm uppercase tracking-widest mb-4">BANWA</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-center">BNWA PHOTOSHOOT <p className='text-sm font-light'>Bnwa mansoura based rapper who started his career in 2015. The choice of“el Magzar” as a place reflects on his personality and how angry and authentic benwa is.</p></h1>
        </div>
        
        {/* Main Image - narrower with max-width */}
        <div className="w-full flex justify-center mb-8 relative z-10">
          <div className="relative w-full max-w-4xl mx-auto px-4 md:px-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={banwaImage}
                alt="MULA Campaign"
                fill
                className="object-cover"
                priority
              />
             
              <div className="absolute bottom-[20%] left-[10%] w-8 h-8 bg-blue-700 rounded-full" />
            </div>
          </div>
        </div>
        
        {/* Gallery Section - Single Column Layout */}
        <div className="w-full flex flex-col items-center relative z-10">
          
          
          {/* Second Gallery Image */}
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={banwaEtnenImage}
                alt="MULA Campaign Detail 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Additional Gallery Images */}
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={banwaTalataImage}
                alt="MULA Campaign Detail 3"
                fill
                className="object-cover"
              />
             
  
            </div>
          </div>
          
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-4">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={banwaFourImage}
                alt="MULA Campaign Detail 4"
                fill
                className="object-cover"
              />
             
              
            </div>
          </div>
          {/* Final Gallery Image */}
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={banwaKhamsaImage}
                alt="MULA Campaign Detail 6"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={banwaSixImage}
                alt="MULA Campaign Detail 6"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8 mb-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={banwaSevenImage}
                alt="MULA Campaign Detail 6"
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

export default MULAPage; 