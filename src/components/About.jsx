import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-600 inline-block pb-2">
            About Me
          </h2>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am an Information Technology student and a passionate Mobile Application Developer specialized in Flutter and Dart.
            I focus on writing clean, maintainable code and strictly follow Clean Architecture principles to build scalable applications.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            My expertise includes API integration, Bloc state management, Hive local storage, and Firebase Authentication.
            I thrive in team-based environments and have successfully led projects, ensuring quality and collaboration.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <span className="block font-bold text-blue-700">Flutter</span>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <span className="block font-bold text-blue-700">Dart</span>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <span className="block font-bold text-blue-700">Firebase</span>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <span className="block font-bold text-blue-700">Bloc</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
