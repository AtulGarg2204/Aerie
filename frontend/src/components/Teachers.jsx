import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Teachers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTeachers = 4; // Number of teachers visible at once
  
  // Teacher data with updated image paths
  const teachers = [
    {
      id: 1,
      image: '/1.png',

    },
    {
      id: 2,

      image: '/2.png',

    },
    {
      id: 3,

      image: '/3.png',

    },
    {
      id: 4,

      image: '/4.png',

    },
    {
      id: 5,

      image: '/5.png',

    },
    {
      id: 6,

      image: '/6.png',

    }
  ];

  const nextSlide = () => {
    if (currentIndex < teachers.length - visibleTeachers) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Know Your Teachers</h2>
          <p className="text-gray-600">Learn from industry experts with years of experience</p>
        </div>

        <div className="relative">
          {/* Left Navigation Arrow */}
          <button 
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous teachers"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Teachers Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTeachers)}%)` }}
            >
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="w-full px-2 flex-shrink-0 flex-grow-0"
                  style={{ width: `${100 / visibleTeachers}%` }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center">
                    {/* Square aspect ratio container for image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={teacher.image} 
                        alt={`${teacher.name}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${teacher.name.replace(' ', '+')}&background=E3E3E3&color=333&size=256`;
                        }}
                      />
                    </div>
                
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors ${currentIndex >= teachers.length - visibleTeachers ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={nextSlide}
            disabled={currentIndex >= teachers.length - visibleTeachers}
            aria-label="Next teachers"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;