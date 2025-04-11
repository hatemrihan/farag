"use client";

import React, { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import First from '@/sections/First'
import About from '@/sections/About'
import NewPart from '@/sections/NewPart';
import Loading from '@/sections/Loading';
import Footer from '@/sections/Footer';
import Design from '@/sections/Design';
import AnotherPortofolioPage from '@/sections/AnotherPortofolioPage';
import NewFooter from '@/sections/NewFooter';

function HomeContent() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Check for scrollTo parameter
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      // Wait for elements to be rendered
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [searchParams]);
  
  return (
    <main>
      <Loading />
      <First />
      <About />
      <Design />
      <NewPart />
      <AnotherPortofolioPage />
      <NewFooter />
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeContent />
    </Suspense>
  );
}

