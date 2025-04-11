'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import gsap from 'gsap';

/**
 * A custom hook that monitors theme changes and applies animations to the specified element
 * @param ref React ref to the element to animate
 * @param darkStyles Styles to apply in dark mode
 * @param lightStyles Styles to apply in light mode
 */
export default function useThemeEffect(
  ref: React.RefObject<HTMLElement>,
  darkStyles: gsap.TweenVars = {},
  lightStyles: gsap.TweenVars = {}
) {
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    if (!ref.current) return;
    
    const element = ref.current;
    const isDark = resolvedTheme === 'dark';
    
    // Apply styles based on current theme
    gsap.to(element, {
      ...(isDark ? darkStyles : lightStyles),
      duration: 0.5,
      ease: 'power2.inOut'
    });
  }, [resolvedTheme, ref, darkStyles, lightStyles]);
}

/**
 * A hook that applies theme transitions to background elements 
 * @param ref Reference to the element
 */
export function useThemeBackground(ref: React.RefObject<HTMLElement>) {
  return useThemeEffect(
    ref,
    { backgroundColor: '#000', color: '#fff' },
    { backgroundColor: '#eee', color: '#000' }
  );
}

/**
 * A hook that applies theme transitions to text elements
 * @param ref Reference to the element
 */
export function useThemeText(ref: React.RefObject<HTMLElement>) {
  return useThemeEffect(
    ref,
    { color: '#fff' },
    { color: '#000' }
  );
}

/**
 * A hook that applies theme transitions to borders
 * @param ref Reference to the element
 */
export function useThemeBorder(ref: React.RefObject<HTMLElement>) {
  return useThemeEffect(
    ref,
    { borderColor: '#333' },
    { borderColor: '#ddd' }
  );
} 