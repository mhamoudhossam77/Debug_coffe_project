import React from 'react';
import certificateImg from '../assets/certificate.jpg';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-600 inline-block pb-2">
            Certifications
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-xl border border-gray-100 transition-transform duration-300 hover:scale-[1.02]">
          <div className="aspect-video relative overflow-hidden group">
            <img
              src={certificateImg}
              alt="Flutter Camp Certificate of Completion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>

          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Flutter Camp</h3>
                <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Certificate of Completion</p>
              </div>
              <div className="mt-4 md:mt-0 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700">
                <span className="font-bold text-gray-900">Recipient:</span> Merna Bahgat Naeem Rizk
              </p>
              <p className="text-gray-600 leading-relaxed italic">
                "Completed an intensive Flutter training program focused on mobile application development, covering advanced concepts, state management, and real-world project development."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
