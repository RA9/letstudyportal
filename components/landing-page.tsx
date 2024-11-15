'use client'

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import EducationalGoalsSection from "./EducationGoalSection"
import EducationalJourneySteps from "./EducationalJourney"
import ApplySection from "./ApplySection"
import ApplyVerifiedPartnersSection from "./ApplyVerifiedPartners"
import Link from "next/link"

 

export function LandingPageComponent() {
  return (
        <>
          <section 
            className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/5.png?height=1080&width=1920')",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="container px-4 md:px-6 relative">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Discover Your Path to Education Today
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                    Explore universities, compare programs, and find the perfect educational opportunity for your future.
                  </p>
                </div>
                <div className="space-x-2 md:space-x-4">
                  <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-700/90">
                   <Link href="/register">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-default text-white border-white hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <EducationalGoalsSection />

          <EducationalJourneySteps />

          <ApplySection />


          <ApplyVerifiedPartnersSection />

          <section className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter text-[#00137B] sm:text-4xl md:text-5xl">
                  Stay Updated with Our Newsletter
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl py-6">
                  Subscribe now for the latest updates and insights on educational opportunities and resources.
                </p>
                <div className="w-full max-w-sm space-y-2 py-8 md:py-12">
                  <Input
                    type="email"
                    placeholder="Your Email Here"
                    className="w-full"
                  />
                  <Button variant={"blue"} className="w-full">Join Us</Button>
                  <p className="text-xs text-gray-500">
                    By clicking Join Us, you agree to our Terms and Conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
  )
}
