'use client'

import React from 'react';
import Image from 'next/image';

function EducationalGoalsSection() {
  return (
    <div className="flex bg-gray-50 flex-col md:flex-row items-center py-16 md:py-24 px-8">
      {/* Text Section */}
      <div className="md:w-2/3 p-4 space-y-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          Explore Top Learning Institutions and Programs Tailored to Your Educational Goals
        </h1>
        <p className="text-gray-700 text-lg">
          At Let&apos;s Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.
        </p>
        
        {/* Feature List */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 pt-16">
          {/* Tailored Choices */}
          <div className="flex flex-col items-start space-x-3 p-4">
            <div className="text-blue-600 text-3xl py-2 px-4">📌</div>
            <div>
              <h3 className="text-lg font-semibold py-4">Tailored Choices</h3>
              <p className="text-gray-600">Find programs that fit your interests and career goals effortlessly.</p>
            </div>
          </div>
          
          {/* Comprehensive Support */}
          <div className="flex flex-col items-start space-x-3 p-4">
            <div className="text-blue-600 text-3xl py-2 px-4">🔄</div>
            <div>
              <h3 className="text-lg font-semibold py-4">Comprehensive Support</h3>
              <p className="text-gray-600">Receive guidance throughout your journey from application to accommodation.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="p-4">
        <Image
          src="/pp.png" // Replace this with your image URL
          width={800}
          height={1600}
          alt="Stack of Books"
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default EducationalGoalsSection;
