"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Image from "next/image"

import Link from "next/link"

import { BookOpen, Calendar, Home, User, LogOut, MessageSquare, Plane, Search, Settings } from 'lucide-react'



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
                    <Link href="/dashboard" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded">
                        <Home className="mr-2 h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link href="/manage-schools" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Manage Schools
                    </Link>
                    <Link href="/application" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded">
                        <Calendar className="mr-2 h-4 w-4" />
                        Manage Applications
                    </Link>
                    <Link href="/manage-users" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded">
                        <User className="mr-2 h-4 w-4" />
                        Manage Users
                    </Link>
                    <Link href="/visa-assistance" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded">
                        <Plane className="mr-2 h-4 w-4" />
                        Visa Assistance
                    </Link>
                    <Link href="/accommodation" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded">
                        <Home className="mr-2 h-4 w-4" />
                        Accommodation
                    </Link>
                    <Link href="/resources" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Resources
                    </Link>
                    <Link href="/support-chat" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Support Chat
                    </Link>
                </nav>

                <Link href="/logout" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Link>
            </aside>
        </>
    )
}