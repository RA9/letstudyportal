"use client"

import React from 'react';

function EducationalJourneySteps() {
  return (
    <div className="p-8 text-center">
      {/* Header Section */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-700">Explore</h2>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800">
          Unlock Your Educational Journey with Ease
        </h1>
        <p className="text-gray-600">
          Using our portal is simple and efficient. Follow these steps to find and compare the best educational opportunities tailored to your needs.
        </p>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row justify-center mt-8 space-y-8 md:space-y-0 md:space-x-8">
        {/* Step 1 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="text-blue-500 text-4xl">🔍</div>
          <h3 className="text-xl font-semibold text-gray-800">Step 1: Search for Your Desired Program</h3>
          <p className="text-gray-600">Enter your preferred field of study to begin.</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="text-blue-500 text-4xl">🎓</div>
          <h3 className="text-xl font-semibold text-gray-800">Step 2: Compare Schools and Courses</h3>
          <p className="text-gray-600">Review options based on fees, duration, and living costs.</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center space-y-4">
          <div className="text-blue-500 text-4xl">☑️</div>
          <h3 className="text-xl font-semibold text-gray-800">Step 3: Make Informed Decisions</h3>
          <p className="text-gray-600">Choose the program that best fits your goals.</p>
        </div>
      </div>
    </div>
  );
}

export default EducationalJourneySteps;
