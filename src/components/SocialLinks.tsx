'use client';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="fixed bottom-8 right-8 z-20 flex gap-4">
      <a
        href="https://x.com/tadashikumazawa"
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-all duration-300 hover:scale-110"
      >
        <div className="relative group">
          <FaXTwitter 
            className="w-8 h-8 text-[#ff1493] transition-all duration-300 
                     group-hover:text-[#ff69b4] dark:text-[#ff1493] dark:group-hover:text-[#ff69b4]" 
          />
          <div className="absolute inset-0 rounded-full blur-lg bg-[#ff1493] opacity-30 
                        group-hover:opacity-70 transition-opacity duration-300"></div>
        </div>
      </a>
      <a
        href="https://linkedin.com/in/tadashikumazawa"
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-all duration-300 hover:scale-110"
      >
        <div className="relative group">
          <FaLinkedin 
            className="w-8 h-8 text-[#ff1493] transition-all duration-300 
                     group-hover:text-[#ff69b4] dark:text-[#ff1493] dark:group-hover:text-[#ff69b4]" 
          />
          <div className="absolute inset-0 rounded-full blur-lg bg-[#ff1493] opacity-30 
                        group-hover:opacity-70 transition-opacity duration-300"></div>
        </div>
      </a>
    </div>
  );
};

export default SocialLinks; 