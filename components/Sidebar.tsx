"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

import { BookOpen, Calendar, Home, LifeBuoy, Link, LogOut, MessageSquare, Plane, Search, Settings } from 'lucide-react'



export const Sidebar = () => {

    const router = useRouter()

    const redirectLink = (route: string) => {
        return router.push(route)
    }

    return (
        <>
            <aside className="flex w-64 flex-col bg-blue-500 p-4 text-white">
            <div className="mb-8 flex items-center gap-2 text-xl font-bold">
              <div className="rounded-full bg-white p-2">
                <div className="h-6 w-6 text-blue-500">LS</div>
              </div>
              Let&apos;s Study
            </div>

            <nav className="flex flex-1 flex-col gap-2">
              <Button onClick={() => redirectLink("/dashboard")} variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button onClick={() => redirectLink("/schools")} variant="ghost" className="justify-start text-white hover:bg-blue-600">
                <BookOpen className="mr-2 h-4 w-4" />
                Saved Schools
              </Button>
              <Button onClick={() => redirectLink("/application")} variant="ghost" className="justify-start text-white hover:bg-blue-600">
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
        </>
    )
}