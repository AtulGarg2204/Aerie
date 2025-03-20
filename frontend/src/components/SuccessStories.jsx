import React from 'react';
import { ArrowRight } from 'lucide-react';

const SuccessStories = () => {
  // Handle CTA button click
  const handleJoinCommunity = () => {
    window.location.href = 'https://your-community-link.com'; // Replace with your actual URL
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Students' Achievements Speak Volumes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We take pride in the accomplishments of our students who have excelled in competitive exams.
          </p>
        </div>

        {/* Banner Image */}
        <div className="relative rounded-xl overflow-hidden mb-12">
          <img 
            src="/images/1.png" 
            alt="Student achievements banner" 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button 
            onClick={handleJoinCommunity}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-md flex items-center gap-2 transition-colors"
          >
            Join Our Community of Achievers
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;