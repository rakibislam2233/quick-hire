"use client";

import { getAdminDashboardStats } from "@/services/dashboard.service";
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  Building2,
  Loader2,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

interface DashboardStats {
  totalUsers: number;
  totalCompanies: number;
  activeJobs: number;
  pendingApprovals: number;
  recentRegistrations: Array<{
    id: string;
    name: string;
    type: string;
    date: string;
  }>;
}

const AdminDashboardContent = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getAdminDashboardStats();
        setStats(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

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
          <p className="text-red-500 font-medium">Error loading dashboard</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  const systemStats = [
    {
      label: "Total Users",
      value: stats?.totalUsers?.toLocaleString() || "0",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Total Companies",
      value: stats?.totalCompanies?.toLocaleString() || "0",
      change: "+5%",
      icon: Building2,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Active Jobs",
      value: stats?.activeJobs?.toLocaleString() || "0",
      change: "+18%",
      icon: Activity,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "Pending Approvals",
      value: stats?.pendingApprovals?.toLocaleString() || "0",
      change: "-2",
      icon: AlertCircle,
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];

  const recentRegistrations = stats?.recentRegistrations || [];

  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-[#25324B]">
          System Overview
        </h1>
        <p className="text-gray-500 font-medium">
          Platform-wide statistics and management actions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {systemStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-gray-100 p-6 shadow-none"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bg} ${stat.color} p-3 rounded`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span
                className={`text-xs font-bold ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
              >
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#25324B] mb-1">
              {stat.value}
            </h3>
            <p className="text-xs text-gray-400 font-bold  tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white border border-gray-100 p-8 shadow-none">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-lg font-bold text-[#25324B]  tracking-tighter">
              Recent Registrations
            </h2>
            <button className="text-primary text-xs font-bold  hover:underline">
              View All
            </button>
          </div>
          <div className="space-y-6">
            {recentRegistrations.map((reg) => (
              <div
                key={reg.id}
                className="flex items-center justify-between border-b border-gray-50 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center font-bold text-gray-400">
                    {reg.name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#25324B]">
                      {reg.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-bold ">
                      {reg.type}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 font-medium">
                  {reg.date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#25324B] p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-extrabold mb-2  tracking-tighter">
                System Health
              </h3>
              <p className="text-white/60 text-xs font-medium mb-6">
                All systems operational. No reported issues in the last 24h.
              </p>
              <div className="flex items-center gap-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold  tracking-widest">
                  Live Status
                </span>
              </div>
            </div>
            <Activity className="absolute right-[-20px] bottom-[-20px] w-48 h-48 text-white/5" />
          </div>

          <div className="bg-white border border-gray-100 p-8 shadow-none group cursor-pointer hover:border-primary transition-all">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-[#25324B]  tracking-tighter">
                Quick Actions
              </h3>
              <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button className="h-10 border border-gray-100 text-[10px] font-bold  tracking-wider text-gray-500 hover:bg-[#F8F9FF] hover:text-primary">
                Verify Companies
              </button>
              <button className="h-10 border border-gray-100 text-[10px] font-bold  tracking-wider text-gray-500 hover:bg-[#F8F9FF] hover:text-primary">
                System Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardContent;
