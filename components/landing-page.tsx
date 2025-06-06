"use client";

import { Header } from "./landing/Header";
import { BackgroundPattern } from "./landing/BackgroundPattern";
import { HeroSection } from "./landing/HeroSection";
import { FeatureSection } from "./landing/FeatureSection";

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern />

      {/* Main Content */}
      <HeroSection />
      <FeatureSection />
    </div>
  );
}

export default LandingPageComponent;
