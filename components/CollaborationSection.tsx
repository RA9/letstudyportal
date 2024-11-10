"use client"

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const CollaborationSection = () => {
  return (
    <section className="flex justify-center items-center bg-gray-50 py-8 md:py-24 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Section: Text Content */}
        <div className="md:w-1/2 space-y-4">
          <div className="flex items-center text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.93 0-5.67-1.58-7.14-4.04 1.26-2.25 4.47-3.89 7.14-3.89 2.67 0 5.87 1.64 7.14 3.89C17.67 18.42 14.93 20 12 20zm0-8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
            </svg>
            <h4 className="text-xl font-bold">Empowering Collaboration</h4>
          </div>
          <h2 className="text-4xl font-bold text-blue-900 leading-tight">
            Uniting Schools and Partners for a Brighter Future
          </h2>
          <p className="text-gray-700 text-lg">
            Our Mission is to simplify and enhance student mobility globally by providing innovative, technology-driven solutions that ensure seamless educational journeys.
          </p>
          <div className="flex gap-4">
            <Button variant={"outline"}>
              Search
            </Button>
            <Button variant={"ghost"} className="text-blue-600 hover:text-blue-800 font-semibold">
              Explore
              <span className="ml-2">&rarr;</span>
            </Button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="md:w-1/2">
          <Image
            src="/22.png"  // Replace with the actual image path
            width={800}
            height={1400}
            alt="Students collaborating"
          />
        </div>

      </div>
    </section>
  );
};

export default CollaborationSection;
