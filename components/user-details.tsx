"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

type User = {
  id: string
  name: string
  email: string
  role: string
  createdAt: string
}

export function UserDetails({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // In a real application, you would fetch the user data from an API
    // For this example, we'll use mock data
    const mockUser: User = {
      id: userId,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      createdAt: "2023-01-01",
    }

    setTimeout(() => {
      setUser(mockUser)
      setIsLoading(false)
    }, 1000) // Simulate API delay
  }, [userId])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>User ID: {user.id}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Email</Label>
          <p>{user.email}</p>
        </div>
        <div>
          <Label>Role</Label>
          <p>{user.role}</p>
        </div>
        <div>
          <Label>Created At</Label>
          <p>{user.createdAt}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Edit User</Button>
      </CardFooter>
    </Card>
  )
}

