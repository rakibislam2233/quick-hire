"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IUser, UserRole } from "@/interface/user.interface";
import { cn } from "@/lib/utils";
import { logoutUser } from "@/services/auth.service";
import { motion } from "framer-motion";
import {
  Briefcase,
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Settings,
  User as UserIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface UserDropdownProps {
  user: IUser | null;
  dashboardHref: string;
  theme?: "default" | "emerald";
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  user,
  dashboardHref,
  theme = "default",
}) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully");
      router.push("/login");
      router.refresh();
    } catch {
      toast.error("Failed to logout");
    }
  };

  const isEmerald = theme === "emerald";

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-md border border-transparent cursor-pointer transition-all group">
          <Avatar
            className={cn(
              "size-10 rounded-full border  transition-transform group-hover:scale-105",
              isEmerald ? "border-emerald-200" : "border-gray-200",
            )}
          >
            <AvatarImage
              src={user?.profileImage || "https://github.com/shadcn.png"}
              alt={user?.fullName || "User"}
            />
            <AvatarFallback
              className={cn(
                "text-white text-xs  rounded-full ",
                isEmerald ? "bg-emerald-600" : "bg-primary",
              )}
            >
              {user?.fullName
                ?.split(" ")
                .map((n: string) => n[0])
                .join("")
                .slice(0, 2) || "UR"}
            </AvatarFallback>
          </Avatar>
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 transition-transform duration-200 group-data-[state=open]:rotate-180",
              isEmerald && "group-hover:text-emerald-600",
            )}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 mt-2 p-0 border-none shadow-none bg-transparent overflow-visible font-epilogue"
      >
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="bg-white rounded-md border border-gray-100 shadow-lg p-1 overflow-hidden"
        >
          <DropdownMenuLabel className="px-3 py-2 text-xs  text-gray-400  tracking-widest border-b border-gray-100 mb-2">
            Account Overview
          </DropdownMenuLabel>

          {/* Menu Items */}
          <DropdownMenuItem
            onClick={() => router.push(dashboardHref)}
            className="px-3 py-2.5 text-sm  text-gray-700 rounded-md cursor-pointer flex items-center gap-3 transition-colors focus:text-white hover:bg-gray-50 focus:bg-primary"
          >
            <LayoutDashboard className="w-4 h-4 text-primary" />
            <span className="font-medium">Dashboard</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => router.push(`${dashboardHref}/profile`)}
            className="px-3 py-2.5 text-sm  text-gray-700 rounded-md cursor-pointer flex items-center gap-3 transition-colors focus:text-white hover:bg-gray-50 focus:bg-primary"
          >
            <UserIcon className="w-4 h-4 text-primary" />
            <span className="font-medium">My Profile</span>
          </DropdownMenuItem>

          {user?.role === UserRole.COMPANY && (
            <>
              <DropdownMenuItem
                onClick={() => router.push(`${dashboardHref}/jobs`)}
                className="px-3 py-2.5 text-sm  text-gray-700 rounded-md cursor-pointer flex items-center gap-3 transition-colors focus:text-white hover:bg-gray-50 focus:bg-primary"
              >
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="font-medium">My Jobs</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => router.push(`${dashboardHref}/settings`)}
                className="px-3 py-2.5 text-sm  text-gray-700 rounded-md cursor-pointer flex items-center gap-3 transition-colors focus:text-white hover:bg-gray-50 focus:bg-primary"
              >
                <Settings className="w-4 h-4 text-primary" />
                <span className="font-medium">Settings</span>
              </DropdownMenuItem>
            </>
          )}

          <DropdownMenuSeparator className="bg-gray-100" />

          <DropdownMenuItem
            onClick={handleLogout}
            className="px-3 py-2.5 text-sm  text-red-600 focus:bg-red-50 focus:text-red-600 rounded-md cursor-pointer flex items-center gap-3 transition-colors hover:bg-red-50"
          >
            <LogOut className="w-4 h-4" />
            <span className="font-medium">Sign Out</span>
          </DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
