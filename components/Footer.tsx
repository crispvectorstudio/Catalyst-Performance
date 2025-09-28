import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-opacity-30 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-6 text-center text-gray-500">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Catalyst Performance. All Rights Reserved.
        </p>
         <p className="text-xs mt-2">
            Services are owned and operated by New Beginnings Therapy Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;