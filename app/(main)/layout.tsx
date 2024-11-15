"use client"

import type { Metadata } from "next";
import {Facebook, HelpCircle, Home, Instagram, LifeBuoy, Mail, Plane, Radio, Search, Signal, Twitter, Users, Youtube, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"
import 'mapbox-gl/dist/mapbox-gl.css'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [toggleNav, setToggleNav] = React.useState(false)

  function toggle() {
    setToggleNav(!toggleNav)
  }
  return (
        <div className="flex flex-col min-h-screen">
          <div className="border-b">
            <header className="container flex h-16 md:h-24 items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <Link href="/" className="font-semibold">
                  <Image alt="Letstudyportal logo" className="h-24 w-24 md:w-48 md:h-48" src={"/nlogo.svg"} width={200} height={100} />
                </Link>
                <NavigationMenu className={"hidden md:block"}>
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
                        Contact Us
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
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
              <div className="flex items-center gap-4">
                {/* <Button variant="ghost" size="icon">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                </Button> */}
                <Button size={"icon"} onClick={toggle} variant={"outline"} className="md:hidden">
                  <Menu />
                </Button>
                <Button variant="outline" className="hidden md:block">Help</Button>
                <Button variant={"blue"} className="hidden md:block">Contact</Button>
              </div>
            </header>
            <NavigationMenu className={"hidden flex-col bg-primary p-4"}>
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
                        Contact Us
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
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
                                <Link href="#">Sign up for free</Link>
                              </Button>
                              <Button variant={"blue"} size="sm" asChild>
                                <Link href="#">Login</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
          </div>
          {/* Main Content */}
          <main className="flex-1">
            {children}
          </main>

          <footer className="w-full bg-[#E5F2FF] py-12">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                <div className="md:col-span-1">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src="/nlogo.svg"
                      alt="Let's Study Logo"
                      width={200}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="hover:underline">About Us</Link></li>
                    <li><Link href="#" className="hover:underline">Contact Us</Link></li>
                    <li><Link href="#" className="hover:underline">Schools and Programs</Link></li>
                    <li><Link href="#" className="hover:underline">FAQs</Link></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="hover:underline">Study Guides</Link></li>
                    <li><Link href="#" className="hover:underline">Webinars</Link></li>
                    <li><Link href="#" className="hover:underline">Scholarship Info</Link></li>
                    <li><Link href="#" className="hover:underline">User Reviews</Link></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Stay Connected</h3>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#" className="hover:underline">Social Media</Link></li>
                    <li><Link href="#" className="hover:underline">Email Updates</Link></li>
                    <li><Link href="#" className="hover:underline">Feedback</Link></li>
                    <li><Link href="#" className="hover:underline">Support Center</Link></li>
                  </ul>
                </div>
                <div className="space-y-4 md:col-span-1">
                  <h3 className="text-sm font-medium">Join</h3>
                  <p className="text-sm">Subscribe to our newsletter for the latest updates and  insights.</p>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your Email Here"
                      className="w-full"
                    />
                    <Button variant={"blue"} className="w-full">Join</Button>
                    <p className="text-xs text-gray-500">
                      By joining, you consent to our Privacy Policy and receive updates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t pt-8">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <p className="text-sm text-gray-500">
                    © 2024 Let&apos;s Study Portal. All rights reserved.
                  </p>
                  <div className="flex gap-4">
                    <Link href="#" className="text-gray-500 hover:text-gray-900">
                      Privacy Policy
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900">
                      Terms of Use
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900">
                      Cookie Policy
                    </Link>
                  </div>
                  <div className="flex gap-4">
                    <Link href="#" className="text-gray-500 hover:text-gray-900">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900">
                      <span className="font-bold">in</span>
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-900">
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">YouTube</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
  );
}
