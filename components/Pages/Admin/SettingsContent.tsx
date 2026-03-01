"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, CreditCard, Shield, User } from "lucide-react";

const SettingsContent = () => {
  return (
    <div className="font-epilogue max-w-4xl">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">Settings</h2>
        <p className="text-gray-500 font-medium">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 space-y-1">
          {[
            { name: "My Profile", icon: User, active: true },
            { name: "Notifications", icon: Bell, active: false },
            { name: "Security", icon: Shield, active: false },
            { name: "Billing", icon: CreditCard, active: false },
          ].map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-bold transition-colors ${item.active ? "bg-[#F8F9FF] text-primary" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </button>
          ))}
        </div>

        <div className="md:col-span-3 space-y-8">
          <div className="bg-white border border-gray-100 p-8 shadow-none space-y-6">
            <h3 className="text-lg font-bold text-[#25324B] border-b border-gray-50 pb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#25324B]  ">
                  Full Name
                </label>
                <Input
                  defaultValue="Maria Garcia"
                  className="rounded-none h-11 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#25324B]  ">
                  Email Address
                </label>
                <Input
                  defaultValue="maria@nomad.com"
                  className="rounded-none h-11 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#25324B]  ">
                  Phone Number
                </label>
                <Input
                  defaultValue="+1 (555) 000-0000"
                  className="rounded-none h-11 border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#25324B]  ">
                  Role
                </label>
                <Input
                  defaultValue="Hiring Manager"
                  disabled
                  className="rounded-none h-11 bg-gray-50 border-gray-200 focus-visible:ring-0 shadow-none cursor-not-allowed"
                />
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <Button className="bg-primary text-white rounded-none h-11 px-8 font-bold shadow-none ">
                Save Changes
              </Button>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-8 shadow-none">
            <h3 className="text-lg font-bold text-[#25324B] border-b border-gray-50 pb-4 mb-6">
              Danger Zone
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#25324B]">
                  Delete Account
                </p>
                <p className="text-xs text-gray-500">
                  Permanently delete your account and all associated data.
                </p>
              </div>
              <Button
                variant="destructive"
                className="rounded-none h-11 px-6 font-bold shadow-none "
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsContent;
