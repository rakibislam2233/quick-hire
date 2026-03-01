"use client";

import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, Menu, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CompanyHeader = ({ onMenuClick }: { onMenuClick?: () => void }) => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10 font-epilogue">
      <div className="flex items-center gap-4">
        {onMenuClick && (
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 -ml-2 text-gray-400 hover:text-primary"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}
        <div className="flex items-center gap-4">
          <div className="relative w-8 h-8 md:w-10 md:h-10 border border-gray-100 p-2">
            <Image
              src="/asset/logo/logo.png"
              alt="Company"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-[#25324B]">
              Nomad
            </h1>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Technology & Software
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 cursor-pointer hidden md:block" />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <button className="relative text-gray-400 hover:text-primary transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <Link
          href="/dashboard/company/job-listing/add"
          className="no-underline"
        >
          <Button className="bg-primary text-white rounded-none h-10 md:h-11 px-4 md:px-6 font-bold flex items-center gap-2 shadow-none text-xs md:text-sm">
            <Plus className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">Post a job</span>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default CompanyHeader;
