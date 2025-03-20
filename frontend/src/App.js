import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';

import FindCourse from './components/FindCourse';
import './App.css';
import CourseFeatures from './components/CourseFeatures';
import StudyResources from './components/StudyResources';
import YouTube from './components/Youtube';
import Teachers from './components/Teachers';
import PaymentPlans from './components/PaymentPlans';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroBanner />
        <FindCourse/>
        <CourseFeatures/>
        <StudyResources/>
        <YouTube/>
        <Teachers/>
        <PaymentPlans/>
        <SuccessStories/>
        <Testimonials/>
        <FAQ/>
        <CallToAction/>
        <Footer/>
      </main>
   
    </div>
  );
}

export default App;