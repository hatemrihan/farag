'use client';
import React, { useEffect, useRef } from 'react'

const Design = () => {
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  // Text strings to morph between
  const texts = [
    "DESIGN",
    "CREATE",
    "BUILD",
    "INNOVATE"
  ];

  useEffect(() => {
    if (!text1Ref.current || !text2Ref.current) return;
    
    let morphTime = 1;
    let cooldownTime = 0.25;
    
    let textIndex = 0;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    
    text1Ref.current.textContent = texts[textIndex % texts.length];
    text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    
    function doMorph() {
      morph -= cooldown;
      cooldown = 0;
      
      let fraction = morph / morphTime;
      
      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }
      
      setMorph(fraction);
    }
    
    function setMorph(fraction: number) {
      if (!text1Ref.current || !text2Ref.current) return;
      
      text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      
      fraction = 1 - fraction;
      text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    }
    
    function doCooldown() {
      if (!text1Ref.current || !text2Ref.current) return;
      
      morph = 0;
      
      text2Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "100%";
      
      text1Ref.current.style.filter = "";
      text1Ref.current.style.opacity = "0%";
    }
    
    let animationFrameId: number;
    
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      
      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;
      
      cooldown -= dt;
      
      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }
        
        doMorph();
      } else {
        doCooldown();
      }
    }
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="container max-w-screen-xl mx-auto px-6 md:px-12 pt-16 pb-4 bg-stone-100">
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
      <div className="w-full text-center mb-8">
        <h2 className="text-xl font-light mb-6 text-black">WHERE DESIGN MEET</h2>
        
        {/* Morphing text container */}
        <div className="relative h-[100px] md:h-[120px] mb-6">
          <div 
            id="container" 
            className="relative w-full h-full"
            style={{ filter: 'url(#threshold) blur(0.6px)' }}
          >
            <div 
              ref={text1Ref}
              id="text1"
              className="absolute w-full text-[3rem] md:text-[4rem] font-black leading-none tracking-tighter text-black"
            ></div>
            <div 
              ref={text2Ref}
              id="text2"
              className="absolute w-full text-[3rem] md:text-[4rem] font-black leading-none tracking-tighter text-black"
            ></div>
          </div>
          
          {/* SVG filter for the morphing effect */}
          <svg id="filters" style={{ display: 'none' }}>
            <defs>
              <filter id="threshold">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 255 -140"
                />
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* <p className="max-w-2xl mx-auto text-base md:text-lg text-black/80 leading-relaxed">
          Discover the captivating beauty of the Middle East, where ancient traditions 
          meet modern innovation. Each country offers a unique glimpse into a rich tapestry 
          of history, culture, and breathtaking landscapes.
        </p> */}
      </div>
    </div>
  )
}

export default Design