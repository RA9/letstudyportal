"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { url } from "inspector"
import { Target, Search, Users, Building2, GraduationCap, HandshakeIcon } from 'lucide-react'
import Image from "next/image"

export default function ServicesComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-20" style={{
            backgroundImage: "url('/44.png?height=1080&width=1920')",
      }}>
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-[#000080] md:text-5xl">Your Study Journey</h1>
              <p className="text-lg text-gray-600">
                Start your educational journey with us and discover opportunities worldwide
              </p>
              <Button size="lg" className="bg-[#000080]">Get Started</Button>
            </div>
            {/* <div className="flex justify-center">
              <Target className="h-40 w-40 text-blue-600" />
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-12 text-[#000080]">
            Empowering Collaboration Between Schools and Partners for a Brighter Future
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-12 text-[#000080]">
            Join Our Community: Collaborate with Schools and Partners Effectively
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {communitySteps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                {step.icon}
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#000080]">
                Streamlined Visa Approval for Students & Accommodation for Success
              </h2>
              <p className="text-gray-600">
                We provide special guidance to help secure student visas and find suitable accommodation,
                ensuring a smooth transition into international education.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="/3.png?height=400&width=600"
                alt="Graduation ceremony"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-center mb-12 text-[#000080]">FAQs</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg">
                <AccordionTrigger className="px-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Streamlined Application Process",
    description: "Experience a simplified and efficient application process for international education.",
    image: "/library.jpg?height=300&width=400",
  },
  {
    title: "Efficient Processing Time",
    description: "Benefit from our optimized processing system for faster application handling.",
    image: "/library.jpg?height=300&width=400",
  },
  {
    title: "Extensive Partner Network",
    description: "Connect with our vast network of educational institutions worldwide.",
    image: "/library.jpg?height=300&width=400",
  },
]

const communitySteps = [
  {
    icon: <Search className="h-12 w-12 mx-auto text-blue-600" />,
    title: "Search Opportunities",
    description: "Explore available opportunities that match your preferences",
  },
  {
    icon: <Users className="h-12 w-12 mx-auto text-blue-600" />,
    title: "Engage with Partners",
    description: "Connect and communicate with educational institutions",
  },
  {
    icon: <Building2 className="h-12 w-12 mx-auto text-blue-600" />,
    title: "Build Partnerships",
    description: "Establish lasting relationships with schools and partners",
  },
]

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We provide comprehensive support for international education, including application processing, visa assistance, accommodation guidance, and partner institution connections.",
  },
  {
    question: "How long does the process take?",
    answer: "The processing time varies depending on the specific requirements and destination country, but we strive to complete most applications within 4-6 weeks.",
  },
  {
    question: "Is there a fee?",
    answer: "Our basic consultation services are free. Specific service fees vary based on the type of assistance required and destination country.",
  },
]