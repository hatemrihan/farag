"use client";
import { FC, useState } from "react";
import { AnimatePresence, motion  } from "motion/react";
import { twMerge } from "tailwind-merge";


/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "Why Me, why you should choose us?",
    answer:
      "I understand how overwhelming it can feel to invest in coaching—you want results, but you’re unsure if it’ll work. Let’s talk about what’s holding you back and how we can tackle it together,One client reduced their marathon time by 20% in 12 weeks. Another regained work-life balance and now prioritizes self-care without guilt.",
  },
  {
    question: "What is My Mission?",
    answer:
      "We’ll design sessions around your schedule—even 20 minutes daily can create breakthroughs,I don’t believe in one-size-fits-all plans. Your program will be customized to your goals, whether it’s crushing a marathon, building confidence, or balancing work and wellness,we will start with a free 30-minute session. You’ll experience my coaching style, and we’ll map out a roadmap—no pressure to commit afterward.", 
      
  },
  // {
  //   question: "Our Branches?",
  //   answer:
  //     "Element Five - New Cairo, GUC-University, Nasr City, Biancki-North Coast, Mivida- Emar Misr, Stella-North Coast",
  // },
  {
    question: "Statistics?",
    answer:
      "Number of Sessions: 5000+Sessions, 12000+Happy Client,Number of Transformations: +700 Transformations."
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex]= useState<number|null>(null);
  return <section className="section" id="faqs"> 
    <div className="container">
<h2 className="text-4xl md:text-7xl lg:text-8xl text-center">FAQs</h2>

<div className="mt-10 md:mt-16 lg:mt-20">
  {faqs.map(({question, answer},faqIndex ) => (
    <div key={question} className="border-t border-stone-400 border-dotted py-6 md:py-8 lg:py-10 last:border-b relative isolate group/faq" onClick={() => {
      if(faqIndex === selectedIndex){
        setSelectedIndex(null);
      } else{
        setSelectedIndex(faqIndex)}}
      }
      >
<div className={twMerge("absolute h-0 w-full bottom-0 left-0 bg-stone-700 -z-10 group-hover/faq:h-full transition-all duration-700", faqIndex === selectedIndex && 'h-full')}></div>
<div className={twMerge("flex items-center justify-between gap-4 transition-all duration-500 group-hover/faq:lg:px-8" , faqIndex === selectedIndex && 'lg:px-8')}>
<div className="text-2xl md:text-3xl lg:text-4xl">{question}</div>
<div className={twMerge("inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition duration-300 bg-stone-700")}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</div>
  </div>
  <AnimatePresence>
  {faqIndex === selectedIndex && (
 <motion.div
 className="overflow-hidden lg:px-8"
 initial={{
  height:0
 }}
 animate={{
  height: 'auto'
 }}
 exit={{height:0}}
transition={{duration:0.7, ease:'easeOut'}} 
 >
  <p className="text-xl mt-4">{answer}</p>
  </motion.div>
  )}
  </AnimatePresence>
  </div>
  ))}
</div>
</div>
  </section>;
};

export default FAQs;
