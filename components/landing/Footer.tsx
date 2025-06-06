"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
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
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Schools and Programs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Study Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Scholarship Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  User Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Stay Connected</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Email Updates
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-sm font-medium">Join</h3>
            <p className="text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email Here"
                className="w-full"
              />
              <Button variant={"blue"} className="w-full">
                Join
              </Button>
              <p className="text-xs text-gray-500">
                By joining, you consent to our Privacy Policy and receive
                updates.
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
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-900">
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
  );
};

export default Footer;
