import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import iceImage from '@/assets/images/ice-image.jpg'
import legImage from '@/assets/images/leg-image.jpg'
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-stone-900 flex flex-col items-center justify-center p-16">
      <div className="max-w-3xl text-center">
        <p className="text-sm text-white mb-6">Availability</p>
        <p className="text-xs text-gray-400 mb-6">Open for business and new collaborations.</p>
        <a href="#contact" className="text-xs underline text-gray-400 hover:text-gray-700 mb-12 inline-block">Get in touch</a>

        <h1 className="text-xl font-semibold text-stone-300 leading-relaxed mb-12">
          Multi-disciplinary maker of exciting, working at the intersection of brand identity.
        </h1>

        <div className="relative flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="overflow-hidden w-full h-full">
              <CardContent className="p-0">
             <Image 
             src= {iceImage}
             alt="ice image"
             className="w-full h-full object-cover" />
             {/* <Image 
             src= {legImage}
             alt = "image"
             className="w-full h-full object-cover" /> */}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        
      </div>
    </div>
  );
}
