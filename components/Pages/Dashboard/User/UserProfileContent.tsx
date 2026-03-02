"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getMyProfile, updateMyProfile } from "@/services/user.service";
import { Camera, Loader2, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  location?: string;
  bio?: string;
  avatar?: string;
  resume?: string;
  skills?: string[];
  experience?: string;
  education?: string;
}

interface UserProfileContentProps {
  profile?: UserProfile;
}

const UserProfileContent = ({ profile: initialProfile }: UserProfileContentProps) => {
  const [profile, setProfile] = useState<UserProfile | null>(initialProfile || null);
  const [loading, setLoading] = useState(!initialProfile);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: initialProfile?.fullName || "",
    phone: initialProfile?.phone || "",
    location: initialProfile?.location || "",
    bio: initialProfile?.bio || "",
    skills: initialProfile?.skills?.join(", ") || "",
    experience: initialProfile?.experience || "",
    education: initialProfile?.education || "",
  });

  useEffect(() => {
    if (!initialProfile) {
      const fetchProfile = async () => {
        try {
          const data = await getMyProfile();
          setProfile(data);
          setFormData({
            fullName: data.fullName || "",
            phone: data.phone || "",
            location: data.location || "",
            bio: data.bio || "",
            skills: data.skills?.join(", ") || "",
            experience: data.experience || "",
            education: data.education || "",
          });
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchProfile();
    }
  }, [initialProfile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const updateData = {
        ...formData,
        skills: formData.skills.split(",").map((s: string) => s.trim()).filter((s: string) => s),
      };
      
      await updateMyProfile(updateData);
      toast.success("Profile updated successfully!");
      
      // Refresh profile data
      const updatedProfile = await getMyProfile();
      setProfile(updatedProfile);
    } catch (err: any) {
      toast.error(err.message || "Failed to update profile");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-500 font-medium">Error loading profile</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }
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
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white border border-gray-100 p-8 shadow-none">
              <div className="flex items-center gap-8 mb-10 pb-10 border-b border-gray-50">
                <div className="relative group cursor-pointer">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-50 border border-gray-100 relative">
                    {profile?.avatar ? (
                      <Image
                        src={profile.avatar}
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#25324B] mb-2">
                    {profile?.fullName || "User Name"}
                  </h3>
                  <p className="text-gray-500 text-sm">{profile?.email}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#25324B] mb-2">
                      Full Name
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                      placeholder="Enter your full name"
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
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                        placeholder="Enter phone number"
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
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Bio
                  </label>
                  <Textarea
                    name="bio"
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none resize-none"
                    rows={4}
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Skills
                  </label>
                  <Input
                    name="skills"
                    value={formData.skills}
                    onChange={(e) => setFormData({...formData, skills: e.target.value})}
                    className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
                    placeholder="React, TypeScript, Node.js (comma separated)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Experience
                  </label>
                  <Textarea
                    name="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none resize-none"
                    rows={4}
                    placeholder="Describe your work experience..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#25324B] mb-2">
                    Education
                  </label>
                  <Textarea
                    name="education"
                    value={formData.education}
                    onChange={(e) => setFormData({...formData, education: e.target.value})}
                    className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none resize-none"
                    rows={3}
                    placeholder="Your educational background..."
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
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
            </div>
          </form>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-100 p-8 shadow-none space-y-8">
            <div>
              <h3 className="text-lg font-bold text-[#25324B] mb-6">Profile Completion</h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-[#56CDAD]"></div>
                </div>
                <span className="text-sm font-bold text-[#25324B]">75%</span>
              </div>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Complete your profile to increase your chances of getting hired by top companies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#25324B] mb-6">Resume</h3>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
                </div>
                <p className="text-sm font-bold text-[#25324B] mb-2">Upload Resume</p>
                <p className="text-xs text-gray-400 mb-4">PDF, DOC, DOCX (Max 5MB)</p>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-none border-gray-200 text-[#25324B] font-bold h-10 px-6 text-xs"
                >
                  Choose File
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#25324B] mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Profile Views</span>
                  <span className="text-sm font-bold text-[#25324B]">142</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Applications Sent</span>
                  <span className="text-sm font-bold text-[#25324B]">28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Interview Requests</span>
                  <span className="text-sm font-bold text-[#25324B]">7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileContent;
