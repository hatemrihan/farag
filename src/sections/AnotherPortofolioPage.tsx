import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import holaImage from '../assets/images/hola-image.jpg'
import boundImage from '../assets/images/bound-image.jpg';
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation';
import { useInView } from 'motion/react';
import heroImage from '../assets/images/hero-image.jpg'
import nadaImage from '../assets/images/nada-image.jpg'

const AnotherPortofolioPage = () => {
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
  return (
    <div className="min-h-screen bg-stone-900 flex flex-col" id="AnotherPortofolioPage">
    <div className="container mx-auto px-4 py-8 flex-grow">
    <h1 className="text-sm mb-12 font-bold text-gray-300 leading-none text-center" ref={scope}>
           Selected work
          </h1>
      <div className="grid grid-cols-12 gap-4">
        {/* Large "less." Typography */}
        <div className="col-span-12 md:col-span-6 flex items-center">
          <h1 className="text-7xl  lg:text-8xl font-bold text-white leading-none" ref={scope}>
            more
          </h1>
        </div>

        {/* Image Sections */}
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-4">
          {/* Portrait Image Section */}
          <div className="col-span-1 space-y-4">
            <div className="text-sm text-gray-300 uppercase tracking-wider"ref={scope}>
              Project
            </div>
            <div className="aspect-[3/4] bg-gray-100">
            <a href="https://naderemad.netlify.app">
              <Image 
                src={boundImage} 
                alt="Portrait" 
                className="w-full h-full object-cover grayscale cursor-pointer"
              />
              </a>
            </div>
            <div className="text-sm text-gray-300">
              Nader Emad — STYLE&apos;47
            </div>
          </div>

          {/* Editorial Image Section */}
          <div className="col-span-1 space-y-4">
            <div className="text-sm text-gray-300 uppercase tracking-wider" ref={scope}>
              Project
            </div>
            <div className="aspect-[3/4] bg-gray-100">
            <a href="https://iflagg.netlify.app">
              <Image 
                src={holaImage} 
                alt="Editorial" 
                className="w-full h-full object-cover grayscale cursor-pointer"
              />
              </a>
            </div>
            <div className="text-sm text-gray-300">
              Iflag — PORT. GQ
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <div className="text-sm text-gray-300 uppercase tracking-wider" ref={scope}>
              Project
            </div>
            <div className="aspect-[3/4] bg-gray-100">
            <a href="https://nadamahmoudd.wixstudio.com/nada">
              <Image 
                src={nadaImage} 
                alt="Editorial" 
                className="w-full h-full object-cover grayscale cursor-pointer"
              />
              </a>
            </div>
            <div className="text-sm text-gray-300">
              Nada — Model. GQ
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <div className="text-sm text-gray-300 uppercase tracking-wider" ref={scope}>
              Project
            </div>
            <div className="aspect-[3/4] bg-gray-100">
            <a href="https://hatemrihan.github.io/TOMM-WEB/h.HTML?fbclid=PAZXh0bgNhZW0CMTEAAaYYRv6Z8j2U5HkWj2p4e6y7OVWsEcNQYfz9PA-SYYdgVTgyaRf_ly5luTY_aem_rphh00mGa1FsY07bJuMr4w">
              <Image 
                src={heroImage} 
                alt="Editorial" 
                className="w-full h-full object-cover grayscale cursor-pointer"
              />
              </a>
            </div>
            <div className="text-sm text-gray-300">
              Hatum — First. One
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 className="text-sm mb-12 font-bold text-gray-300 leading-none text-center" ref={scope}>
           Click it to see
          </h1>
    <div className=" w-full border-t border-gray-700 my-10"></div>
  </div>
  )
}

export default AnotherPortofolioPage
 