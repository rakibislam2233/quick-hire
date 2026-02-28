"use client";

import { Button } from "@/components/ui/button";
import { Bell, ChevronDown, Plus } from "lucide-react";
import Image from "next/image";

const AdminHeader = () => {
  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10 font-epilogue">
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white border border-gray-100 flex items-center justify-center">
          <div className="relative w-8 h-8">
            <Image
              src="/asset/logo/logo.png"
              alt="Company Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
            Company
          </p>
          <div className="flex items-center gap-2 cursor-pointer group">
            <h2 className="text-lg font-bold text-[#25324B]">Nomad</h2>
            <ChevronDown className="w-4 h-4 text-[#25324B] group-hover:translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-[#4640DE] transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <Button className="bg-[#4640DE] text-white rounded-none h-11 px-6 font-bold flex items-center gap-2 shadow-none">
          <Plus className="w-5 h-5" />
          Post a job
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;
