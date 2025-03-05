"use client";

import AnotherFAQs from "@/sections/AnotherFAQs";
import AnotherHeader from "@/sections/AnotherHeader";
import AnotherHero from "@/sections/AnotherHero";
import AnotherPortofolioPage from "@/sections/AnotherPortofolioPage";
import NewFooter from "@/sections/NewFooter";
import NewPart from "@/sections/NewPart";




export default function Home() {
   

   return (
      <>
       <AnotherHeader />
      <AnotherHero />
      <AnotherFAQs />
          <AnotherPortofolioPage />
          <NewPart />
          <NewFooter />
         {/* <Header />
         <Hero />
         <Intro /> */}
         {/* <Testimonials />
         <Pricing />
         <Projects /> 
         <Part />
<PortfolioPage />
<FAQs />
        <ContactForm /> */}
              {/* <Footer /> */}
      </>
   );
}

