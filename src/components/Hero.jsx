import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img
              src={profileImg}
              alt="Merna Bahgat"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Merna Bahgat Naeem Rizk
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-8">
            Mobile Application Developer
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors shadow-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
