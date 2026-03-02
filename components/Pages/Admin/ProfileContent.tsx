"use client";

import { Button } from "@/components/ui/button";
import {
    Building2,
    Edit3,
    Globe,
    Mail,
    MapPin,
    Phone,
    Users,
} from "lucide-react";
import Image from "next/image";

const ProfileContent = () => {
  return (
    <div className="font-epilogue max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#25324B]">
            Company Profile
          </h2>
          <p className="text-gray-500 font-medium">
            Update your company information and presence.
          </p>
        </div>
        <Button className="bg-primary text-white rounded-none h-12 px-6 font-bold flex items-center gap-2 shadow-none">
          <Edit3 className="w-5 h-5" />
          Edit Profile
        </Button>
      </div>

      <div className="space-y-8">
        {/* Banner & Logo */}
        <div className="bg-white border border-gray-100 shadow-none overflow-hidden">
          <div className="h-32 bg-gray-100 relative">
            {/* Banner image or solid color */}
            <div className="absolute -bottom-8 left-8">
              <div className="relative w-24 h-24 bg-white border-4 border-white  flex items-center justify-center overflow-hidden">
                <div className="relative w-16 h-16">
                  <Image
                    src="/asset/logo/logo.png"
                    alt="Company Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 pb-8 px-8">
            <h3 className="text-2xl font-extrabold text-[#25324B] mb-1">
              Nomad
            </h3>
            <p className="text-primary font-bold text-sm">
              Technology & Software
            </p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 p-8 shadow-none space-y-6">
            <h4 className="text-lg font-bold text-[#25324B] border-b border-gray-50 pb-4">
              Basic Information
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F8F9FF] flex items-center justify-center text-primary">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold ">
                    Company Name
                  </p>
                  <p className="text-sm font-bold text-[#25324B]">Nomad</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F8F9FF] flex items-center justify-center text-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold ">
                    Website
                  </p>
                  <a
                    href="https://nomad.com"
                    target="_blank"
                    className="text-sm font-bold text-primary hover:underline"
                  >
                    https://nomad.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F8F9FF] flex items-center justify-center text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold ">
                    Company Size
                  </p>
                  <p className="text-sm font-bold text-[#25324B]">
                    50 - 150 Employees
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 p-8 shadow-none space-y-6">
            <h4 className="text-lg font-bold text-[#25324B] border-b border-gray-50 pb-4">
              Location & Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F8F9FF] flex items-center justify-center text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold ">
                    Headquarters
                  </p>
                  <p className="text-sm font-bold text-[#25324B]">
                    San Francisco, USA
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F8F9FF] flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold ">
                    Contact Email
                  </p>
                  <p className="text-sm font-bold text-[#25324B]">
                    contact@nomad.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#F8F9FF] flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold ">
                    Phone Number
                  </p>
                  <p className="text-sm font-bold text-[#25324B]">
                    +1 (555) 000-0000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white border border-gray-100 p-8 shadow-none space-y-6">
          <h4 className="text-lg font-bold text-[#25324B] border-b border-gray-50 pb-4">
            About Company
          </h4>
          <p className="text-sm text-gray-600 font-medium leading-loose">
            Nomad is a leading technology company focused on providing
            innovative solutions for the modern workforce. We believe in the
            power of remote work and collaboration, and our products are
            designed to empower teams to work better together, no matter where
            they are located. Founded in 2018, we have grown to become a trusted
            partner for thousands of businesses worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
