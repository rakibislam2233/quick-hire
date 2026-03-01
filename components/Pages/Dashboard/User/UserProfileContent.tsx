"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Mail, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";

const UserProfileContent = () => {
  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">My Profile</h2>
        <p className="text-gray-500 font-medium text-sm">
          Update your professional identity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white border border-gray-100 p-8 shadow-none">
            <div className="flex items-center gap-8 mb-10 pb-10 border-b border-gray-50">
              <div className="relative group cursor-pointer">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-50 border border-gray-100 relative">
                  <Image
                    src="/asset/logo/logo.png"
                    alt="Profile"
                    fill
                    className="object-contain p-4 opacity-50"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#25324B] mb-2">
                  Jake Richards
                </h3>
                <p className="text-sm text-gray-400 font-medium mb-4 ">
                  UI/UX Designer based in London, UK
                </p>
                <Button
                  variant="outline"
                  className="h-9 px-4 rounded-none text-xs font-bold  border-gray-200"
                >
                  Change Photo
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400  tracking-widest">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    defaultValue="Jake Richards"
                    className="pl-10 h-11 rounded-none border-gray-100 focus:ring-0 focus:border-primary outline-none text-sm font-semibold text-[#25324B]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400  tracking-widest">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    defaultValue="jake.richards@example.com"
                    className="pl-10 h-11 rounded-none border-gray-100 focus:ring-0 focus:border-primary outline-none text-sm font-semibold text-[#25324B]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400  tracking-widest">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    defaultValue="+44 7911 123456"
                    className="pl-10 h-11 rounded-none border-gray-100 focus:ring-0 focus:border-primary outline-none text-sm font-semibold text-[#25324B]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400  tracking-widest">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    defaultValue="London, United Kingdom"
                    className="pl-10 h-11 rounded-none border-gray-100 focus:ring-0 focus:border-primary outline-none text-sm font-semibold text-[#25324B]"
                  />
                </div>
              </div>
              <div className="col-span-full space-y-2">
                <label className="text-[10px] font-bold text-gray-400  tracking-widest">
                  Short Bio
                </label>
                <Textarea
                  className="min-h-[120px] rounded-none border-gray-100 focus:ring-0 focus:border-primary outline-none text-sm font-semibold text-[#25324B] p-4"
                  defaultValue="Passionate UI/UX designer with 5+ years of experience in creating user-centered digital products. Strong background in design systems and accessibility."
                />
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-50 text-right">
              <Button className="bg-primary text-white rounded-none h-11 px-8 font-bold  shadow-none text-xs">
                Save Profile
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-[#25324B] p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-extrabold mb-4  tracking-tighter">
                Profile Completion
              </h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold  text-white/60">
                  Progress
                </span>
                <span className="text-xl font-black">75%</span>
              </div>
              <div className="h-1.5 bg-white/10 w-full mb-6">
                <div className="h-full bg-primary w-[75%]"></div>
              </div>
              <p className="text-xs text-white/60 font-medium leading-relaxed mb-6">
                Completing your profile increases your chances of getting hired
                by 3x.
              </p>
              <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-none h-10 text-[10px] font-bold ">
                Finish Setup
              </Button>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-8 shadow-none">
            <h3 className="text-sm font-extrabold text-[#25324B] mb-6  tracking-widest">
              My Resume
            </h3>
            <div className="border-2 border-dashed border-gray-100 p-8 text-center bg-gray-50/50 group hover:border-primary/30 transition-all cursor-pointer">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-gray-100 group-hover:scale-110 transition-transform">
                <User className="w-5 h-5 text-gray-400 group-hover:text-primary" />
              </div>
              <p className="text-xs font-bold text-[#25324B]  mb-1">
                Upload New CV
              </p>
              <p className="text-[10px] text-gray-400 font-medium lowercase">
                PDF or DOCX (max 5MB)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileContent;
