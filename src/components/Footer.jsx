import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Merna Bahgat Naeem Rizk. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Built with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
