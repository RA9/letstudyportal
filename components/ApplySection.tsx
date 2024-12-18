"use client"

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

function ApplySection() {
  return (
    <div className="bg-gray-50 p-8 md:p-16 flex flex-col md:flex-row rounded-lg shadow-lg items-center space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Content */}
      <div className="flex-1 space-y-4 text-center md:text-left">
        <h1 className="text-xl md:text-4xl font-bold text-blue-800">
          Apply Directly to Verified Partnered Schools for a Seamless Experience
        </h1>
        <p className="text-gray-600">
          The Let&apos;s Study Portal simplifies your search for educational opportunities. Save time and find the best options tailored to your needs.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 pt-16">
          {/* Feature 1 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Time Savings</h3>
            <p className="text-gray-600">Quickly compare schools and programs to find the right fit for you.</p>
          </div>
          {/* Feature 2 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">Best Options</h3>
            <p className="text-gray-600">Access comprehensive information to make informed decisions about your education.</p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex space-x-4 pt-8">
          <Button variant={"blue"}>
            Learn More
          </Button>
          <Button variant={"outline"} className='text-blue-800'>
            <span>Sign Up</span>
            <span>➔</span>
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <Image 
          src="/pp.png" 
          width={800}
          height={800}
          alt="Educational Setting" 
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

export default ApplySection;
