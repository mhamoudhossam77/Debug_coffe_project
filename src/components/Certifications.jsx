import React from 'react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-600 inline-block pb-2">
            Certifications
          </h2>
        </div>
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Flutter Camp</h3>
            <p className="text-blue-600 font-medium text-lg mb-2">Certificate of Completion</p>
            <p className="text-gray-700 mb-4">
              <span className="font-semibold">Recipient:</span> Merna Bahgat Naeem Rizk
            </p>
            <p className="text-gray-600 leading-relaxed">
              Completed an intensive Flutter training program focused on mobile application development, covering advanced concepts, state management, and real-world project development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
