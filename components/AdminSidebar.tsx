"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Image from "next/image"

import { BookOpen, Calendar, Home, User, Link, LogOut, MessageSquare, Plane, Search, Settings } from 'lucide-react'



export const AdminSidebar = () => {

    const router = useRouter()

    const redirectLink = (route: string) => {
        return router.push(route)
    }

    return (
        <>
            <aside className="flex w-64 flex-col bg-primary p-4 text-white">
            <div className="mb-8 flex items-center gap-2 text-xl font-bold">
             {/* <Image 
                src="/sch-1.jpg?height=1080&width=1080"
                alt="Students studying"
                height={32}
                width={32}
                objectFit="cover"
                priority
                className="h-8 w-8 text-blue-600"
              /> */}

                <div className="rounded-lg bg-white p-2">
                    <div className="h-6  text-primary">LS Portal Admin</div>
                </div>
            </div>

            <nav className="flex flex-1 flex-col gap-2">
              <Button onClick={() => redirectLink("/dashboard")} variant="ghost" className="justify-start text-white hover:bg-zinc-500">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
              <Button onClick={() => redirectLink("/manage-schools")} variant="ghost" className="justify-start text-white hover:bg-zinc-500">
                <BookOpen className="mr-2 h-4 w-4" />
                Manage Schools
              </Button>
              <Button onClick={() => redirectLink("/application")} variant="ghost" className="justify-start text-white hover:bg-zinc-500">
                <Calendar className="mr-2 h-4 w-4" />
                Manage Applications
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-zinc-500">
                <User className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-zinc-500">
                <Plane className="mr-2 h-4 w-4" />
                Visa Assistance
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-zinc-500">
                <Home className="mr-2 h-4 w-4" />
                Accommodation
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-zinc-500">
                <BookOpen className="mr-2 h-4 w-4" />
                Resources
              </Button>
              <Button variant="ghost" className="justify-start text-white hover:bg-zinc-500">
                <MessageSquare className="mr-2 h-4 w-4" />
                Support Chat
              </Button>
            </nav>

            <Button variant="ghost" className="justify-start text-white hover:bg-zinc-500">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </aside>
        </>
    )
}