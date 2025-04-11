'use client';

import React, { useEffect, useRef, useState, useId } from 'react';
import { useTheme } from 'next-themes';
import gsap from 'gsap';
import { animateThemeTransition, enforceCurrentTheme } from '@/lib/themeUtils';

const ThemeToggle = () => {
  const maskId = useId(); // Generate unique ID for mask
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const btnRef = useRef(null);
  const moonRef = useRef(null);
  const sunRef = useRef(null);
  const maskerRef = useRef(null);
  const isDark = theme === 'dark';

  // Initialize toggle state once component mounts
  useEffect(() => {
    setMounted(true);
    
    // Initialize SVG element positions once we have refs available
    if (btnRef.current && moonRef.current && sunRef.current && maskerRef.current) {
      gsap.set(btnRef.current, {attr: {stroke: isDark ? '#fff' : '#000'}});
      gsap.set(maskerRef.current, {attr: {r: isDark ? 9 : 0}});
      gsap.set(sunRef.current, {
        scale: isDark ? 1 : 2.5,
        transformOrigin: '50% 50%',
        attr: {'stroke-width': isDark ? 1 : 0.25}
      });
      gsap.set(moonRef.current, {
        scale: isDark ? 0 : 1,
        transformOrigin: '66% 66%'
      });
    }
    
    // Enforce theme across all sections 
    enforceCurrentTheme();
  }, [isDark]);

  // Toggle theme when button is clicked
  const toggleTheme = () => {
    if (!mounted) return;
    
    const newTheme = isDark ? 'light' : 'dark';
    
    // Handle theme switching animations
    if (isDark) {
      // Switching to light theme
      gsap.timeline({defaults: {duration: 0.5, ease: 'expo', overwrite: 'auto'}})
        .to(btnRef.current, {attr: {stroke: '#000'}}, 0)
        .to(maskerRef.current, {attr: {r: 0}}, 0)
        .to(sunRef.current, {scale: 2.5, attr: {'stroke-width': 0.25}}, 0)
        .fromTo(moonRef.current, {scale: 0}, {scale: 1}, 0);
    } else {
      // Switching to dark theme
      gsap.timeline({defaults: {duration: 0.5, ease: 'expo', overwrite: 'auto'}})
        .to(btnRef.current, {attr: {stroke: '#fff'}}, 0)
        .to(maskerRef.current, {attr: {r: 9}, ease: 'power2.inOut'}, 0)
        .to(sunRef.current, {scale: 1, attr: {'stroke-width': 1}, duration: 0.4, ease: 'back.inOut(1.5)'}, 0)
        .to(moonRef.current, {scale: 0, duration: 0.01}, 0);
    }
    
    // Use our utility function to animate the theme transition
    animateThemeTransition(!isDark);
    
    // Update next-themes state
    setTheme(newTheme);
    
    // Force the theme across all sections after a short delay
    setTimeout(() => {
      enforceCurrentTheme();
    }, 100);
  };

  if (!mounted) return null;

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <svg 
        ref={btnRef}
        className="btn" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 15 15" 
        width="28" 
        height="28" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
        stroke={isDark ? '#fff' : '#000'}
      >
        <defs>
          <mask id={`theme-toggle-mask-${maskId}`}>
            <circle 
              ref={maskerRef}
              className="masker" 
              cx="7.5" 
              cy="7.5" 
              r={isDark ? 9 : 0} 
              fill="#fff" 
            />
          </mask>
        </defs>
        <g mask={`url(#theme-toggle-mask-${maskId})`}>
          <path 
            ref={sunRef}
            className="sun" 
            d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998z" 
          />  
        </g>
        <path 
          ref={moonRef}
          className="moon" 
          d="M1.66 11.362A6.5 6.5 0 007.693.502a7 7 0 11-6.031 10.86z" 
        />
      </svg>
    </div>
  );
};

export default ThemeToggle; 