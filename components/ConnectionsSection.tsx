"use client"

import Image from "next/image"

export default function ConnectionsSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <nav className="mb-4">
        <p className="text-sm">Connections</p>
      </nav>
      
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-[#000080] lg:text-5xl">
            Partnering with Top Institutions Worldwide
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Let&apos;s Study Portal, we have forged strong partnerships with a diverse range of universities and institutions across the globe. This extensive network ensures that students have access to quality education and a variety of programs tailored to their aspirations.
          </p>
        </div>
        
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/45.png?height=800&width=1200"
            alt="World map showing global institutional connections"
            width={1200}
            height={800}
            className="object-cover grayscale contrast-125"
          />
        </div>
      </div>
    </section>
  )
}