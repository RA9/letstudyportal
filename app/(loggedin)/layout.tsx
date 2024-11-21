import React from 'react';
import localFont from "next/font/local";
import "../globals.css";

import { Bell, BookOpen, Calendar, Home, LifeBuoy, LogOut, MessageSquare, Plane, Search, Settings } from 'lucide-react'
import { Bar, BarChart, Line, LineChart } from "recharts"
import { Button } from "@/components/ui/button"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen bg-gray-50/50">
          {/* Sidebar */}
          <aside className="flex w-64 flex-col bg-blue-500 p-4 text-white">
            <div className="mb-8 flex items-center gap-2 text-xl font-bold">
              <div className="rounded-full bg-white p-2">
                <div className="h-6 w-6 text-blue-500">LS</div>
              </div>
              Let&apos;s Study
            </div>

            <nav className="flex flex-1 flex-col gap-2">
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <BookOpen className="mr-2 h-4 w-4" />
                Saved Schools
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <Calendar className="mr-2 h-4 w-4" />
                Applications
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <LifeBuoy className="mr-2 h-4 w-4" />
                Student Support
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <Plane className="mr-2 h-4 w-4" />
                Visa Assistance
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <Home className="mr-2 h-4 w-4" />
                Accommodation
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <BookOpen className="mr-2 h-4 w-4" />
                Resources
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <MessageSquare className="mr-2 h-4 w-4" />
                Support Chat
              </Button>
            </nav>

            <Button variant="ghost" className="justify-start text-white hover:bg-blue-600">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </aside>
          {/* Main Content */}
          <main className="flex-1 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}