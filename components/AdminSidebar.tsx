"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Image from "next/image"

import Link from "next/link"

import { BookOpen, Calendar, Home, User, LogOut, MessageSquare, Plane, Search, Settings, Menu, X } from 'lucide-react'
import { useState, useEffect } from "react"



export const AdminSidebar = () => {

    const router = useRouter()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const redirectLink = (route: string) => {
        router.push(route)
        setIsMobileMenuOpen(false) // Close mobile menu on navigation
    }

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebar = document.getElementById('admin-mobile-sidebar')
            const menuButton = document.getElementById('admin-mobile-menu-button')
            
            if (isMobileMenuOpen && sidebar && menuButton && 
                !sidebar.contains(event.target as Node) && 
                !menuButton.contains(event.target as Node)) {
                setIsMobileMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isMobileMenuOpen])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                id="admin-mobile-menu-button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary border border-primary rounded-lg shadow-sm hover:bg-primary/90 text-white"
            >
                {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </button>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" />
            )}

            {/* Sidebar */}
            <aside 
                id="admin-mobile-sidebar"
                className={`
                    flex w-64 flex-col bg-primary p-4 text-white
                    lg:relative lg:translate-x-0
                    fixed inset-y-0 left-0 z-40
                    transform transition-transform duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
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
                    <Link href="/dashboard" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                        <Home className="mr-2 h-4 w-4" />
                        Dashboard
                    </Link>
                    <Link href="/manage-schools" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Manage Schools
                    </Link>
                    <Link href="/application" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                        <Calendar className="mr-2 h-4 w-4" />
                        Manage Applications
                    </Link>
                    <Link href="/manage-users" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                        <User className="mr-2 h-4 w-4" />
                        Manage Users
                    </Link>
                    <Link href="/visa-assistance" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                        <Plane className="mr-2 h-4 w-4" />
                        Visa Assistance
                    </Link>
                    <Link href="/accommodation" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                        <Home className="mr-2 h-4 w-4" />
                        Accommodation
                    </Link>
                    <Link href="/resources" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                        <BookOpen className="mr-2 h-4 w-4" />
                        Resources
                    </Link>
                    <Link href="/support-chat" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Support Chat
                    </Link>
                </nav>

                <Link href="/logout" prefetch={true} className="flex items-center justify-start text-white hover:bg-zinc-500 p-2 rounded" onClick={() => setIsMobileMenuOpen(false)}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                </Link>
            </aside>
        </>
    )
}