import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import { useInView } from 'motion/react';
import React, { useEffect, useState } from 'react';

const ShowcasyWebsite: React.FC = () => {
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
  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      url: 'https://www.instagram.com/hatemrihann?igsh=MXJycXFwa2dzZWVh' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
      url: 'https://www.facebook.com/share/18mTA7VzAU/?mibextid=wwXIfr' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      url: 'mailto:hatemrihan100@gmail.com' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/hatem-rihan-298753309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      url: 'https://github.com/hatemrihan' 
    }
  ];

  const handleClick = (action: 'home') => {
    switch (action) {
      case 'home':
        window.location.reload();
        break;
    }
  };

  return (
    <div className="bg-stone-900 text-white min-h-screen flex flex-col overflow-hidden sm:overflow-x-hidden" id="NewFooter">
      <main className="flex-grow px-4 sm:px-8 pt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8" ref={scope}>Get In Touch.</h1>
          <div className="space-y-8">
            <div className="flex items-center cursor-pointer group" onClick={() => handleClick('home')}>
              <span className="text-3xl group-hover:text-gray-500 transition-colors duration-300">Home</span>
            </div>
            <a href={socialLinks[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer group">
              <span className="text-3xl group-hover:text-gray-500 transition-colors duration-300">Instagram</span>
            </a>
            <a href={socialLinks[1].url} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer group">
              <span className="text-3xl group-hover:text-gray-500 transition-colors duration-300">Facebook</span>
            </a>
            <a href={socialLinks[2].url} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer group">
              <span className="text-3xl group-hover:text-gray-500 transition-colors duration-300">Gmail</span>
            </a>
            <a href={socialLinks[3].url} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer group">
              <span className="text-3xl group-hover:text-gray-500 transition-colors duration-300">LinkedIn</span>
            </a>
            <a href={socialLinks[4].url} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer group">
              <span className="text-3xl group-hover:text-gray-500 transition-colors duration-300">GitHub</span>
            </a>
          </div>
        </div>
      </main>

      <footer className="flex justify-start text-stone-400 text-xs p-4 sm:p-8 border-t border-black/10 space-y-4">
        <div className="flex flex-col space-y-2">
          <span className="text-lg font-medium"ref={scope}>I know you will like me</span>
          <p className="text-stone-400 text-sm">Copyright &copy; HATUM &bull; All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default ShowcasyWebsite;