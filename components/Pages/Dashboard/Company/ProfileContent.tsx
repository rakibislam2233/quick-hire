"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IUser } from "@/interface/user.interface";
import { updateMyProfile } from "@/services/user.service";
import {
  Building2,
  Edit3,
  Globe,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const ProfileContent = ({ profile }: { profile: IUser | null }) => {
  const [profileData, setProfileData] = useState<IUser | null>(profile);
  const [updating, setUpdating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    location: "",
    website: "",
    industry: "",
    size: "",
    founded: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);

    try {
      await updateMyProfile(formData);
      toast.success("Company profile updated successfully!");
      setIsEditing(false);
    } catch (err: any) {
      toast.error(err.message || "Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

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
        {!isEditing && (
          <Button
            onClick={() => setIsEditing(true)}
            className="bg-primary text-white rounded-none h-12 px-6 font-bold flex items-center gap-2 shadow-none"
          >
            <Edit3 className="w-5 h-5" />
            Edit Profile
          </Button>
        )}
      </div>

      <div className="bg-white border border-gray-100 p-8 shadow-none">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="flex items-center gap-8 mb-10 pb-10 border-b border-gray-50">
              <div className="relative group cursor-pointer">
                <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 relative">
                  {profileData?.company?.logo ? (
                    <Image
                      src={profileData.company.logo}
                      alt="Company Logo"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Building2 className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#25324B] mb-2">
                  {profile?.company?.name ||
                    profile?.fullName ||
                    "Company Name"}
                </h3>
                <p className="text-gray-500 text-sm">{profile?.email}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Company Name
                  </label>
                  <Input
                    value={profile?.company?.name || profile?.fullName || ""}
                    disabled
                    className="rounded-none border-gray-200 bg-gray-50 shadow-none h-11"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Email
                  </label>
                  <Input
                    value={profile?.email || ""}
                    disabled
                    className="rounded-none border-gray-200 bg-gray-50 shadow-none h-11"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Website
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      name="website"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                      className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Industry
                  </label>
                  <Input
                    name="industry"
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({ ...formData, industry: e.target.value })
                    }
                    className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                    placeholder="Technology, Healthcare, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Company Size
                  </label>
                  <Input
                    name="size"
                    value={formData.size}
                    onChange={(e) =>
                      setFormData({ ...formData, size: e.target.value })
                    }
                    className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                    placeholder="1-10, 11-50, 51-200, 200+"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Founded
                  </label>
                  <Input
                    name="founded"
                    value={formData.founded}
                    onChange={(e) =>
                      setFormData({ ...formData, founded: e.target.value })
                    }
                    className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                    placeholder="2020"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#25324B] mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#25324B] mb-2">
                  Company Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none resize-none w-full"
                  rows={4}
                  placeholder="Tell us about your company..."
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="rounded-none border-gray-200 text-[#25324B] font-bold h-12 px-8"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={updating}
                className="bg-primary text-white rounded-none h-12 px-8 font-bold shadow-none"
              >
                {updating ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center gap-8">
              <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 relative">
                {profileData?.company?.logo ? (
                  <Image
                    src={profileData.company.logo}
                    alt="Company Logo"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Building2 className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#25324B] mb-2">
                  {profile?.company?.name ||
                    profile?.fullName ||
                    "Company Name"}
                </h3>
                <p className="text-gray-500 text-sm">{profile?.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {profileData?.company?.website || "Not provided"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {profileData?.company?.location || "Not provided"}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {profileData?.company?.size || "Not provided"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {profile?.company?.industry || "Not provided"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-400">Founded:</span>
                  <span className="text-sm text-gray-500">
                    {profileData?.company?.foundedYear || "Not provided"}
                  </span>
                </div>
              </div>
            </div>

            {profile?.company?.description && (
              <div>
                <h4 className="text-lg font-bold text-[#25324B] mb-4">
                  About Us
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {profile.company.description}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
