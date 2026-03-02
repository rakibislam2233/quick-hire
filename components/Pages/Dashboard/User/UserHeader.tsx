"use client";
import { Bell, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";

const UserHeader = ({ onMenuClick }: { onMenuClick?: () => void }) => {
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
        <h1 className="text-lg md:text-xl font-extrabold text-[#25324B]  tracking-tighter">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-gray-400 hover:text-primary transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
            <Image
              src="/asset/logo/logo.png"
              alt="User Avatar"
              fill
              className="object-contain"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-bold text-[#25324B]">Jake Richards</p>
            <p className="text-[10px] text-gray-400 font-bold  tracking-wider">
              Job Seeker
            </p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
