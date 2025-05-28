"use client";

import React, { useState, useEffect } from "react";
import {
  Bell,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  User2,
  Search,
  Moon,
  Sun,
  Settings,
} from "lucide-react";
import { Bar, BarChart, Line, LineChart } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { EventCalendar } from "./CalendarOfEvents";
import Activities from "./Activities";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/modal";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const activityData = [
  { month: "Sep", applications: 2, interviews: 1 },
  { month: "Oct", applications: 5, interviews: 2 },
  { month: "Nov", applications: 8, interviews: 3 },
];

const progressData = [
  { day: "Mon", tasks: 3 },
  { day: "Tue", tasks: 5 },
  { day: "Wed", tasks: 4 },
  { day: "Thu", tasks: 7 },
  { day: "Fri", tasks: 5 },
];

export function DashboardPageComponent(props: { userInfo: any }) {
  // get user data
  const { userInfo } = props;

  const [darkMode, setDarkMode] = useState(false);
  const walletBalance = "N250,000";
  const applications = { active: 3, total: 1.42 };
  const pendingUploads = 2;

  const recentApplications = [
    { name: "School A", date: "March 15", progress: 65 },
    { name: "School B", date: "March 15", progress: 90 },
    { name: "School C", date: "March 15", progress: 80 },
    { name: "School D", date: "March 15", progress: 80 },
    { name: "School D", date: "March 15", progress: 80 },
    { name: "School E", date: "March 15", progress: 80 },
  ];

  const transactionHistory = [
    { date: "Jan 22, 7:29 PM", desc: "WASSCE Payment", amount: "N40,000" },
    { date: "Jan 15, 2:00 PM", desc: "School App Fee", amount: "N20,000" },
    { date: "Jan 12, 6:15 PM", desc: "SMS Notification", amount: "N200" },
    {
      date: "Jan 10, 3:45 PM",
      desc: "New card for order #321045",
      amount: "N5,000",
    },
    {
      date: "Dec 31, 11:00 AM",
      desc: "Unlock for Development",
      amount: "N10,000",
    },
    { date: "Dec 4, 4:15 PM", desc: "New order #098523", amount: "N15,000" },
  ];

  // Apply dark mode to the document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  console.log("User", userInfo);
  return (
    <>
      {/* {
      (!userInfo?.isVerified && userInfo?.role.toLowerCase() !== 'admin')  && (
        verifyNotification()
      )
      } */}

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Dashboard
        </h1>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            )}
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            {pendingUploads > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {pendingUploads}
              </span>
            )}
          </Button>
          <Button variant="outline">Yemi</Button>
          <Button variant="outline">⋮</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Wallet Balance</div>
            <div className="text-2xl font-bold">{walletBalance}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Application Progress</div>
            <div className="text-2xl font-bold">
              {applications.active} active / {applications.total} total
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Pending Documents</div>
            <div className="text-2xl font-bold">
              {pendingUploads} pending uploads
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Welcome Section */}
      <div className="bg-blue-600 text-white p-6 rounded-lg mb-6 flex items-center space-x-4">
        <div>
          <h2 className="text-xl font-bold">Welcome back, Yemi Carlos</h2>
          <p className="text-sm">
            Hello Yemi, ready to continue your education journey? Submit all
            documents to complete your profile creation.
          </p>
        </div>
        <img src="/illustration.png" alt="Illustration" className="h-24" />
      </div>

      {/* Recent Applications and Transaction History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>
              Recent Applications{" "}
              <span className="text-sm text-gray-500">
                (10 applied this month)
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentApplications.map((app, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b"
              >
                <div>
                  <div className="font-medium">{app.name}</div>
                  <div className="text-sm text-gray-500">{app.date}</div>
                </div>
                <Progress value={app.progress} className="w-24" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Wallet Transaction History{" "}
              <span className="text-sm text-gray-500">(30+ this month)</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {transactionHistory.map((trans, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b"
              >
                <div>
                  <div className="text-sm">{trans.date}</div>
                  <div className="text-sm text-gray-500">{trans.desc}</div>
                </div>
                <div className="font-medium">{trans.amount}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mb-8 flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search schools, universities, courses..."
            className="pl-8"
          />
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
          <h1 className="text-2xl font-bold">
            Welcome back, {userInfo?.firstName}!
          </h1>
          <p className="text-gray-500">Studying a day makes you smarter.</p>
        </CardContent>
      </Card>

      <div className="mb-8 flex flex-col gap-6 ">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Application Progress</h2>
            <ChartContainer
              className="h-[200px] w-full"
              config={
                {
                  /* your config here */
                }
              }
            >
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
            <h2 className="mb-4 text-lg font-semibold">
              Weekly Tasks Completed
            </h2>
            <ChartContainer className="h-[200px] w-full" config={{}}>
              <BarChart data={progressData}>
                <Bar
                  dataKey="tasks"
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
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
                <p className="text-sm text-gray-500">
                  You have a pending payment with Chrisland college.
                </p>
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
                  <p className="text-sm">
                    You visited and created an account on Let's Study Portal.
                  </p>
                  <p className="text-xs text-gray-500">
                    That's the first step to your future.
                  </p>
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

      <Card className="my-4">
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
  );
}

export function verifyNotification() {
  return (
    <Dialog open>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-500">
            Verify your account
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          In order to continue using Let's Study Portal, please verify your
          account. By verifying your account, you will be able to access all the
          features of the platform. Click the button below to verify your
          account.
        </div>
        <DialogFooter>
          <Link href={"/complete-kyc"}>
            <Button className="bg-primary text-white rounded-lg">
              Verify Account
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
