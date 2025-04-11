"use client";
import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import { useTheme } from 'next-themes';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const router = useRouter();
    const pathname = usePathname();
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    // Handle client-side mounting
    useEffect(() => {
      setMounted(true);
    }, []);

    // Navigation animation
    useEffect(() => {
      if (!mounted) return;
      
      const nav = navRef.current;
      if (!nav) return;

      ScrollTrigger.create({
        start: 'top+=20 top',
        onEnter: () => {
          gsap.to(nav, {
            y: 0,
            opacity: 1,
            duration: 0.5
          });
        },
        onLeaveBack: () => {
          gsap.to(nav, {
            y: -100,
            opacity: 0,
            duration: 0.5
          });
        }
      });
    }, [mounted]);

    const handleNavigation = (section: string) => {
      setIsMenuOpen(false);
      switch(section) {
        case 'intro':
          router.push('/');
          break;
        case 'collection':
          // If we're already on the home page, scroll to NewPart
          if (pathname === '/') {
            const newPartSection = document.getElementById('newpart');
            if (newPartSection) {
              newPartSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          } else {
            // If on another page, go to home and then scroll
            router.push('/?scrollTo=newpart');
          }
          break;
        case 'myself':
          router.push('/about');
          break;
        default:
          const element = document.getElementById(section);
          element?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Update the mount effect to handle scroll after navigation
    useEffect(() => {
      if (!mounted) return;
      
      const searchParams = new URLSearchParams(window.location.search);
      const scrollTo = searchParams.get('scrollTo');
      
      if (scrollTo === 'newpart') {
        setTimeout(() => {
          const newPartSection = document.getElementById('newpart');
          if (newPartSection) {
            newPartSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
            // Clean up the URL
            window.history.replaceState({}, '', '/');
          }
        }, 100); // Small delay to ensure content is loaded
      }
    }, [pathname, mounted]);

    if (!mounted) return null;
    
    return (
      <div className="relative overflow-hidden">
        {/* Navigation */}
        <nav ref={navRef} className="fixed top-0 left-0 w-full z-40 p-4">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-bold tracking-widest dark:text-white text-black transition-colors duration-300">
              AF
            </Link>
            <div className="flex items-center gap-6">
              {/* <ThemeToggle /> */}
              <div className="space-y-2 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div className={`w-8 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-colors duration-300`}></div>
                <div className={`w-8 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-colors duration-300`}></div>
              </div>
            </div>
          </div>
        </nav>

        {/* Full Screen Menu */}
        <div 
          className={`fixed inset-0 bg-stone-100 dark:bg-stone-900 z-30 transition-all duration-500 ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          ref={menuRef}
        >
          <div className="h-full flex flex-col justify-center items-start p-16">
            {[
              { label: 'INTRO', section: 'intro' },
              { label: 'COLLECTION', section: 'collection' },
              { label: 'MYSELF', section: 'myself' },
              { label: 'CONTACT', section: 'contact' }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.section)}
                className="text-4xl font-light mb-8 text-black dark:text-white hover:ml-4 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div> 
    );
};

export default Nav;