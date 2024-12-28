import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white py-6'>
      <div className='container mx-auto px-4'>
        <p className='text-center text-lg font-semibold'>
          <a
            href="https://visioncare.lk/" // Add your YouTube channel link here
            target="_blank"
            rel="noopener noreferrer"
            className='hover:text-indigo-500 transition-colors duration-300'
            title="Youtube Channel"
          >
            Visit To ICare 
          </a>
        </p>
        <p className='text-center text-sm text-gray-400 mt-2'>
          &copy; {new Date().getFullYear()} Dynamic Coding with Amit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
