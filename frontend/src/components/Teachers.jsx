import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Teachers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTeachers = 4; // Number of teachers visible at once
  
  // Teacher data - update image paths when you upload the images
  const teachers = [
    {
      id: 1,
      name: 'Shobhit Srivastava',
      title: 'Sir',
      image: '/images/12.png', // Update with actual path when available
      subject: 'Reinforcement Learning',
      experience: 10
    },
    {
      id: 2,
      name: 'Krishna Yadav',
      title: 'Sir',
      image: '/images/12.png', // Update with actual path when available
      subject: 'Structures',
      experience: 11
    },
    {
      id: 3,
      name: 'Ankit Sharma',
      title: 'Sir',
      image: '/images/12.png', // Update with actual path when available
      subject: 'Surveying',
      experience: 12
    },
    {
      id: 4,
      name: 'Ankit',
      title: 'Sir',
      image: '/images/12.png', // Update with actual path when available
      subject: 'CPM',
      experience: 12
    },
    {
      id: 5,
      name: 'Rahul Kumar',
      title: 'Sir',
      image: '/images/12.png', // Update with actual path when available
      subject: 'Machine Learning',
      experience: 8
    },
    {
      id: 6,
      name: 'Deepak Joshi',
      title: 'Sir',
      image: '/images/12.png', // Update with actual path when available
      subject: 'Data Structures',
      experience: 9
    },
    {
      id: 7,
      name: 'Priya Sharma',
      title: 'Ma\'am',
      image: '/images/12.png', // Update with actual path when available
      subject: 'Algorithms',
      experience: 7
    },
    {
      id: 8,
      name: 'Amit Verma',
      title: 'Sir',
      image: '/images/12.png', // Update with actual path when available
      subject: 'System Design',
      experience: 14
    },
    {
      id: 9,
      name: 'Neha Gupta',
      title: 'Ma\'am',
      image: '/images/12.png', // Update with actual path when available
      subject: 'AI Foundations',
      experience: 6
    },
    {
      id: 10,
      name: 'Vikram Singh',
      title: 'Sir',
      image: '/images/12.png', // Update with actual path when available
      subject: 'Database Management',
      experience: 15
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
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="aspect-w-1 aspect-h-1 relative">
                      {/* Placeholder for teacher image - replace with actual image */}
                      <div className="bg-gray-200 w-full h-52 flex items-center justify-center">
                        {teacher.image ? (
                          <img 
                            src={teacher.image} 
                            alt={`${teacher.name}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-gray-400">Image coming soon</div>
                        )}
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-lg text-gray-900">{teacher.name}</h3>
                      <p className="text-gray-600 mb-2">{teacher.title}</p>
                      <div className="bg-indigo-50 rounded-full py-1 px-4 inline-block mb-2">
                        <span className="text-indigo-600 text-sm">{teacher.subject}</span>
                      </div>
                      <p className="text-gray-500 text-sm">Exp: {teacher.experience} years</p>
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