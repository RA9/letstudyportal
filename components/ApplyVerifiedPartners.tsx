"use client"

import Image from "next/image";

const ApplyVerifiedPartnersSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-10 md:p-20 rounded-lg">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h4 className="text-sm font-semibold text-gray-700 uppercase">Explore</h4>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800">
          Start Your Application Journey
        </h1>
        <p className="text-gray-600">
          Join us today to apply directly to your dream school with verified partner institutions.
        </p>

        <div className="flex gap-4 mt-8">
          <button className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
            Get Started
          </button>
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
        <Image
          src="/pp.png"
          width={800}
          height={1400}
          alt="Start your application"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ApplyVerifiedPartnersSection;
