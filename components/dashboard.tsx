"use client"

import { Bell, BookOpen, ChevronLeft, ChevronRight, User2, Search, Settings } from 'lucide-react'
import { Bar, BarChart, Line, LineChart } from "recharts"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { EventCalendar } from './CalendarOfEvents'
import Activities from './Activities'

const activityData = [
  { month: "Sep", applications: 2, interviews: 1 },
  { month: "Oct", applications: 5, interviews: 2 },
  { month: "Nov", applications: 8, interviews: 3 },
]

const progressData = [
  { day: "Mon", tasks: 3 },
  { day: "Tue", tasks: 5 },
  { day: "Wed", tasks: 4 },
  { day: "Thu", tasks: 7 },
  { day: "Fri", tasks: 5 },
]

export function DashboardPageComponent() {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input placeholder="Search schools, universities, courses..." className="pl-8" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-gray-200" />
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold">Welcome back, Samuel Monday!</h1>
          <p className="text-gray-500">Studying a day makes you smarter.</p>
        </CardContent>
      </Card>

      <div className="mb-8 flex flex-col gap-6 ">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Application Progress</h2>
            <ChartContainer className="h-[200px] w-full" config={{ /* your config here */ }}>
              <LineChart data={activityData}>
                <Line
                  type="monotone"
                  dataKey="applications"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="interviews"
                  stroke="hsl(var(--secondary))"
                  strokeWidth={2}
                />
                <ChartTooltip />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Weekly Tasks Completed</h2>
            <ChartContainer className="h-[200px] w-full" config={{}}>
              <BarChart data={progressData}>
                <Bar dataKey="tasks" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <ChartTooltip />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">3</div>
            <div className="text-sm text-gray-500">Saved Courses</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">7</div>
            <div className="text-sm text-gray-500">Saved Schools</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">8</div>
            <div className="text-sm text-gray-500">Pending Applications</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">240</div>
            <div className="text-sm text-gray-500">Community Score</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <aside className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Filter by Location</h2>
            <Input placeholder="Find the perfect school or Course" />
            <Button className="mt-2 w-full">Search</Button>
          </div>

          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Nov 2024</h2>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {/* Calendar would go here */}
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Due Date</h2>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">You have a pending payment with Chrisland college.</p>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-blue-100 p-2">
                  <User2 className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm">You visited and created an account on Let's Study Portal.</p>
                  <p className="text-xs text-gray-500">That's the first step to your future.</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="shadow-lg bg-white p-6 rounded-lg">
          <h2 className="mb-4 text-lg font-semibold">Calendar of Events</h2>
          <EventCalendar />
        </div>
      </div>

      <Card className='my-4'>
        <CardContent className="p-6">
          <h2 className="mb-6 text-lg font-semibold">Level of Education</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <BookOpen className="h-6 w-6" />
              <span>High School</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <BookOpen className="h-6 w-6" />
              <span>Undergraduate</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col gap-2 p-4">
              <BookOpen className="h-6 w-6" />
              <span>Postgraduate</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Activities />
    </>

  )
}
