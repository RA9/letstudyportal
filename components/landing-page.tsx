"use client";

import { BackgroundPattern } from "./landing/BackgroundPattern";
import { HeroSection } from "./landing/HeroSection";
import { FeatureSection } from "./landing/FeatureSection";
import PopularSchoolsSection from "./landing/PopularSchoolSection";
import TestimonialsAndNewsletter from "./landing/TestimonialsAndNewsletter";

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern />

      {/* Main Content */}
      <HeroSection />
      <FeatureSection />
      <PopularSchoolsSection />
      <TestimonialsAndNewsletter />
    </div>
  );
}

export default LandingPageComponent;
