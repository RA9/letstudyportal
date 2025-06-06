"use client";

import { Search } from "lucide-react";

export function HeroSection() {
  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Global Study
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Journey Starts Here!
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              LetStudyPortal connects students to top universities, offering
              AI-driven school recommendations, easy applications, and study
              loans for Nigerian students
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-white rounded-xl shadow-lg border border-gray-200 p-2 max-w-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-3 flex-1 px-4 py-3">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Find Your Perfect School & Program"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
              Search
            </button>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="space-y-6">
              {/* Mock Browser Window */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded p-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">👨‍🏫</span>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-20"></div>
                      <div className="h-2 bg-gray-100 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-100 rounded"></div>
                    <div className="h-2 bg-blue-100 rounded w-3/4"></div>
                    <div className="h-2 bg-blue-100 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Students Illustration */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">👨‍🎓</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">👩‍🎓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white font-bold">📚</span>
          </div>
          <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-sm">✨</span>
          </div>
        </div>
      </div>
    </main>
  );
}
