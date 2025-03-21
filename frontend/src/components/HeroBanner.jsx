// import React, { useState, useEffect, useRef, useMemo } from 'react';
// import { BookOpen, Sparkles, GraduationCap, Clock } from 'lucide-react';

// const HeroBanner = () => {
//   const [currentBanner, setCurrentBanner] = useState(0);
//   const [animatedIcons, setAnimatedIcons] = useState([false, false, false, false]);
//   const featuresRef = useRef(null);
  
//   const banners = [
//     '/images/hero-bg.png',
//     '/images/2.png',
//     '/images/6.png',
//     '/images/1.png'
//   ];
  
//   // Memoize features to avoid dependency issues
//   const features = useMemo(() => [
//     {
//       icon: GraduationCap,
//       title: 'LIVE & INTERACTIVE CLASSES',
//       delay: 200,
//       color: '#FF5757' // Red
//     },
//     {
//       icon: BookOpen,
//       title: 'EXCLUSIVE STUDY MATERIAL',
//       delay: 600,
//       color: '#3B82F6' // Blue
//     },
//     {
//       icon: Clock,
//       title: '24/7 DOUBT SOLVING',
//       delay: 1000,
//       color: '#10B981' // Green
//     },
//     {
//       icon: Sparkles,
//       title: 'PROVEN TRACK RECORD',
//       delay: 1400,
//       color: '#F59E0B' // Amber
//     }
//   ], []);
  
//   // Banner rotation effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentBanner((prev) => (prev + 1) % banners.length);
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [banners.length]);
  
//   // Use Intersection Observer to trigger animations when features section becomes visible
//   useEffect(() => {
//     // Reset animation state
//     setAnimatedIcons([false, false, false, false]);
    
//     // Store a reference to the current DOM node
//     const currentFeaturesRef = featuresRef.current;
    
//     // Create animation triggers
//     const triggerAnimations = (isIntersecting) => {
//       if (isIntersecting) {
//         const timers = [];
        
//         // Create timers for each feature
//         features.forEach((feature, index) => {
//           const timer = setTimeout(() => {
//             setAnimatedIcons(prev => {
//               const newAnimatedIcons = [...prev];
//               newAnimatedIcons[index] = true;
//               return newAnimatedIcons;
//             });
//           }, feature.delay);
          
//           timers.push(timer);
//         });
        
//         // Return a cleanup function that clears all timers
//         return () => {
//           timers.forEach(timer => clearTimeout(timer));
//         };
//       }
//       return undefined;
//     };
    
//     // Create and configure the observer
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const cleanup = triggerAnimations(entries[0].isIntersecting);
//         if (cleanup) {
//           // Store the cleanup function for later
//           observer.cleanup = cleanup;
//         }
//       },
//       { threshold: 0.2 } // Trigger when 20% of the element is visible
//     );
    
//     // Start observing the features section if it exists
//     if (currentFeaturesRef) {
//       observer.observe(currentFeaturesRef);
//     }
    
//     // Cleanup observer and timers on component unmount
//     return () => {
//       if (currentFeaturesRef) {
//         observer.unobserve(currentFeaturesRef);
//       }
//       if (observer.cleanup) {
//         observer.cleanup();
//       }
//     };
//   }, [features]); // Include features as a dependency since we use it inside
  
//   return (
//     <section className="relative bg-white pt-0 pb-8 overflow-x-hidden">
//       {/* Main banner with automatic slider */}
//       <div className="relative">
//         <div className="container mx-auto">
//           {/* Background image slider with animation */}
//           <div className="w-full overflow-hidden relative h-[400px] md:h-[648px]">
//             {banners.map((banner, index) => (
//               <div key={index} className="absolute inset-0">
//                 <img 
//                   src={banner} 
//                   alt={`GATE 2026 Architecture & Planning Banner ${index + 1}`} 
//                   className={`absolute top-0 left-0 w-full h-full object-cover object-top md:object-center transition-opacity duration-1000 ${
//                     currentBanner === index ? 'opacity-100' : 'opacity-0'
//                   }`}
//                   style={{
//                     transform: `translateX(${(index - currentBanner) * 100}%)`,
//                     transition: 'transform 0.5s ease-in-out'
//                   }}
//                   onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = `https://via.placeholder.com/1200x500?text=Aerie+Academy+Banner+${index + 1}`;
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Features section with animated icons and headings */}
//         <div ref={featuresRef} className="relative -mt-[1rem] sm:-mt-36 md:-mt-40 lg:-mt-[2rem] z-10 px-4 md:px-6 lg:px-8 sm:max-w-6xl max-w-[22rem] mx-auto">
//           <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 md:p-6">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//               {features.map((feature, index) => (
//                 <div 
//                   key={index} 
//                   className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
//                     animatedIcons[index] 
//                       ? 'opacity-100 translate-y-0 scale-100' 
//                       : 'opacity-0 translate-y-8 scale-95'
//                   }`}
//                 >
//                   <div 
//                     className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center rounded-full"
//                     style={{ 
//                       background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
//                       boxShadow: `0 4px 14px 0 ${feature.color}30`
//                     }}
//                   >
//                     {React.createElement(feature.icon, {
//                       size: 32,
//                       color: feature.color,
//                       strokeWidth: 1.5
//                     })}
//                   </div>
//                   <h3 className="text-xs md:text-sm font-bold tracking-wide">{feature.title}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Centered button with top margin and hover animation */}
//       <div className="flex justify-center mt-12 md:mt-16">
//         <a href="/booking" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
//           Book a Free Expert Counselling Session
//         </a>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { BookOpen, Sparkles, GraduationCap, Clock } from 'lucide-react';

const HeroBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [animatedIcons, setAnimatedIcons] = useState([false, false, false, false]);
  const featuresRef = useRef(null);
  
  const banners = [
    '/images/hero-bg.png',
    '/images/2.png',
    '/images/6.png',    // This is the banner that needs the clickable button
    '/images/1.png'
  ];
  
  // Memoize features to avoid dependency issues
  const features = useMemo(() => [
    {
      icon: GraduationCap,
      title: 'LIVE & INTERACTIVE CLASSES',
      delay: 200,
      color: '#FF5757' // Red
    },
    {
      icon: BookOpen,
      title: 'EXCLUSIVE STUDY MATERIAL',
      delay: 600,
      color: '#3B82F6' // Blue
    },
    {
      icon: Clock,
      title: '24/7 DOUBT SOLVING',
      delay: 1000,
      color: '#10B981' // Green
    },
    {
      icon: Sparkles,
      title: 'PROVEN TRACK RECORD',
      delay: 1400,
      color: '#F59E0B' // Amber
    }
  ], []);
  
  // Banner rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);
  
  // Use Intersection Observer to trigger animations when features section becomes visible
  useEffect(() => {
    // Reset animation state
    setAnimatedIcons([false, false, false, false]);
    
    // Store a reference to the current DOM node
    const currentFeaturesRef = featuresRef.current;
    
    // Create animation triggers
    const triggerAnimations = (isIntersecting) => {
      if (isIntersecting) {
        const timers = [];
        
        // Create timers for each feature
        features.forEach((feature, index) => {
          const timer = setTimeout(() => {
            setAnimatedIcons(prev => {
              const newAnimatedIcons = [...prev];
              newAnimatedIcons[index] = true;
              return newAnimatedIcons;
            });
          }, feature.delay);
          
          timers.push(timer);
        });
        
        // Return a cleanup function that clears all timers
        return () => {
          timers.forEach(timer => clearTimeout(timer));
        };
      }
      return undefined;
    };
    
    // Create and configure the observer
    const observer = new IntersectionObserver(
      (entries) => {
        const cleanup = triggerAnimations(entries[0].isIntersecting);
        if (cleanup) {
          // Store the cleanup function for later
          observer.cleanup = cleanup;
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
    
    // Start observing the features section if it exists
    if (currentFeaturesRef) {
      observer.observe(currentFeaturesRef);
    }
    
    // Cleanup observer and timers on component unmount
    return () => {
      if (currentFeaturesRef) {
        observer.unobserve(currentFeaturesRef);
      }
      if (observer.cleanup) {
        observer.cleanup();
      }
    };
  }, [features]); // Include features as a dependency since we use it inside
  
  return (
    <section className="relative bg-white pt-0 pb-8 overflow-x-hidden">
      {/* Main banner with automatic slider */}
      <div className="relative">
        <div className="container mx-auto">
          {/* Background image slider with animation */}
          <div className="w-full overflow-hidden relative h-[400px] md:h-[648px]">
            {banners.map((banner, index) => (
              <div key={index} className="absolute inset-0">
                <img 
                  src={banner} 
                  alt={`GATE 2026 Architecture & Planning Banner ${index + 1}`} 
                  className={`absolute top-0 left-0 w-full h-full object-cover object-top md:object-center transition-opacity duration-1000 ${
                    currentBanner === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: `translateX(${(index - currentBanner) * 100}%)`,
                    transition: 'transform 0.5s ease-in-out'
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/1200x500?text=Aerie+Academy+Banner+${index + 1}`;
                  }}
                />
                
                {/* Banner-specific button for the third banner (index 2 - 6.png) */}
                {index === 2 && (
                  <div className={`absolute z-10 bottom-[17%] left-1/2 transform -translate-x-[4%] transition-opacity duration-1000 ${
                    currentBanner === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <a href="/booking" className="bg-white hover:bg-gray-300 text-[#0e2d59] px-10 py-[0.9rem] rounded-lg font-semibold text-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 whitespace-nowrap">
                      Book A Free Expert Counselling Session Now!
                    </a>
                  </div>
                )}
                {index === 0 && (
                  <div className={`z-10 absolute bottom-[25%] left-1/2 transform -translate-x-[150%] transition-opacity duration-1000 ${
                    currentBanner === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}>
                    <a href="/booking" className="bg-[#2d5ca2] hover:bg-[#234578] text-white px-10 py-[0.9rem] rounded-full font-semibold text-[1.4rem] shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300 whitespace-nowrap">
                      Book A Free Expert Counselling Session
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Features section with animated icons and headings */}
        <div ref={featuresRef} className="relative -mt-[1rem] sm:-mt-36 md:-mt-40 lg:-mt-[2rem] z-10 px-4 md:px-6 lg:px-8 sm:max-w-6xl max-w-[22rem] mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4 md:p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center text-center transition-all duration-700 ease-out ${
                    animatedIcons[index] 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-8 scale-95'
                  }`}
                >
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center rounded-full"
                    style={{ 
                      background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                      boxShadow: `0 4px 14px 0 ${feature.color}30`
                    }}
                  >
                    {React.createElement(feature.icon, {
                      size: 32,
                      color: feature.color,
                      strokeWidth: 1.5
                    })}
                  </div>
                  <h3 className="text-xs md:text-sm font-bold tracking-wide">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroBanner;