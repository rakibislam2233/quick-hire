"use client";

import { cn } from "@/lib/utils";
import {
  Bookmark,
  Briefcase,
  HelpCircle,
  LayoutDashboard,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserSidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard/user" },
    {
      name: "Messages",
      icon: MessageSquare,
      href: "/dashboard/user/messages",
      badge: 2,
    },
    {
      name: "My Applications",
      icon: Briefcase,
      href: "/dashboard/user/applications",
    },
    { name: "Saved Jobs", icon: Bookmark, href: "/dashboard/user/saved" },
    { name: "My Profile", icon: User, href: "/dashboard/user/profile" },
  ];

  const settingsItems = [
    { name: "Settings", icon: Settings, href: "/dashboard/user/settings" },
    { name: "Help Center", icon: HelpCircle, href: "/dashboard/user/help" },
  ];

  return (
    <aside className="w-64 bg-[#F8F9FF] border-r border-gray-100 flex flex-col h-screen sticky top-0">
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
                  ? "bg-white text-[#4640DE] border-l-4 border-[#4640DE]"
                  : "text-gray-500 hover:text-[#4640DE]",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5",
                  isActive ? "text-[#4640DE]" : "text-gray-400",
                )}
              />
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto bg-[#4640DE] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="px-4 pb-8 space-y-1">
        <div className="px-4 mb-4">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
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
                  ? "bg-white text-[#4640DE] border-l-4 border-[#4640DE]"
                  : "text-gray-500 hover:text-[#4640DE]",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5",
                  isActive ? "text-[#4640DE]" : "text-gray-400",
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

export default UserSidebar;
