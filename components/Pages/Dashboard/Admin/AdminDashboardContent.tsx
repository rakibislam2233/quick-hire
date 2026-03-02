"use client";

import { Briefcase, Building2, FileText, TrendingUp, Users } from "lucide-react";

interface AdminDashboardContentProps {
  stats?: any;
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

  if (!stats) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <p className="text-gray-500 font-medium">No data available</p>
        </div>
      </div>
    );
  }

  const systemStats = [
    {
      label: "Total Users",
      value: stats.totalUsers || 0,
      change: stats.userGrowth || "+0%",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Total Jobs",
      value: stats.totalJobs || 0,
      change: stats.jobGrowth || "+0%",
      icon: Briefcase,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "Total Companies",
      value: stats.totalCompanies || 0,
      change: stats.companyGrowth || "+0%",
      icon: Building2,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Total Applications",
      value: stats.totalApplications || 0,
      change: stats.applicationGrowth || "+0%",
      icon: FileText,
      color: "text-orange-600",
      bg: "bg-orange-50",
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

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemStats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.bg} p-6 rounded-lg border border-gray-100 shadow-sm`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value.toLocaleString()}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendingUp className={`w-4 h-4 ${stat.color}`} />
                  <span className={`text-sm font-medium ${stat.color}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#25324B] mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {stats.recentActivity?.slice(0, 5).map((activity: any, index: number) => (
            <div key={index} className="flex items-center justify-between p-3 border-b border-gray-50 last:border-0">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardContent;
