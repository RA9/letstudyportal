'use client'

import React from 'react';
import Image from 'next/image';

function EducationalGoalsSection() {
  return (
    <div className="flex flex-col md:flex-row items-center p-8">
      {/* Text Section */}
      <div className="md:w-2/3 p-4 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800">
          Explore Top Learning Institutions and Programs Tailored to Your Educational Goals
        </h1>
        <p className="text-gray-700">
          At Let's Study Portal, we simplify your search for the ideal schools and programs. Our platform connects you with institutions that align perfectly with your academic and personal aspirations.
        </p>
        
        {/* Feature List */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {/* Tailored Choices */}
          <div className="flex flex-col items-start space-x-3">
            <div className="text-blue-600 text-3xl">📌</div>
            <div>
              <h3 className="text-lg font-semibold">Tailored Choices</h3>
              <p className="text-gray-600">Find programs that fit your interests and career goals effortlessly.</p>
            </div>
          </div>
          
          {/* Comprehensive Support */}
          <div className="flex flex-col items-start space-x-3">
            <div className="text-blue-600 text-3xl">🔄</div>
            <div>
              <h3 className="text-lg font-semibold">Comprehensive Support</h3>
              <p className="text-gray-600">Receive guidance throughout your journey from application to accommodation.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="md:w-1/3 p-4">
        <Image
          src="/ss.png" // Replace this with your image URL
          width={700}
          height={1400}
          alt="Stack of Books"
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default EducationalGoalsSection;
