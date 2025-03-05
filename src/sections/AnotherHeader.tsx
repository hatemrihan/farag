"use client";

import { FC, useEffect, useState, MouseEvent } from "react";
import {motion, useAnimate} from "motion/react";
import { useInView } from 'framer-motion'
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation'

const navItems = [
  {
    label: "About",
    href: "#AnotherFAQs",
  },
  {
    label: "Selected Works",
    href: "#AnotherPortofolioPage",
  },
  {
    label: "Past",
    href: "#NewPart",
  },
  {
    label: "Get in touch",
    href: "#NewFooter",
  },
];

const AnotherHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navScope, navAnimate] = useAnimate();
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      entranceAnimation();
    }
  }, [isInView, entranceAnimation]);

  useEffect(() => {
    if (isOpen) {
      navAnimate(navScope.current, {
        height: "100vh"
      },
      {
        duration: 0.7,
      });
    } else {
      navAnimate(navScope.current, {
        height: 0
      });
    }
  }, [isOpen, navScope, navAnimate]);

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({behavior:'smooth'});
  }
 
  return (
    <header className="relative">
      <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-10" ref={navScope}>
        <nav className=" mt-20 flex flex-col w-full">
          {navItems.map(({label, href}) => (
            <a 
              href={href} 
              key={label} 
              className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-items relative isolate bg-stone-900 w-full" 
              onClick={handleClickMobileNavItem}
            >
              <div className="container mx-auto px-4 flex items-center justify-between bg-stone-900">
                <div className="absolute w-full h-0 bg-stone-900 group-hover/nav-items:h-full transition-all duration-500 bottom-0 -z-10"></div>
                <span className="text-3xl group-hover/nav-items:pl-4 transition-all duration-500">{label}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </a>
          ))}
        </nav>
      </div>

      <div className="fixed  top-0 left-0 w-full z-10 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div>
              <a href="/">
                <span className="cursor-pointer text-lg font-bold uppercase text-white hover:text-stone-100 transition-all duration-500">HATEM</span>
              </a>
            </div>
            <div className="flex items-center">
              <div 
                className="size-11 inline-flex items-center justify-center cursor-pointer" 
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="text-lg font-medium text-white">MENU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AnotherHeader;