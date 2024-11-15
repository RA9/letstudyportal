'use client'

import { Search, MapPin, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export function EducationPortalComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Start your Education journey right here.
          </h1>
          <p className="text-lg mb-6">
            At Let's Study Portal, we empower international students to navigate their educational journey with ease. Our
            platform simplifies the process of finding schools, comparing programs, and managing essential tasks,
            ensuring a seamless experience.
          </p>
          <div className="relative mx-4">
            <Input
              type="text"
              placeholder="Search schools, universities, courses..."
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image 
            width={400}
            height={300}
           src="/library.jpg" alt="Colorful pencils" className="w-full h-auto" />
        </div>
      </section>

      {/* Featured School Section */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mr-2 text-blue-500"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              Featured School
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0 md:pr-4">
              <h2 className="text-2xl font-bold mb-2">Chrisland High School, Lagos</h2>
              <p className="mb-4">Empowering minds, inspiring excellence in an environment for high expectations.</p>
              <div className="space-x-2">
                <Button>Get Info</Button>
                <Button variant="outline">Explore School Website</Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MT4fJCbXVU0Yti7x8AKKsxP7IkagXo.png"
                alt="Chrisland High School"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* School Search Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Get more info, or apply to schools directly on Let's study Portal.
        </h2>
        <p className="mb-6">
          Looking for the perfect Institution? Discover recommended schools tailored to you, complete with trusted reviews,
          available programs, and up-to-date rankings on Let's Study.
        </p>
        <div className="flex mb-6">
          <Button variant="outline" className="mr-2">
            <MapPin className="mr-2 h-4 w-4" /> Search by Location
          </Button>
          <Button variant="outline">
            Field of study
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Brighton', 'Cambridge', 'Oxford'].map((university) => (
            <Card key={university}>
              <CardContent className="p-4">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt={`University of ${university}`}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">University of {university}</h3>
                <p className="text-sm mb-4">
                  Get a seamless application when you apply at Let's study portal to {university} University
                </p>
                <div className="flex justify-between gap-2">
                  <Button>Apply to School</Button>
                  <Button variant="outline">
                    School Website <ChevronRight size="sm" className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AI-Powered Suggestions Section */}
      <section className="flex flex-col md:flex-row items-center bg-gray-100 rounded-lg p-8">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Find Your Ideal School with AI-Powered Suggestions
          </h2>
          <p className="mb-6">
            Let our AI guide you to the perfect fit for your educational journey. Discover opportunities that fit your goals,
            preferences, and future plans.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-bold mb-2">Time Savings</h3>
              <p className="text-sm">Quickly compare schools and programs to find the right fit for you.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Best Options</h3>
              <p className="text-sm">Access comprehensive information to make informed decisions about your education.</p>
            </div>
          </div>
          <div className="space-x-2">
            <Button>Get recommendations</Button>
            <Button variant="outline">
              Sign Up <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CkxB8BpQYStUJfCwwLnkajGWs7QU1C.png"
            alt="Student using laptop"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>
    </div>
  )
}