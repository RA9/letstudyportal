"use client";

import React, { useState } from "react";
import { Phone, Mail, Globe, ChevronDown } from "lucide-react";

const SchoolProfile = () => {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = [
    "About",
    "Admission requirements",
    "Programs Offered",
    "Fees & Payment",
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  const reviews = [
    {
      name: "Christabel Chioma",
      rating: 4.5,
      text: "Excellent school with dedicated teachers and a vibrant learning environment.",
    },
    {
      name: "Samuel M",
      rating: 4.0,
      text: "Excellent school with dedicated teachers and a vibrant learning environment.",
    },
  ];

  const TabContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                About the School
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Greenfield Comprehensive Schools nursery and primary section was
                established in September 24th 1992, while the secondary School
                started in 1996.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                The ultimate aim of the management is to give children sound and
                qualitative education.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                It is a co-educational school catering for pupils and students
                from any Nationality, ethnic, religious or state of origin.
              </p>
            </div>
          </div>
        );

      case "Admission requirements":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Admission requirements
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Submission Of Completed Admission Form
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Academic Transcripts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Birth Certificate
                </li>
              </ul>
            </div>
          </div>
        );

      case "Programs Offered":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Programs Offered
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Primary Schools
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Secondary Schools
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  A-Level
                </li>
              </ul>
            </div>
          </div>
        );

      case "Fees & Payment":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Fees & Payments
              </h3>
              <p className="text-gray-700 text-sm">
                Contact the school directly for detailed information about fees
                and payment options.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GS</span>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-xl font-semibold text-gray-900">
                    Greenfield School
                  </h1>
                  <button className="flex items-center text-sm text-gray-600 border border-gray-300 rounded px-2 py-1">
                    Year <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center">{renderStars(3.5)}</div>

                  <div className="flex items-center space-x-2">
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      Verified
                    </span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                      WAEC
                    </span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                      American
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-1">
                  WAEC and NECO candidates • Government Approved
                </p>
              </div>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm font-medium border-b-2 ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <TabContent />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Ratings & Reviews */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Ratings & Reviews
              </h3>

              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center">{renderStars(3.5)}</div>
                <span className="text-lg font-semibold text-gray-900">3.5</span>
              </div>

              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium text-gray-900 text-sm">
                        {review.name}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-sm text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Contact Information
              </h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">0802 063 1277</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">
                    info@greenland.com
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-700">website.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolProfile;
