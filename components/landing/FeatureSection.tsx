"use client";

import { BookOpen, DollarSign, Shield } from "lucide-react";

export function FeatureSection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Compare & Apply */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Compare & Apply</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Easily compare tuition, programs, and living costs before
                applying.
              </p>
            </div>
          </div>

          {/* Study Loan */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Study Loan</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Access loan options and save towards your tuition need fast.
              </p>
            </div>
          </div>

          {/* Verified Schools */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Verified Schools</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Get access to top universities with a seamless application
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
