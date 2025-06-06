"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, GraduationCap } from "lucide-react";

const PopularSchoolsSection = () => {
  const schools = [
    {
      id: 1,
      name: "University of Brighton",
      image: "/sch-1.jpg",
      description:
        "University of Brighton offers students outstanding opportunities to study what really matters to them in beautiful campuses.",
      tags: ["Learn More", "Explore School Website"],
    },
    {
      id: 2,
      name: "University of Cambridge",
      image: "/sch-1.jpg",
      description:
        "University of Cambridge offers students outstanding opportunities to study what really matters to them in beautiful campuses.",
      tags: ["Learn More", "Explore School Website"],
    },
    {
      id: 3,
      name: "University of Oxford",
      image: "/sch-1.jpg",
      description:
        "University of Oxford offers students outstanding opportunities to study what really matters to them in beautiful campuses.",
      tags: ["Learn More", "Explore School Website"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <GraduationCap className="w-8 h-8 text-orange-500" />
          <span className="text-blue-600">🎓</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Popular <span className="text-blue-600">Schools</span> &{" "}
          <span className="text-blue-600">Programs</span>
        </h1>
        <p className="text-gray-600">
          See the most popular courses among international students.
        </p>
      </div>

      {/* Schools Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {schools.map((school) => (
          <Card
            key={school.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={school.image}
                alt={school.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3 text-gray-800">
                {school.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {school.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {school.tags.map((tag, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Illustration */}
        <div className="relative">
          <div className="rounded-lg p-8 aspect-square flex items-center justify-center">
            <img
              src="/3.png"
              alt="Students studying"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Apply Directly to <span className="text-blue-600">Verified</span>
              <br />
              <span className="text-green-600">Partnered</span> Schools for a
              <br />
              Seamless Experience
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Direct Study Portal makes it easy to apply for admissions. Send
              your profile to multiple universities with just one click and
              track your application progress.
            </p>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Time Savings</h4>
              <p className="text-sm text-gray-600">
                Apply to multiple schools and programs in just a few right from
                the hub.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Get Updates</h4>
              <p className="text-sm text-gray-600">
                Access comprehensive information on study abroad opportunities
                and careers.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2">
            Sign Up
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularSchoolsSection;
