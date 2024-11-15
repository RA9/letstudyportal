"use client"

import { useState } from "react"
import { Eye, EyeOff, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

export default function LoginPageComponent() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="min-h-screen grid md:grid-cols-2">
            <div className="p-8 flex flex-col bg-blue-50">
                <div className="flex items-center justify-between mb-12">
                    <Link href="/" className="font-semibold">
                        <Image alt="Letstudyportal logo" src={"/nlogo.svg"} width={100} height={80} />
                    </Link>
                    <div className="flex gap-4">
                        <Link href="#" className="text-gray-600 hover:text-gray-900">
                            <Twitter className="size-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">
                            <Facebook className="size-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">
                            <Instagram className="size-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
                    <h1 className="text-3xl font-bold mb-8">
                        <span className="text-blue-600">Welcome</span> back!
                    </h1>
                    <p className="text-gray-600 mb-6">Please, enter your login details below.</p>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                placeholder="Email Address"
                                type="email"
                                required
                                className="bg-white"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="bg-white"
                                />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="size-4 text-gray-400" />
                                    ) : (
                                        <Eye className="size-4 text-gray-400" />
                                    )}
                                    <span className="sr-only">
                                        {showPassword ? "Hide password" : "Show password"}
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <Link
                            href="#"
                            className="block text-sm text-right text-blue-600 hover:text-blue-700"
                        >
                            Forgot password?
                        </Link>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                            Log in
                        </Button>
                    </form>
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Yet to join Let's Study?{" "}
                        <Link href="/register" className="text-blue-600 hover:text-blue-700">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
            <div className="hidden md:block bg-gray-200">
                <div className="h-full flex items-center justify-center">
                    <Image
                        src="/login-pic2.jpg"
                        alt="Logo Image"
                        width={400}
                        height={400}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}