import Button from "@/components/Button";
import { FC } from "react";
import React from "react";

const Pricing: FC = () => {
  const handleClickMobileNavItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-stone-900 p-4" id="pricing">
      <h1 className="text-3xl font-bold text-white mb-8">Programs</h1>
      <div className="w-full max-w-6xl bg-stone-900 text-white rounded-3xl p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Design Column */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 mr-2">
                <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M12 6 L12 18 M6 12 L18 12" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="text-xl font-medium">Program 1</h2>
            </div>
            
            <div className="mb-6">
              <div className="text-sm text-gray-400">type</div>
              <div className="text-3xl font-semibold text-red-900">PT ON GROUND</div>
            </div>
            
            <p className="text-sm mb-6">
              Personalized, custom Personalized plan.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Personalized Workout program</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Sports & Clinical Nutrition Plan</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Physical Therapy & Rehabilitation</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Daily Progress Tracking</span>
              </div>
            </div>
            
            <div className="mt-auto">
              <a href="#contact" onClick={handleClickMobileNavItem}>
                <button className="underline hover:no-underline">Get in touch</button>
              </a>
            </div>
          </div>
          
          {/* Mobile Divider */}
          <div className="md:hidden w-full border-t border-gray-700 my-8"></div>
          
          {/* Brand Identity Column */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 mr-2">
                <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15l7-7 7 7" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M5 19l7-7 7 7" stroke="white" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h2 className="text-xl font-medium">Program 2</h2>
            </div>
            
            <div className="mb-6">
              <div className="text-sm text-gray-400">type</div>
              <div className="text-3xl font-semibold text-red-900">PT ONLINE</div>
            </div>
            
            <p className="text-sm mb-6">
              A complete set of Workout program & Nutrition plan.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Personalized Workout program</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Sports & Clinical Nutrition Plan</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Physical Therapy & Rehabilitation</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Video demonstration</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Complete Shopping list</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Dine in/out options</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>workout log</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Exclusive follow up with Nader Emad</span>
              </div>
            </div>
            
            <div className="mt-auto">
            <a href="#contact" onClick={handleClickMobileNavItem}>
              <button className="underline hover:no-underline">Become an Athlete</button>
              </a>
            </div>
          </div>
          
          {/* Mobile Divider */}
          <div className="md:hidden w-full border-t border-gray-700 my-8"></div>
          
          {/* Thumbnails Column */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <div className="w-6 h-6 mr-2">
                <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zm-12 6h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zm-12 6h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" fill="white" />
                </svg>
              </div>
              <h2 className="text-xl font-medium">Program 3</h2>
            </div>
            
            <div className="mb-6">
              <div className="text-sm text-gray-400">type</div>
              <div className="text-3xl font-semibold text-red-900">NUTRITION PLAN</div>
            </div>
            
            <p className="text-sm mb-6">
              Taking care of your Nutrition, is as important as your workout.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>one month program</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>two months program</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Juniors program</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>New Mama program</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Ramadan Perspnalized Nutrition program</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2">→</div>
                <span>Daily follow up</span>
              </div>
            </div>
            
            <div className="mt-auto">
            <a href="#contact" onClick={handleClickMobileNavItem}>
              <button className="underline hover:no-underline">Get in touch</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;