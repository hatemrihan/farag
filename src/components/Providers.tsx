'use client';

import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { applyThemeImmediately, enforceCurrentTheme } from '@/lib/themeUtils';

// Use a simpler approach to Next.js router type
declare global {
  interface Window {
    next?: {
      router?: {
        events?: any; // Use any for simplicity to avoid TypeScript errors
      };
    };
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Handle initial client-side render and prevent hydration mismatch
  useEffect(() => {
    // Set mounted state to true once client-side JS is running
    setMounted(true);
    
    // Apply initial theme based on localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Apply theme immediately without animation on initial load
    applyThemeImmediately(isDarkMode);
    
    // For pages with dynamically loaded content, enforce theme after a delay
    const handleRouteChange = () => {
      setTimeout(() => {
        enforceCurrentTheme();
      }, 100);
    };
    
    // Listen for route changes using popstate event (works in all browsers)
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handleRouteChange);
      
      // Try to add Next.js router event listener safely
      try {
        const nextRouter = window.next?.router?.events;
        if (nextRouter && typeof nextRouter.on === 'function') {
          nextRouter.on('routeChangeComplete', handleRouteChange);
        }
      } catch (e) {
        console.log('Next.js router events not available', e);
      }
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handleRouteChange);
        
        // Try to remove Next.js router event listener safely
        try {
          const nextRouter = window.next?.router?.events;
          if (nextRouter && typeof nextRouter.off === 'function') {
            nextRouter.off('routeChangeComplete', handleRouteChange);
          }
        } catch (e) {
          console.log('Next.js router events not available', e);
        }
      }
    };
  }, []);

  // If not mounted yet, render with visually hidden content to prevent hydration errors
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false}
      storageKey="theme"
      // Force rerendering when theme changes
      disableTransitionOnChange={false}
    >
      <div className="min-h-screen transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
} 