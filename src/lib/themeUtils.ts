'use client';

import gsap from 'gsap';

/**
 * Applies the theme to the entire document immediately
 * @param isDark Whether to apply dark mode
 */
export function applyThemeImmediately(isDark: boolean) {
  // Update HTML classes
  if (isDark) {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
  }
  
  // Update body background
  document.body.style.backgroundColor = isDark ? '#000' : '#eee';
  document.body.style.color = isDark ? '#fff' : '#000';
  
  // Store preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

/**
 * Animates theme transition
 * @param isDark Whether to transition to dark mode
 */
export function animateThemeTransition(isDark: boolean) {
  // Update HTML classes first
  applyThemeImmediately(isDark);
  
  // Animate the transition
  gsap.to('body', {
    backgroundColor: isDark ? '#000' : '#eee',
    color: isDark ? '#fff' : '#000',
    duration: 0.5,
    ease: 'power2.inOut'
  });
  
  // Force all dark: prefixed tailwind classes to transition
  const allThemeElements = document.querySelectorAll('[class*="dark:"]');
  allThemeElements.forEach(el => {
    if (el instanceof HTMLElement) {
      el.style.transition = 'all 0.5s ease';
    }
  });
}

/**
 * Enforces current theme across all sections
 * Especially useful for dynamic content or after route changes
 */
export function enforceCurrentTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  
  // Force all sections to respect the current theme
  document.querySelectorAll('section, div, main').forEach(section => {
    if (section instanceof HTMLElement) {
      // Add a transition to smooth any changes
      section.style.transition = 'background-color 0.5s ease, color 0.5s ease';
      
      // Custom fix: find specific background elements
      if (section.classList.contains('bg-black') || 
          section.classList.contains('bg-white') ||
          section.classList.contains('bg-gray-900') || 
          section.classList.contains('bg-stone-900')) {
            
        if (isDark) {
          section.classList.remove('bg-white', 'bg-gray-100');
          section.classList.add('bg-stone-900');
        } else {
          section.classList.remove('bg-black', 'bg-gray-900', 'bg-stone-900');
          section.classList.add('bg-white');
        }
      }
    }
  });
  
  // Force all text elements to respect current theme
  document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button').forEach(el => {
    if (el instanceof HTMLElement) {
      // Add a transition to smooth any changes
      el.style.transition = 'color 0.5s ease';
      
      // Apply appropriate text color based on theme
      if (el.classList.contains('text-white') || el.classList.contains('text-black')) {
        if (isDark) {
          el.classList.remove('text-black');
          el.classList.add('text-white');
        } else {
          el.classList.remove('text-white');
          el.classList.add('text-black');
        }
      }
    }
  });
} 