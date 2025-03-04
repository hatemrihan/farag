import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import bfImage from '../assets/images/bf-image.jpg';
import elanoImage from '../assets/images/elano-image.jpg';
import boundImage from '../assets/images/bound-image.jpg';
import project2Image from '../assets/images/project-2.jpg';
import project5Image from '../assets/images/project-5.jpg';

interface CarouselImage {
  id: number;
  src: any;  // Using any for imported images
  alt: string;
}

const HomeImageCarousel: React.FC = () => {
  const images: CarouselImage[] = [
    { id: 1, src: bfImage, alt: "" },
    { id: 2, src: elanoImage, alt: "" },
    { id: 3, src: boundImage, alt: "" },
    { id: 4, src: project2Image, alt: "" },
    { id: 5, src: project5Image, alt: "" }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Automatically rotate through images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 500); // Match this to your CSS transition time
    }, 1000); // Changed from 5000 to 2000 (2 seconds)

    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const goToImage = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  // Handle next/prev navigation
  const navigateImage = (direction: 'next' | 'prev') => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      }
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="w-full bg-stone-900 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center py-8">Sponsers and more</h1>

      {/* Main carousel section */}
      <div className="relative h-[70vh] overflow-hidden rounded-2xl mx-4">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            } ${isTransitioning ? 'blur-sm' : ''}`}
          >
            <div className="relative w-full h-full">
              <Image 
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover brightness-80"
                priority={index === 0}
              />
            </div>
            
            {/* Image overlay text - centered on image */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <h2 className="text-4xl font-bold mb-2"></h2>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button 
          onClick={() => navigateImage('prev')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => navigateImage('next')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeImageCarousel;