"use client";

import { cn } from "@/lib/utils";
import {
  Building2,
  Calendar,
  HelpCircle,
  LayoutDashboard,
  ListTodo,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    {
      name: "Messages",
      icon: MessageSquare,
      href: "/admin/messages",
      badge: 1,
    },
    { name: "Company Profile", icon: Building2, href: "/admin/profile" },
    { name: "All Applicants", icon: Users, href: "/admin/applicants" },
    { name: "Job Listing", icon: ListTodo, href: "/admin/job-listing" },
    { name: "My Schedule", icon: Calendar, href: "/admin/schedule" },
  ];

  const settingsItems = [
    { name: "Settings", icon: Settings, href: "/admin/settings" },
    { name: "Help Center", icon: HelpCircle, href: "/admin/help" },
  ];

  return (
    <aside className="w-64 bg-[#F8F9FF] border-r border-gray-100 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 mb-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <Image
              src="/asset/logo/logo.png"
              alt="QuickHire Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-extrabold text-[#25324B] font-epilogue tracking-tight">
            QuickHire
          </span>
        </Link>
      </div>

      {/* Main Menu */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors no-underline",
                isActive
                  ? "bg-white text-primary border-l-4 border-primary"
                  : "text-gray-500 hover:text-primary",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5",
                  isActive ? "text-primary" : "text-gray-400",
                )}
              />
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Settings & Bottom Tools */}
      <div className="px-4 pb-8 space-y-1">
        <div className="px-4 mb-4">
          <span className="text-[10px] font-bold text-gray-400  tracking-widest">
            Settings
          </span>
        </div>
        {settingsItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors no-underline",
                isActive
                  ? "bg-white text-primary border-l-4 border-primary"
                  : "text-gray-500 hover:text-primary",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5",
                  isActive ? "text-primary" : "text-gray-400",
                )}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
