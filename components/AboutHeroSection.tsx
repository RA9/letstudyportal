"use client"

import React from 'react';

const AboutHeroSection = () => {
  return (
    <div className="relative h-[600px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('/47.png')" }}>
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark overlay */}

      <div className="relative container mx-auto flex h-full items-center px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
          
          {/* Left Section (Text) */}
          <div className="text-white space-y-4 md:w-1/2">
            <h4 className="text-lg font-semibold">Explore</h4>
            <h1 className="text-5xl font-bold">Your Study Journey</h1>
          </div>

          {/* Right Section (Description & Buttons) */}
          <div className="space-y-4 md:w-1/2 text-white">
            <p className="text-lg">
              At Let's Study Portal, we empower international students to navigate their educational journey with ease. Our platform simplifies the process of finding schools, comparing programs, and managing essential tasks, ensuring a seamless experience.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">Learn More</a>
              <a href="#" className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
