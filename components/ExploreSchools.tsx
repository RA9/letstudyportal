"use client";

import React, { useState } from "react";
import { Heart, Grid3X3, Menu } from "lucide-react";

const SchoolExplorer = () => {
  const [viewMode, setViewMode] = useState("grid");

  const schools = [
    {
      id: 1,
      name: "Anderson University",
      image: "/api/placeholder/300/200",
      rating: 4.5,
      category: "AI RECOMMENDATION",
      isRecommended: true,
    },
    {
      id: 2,
      name: "Anderson University",
      image: "/api/placeholder/300/200",
      rating: 4.2,
      category: "AI RECOMMENDATION",
      isRecommended: true,
    },
    {
      id: 3,
      name: "Anderson University",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      category: "AI RECOMMENDATION",
      isRecommended: true,
    },
    {
      id: 4,
      name: "Anderson University",
      image: "/api/placeholder/300/200",
      rating: 4.3,
      category: "PARTNERED SCHOOLS",
      isRecommended: false,
    },
    {
      id: 5,
      name: "Anderson University",
      image: "/api/placeholder/300/200",
      rating: 4.6,
      category: "PARTNERED SCHOOLS",
      isRecommended: false,
    },
    {
      id: 6,
      name: "Anderson University",
      image: "/api/placeholder/300/200",
      rating: 4.4,
      category: "PARTNERED SCHOOLS",
      isRecommended: false,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  const SchoolCard = ({ school }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="relative">
        <img
          src={school.image}
          alt={school.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-medium text-gray-900 text-sm">{school.name}</h3>
          <div className="flex items-center ml-2">
            {renderStars(school.rating)}
          </div>
        </div>

        <button className="w-full mt-3 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition-colors">
          Apply to School
        </button>
      </div>
    </div>
  );

  const recommendedSchools = schools.filter((school) => school.isRecommended);
  const partneredSchools = schools.filter((school) => !school.isRecommended);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Explore Schools
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Explore up to 1000+ Schools across the globe
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <select className="text-sm border border-gray-300 rounded px-3 py-1 bg-white">
                <option>Year</option>
              </select>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <Menu className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <p className="text-sm text-gray-600 mb-4">
              List of schools/universities with comparative stats, facts,
              reviews, rankings, etc.
            </p>

            <div className="flex flex-wrap gap-4">
              <select className="text-sm border border-gray-300 rounded px-3 py-2 bg-white min-w-32">
                <option>Fees</option>
              </select>
              <select className="text-sm border border-gray-300 rounded px-3 py-2 bg-white min-w-32">
                <option>Location</option>
              </select>
              <select className="text-sm border border-gray-300 rounded px-3 py-2 bg-white min-w-40">
                <option>Level of education</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Recommendations */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-blue-600 mb-6">
            AI RECOMMENDATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </div>

        {/* Partnered Schools */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Partnered Schools
            </h2>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Level of education</span>
              <select className="text-sm border border-gray-300 rounded px-3 py-1 bg-white">
                <option>Location</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partneredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolExplorer;
