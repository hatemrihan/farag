import Image from 'next/image';
import React from 'react';
import runImage from '../assets/images/run-image.JPG';
import teamImage from '../assets/images/team-image.JPG';
import photoImage from '../assets/images/photo-image.jpg';
import teametnenImage from '../assets/images/teametnen-image.JPG';

const PastSpread: React.FC =() =>{
  return (
    <div className="min-h-screen bg-stone-900 flex flex-col" id="NewPart">
      <div className="container mx-auto px-4 py-8 flex-grow mt-30">
        <div className="grid grid-cols-12 gap-8">
          {/* Text Column */}
          <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
            <h1 className="text-[7rem] lg:text-[8rem]  font-bold text-white leading-none tracking-tighter">
              PAST
            </h1>
            <p className="mt-4 text-sm text-gray-500">
            Hatem, Since his young age and his passion for football wasnt limited, back to 2018 he started his journey in Egypt from a small Academy called Chiko, At 2022, he want to Saudi Arabia he was a footballer for Riyadh-Club , Seeking his journey in Saudi Arabia to be in the first team, But Unfortunately he had an ankle sprain that stopped him from playing at the top again. 
            </p>
          </div>

          {/* Image Grid Column */}
          <div className="col-span-12 md:col-span-8 grid grid-cols-3 gap-4">
            {/* Image 1 - Larger */}
            <div className="col-span-3 row-span-2">
              <div className="aspect-[4/3] bg-gray-100">
                <Image 
                  src={runImage}
                  alt="Large Past Image" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="col-span-1">
              <div className="aspect-square bg-gray-100">
                <Image 
                  src={photoImage}
                  alt="Past Image 2" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Image 3 */}
            <div className="col-span-1">
              <div className="aspect-square bg-gray-100">
                <Image 
                  src={teamImage} 
                  alt="Past Image 3" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Image 4 */}
            <div className="col-span-1">
              <div className="aspect-square bg-gray-100">
                <Image 
                  src={teametnenImage}
                  alt="Past Image 4" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Image 5 */}
            {/* <div className="col-span-1">
              <div className="aspect-square bg-gray-100">
                <Image 
                  src={heroImage}
                  alt="Past Image 5" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className=" w-full border-t border-gray-700 my-8"></div>
    </div>
  );
};

export default PastSpread;