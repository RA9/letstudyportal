"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Lightbulb, Circle } from "lucide-react";

const TestimonialsAndNewsletter = () => {
  const testimonials = [
    {
      text: "I had an overwhelming amount of coursework and assignments to complete. This service helped me manage everything efficiently.",
      author: "Advocate A., MBA Student",
    },
    {
      text: "The support I received was exceptional. The team helped me understand complex concepts and excel in my studies.",
      author: "Advocate B., MBA Student",
    },
    {
      text: "Outstanding service! The quality of work exceeded my expectations and helped boost my academic performance significantly.",
      author: "Advocate C., MBA Student",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white">
      {/* Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Student's Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from real students who have used our service to improve their
            academic performance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white shadow-sm border-0 hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {testimonial.text}
                </p>

                {/* Author */}
                <p className="text-sm font-medium text-gray-900">
                  {testimonial.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden rounded-lg">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <Circle className="absolute top-10 left-10 w-20 h-20 text-blue-400 opacity-20" />
            <Circle className="absolute bottom-10 right-10 w-16 h-16 text-blue-400 opacity-20" />
            <div className="absolute top-20 right-1/4 w-12 h-12 border-2 border-blue-400 opacity-20 rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-8 h-8 border-2 border-blue-400 opacity-20 rounded-full"></div>
          </div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-400 p-3 rounded-full">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Our Newsletter
              </h2>

              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Subscribe now for the latest updates and insights on educational
                opportunities and resources.
              </p>

              {/* Newsletter Signup Form */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white border-0 h-12 text-gray-900 placeholder:text-gray-500"
                />
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold h-12 px-8 border-0">
                  SIGN UP
                </Button>
              </div>

              <p className="text-blue-200 text-sm mt-4">
                We respect your privacy and will never spam you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsAndNewsletter;
