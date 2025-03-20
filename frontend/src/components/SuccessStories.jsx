import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const SuccessStories = () => {
  // Banner state and data
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    {
      id: 1,
      image: '/images/1.png',
      alt: 'Student achievements banner'
    },
    {
      id: 2,
      image: '/images/2.png',
      alt: 'More student achievements'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Ruchika Ramteke',
      image: '/images/testimonials/user1.jpg',
      text: "Enrolling at Aerie Academy for my 'GATE 2024 Architecture and Planning exam' was a game-changer. Their organized and easy-to-understand study sessions, helpful teachers, and personalized guidance really helped me a lot. I want to thank Aerie Academy for all their support and assistance. Without them, achieving AIR 188 wouldn't have been possible."
    },
    {
      id: 2,
      name: 'Swati',
      image: '/images/testimonials/user2.jpg',
      text: "The journey with Aerie Architecture has been great. The recorded video lectures are as effective as the learning live classes as each and every detail is covered in the classes. The revision classes before the exam is a plus point. It covers all the important concepts in a short span of time. All in all the classes helped me a lot to bring discipline to my preparation for GATE 2024 and I thank all the faculty that helped me get closer to goal."
    },
    {
      id: 3,
      name: 'Ishika Jain',
      image: '/images/testimonials/user3.jpg',
      text: "I wanted to express my sincere gratitude for the exceptional support and guidance I've received during my preparation for the GATE exam. The diverse range of knowledgeable teachers for different subjects has been instrumental in enhancing my understanding and boosting my confidence. Your online platform has provided a conducive environment for effective learning, and I am truly grateful for the invaluable resources and insightful sessions. Thank you for playing a crucial role in my preparation journey."
    },
    {
      id: 4,
      name: 'Bharat Lathwal',
      image: '/images/testimonials/user4.jpg',
      text: "Could not have asked more. Great experience here."
    },
    {
      id: 5,
      name: 'Rupesh Soni',
      image: '/images/testimonials/user5.jpg',
      text: "Just bought the course. Gone through it. Watched illumination lecture. It was very good, felt I should have enrolled in the classes earlier."
    },
    {
      id: 6,
      name: 'Pooja Godara',
      image: '/images/testimonials/user6.jpg',
      text: "There test series, study material is best and facilities are best and cooperative too they start teaching you from basics to advance."
    },
    {
      id: 7,
      name: 'Prajwal Muniraj',
      image: '/images/testimonials/user7.jpg',
      text: "IT WAS GOOD, HAD GOOD MENTORS IN ALL THE SUBJECTS, I WAS HAPPY TO SEE THAT, IN ALL THE SUBJECTS THE CONCEPT CLARIFICATIONS WERE TOO GOOD."
    },
    {
      id: 8,
      name: 'Krutika Rajput',
      image: '/images/testimonials/user8.jpg',
      text: "Firstly I connected with Parul ma'am, she was very friendly and her guidance was very precise on how to choose a course and the right strategy for exam. The Faculty was very thorough and patient, taught every topic in depth. The team is great, Thank you for the amazing learning experience."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerView);

  // Auto-rotate banners every 3 seconds
  useEffect(() => {
    const bannerInterval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(bannerInterval);
  }, [banners.length]);

  // Handle CTA button click
  const handleJoinCommunity = () => {
    window.location.href = 'https://your-community-link.com'; // Replace with your actual URL
  };

  const nextSlide = () => {
    if (currentIndex < testimonials.length - testimonialsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Success Stories Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Students' Achievements Speak Volumes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in the accomplishments of our students who have excelled in competitive exams.
          </p>
        </div>

        {/* Banner Container with Auto-Rotation */}
        <div className="relative rounded-xl overflow-hidden mb-12 h-[530px]">
          {banners.map((banner, index) => (
            <div 
              key={banner.id}
              className="absolute w-full h-full transition-all duration-1000 ease-in-out"
              style={{
                opacity: currentBanner === index ? 1 : 0,
                transform: `translateX(${(index - currentBanner) * 100}%)`,
                zIndex: currentBanner === index ? 10 : 5
              }}
            >
              <img 
                src={banner.image} 
                alt={banner.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Indicator dots for banners */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {banners.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentBanner === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentBanner(index)}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Testimonials: {testimonials.length}</h2>
            <h3 className="text-lg text-gray-700">What subscribers are achieving through learning</h3>
          </div>

          <div className="relative">
            {/* Left Navigation Arrow */}
            <button 
              className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Testimonials Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerView)}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full px-3 flex-shrink-0 flex-grow-0"
                    style={{ width: `${100 / testimonialsPerView}%` }}
                  >
                    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(' ', '+')}&background=random&color=fff`;
                            }}
                          />
                        </div>
                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-6 flex-grow">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Navigation Arrow */}
            <button 
              className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors ${currentIndex >= testimonials.length - testimonialsPerView ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - testimonialsPerView}
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8">
            {Array.from({ length: totalPages }).map((_, index) => {
              const isActive = index === Math.floor(currentIndex / testimonialsPerView);
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * testimonialsPerView)}
                  className={`w-3 h-3 mx-1 rounded-full transition-colors ${
                    isActive ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <button 
            onClick={handleJoinCommunity}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md flex items-center gap-2 transition-colors"
          >
            Book a Call
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;