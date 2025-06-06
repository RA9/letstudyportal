"use client";

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronDown,
  Calendar,
  HelpCircle,
  Home,
  Users,
  FileText,
  CreditCard,
  Upload,
  Bell,
  User,
  LogOut,
  Settings,
  Search,
  Menu,
  X,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export const Sidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const redirectLink = (route: string) => {
    router.push(route);
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('mobile-sidebar');
      const menuButton = document.getElementById('mobile-menu-button');
      
      if (isMobileMenuOpen && sidebar && menuButton && 
          !sidebar.contains(event.target as Node) && 
          !menuButton.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const sidebarItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Explore Schools", path: "/explore-schools" },
    { icon: FileText, label: "Wishlist", path: "/wishlist" },
    { icon: CreditCard, label: "Services", path: "/services" },
  ];

  const otherItems = [
    {
      icon: Users,
      label: "User Recommendation",
      path: "/recommendation",
    },
    { icon: FileText, label: "Visa", path: "/visa" },
    { icon: Bell, label: "Notification", path: "/notification" },
    { icon: CreditCard, label: "Loan", path: "/loan" },
    {
      icon: Settings,
      label: "Profile Settings",
      path: "/settings",
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        id="mobile-menu-button"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-600" />
        ) : (
          <Menu className="w-6 h-6 text-gray-600" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" />
      )}

      {/* Sidebar */}
      <div 
        id="mobile-sidebar"
        className={`
          w-64 bg-[#eef4ff] p-4 text-[#bec2ca] border-r border-gray-200 flex flex-col
          lg:relative lg:translate-x-0
          fixed inset-y-0 left-0 z-40
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="text-center p-2 border-b border-gray-200">
          <img src="/nlogo.svg" alt="Logo" className="w-full h-16 rounded-lg" />
        </div>
        
        {/* Search Component */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-6">
          <nav className="space-y-1 px-3">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                onClick={() => redirectLink(item.path)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium w-full text-left ${
                  pathname === item.path
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-8">
            <p className="px-6 text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">
              OTHER
            </p>
            <nav className="space-y-1 px-3">
              {otherItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => redirectLink(item.path)}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium w-full text-left ${
                    pathname === item.path
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Help Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-900 text-sm">
                Need help?
              </span>
            </div>
            <p className="text-xs text-blue-700 mb-3">
              You can contact our support team for assistance.
            </p>
            <button className="w-full bg-blue-600 text-white text-xs py-2 px-3 rounded-lg hover:bg-blue-700">
              Contact Support
            </button>
          </div>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Jane Doe</p>
              <p className="text-xs text-gray-500">Student Portal Operator</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
