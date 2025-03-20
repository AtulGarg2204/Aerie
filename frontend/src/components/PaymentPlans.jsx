import React from 'react';
import { ArrowRight, GraduationCap, FileText, Video, FileCheck } from 'lucide-react';

const PaymentPlans = () => {
  // Stats data with added icons (removed images)
  const stats = [
    {
      number: '15Million+',
      label: 'Happy Students',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-900',
      icon: <GraduationCap className="w-10 h-10 text-amber-600" />
    },
    {
      number: '24000+',
      label: 'Mock Tests',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-900',
      icon: <FileText className="w-10 h-10 text-pink-600" />
    },
    {
      number: '14000+',
      label: 'Video Lectures',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900',
      icon: <Video className="w-10 h-10 text-blue-600" />
    },
    {
      number: '80000+',
      label: 'Practice Papers',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-900',
      icon: <FileCheck className="w-10 h-10 text-purple-600" />
    }
  ];

  // Function to handle the "Get Started" button click
  const handleGetStarted = () => {
    window.location.href = 'https://your-redirect-link.com'; // Replace with your actual redirect link
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Affordable & Flexible Payment Plans</h2>
          <p className="text-lg text-gray-600">Quality Education Within Your Reach</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.bgColor} rounded-xl p-6 group relative overflow-hidden transition-all duration-300 hover:shadow-lg h-48 flex flex-col justify-center`}
            >
              {/* Icon that animates on hover */}
              <div className="absolute top-4 right-4 transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                {stat.icon}
              </div>
              

              
              <h3 className={`text-4xl font-bold ${stat.textColor} mb-1 group-hover:transform group-hover:-translate-y-2 transition-transform duration-300`}>{stat.number}</h3>
              <p className={`${stat.textColor} group-hover:transform group-hover:-translate-y-2 transition-transform duration-300`}>{stat.label}</p>
              
              {/* Animated underline on hover */}
              <div className="h-0.5 w-0 bg-current group-hover:w-16 transition-all duration-500 mt-2"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={handleGetStarted}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md flex items-center gap-2 transition-all duration-300 hover:gap-3"
          >
            Get Started
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlans;