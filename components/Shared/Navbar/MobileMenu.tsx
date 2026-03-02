"use client";
import { Button } from "@/components/ui/button";
import { IUser } from "@/interface/user.interface";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import UserDropdown from "./UserDropdown";

interface MobileMenuProps {
  user?: IUser | null;
  dashboardHref?: string;
}

const MobileMenu = ({ user, dashboardHref }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-700 border border-[#D6DDEB] rounded-full p-2"
        aria-label="Toggle navigation menu"
      >
        <HiMenuAlt2 className="w-6 h-6" />
      </button>

      {/* Mobile Drawer (Sidebar Style) */}
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-150 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar aside */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-200 w-72 bg-[#F8F9FF] flex flex-col h-screen transition-transform duration-300 ease-in-out md:hidden font-epilogue border-r border-gray-100",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-6 flex items-center justify-between border-b border-gray-50">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-1"
          >
            <div className="relative size-10">
              <Image
                src="/asset/logo/logo.png"
                alt="QuickHire Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-extrabold text-[#25324B]">
              QuickHire
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-400 hover:text-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2">
          <div className="px-4 mb-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Main Menu
            </span>
          </div>
          <Link
            href="/jobs"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-4 text-base font-bold text-gray-600 hover:text-primary hover:bg-white transition-all rounded-lg"
          >
            Find Jobs
          </Link>
          <Link
            href="/companies"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-4 text-base font-bold text-gray-600 hover:text-primary hover:bg-white transition-all rounded-lg"
          >
            Browse Companies
          </Link>
        </nav>

        <div className="p-6 space-y-3 mt-auto border-t border-gray-50 bg-white/50">
          {user ? (
            <UserDropdown user={user} dashboardHref={dashboardHref || ""} />
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full h-12 border-primary text-primary hover:bg-primary/5 font-bold rounded-none"
                >
                  Login
                </Button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-none shadow-lg shadow-primary/20">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
