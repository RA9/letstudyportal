'use client'

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Map, { Marker } from 'react-map-gl'

export default function ContactSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <nav className="mb-4">
        <p className="text-sm">Connect</p>
      </nav>
      
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-[#000080] lg:text-5xl">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600">
              We&apos;re here to assist you with any inquiries.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-blue-500" />
                <h2 className="font-semibold">Email</h2>
              </div>
              <p className="text-gray-600">Reach us at</p>
              <Link href="mailto:info@letstudyportal.com" className="text-blue-600 hover:underline">
                info@letstudyportal.com
              </Link>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-blue-500" />
                <h2 className="font-semibold">Phone</h2>
              </div>
              <p className="text-gray-600">Call us anytime at</p>
              <Link href="tel:234.(555).123-4567" className="text-blue-600 hover:underline">
                234.(555).123-4567
              </Link>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-500" />
                <h2 className="font-semibold">Office</h2>
              </div>
              <p className="text-gray-600">Lagos, Nigeria</p>
            </div>

            <Link 
              href="#map" 
              className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-gray-700"
            >
              Find Us
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        <div id="map" className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Map
            mapboxAccessToken="pk.eyJ1IjoibXJodW1ibGUiLCJhIjoiY20zYm04MWUzMWdmdzJqc2NyYTE3b3docyJ9.0xmQSE7du_kFV_Gwi3IsXA"
            initialViewState={{
              longitude: 3.3792,  // Lagos, Nigeria longitude
              latitude: 6.5244,   // Lagos, Nigeria latitude
              zoom: 11
            }}
            style={{width: '100%', height: '100%'}}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker longitude={3.3792} latitude={6.5244} color="red" />
          </Map>
        </div>
      </div>
    </section>
  )
}