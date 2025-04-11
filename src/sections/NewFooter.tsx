'use client';

import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const NewFooter = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  return (
    <footer className="bg-stone-100 text-black w-full py-6 md:py-10 px-5 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Top section with contact text */}
        <div className="w-full mb-16 md:mb-24 lg:mb-36">
          <h1 className="text-center text-[18vw] sm:text-[20vw] font-bold tracking-tighter leading-[0.85] uppercase">
            CONTACT
          </h1>
        </div>
        
        {/* Bottom section with info and links */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left side - Copyright and address */}
          <div className="mb-8 md:mb-0 text-sm md:text-base font-light">
            <p className="mb-1">Abdelrahman</p>
            <p>AF STUDIO</p>
            <p>MANSOURA, EGYPT</p>
          </div>
          
          {/* Right side - Navigation links */}
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-1">
              <Link href="/about" className="text-sm md:text-base font-light hover:opacity-80 transition-opacity">About</Link>
              <Link href="https://www.instagram.com/faragalo.png?igsh=czBrcm81b2NidjNu" className="text-sm md:text-base font-light hover:opacity-80 transition-opacity">Instagram</Link>
              <Link href="https://www.facebook.com/share/18boy5JwZ3/?mibextid=wwXIfr" className="text-sm md:text-base font-light hover:opacity-80 transition-opacity">FaceBook</Link>
            </div>
            <div className="flex flex-col gap-1">
              <Link href="/" className="text-sm md:text-base font-light hover:opacity-80 transition-opacity">Graphic Design</Link>
              <Link href="/" className="text-sm md:text-base font-light hover:opacity-80 transition-opacity">Photography</Link>
              <Link href="/" className="text-sm md:text-base font-light hover:opacity-80 transition-opacity">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;