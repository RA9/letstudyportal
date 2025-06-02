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
      {/* {!userInfo?.isVerified &&
        userInfo?.role.toLowerCase() !== "admin" &&
        verifyNotification()} */}

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
        <Card className="bg-[#eef4ff]">
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Wallet Balance</div>
            <div className="text-2xl font-bold">{walletBalance}</div>
          </CardContent>
        </Card>
        <Card className="bg-[#eef4ff]">
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Application Progress</div>
            <div className="text-2xl font-bold">
              {applications.active} active / {applications.total} total
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#eef4ff]">
          <CardContent className="p-4">
            <div className="text-sm text-gray-500">Pending Documents</div>
            <div className="text-2xl font-bold">
              {pendingUploads} pending uploads
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Welcome Section */}
      <div className="bg-[#0766D6] text-white p-6 rounded-lg mb-6 flex items-center space-x-4">
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
        <Card className="bg-[#eef4ff]">
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

        <Card className="bg-[#eef4ff]">
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
