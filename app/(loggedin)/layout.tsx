import React from "react";
import localFont from "next/font/local";
import "../globals.css";

import { Sidebar } from "@/components/Sidebar";
import { AdminSidebar } from "@/components/AdminSidebar";
import { getUser } from "@/app/lib/dal";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen bg-[#E9EEF7]">
          {/* Sidebar */}
          {user.role.toLowerCase() === "applicant" ? (
            <Sidebar />
          ) : (
            <AdminSidebar />
          )}
          {/* Main Content */}
          <main className="flex-1 p-4">
            {children}
            <Toaster />
          </main>
        </div>
      </body>
    </html>
  );
}
