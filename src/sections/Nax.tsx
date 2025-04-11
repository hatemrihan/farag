'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import teamImage from '@/assets/images/team-image.JPG'

const MoviePage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-6xl mx-auto bg-stone-500">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <Link href="/" className="uppercase text-xs tracking-widest font-medium">
              Movie
            </Link>
            <span className="text-gray-300">|</span>
            <span className="text-xs text-gray-400">Reviews</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/filter" className="uppercase text-xs tracking-widest font-medium">
              Filter
            </Link>
            <button 
              aria-label="Menu" 
              className="text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Hamburger menu icon (3 span lines) */}
              <div className="flex flex-col space-y-1">
                <span className="block w-5 h-0.5 bg-gray-800"></span>
                <span className="block w-5 h-0.5 bg-gray-800"></span>
                <span className="block w-5 h-0.5 bg-gray-800"></span>
              </div>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black z-50 p-6">
            <div className="flex justify-end mb-8">
              <button 
                onClick={() => setMenuOpen(false)}
                className="text-gray-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="space-y-6 text-xl">
              <li><Link href="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link href="/movies" className="block" onClick={() => setMenuOpen(false)}>Movies</Link></li>
              <li><Link href="/reviews" className="block" onClick={() => setMenuOpen(false)}>Reviews</Link></li>
              <li><Link href="/about" className="block" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link href="/contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          {/* Left Column - Text Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl tracking-widest font-light uppercase mb-4">Spectre</h1>
            <div className="text-xs text-gray-500 tracking-wider uppercase mb-6">
              007 | James Bond
            </div>
            
            <p className="text-sm text-gray-700 mb-8 max-w-md">
              In SPECTRE, a cryptic message from Bond's past 
              sends him on a trail to uncover a sinister organization. 
              While M battles political forces to keep the secret service alive, 
              Bond peels back the layers of deceit to reveal the terrible truth behind 
              SPECTRE.
            </p>
            
            <div>
              <button className="border border-gray-400 px-6 py-2 text-xs uppercase tracking-widest flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Trailer
              </button>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative">
            {/* Replace with your own image */}
            <Image
              src={teamImage}
              alt="James Bond from Spectre"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              priority
            />
            
            {/* Pagination Dots */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
            
            {/* Next Button */}
            <div className="absolute right-0 bottom-0 bg-black text-white p-4">
              <Link href="/next-movie" className="uppercase text-xs tracking-widest">
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;