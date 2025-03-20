import React, { useState } from 'react';
import { Book, BookOpen, FileText, X, ArrowRight, ChevronRight } from 'lucide-react';
import axios from 'axios';

const StudyResources = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resourceAccessed: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const resources = [
    {
      title: 'Notes',
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      description: 'Use Aerie Academy\'s detailed study materials that simplify complex ideas into easily understandable language',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      glowColor: 'shadow-blue-200',
      btnColor: 'bg-blue-500',
      gradient: 'from-blue-50 to-white',
    },
    {
      title: 'Reference Books',
      icon: <Book className="w-12 h-12 text-amber-600" />,
      description: 'Our experts have created thorough study materials that break down complicated concepts into easily understandable content',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      glowColor: 'shadow-amber-200',
      btnColor: 'bg-amber-500',
      gradient: 'from-amber-50 to-white',
    },
    {
      title: 'NCERT Solutions',
      icon: <FileText className="w-12 h-12 text-green-500" />,
      description: 'Unlock academic excellence with Aerie Academy\'s NCERT Solutions which provides you step-by-step solutions',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      glowColor: 'shadow-green-200',
      btnColor: 'bg-green-500',
      gradient: 'from-green-50 to-white',
    },
  ];

  const handleCardClick = (resource) => {
    setSelectedResource(resource);
    setFormData({
      ...formData,
      resourceAccessed: resource.title
    });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setErrors({});
    setSubmitStatus(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/api/users/resource-access`, 
          formData
        );
        
        setSubmitStatus({
          success: true,
          message: response.data.message
        });
        
        // Redirect after a short delay to allow the user to see the success message
        setTimeout(() => {
          window.location.href = response.data.redirectUrl || 'https://www.aerieacademy.com/courses/630951';
        }, 2000);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus({
          success: false,
          message: error.response?.data?.message || 'Something went wrong. Please try again.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 relative inline-block">
            Study Resources
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-green-500 transform"></div>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            A diverse array of learning materials to enhance your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`rounded-xl border-2 ${resource.borderColor} bg-white p-6 h-96 cursor-pointer overflow-hidden relative transform transition-all duration-500 
                ${hoveredCard === index ? `shadow-xl ${resource.glowColor}` : 'shadow-md'}`}
              onClick={() => handleCardClick(resource)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 
                ${hoveredCard === index ? 'opacity-100' : ''} transition-opacity duration-500`}></div>
              
              {/* Icon Container with Animation */}
              <div className={`relative z-10 flex flex-col items-center ${hoveredCard === index ? 'transform -translate-y-8' : ''} transition-transform duration-500`}>
                {/* Icon Circle Background with Ripple Effect */}
                <div className={`relative mb-4 p-4 rounded-full ${resource.bgColor} 
                  ${hoveredCard === index ? 'animate-pulse' : ''}`}>
                  {/* Ripple Effect Circles */}
                  {hoveredCard === index && (
                    <>
                      <div className={`absolute inset-0 rounded-full ${resource.bgColor} animate-ping opacity-30`}></div>
                      <div className={`absolute inset-0 rounded-full ${resource.bgColor} animate-ping opacity-20 delay-150`} style={{animationDuration: '2s'}}></div>
                    </>
                  )}
                  {resource.icon}
                </div>
                
                <h3 className={`text-2xl font-bold text-gray-900 mb-4 text-center transition-all duration-500 
                  ${hoveredCard === index ? 'transform scale-110' : ''}`}>
                  {resource.title}
                </h3>
                
                <div className={`text-gray-600 text-center transition-all duration-500 max-w-xs mx-auto
                  ${hoveredCard === index ? 'opacity-90' : 'opacity-70'}`}>
                  {resource.description}
                </div>
              </div>
              
              {/* Access Button that Appears on Hover */}
              <div className={`absolute bottom-6 left-0 right-0 flex justify-center transition-all duration-500 transform
                ${hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button className={`${resource.btnColor} text-white px-6 py-2 rounded-full font-medium flex items-center space-x-2 hover:shadow-md transition-shadow`}>
                  <span>Access Now</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Interactive Corner Arrow */}
              <div className={`absolute top-6 right-6 transform transition-all duration-500
                ${hoveredCard === index ? 'rotate-45 translate-x-0' : 'translate-x-6'}`}>
                <ArrowRight className={`w-6 h-6 ${hoveredCard === index ? 'text-gray-800' : 'text-gray-400'}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-2xl animate-scaleIn">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
              onClick={handleClosePopup}
            >
              <X className="w-6 h-6" />
            </button>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Access {selectedResource.title}
            </h3>
            <p className="text-gray-600 mb-6">
              Please fill out the form below to access this resource.
            </p>
            
            {submitStatus ? (
              <div className={`p-4 mb-4 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {submitStatus.success ? (
                      <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                    {submitStatus.success && <p className="text-sm mt-1">Redirecting you to the resource...</p>}
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit & Access Resource'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Add CSS keyframes for popup animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default StudyResources;