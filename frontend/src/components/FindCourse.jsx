import React,{useState} from 'react';
import { ArrowRight} from 'lucide-react';
import CourseModal from './CourseModal';

const FindCourse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    console.log(closeModal,isModalOpen);
  return (
    <section className=" flex items-center justify-center bg-gray-10 relative px-6 py-20">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
          {/* Left content */}
          <div className="max-w-2xl">
            <h1 className="text-[3.5rem] leading-[1.1] font-bold text-gray-900 mb-6">
            Your Success Starts NOW, Enroll Before Seats Fill Up!

            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
            Master concepts, crack GATE, and secure your dream future. Don’t let time slip away—start today!

            </p>
            <div className="flex items-center gap-8">
              <button onClick={openModal} className="bg-black text-white px-8 py-3.5 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                
                        Book a Free Expert Counselling Session
                       
              </button>
              <button className="flex items-center text-gray-700 font-medium hover:text-gray-900 transition-colors group">
                Learn more
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right image with dots */}
          <div className="relative">
            {/* Decorative dots top right */}
            <div className="absolute -top-6 -right-6 z-10">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-green-200 rounded-full"></div>
                ))}
              </div>
            </div>
            
            {/* Decorative dots bottom left */}
            <div className="absolute -bottom-6 -left-6 z-10">
              <div className="grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-red-200 rounded-full"></div>
                ))}
              </div>
            </div>

            <img
              src="/coursebanner.png"
              alt="Course Finding"
              className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
            />
            
            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100/50 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-50/50 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
      <CourseModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default FindCourse;