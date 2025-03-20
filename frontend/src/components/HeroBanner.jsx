import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative bg-white pt-6 pb-8 overflow-x-hidden">
      {/* Main banner with proper sizing and better background */}
      <div className="relative">
        <div className="container mx-auto">
          {/* Background image with better height constraints and object positioning */}
          <div className="w-full overflow-visible">
            <img 
              src="/images/hero-bg.png" 
              alt="GATE 2026 Architecture & Planning" 
              className="w-full h-full object-cover object-top md:object-center"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/1200x500?text=Aerie+Academy+Banner';
              }}
            />
          </div>
        </div>
        
        {/* Features section with better positioning and shadow */}
        <div className="relative -mt-[1rem] sm:-mt-36 md:-mt-40 lg:-mt-[4rem] z-10 px-4 md:px-6 lg:px-8 sm:max-w-6xl max-w-[22rem] mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <img 
              src="/images/features.png" 
              alt="Features" 
              className="w-full h-32 sm:h-36 md:h-48 lg:h-56 object-cover object-center "
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/1200x200?text=Aerie+Academy+Features';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;