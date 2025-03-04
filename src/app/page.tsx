"use client";
import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Pricing from "@/sections/Pricing";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import Part from "@/sections/Part";
import ContactForm from "@/components/forms/ContactForm";
import PortfolioPage from "@/sections/PortofolioPage";



export default function Home() {
   

   return (
      <>
         <Header />
         <Hero />
         <Intro />
         <Testimonials />
         <Pricing />
         <Projects /> 
         <Part />
<PortfolioPage />
<FAQs />
        <ContactForm />
              <Footer />
      </>
   );
}

