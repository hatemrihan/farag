"use client";
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import { useInView } from 'motion/react';
import React, { useEffect, useState } from 'react'

const AnotherHero = () => {
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
    <div className="flex-grow flex flex-col justify-center px-8 lg:px-16" id="AnotherHero">
    <h1 className="text-[20vw] mt-16 text-center font-black leading-none tracking-tighter uppercase mb-1">
     Hatum
    </h1>

    {/* Subtitle and Description */}
    <div className="max-w-2xl mt-8">
      <p className="text-sm mb-4">2024 — 25 • Selected Works</p>
      <p className="text-2xl" ref={scope}>
        Hatem Rihan (Hatum) is a creative thinker based in Cairo and Riyadh who works worldwide with Software development and digital design.
      </p>
  


      {/* Book a Call Button */}
      <a href="https://calendly.com/hatemrihan100/30min">
      <button className="mt-6 bg-black text-white px-6 py-3 rounded-full flex items-center hover:bg-red-900 transition-colors">
        Book a call
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="ml-2"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </button>
      </a>
       <div className=" w-full border-t border-gray-700 my-8"></div>
    </div>
  </div>

  )
}

export default AnotherHero