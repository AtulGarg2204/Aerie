import React, { useState } from 'react';
import { BookOpen, Users, Target, Video, BookCheck, MessageSquare, GraduationCap, BarChart} from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-white" />,
    title: "Curated e-Books & Study Material",
    description: "Save time with comprehensive resources hand-picked by experts. Focus on what truly matters and skip the clutter of irrelevant content.",
    bgColor: "bg-blue-500"
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Live One-on-One Doubt Solving",
    description: "Get personal attention from mentors who address your specific struggles. Immediate feedback fast-tracks your understanding and boosts confidence.",
    bgColor: "bg-purple-500"
  },
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "1000+ Practice Questions & Topic-wise Tests",
    description: "Strengthen your fundamentals through extensive practice. Identify weak spots early, then sharpen your skills by tackling topic-focused questions.",
    bgColor: "bg-green-500"
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "Live Recorded Sessions",
    description: "Study flexibly on your own schedule. Missed a class? No problem, simply rewatch the recordings anytime to reinforce learning & never fall behind.",
    bgColor: "bg-red-500"
  },
  {
    icon: <BookCheck className="w-6 h-6 text-white" />,
    title: "Previous Year GATE Solved Questions",
    description: "Familiarize yourself with the actual exam style and difficulty. Understand patterns, improve speed, and fine-tune your approach before the real test.",
    bgColor: "bg-orange-500"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-white" />,
    title: "1-on-1 Mentorship for Personalized Guidance",
    description: "Set clear goals and receive tailored study plans. A dedicated mentor tracks your progress, ensuring you hit each milestone on time.",
    bgColor: "bg-indigo-500"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: "Learn from IITians & Industry Experts",
    description: "Get firsthand insights and advanced techniques from professionals who've excelled at the highest levels. Their expertise helps you master complex concepts more quickly.",
    bgColor: "bg-pink-500"
  },
  {
    icon: <BarChart className="w-6 h-6 text-white" />,
    title: "Mocks & Exam Strategy Workshops",
    description: "Recreate real-exam conditions to reduce test anxiety. Learn proven tips from those who've already aced GATE.",
    bgColor: "bg-cyan-500"
  }
];

const CourseFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Course Features
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive learning resources and support systems designed to ensure your success in GATE preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 transition-all duration-500 ${hoveredIndex === index ? 'scale-110' : ''}`}
              >
                <div className={`transition-transform duration-500 ${hoveredIndex === index ? 'animate-pulse' : ''}`}>
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 relative">
                {feature.title}
                {hoveredIndex === index && (
                  <span className="absolute -left-2 top-1/2 w-1 h-6 bg-blue-500 transform -translate-y-1/2 transition-all duration-300"></span>
                )}
              </h3>
              
              <p className={`text-gray-600 leading-relaxed transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-80'}`}>
                {feature.description}
              </p>
              
              {/* Reveal line on hover */}
              <div className={`w-0 h-0.5 bg-gray-200 mt-4 transition-all duration-500 ${hoveredIndex === index ? 'w-full' : ''}`}></div>
            </div>
          ))}
        </div>

        {/* CTA Banner Section without Animation */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-2xl overflow-hidden w-full mb-8">
            <img 
              src="/images/7.png" 
              alt="Counselling Banner" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
            Book a Free Expert Counselling Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;