"use client";

import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CompanyHeader = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10 font-epilogue">
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 border border-gray-100 p-2">
          <Image
            src="/asset/logo/logo.png"
            alt="Company"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-xl font-extrabold text-[#25324B]">Nomad</h1>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Technology & Software
          </p>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-[#4640DE] transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <Link
          href="/dashboard/company/job-listing/add"
          className="no-underline"
        >
          <Button className="bg-[#4640DE] text-white rounded-none h-11 px-6 font-bold flex items-center gap-2 shadow-none">
            <Plus className="w-5 h-5" />
            Post a job
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default CompanyHeader;
