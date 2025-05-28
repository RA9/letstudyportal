"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Sidebar = (children:any) => {
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
    </>
  );
};
