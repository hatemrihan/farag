'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import { useInView } from 'motion/react';

export default function Footer() {
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
    <footer id="contact" className="w-full bg-stone-100 text-black py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-12">
          {/* Large JW Logo */}
          <div className="text-[120px] md:text-[200px] font-light tracking-wider" ref={scope}>
           AF
          </div>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32">
            {/* Email Link */}
            <Link 
              href="mailto:abdelrahmanfaragala11@gmail.com" 
              className="group relative"
            >
              <div className="border border-black rounded-full px-8 py-3">
                EMAIL
              </div>
              <div className="absolute inset-0 border border-black rounded-full scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>

            {/* Instagram Link */}
            <Link 
              href="https://www.instagram.com/faragalo.png?igsh=czBrcm81b2NidjNu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="border border-black rounded-full px-8 py-3">
                INSTAGRAM
              </div>
              <div className="absolute inset-0 border border-black rounded-full scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-300"></div>
            </Link>
          </div>
        </div>
       
        <div className="flex flex-col space-y-2">
         
          <p className="text-stone-500 text-sm  tracking-widest mt-10">Copyright &copy; HATUM &bull; All rights reserved</p>
        </div>
     
      </div>
    </footer>
  );
} 