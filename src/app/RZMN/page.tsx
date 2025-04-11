'use client';

import Image from 'next/image';
import React from 'react';
import Nav from '@/sections/Nav';
import redGuyImage from '@/assets/images/redguy-image.jpg';
import redGuyTwoImage from '@/assets/images/redguyTwo-image.jpg';
import redGuyThreeImage from '@/assets/images/redguyThird-image.jpg';
import redGuyFourImage from '@/assets/images/redguyFour-image.jpg';
import Footer from '@/sections/Footer';

const RZMNPage = () => {
  return (
    <>
      <Nav />
      
      {/* First Magazine Layout */}
      <section className="py-16 bg-stone-100 overflow-hidden">
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Left Column - The Last Magazine */}
            <div className="col-span-12 md:col-span-4 flex flex-col">
              <h2 className="text-4xl md:text-6xl lg:text-7xl   leading-none mb-4">
                MEET<br />RZMN
              </h2>
              <div className="relative aspect-square w-full h-auto overflow-hidden">
                <Image 
                  src={redGuyImage}
                  alt="The Last Magazine"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 transform -rotate-90 origin-bottom-left p-2">
                  <span className="text-xs font-light text-black/70">001 / EDITORIAL, 2018</span>
                </div>
              </div>
            </div>

            {/* Middle Column - L'Officiel Hommes */}
            <div className="col-span-12 md:col-span-4 flex flex-col mt-8 md:mt-0">
              <h2 className="text-4xl md:text-6xl lg:text-7xl  leading-none mb-4 md:text-center">
                L'Officiel<br />RZZZZZMNNNN<span className="text-3xl">+</span>
              </h2>
              <div className="relative aspect-[3/4] w-full h-auto overflow-hidden bg-[#FF6B35]">
                <Image 
                  src={redGuyTwoImage}
                  alt="L'Officiel Hommes"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 transform rotate-90 origin-top-right p-2">
                  <span className="text-xs font-light text-black/70">002 / L'PORTRAIT, 2024</span>
                </div>
              </div>
            </div>

            {/* Right Column - Anton Evstifeev */}
            <div className="col-span-12 md:col-span-4 flex flex-col mt-8 md:mt-0 md:text-right">
              <h2 className="text-4xl md:text-6xl lg:text-7xl  leading-none mb-4">
                THE<br />R
              </h2>
              <div className="relative aspect-square w-full h-auto overflow-hidden">
                <Image 
                  src={redGuyThreeImage}
                  alt="Anton Evstifeev"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-0 transform rotate-90 origin-bottom-right p-2">
                  <span className="text-xs font-light text-black/70">003 / NOVEMBER, 2018</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Magazine Layout */}
      <section className="py-16 bg-stone-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Left column with numbered magazine list */}
            <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <div className="space-y-8 md:space-y-10 pt-6 md:pt-16">
                {[
                  { id: '001', name: "RZMN", highlight: false },
                  { id: '002', name: "RZMN", highlight: false },
                  { id: '003', name: "RZMN", highlight: false },
                  { id: '004', name: "RZMN", highlight: true },
                  { id: '005', name: "RZMN", highlight: false }
                ].map((magazine) => (
                  <div key={magazine.id} className="flex items-center">
                    <span className="text-sm font-light text-black/60 w-12">{magazine.id} /</span>
                    <h3 className={`text-4xl md:text-5xl lg:text-6xl  ${magazine.highlight ? 'text-orange-500' : 'text-black'} leading-none`}>
                      {magazine.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column with profile image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={redGuyFourImage}
                  alt="Model profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default RZMNPage; 