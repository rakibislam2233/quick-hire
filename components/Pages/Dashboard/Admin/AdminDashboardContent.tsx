"use client";

import { Briefcase, Building2, FileText, Users } from "lucide-react";

interface AdminDashboardContentProps {
  stats?: {
    totalUsers: number;
    totalJobs: number;
    totalCompanies: number;
    totalApplications: number;
  };
  error?: string;
}

const AdminDashboardContent = ({ stats, error }: AdminDashboardContentProps) => {
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

  const systemStats = [
    {
      label: "Total Users",
      value: stats?.totalUsers || 0,
      icon: Users,
      color: "bg-primary",
    },
    {
      label: "Total Jobs",
      value: stats?.totalJobs || 0,
      icon: Briefcase,
      color: "bg-[#56CDAD]",
    },
    {
      label: "Total Companies",
      value: stats?.totalCompanies || 0,
      icon: Building2,
      color: "bg-[#FFB836]",
    },
    {
      label: "Total Applications",
      value: stats?.totalApplications || 0,
      icon: FileText,
      color: "bg-[#4F46E5]",
    },
  ];

  return (
    <div className="font-epilogue p-6 space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          Admin Dashboard
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Monitor and manage the entire platform.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemStats?.map((stat, index) => (
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

      {/* Recent Activity */}
      <div className="bg-white border border-gray-100 p-6 rounded-lg ">
        <h3 className="text-lg font-bold text-[#25324B] mb-4">
          Recent Activity
        </h3>
        <h1 className="text-gray-500">No recent activity available</h1>
        {/* <div className="space-y-4">
          {stats.recentActivity?.slice(0, 5).map((activity: any, index: number) => (
            <div key={index} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                  <p className="text-xs text-gray-500">{activity.description}</p>
                </div>
              </div>
              <span className="text-xs text-gray-400">
                {new Date(activity.createdAt).toLocaleDateString()}
              </span>
            </div>
          )) || <p className="text-gray-500 text-sm">No recent activity</p>}
        </div> */}
      </div>
    </div>
  );
};

export default AdminDashboardContent;
