"use client"

import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

export default function MissionVisionSection() {
    return (
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/22.png?height=300&width=300"
                  alt="Students collaborating on laptop"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/23.png?height=300&width=300"
                  alt="Compass in hand"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/3.png?height=400&width=600"
                alt="Educational institution building"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
  
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-[#000080] lg:text-5xl">
              Empowering Students to discover, access, and succeed in international education.
            </h1>
  
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Our Mission</h2>
                <p className="text-gray-600">
                  Our Mission is to simplify and enhance student mobility globally by providing innovative,
                  technology-driven solutions that ensure seamless educational journeys.
                </p>
              </div>
  
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Our Vision</h2>
                <p className="text-gray-600">
                  Our Vision is to become the leading global platform that transforms how students discover,
                  access, and succeed in international education through seamless solutions for study options,
                  accommodations, visa processes, and travel.
                </p>
              </div>
            </div>
  
            <div>
              <Button size="lg" className="bg-[#000080] hover:bg-[#000060] text-white">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
