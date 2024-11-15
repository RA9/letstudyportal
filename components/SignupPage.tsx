"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

export default function SignupPageComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailPhone: "",
    dob: "",
    password: "",
    confirmPassword: "",
    terms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-blue-400">
      <div className="hidden md:block">
        <Image
          alt="Student studying"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          src="/login-pic.jpg"
        />
      </div>
      <div className="p-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-blue-600" />
            <span className="text-xl font-semibold">Let's Study</span>
          </div>
          
          <div>
            <h1 className="text-2xl font-semibold mb-1">
              <span className="text-blue-600">Create</span> an account
            </h1>
            <p className="text-sm text-gray-500">Study smart, finish smooth</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emailPhone">Email or phone number</Label>
              <Input
                id="emailPhone"
                type="text"
                required
                value={formData.emailPhone}
                onChange={(e) =>
                  setFormData({ ...formData, emailPhone: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dob">Date of birth (mm/dd/yyyy)</Label>
              <Input
                id="dob"
                type="date"
                required
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                id="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
              <Link
                href="#"
                className="block text-right text-sm text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.terms}
                onChange={(e) =>
                  setFormData({ ...formData, terms: e.target.checked as boolean })
                }
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  privacy policy
                </Link>
              </label>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Create account
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => {
                // Handle Google sign in
              }}
            >
              <svg
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </Button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-700">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}