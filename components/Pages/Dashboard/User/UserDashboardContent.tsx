"use client";

import { getUserDashboardStats } from "@/services/dashboard.service";
import { getMyProfile } from "@/services/user.service";
import { Briefcase, Calendar, FileText, Loader2, Users } from "lucide-react";
import { useEffect, useState } from "react";

interface UserDashboardStats {
  appliedJobs: number;
  savedJobs: number;
  interviews: number;
  recentApplications: Array<{
    id: string;
    company: string;
    role: string;
    status: string;
    date: string;
  }>;
  profileCompletion: number;
  upcomingInterviews: number;
}

interface UserDashboardContentProps {
  stats?: any;
  error?: string;
}

const UserDashboardContent = ({ stats, error }: UserDashboardContentProps) => {
  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-red-500 font-medium">Error loading dashboard</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-gray-500 font-medium">No data available</p>
        </div>
      </div>
    );
  }

  const userStats = [
    {
      label: "Applied Jobs",
      value: stats.appliedJobs || 0,
      icon: Briefcase,
      color: "bg-primary",
    },
    {
      label: "Interviews Scheduled",
      value: stats.interviews || 0,
      icon: Calendar,
      color: "bg-[#56CDAD]",
    },
    {
      label: "Saved Jobs",
      value: stats.savedJobs || 0,
      icon: FileText,
      color: "bg-[#FFB836]",
    },
    {
      label: "Profile Views",
      value: stats.profileViews || 0,
      icon: Users,
      color: "bg-[#26A4FF]",
    },
  ];

  return (
    <div className="font-epilogue p-6 space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          User Dashboard
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Track your job search progress and applications.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {userStats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} p-6 text-white rounded-lg flex items-center justify-between group cursor-pointer transition-all`}
          >
            <div>
              <span className="text-5xl font-extrabold block mb-2">
                {stat.value}
              </span>
              <p className="text-white/90 font-semibold leading-tight">
                {stat.label}
              </p>
            </div>
            <div className="transform group-hover:translate-x-1 transition-transform">
              <stat.icon className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Profile Section */}
      <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h3 className="text-lg font-bold text-[#25324B] mb-4">Profile Overview</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {stats.profile?.fullName || "User Name"}
              </p>
              <p className="text-xs text-gray-500">
                {stats.profile?.email || "user@example.com"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-bold text-[#25324B] mb-4">Recent Applications</h3>
        <div className="space-y-4">
          {stats.recentApplications?.slice(0, 5).map((app: any, index: number) => (
            <div key={index} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{app.jobTitle}</p>
                  <p className="text-xs text-gray-500">{app.company}</p>
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  app.status === "ACCEPTED"
                    ? "bg-green-50 text-green-600"
                    : app.status === "INTERVIEWING"
                      ? "bg-blue-50 text-blue-600"
                      : app.status === "REJECTED"
                        ? "bg-red-50 text-red-600"
                        : "bg-gray-50 text-gray-600"
                }`}
              >
                {app.status}
              </span>
            </div>
          )) || (
            <p className="text-gray-500 text-sm">No recent applications</p>
          )}
        </div>
      </div>
    </div>
  );
};

const UserDashboardContentWrapper = () => {
  const [stats, setStats] = useState<UserDashboardStats | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardData, userData] = await Promise.all([
          getUserDashboardStats(),
          getMyProfile(),
        ]);
        setStats(dashboardData);
        setUser(userData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return <UserDashboardContent stats={stats} error={error || undefined} />;
};

export default UserDashboardContent;
