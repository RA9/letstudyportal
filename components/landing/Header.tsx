"use client";

import { ChevronDown, GraduationCap, HelpCircle, Home, LifeBuoy, Mail, Menu, Plane, Radio, Search, Signal, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [toggleNav, setToggleNav] = React.useState(false);

  function toggle() {
    setToggleNav(!toggleNav);
  }

  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-24">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="font-semibold flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Study
              </span>
            </Link>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="/about-us"
                    className="w-max rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#"
                    className="w-max rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Find School
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#"
                    className="w-max rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Students Loans
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="#"
                    className="w-max rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    AI Recommendations
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[800px] grid-cols-3 gap-4 p-6">
                      <div className="space-y-4">
                        <h3 className="font-medium">Explore Our Pages</h3>
                        <div className="grid gap-4">
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <Search className="h-4 w-4" />
                              <div className="font-medium">Learning Institutions Search</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Find the best universities for your needs.
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <Radio className="h-4 w-4" />
                              <div className="font-medium">Program Finder</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Discover programs that match your interests.
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <Users className="h-4 w-4" />
                              <div className="font-medium">Fee Comparison</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Compare costs to make informed decisions.
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <Home className="h-4 w-4" />
                              <div className="font-medium">Living Costs</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Understand living expenses in different locations.
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-medium">Additional Resources</h3>
                        <div className="grid gap-4">
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <Home className="h-4 w-4" />
                              <div className="font-medium">Visa Assistance</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Get help with your visa application process.
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <Home className="h-4 w-4" />
                              <div className="font-medium">Accommodation Help</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Find housing options that suit your needs.
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <Plane className="h-4 w-4" />
                              <div className="font-medium">Travel Services</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Plan your travel with ease and confidence.
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <LifeBuoy className="h-4 w-4" />
                              <div className="font-medium">Student Support</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Access resources for a smooth transition.
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-medium">More Useful Links</h3>
                        <div className="grid gap-4">
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <HelpCircle className="h-4 w-4" />
                              <div className="font-medium">FAQs</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Find answers to common questions here.
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <Mail className="h-4 w-4" />
                              <div className="font-medium">Newsletter</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Subscribe for updates and news.
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <Signal className="h-4 w-4" />
                              <div className="font-medium">Social Media</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Follow us for the latest information.
                            </div>
                          </Link>
                          <Link
                            href="#"
                            className="group grid h-auto w-full gap-1 rounded-md p-4 hover:bg-muted"
                          >
                            <div className="flex items-center gap-3">
                              <HelpCircle className="h-4 w-4" />
                              <div className="font-medium">Help Center</div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Get assistance with any inquiries.
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="border-t p-4">
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Ready to study abroad?</p>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/register">Sign up for free</Link>
                          </Button>
                          <Button variant={"blue"} size="sm" asChild>
                            <Link href="/login">Login</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Button size={"icon"} onClick={toggle} variant={"outline"} className="md:hidden">
              <Menu />
            </Button>
            <div className="hidden md:flex items-center space-x-3">
              <Button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors" variant="ghost">
                Login
              </Button>
              <Button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu - Shows when toggleNav is true */}
      {toggleNav && (
        <div className="absolute top-full left-0 w-full z-50">
          <div className="flex flex-col bg-white p-4 w-full border-t shadow-lg">
            <Link
              href="/about-us"
              className="block w-full rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground my-1"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="block w-full rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground my-1"
            >
              Find School
            </Link>
            <Link
              href="#"
              className="block w-full rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground my-1"
            >
              Students Loans
            </Link>
            <Link
              href="#"
              className="block w-full rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground my-1"
            >
              AI Recommendations
            </Link>
            <div className="flex justify-between items-center w-full p-2 mt-2">
              <Button variant="outline" className="w-full mr-2" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant={"blue"} className="w-full" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
