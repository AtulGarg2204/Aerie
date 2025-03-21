import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin, Youtube, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img 
                src="/aerie_nobg.png" 
                alt="Aerie Academy Logo" 
                className="h-20 mb-4"
              />
              <p className="text-gray-600 mt-4">
                Empowering aspirants to achieve excellence in GATE examinations.
              </p>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-900">Connect With Us</h4>
              <div className="flex space-x-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="/courses" className="text-gray-600 hover:text-indigo-600 transition-colors">Our Courses</a></li>
              <li><a href="/terms" className="text-gray-600 hover:text-indigo-600 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Our Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Our Courses</h4>
            <ul className="space-y-3">
              <li><a href="/courses/all" className="text-gray-600 hover:text-indigo-600 transition-colors">View All Courses</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-600">123 Education Lane, Knowledge Park, New Delhi - 110001, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-600 hover:text-indigo-600 transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                <a href="mailto:info@aerieacademy.com" className="text-gray-600 hover:text-indigo-600 transition-colors">info@aerieacademy.com</a>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 mr-3 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">WhatsApp: +91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;