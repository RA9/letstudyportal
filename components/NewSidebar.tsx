"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Sidebar = (children: any) => {
  const router = useRouter();

  const redirectLink = (route: string) => {
    return router.push(route);
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4">
          <div className="flex items-center space-x-2 mb-6">
            <img src="/logo.png" alt="Let's Study Logo" className="h-8" />
            <span className="text-xl font-bold">Let's Study</span>
          </div>
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Wallet
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Explore Schools
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Services
            </Button>
            <div className="mt-4">
              <Button variant="ghost" className="w-full justify-start">
                Accommodation
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Visa
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Notification
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Loan
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Profile Settings
              </Button>
            </div>
            <Button variant="ghost" className="w-full justify-start mt-4">
              Need Help?
            </Button>
            <div className="mt-4 flex items-center space-x-2">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/user-avatar.png" alt="Yemi Carlos" />
                <AvatarFallback>YC</AvatarFallback>
              </Avatar>
              <span>Yemi Carlos</span>
            </div>
          </nav>
        </aside>
      </div>

      {/* Dummy thingy */}
      {/* <div className="mb-8 flex items-center justify-between">
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
      </div> */}

      {/* <Card className="mb-8">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold">
            Welcome back, {userInfo?.firstName}!
          </h1>
          <p className="text-gray-500">Studying a day makes you smarter.</p>
        </CardContent>
      </Card> */}

      {/* <div className="mb-8 flex flex-col gap-6 ">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-lg font-semibold">Application Progress</h2>
            <ChartContainer
              className="h-[200px] w-full"
              config={

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
      </div> */}

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {/* <Card>
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
        </Card> */}
        {/* <Card>
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
        </Card> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <aside className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Filter by Location</h2>
            {/* <Input placeholder="Find the perfect school or Course" /> */}
            <Button className="mt-2 w-full">Search</Button>
          </div>

          <div className="mb-8">
            {/* <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Nov 2024</h2>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div> */}
            {/* Calendar would go here */}
          </div>

          {/* <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Due Date</h2>
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">
                  You have a pending payment with Chrisland college.
                </p>
              </CardContent>
            </Card>
          </div> */}

          <div>
            <h2 className="mb-4 text-lg font-semibold">Activity</h2>
            {/* <div className="space-y-4">
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
            </div> */}
          </div>
        </aside>

        <div className="shadow-lg bg-white p-6 rounded-lg">
          <h2 className="mb-4 text-lg font-semibold">Calendar of Events</h2>
          {/* <EventCalendar /> */}
        </div>
      </div>

      {/* <Card className="my-4">
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
      </Card> */}

      {/* <Activities /> */}
    </>
  );
};
