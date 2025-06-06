"use client";

// import type { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";

import { Header } from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Header component now handles its own toggle state
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
