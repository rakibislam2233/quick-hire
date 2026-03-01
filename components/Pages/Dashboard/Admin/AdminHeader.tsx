"use client";

import { Bell, ChevronDown, Menu, ShieldCheck } from "lucide-react";

const AdminHeader = ({ onMenuClick }: { onMenuClick?: () => void }) => {
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
          <div className="w-8 h-8 md:w-10 md:h-10 bg-red-50 text-red-500 rounded flex items-center justify-center border border-red-100 p-2">
            <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-[#25324B]  tracking-tighter">
              Admin
            </h1>
            <p className="text-[10px] text-gray-400 font-bold  tracking-wider hidden sm:block">
              Super Admin Access
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-primary transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#25324B] flex items-center justify-center text-white font-bold text-xs  tracking-tighter">
            AD
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-[#25324B]">Admin Access</p>
            <p className="text-[10px] text-red-500 font-bold  tracking-wider">
              System Root
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
        </div>
      </div>
    </header>
  );
};

// Need to import ShieldUser properly (it might be ShieldCheck or something similar in Lucide)

export default AdminHeader;
