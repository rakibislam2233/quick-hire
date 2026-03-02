"use client";

import { cn } from "@/lib/utils";
import {
    Building2,
    CheckCircle2,
    Folder,
    HelpCircle,
    LayoutDashboard,
    Settings,
    ShieldCheck,
    Users
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebar = ({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard/admin" },
    { name: "Users", icon: Users, href: "/dashboard/admin/users" },
    { name: "Companies", icon: Building2, href: "/dashboard/admin/companies" },
    { name: "Categories", icon: Folder, href: "/dashboard/admin/categories" },
    { name: "All Jobs", icon: CheckCircle2, href: "/dashboard/admin/jobs" },
  ];

  const settingsItems = [
    { name: "Settings", icon: Settings, href: "/dashboard/admin" },
    { name: "Help Center", icon: HelpCircle, href: "/dashboard/admin" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 z-50 w-64 bg-[#F8F9FF] border-r border-gray-100 flex flex-col h-screen  transition-transform duration-300 md:translate-x-0 font-epilogue",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-6 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center justify-center gap-1 mb-6"
          >
            <div className="relative size-12">
              <Image
                src="/asset/logo/logo.png"
                alt="QuickHire Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-[#25324B]">
              QuickHire
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <div className="px-4 mb-4">
            <span className="text-[10px] font-bold text-gray-400  tracking-widest">
              System Menu
            </span>
          </div>
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
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
        </nav>

        <div className="px-4 pb-8 space-y-1">
          <div className="px-4 mb-4">
            <span className="text-[10px] font-bold text-gray-400  tracking-widest">
              Configuration
            </span>
          </div>
          {settingsItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
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
    </>
  );
};

export default AdminSidebar;
