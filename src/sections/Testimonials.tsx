"use client";
import { FC, useRef, useState } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import image4 from "@/assets/images/testimonial-4.jpg";
import image5 from "@/assets/images/testimonial-5.jpg";
import image6 from "@/assets/images/testimonial-6.jpg";

import { useScroll, motion, useTransform, AnimatePresence } from "motion/react";
import Testimonial from "@/components/Testimonial";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Mohamed Khaled",
    company: "",
    role: "",
    quote:
      "From 210 pounds and struggling on miserable diets to 170 lbs and lean.Here’s Mohamed’s before and after on the Kinobody program.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Nayera",
    company: "",
    role: "",
    quote: 'Transformed her body in just 4 months.',
      
    image: image2,
    imagePositionY: 0.1,
  },

  {
    name: "Adam Zakaria",
    company: "",
    role: "",
    quote:
      "First Responder, Adam Zakaria, on “why 30 mines of exercise is important each day,“I’ve settled for 30 minutes a day of doing old-school military calisthenics starting in 2020 during COVID-19 lockdowns.”",
    image: image3,
    imagePositionY: 0.55,
  },

  {
    name: "Abdelrahman",
    company: "",
    role: "",
    quote:
      "6 months transformation from Abdelrahman on pt online program",
    image: image4,
    imagePositionY: 0.55,
  },

  {
    name: "Aya Ahmed",
    company: "",
    role: "",
    quote:
      "Aya’s transformation from 140lbs to 150lbs training with heavy weights 3 times per week combined with intermittent fasting",
    image: image5,
    imagePositionY: 0.55,
  },

  // {
  //   name: "Toqa El-Kabany",
  //   company: "",
  //   role: "",
  //   quote:
  //     "Coach",
  //   image: image6,
  //   imagePositionY: 0.55,
  // },



];

const Testimonials: FC = () => {
  const titleRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target:titleRef,
    offset: ['start end', 'end start']
  });

 const transformTop = useTransform(scrollYProgress, [0,1], ['0%', '15%']);
 const transformBottom = useTransform(scrollYProgress, [0,1], ['0%', '-15%']);
  const [testimonialsIndex, setTestimonialIndex]= useState(0);
    const handleClickPrev= () => {
      setTestimonialIndex(curr => {
        if (curr===0) {
          return testimonials.length - 1;
        }
        return curr - 1;
      })
    };
    const handleClickNext= () =>{
      setTestimonialIndex((curr) => {
        if (curr === testimonials.length - 1) return 0;
return curr + 1;
      });
    };
  return <section className="section" id="testimonials">
   <h2 className="text-4xl md:text-7xl lg:text-8xl flex flex-col overflow-hidden" ref={titleRef}>
    <motion.span className="whitespace-nowrap" style={{
      x:transformTop ,
    }}>
      See the Results</motion.span>
    <motion.span className="whitespace-nowrap self-end text-red-900" style={{
      x: transformBottom,
    }}>See the Results</motion.span>
   </h2>
   <div className="container">
<div className="mt-20">
  <AnimatePresence mode="wait" initial={false}>
  {testimonials.map(({name,company, role, quote, image, imagePositionY}, index)=> index === testimonialsIndex && (
   <Testimonial name={name} company={company} role={role} quote={quote} image={image} imagePositionY={imagePositionY} key={name} />
    )
   )}
   </AnimatePresence>
</div>
<div className="flex gap-4 mt-6 lg:mt-10">
  <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounder-full hover:bg-red-orange-500 text-white hover:border-red-orange-50 transition-all duration-300" onClick={handleClickPrev}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
  </button>
  <button className="border border-stone-400 size-11 inline-flex items-center justify-center rounder-full hover:bg-red-orange-500 text-white hover:border-red-orange-50 transition-all duration-300" onClick={handleClickNext}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
  </button>
</div>
   </div>
  </section>;
};

export default Testimonials;
