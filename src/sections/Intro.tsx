"use client";

import {useInView } from "motion/react";

import { FC, useEffect, useRef } from "react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Intro: FC = () => {
// const [scope, animate] = useAnimate();
const sectionRef= useRef<HTMLElement>(null);
const {scope, entranceAnimation} = useTextRevealAnimation();
  const inView = useInView(scope, {
    once: true,
  });
  useEffect (()=> {
if (inView) {
  entranceAnimation();
}
  },[inView]);
  return <section className="section mt-12 md:mt-16 lg:mt-20" id="intro" ref={sectionRef}>
<div className="container">
<h2 className="text-4xl md:text-7xl lg:text-8xl lg:w-[80%] mb-4" ref={scope}>Who is Nader Emad?</h2>
<p className="text-1xl text-gray-300 l lg:mt-11"> A passionate and highly credentialed Head Coach and a (CPT) with a lifelong dedication to sports and movement. My journey began in childhood as a gymnastics athlete, evolved into an 18-year career in dance (including training at Austria’s prestigious European Ballet Conservatory and earning a Choreography and Dance Diploma in St. Pölten), and later transitioned into bodybuilding and fitness. With over a decade of experience in fitness and certifications as a Spinning® instructor, TRX & CORE X specialist, and credentials from NASM and ISSA, i blend artistic discipline with scientific training methodologies. Today, i leverage my diverse background to coach others, emphasizing holistic strength, technique, and the transformative power of movement.</p>
</div>


  </section>;
};

export default Intro;
