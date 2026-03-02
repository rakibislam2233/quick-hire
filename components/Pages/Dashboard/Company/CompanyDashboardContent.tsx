"use client";

import { getCompanyDashboardStats } from "@/services/dashboard.service";
import { getMyProfile } from "@/services/user.service";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  Eye,
  Loader2,
  Printer,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";

interface CompanyDashboardStats {
  totalJobs: number;
  activeJobs: number;
  totalApplications: number;
  pendingApplications: number;
  interviewsScheduled: number;
  recentApplications: Array<{
    id: string;
    candidate: string;
    role: string;
    status: string;
    date: string;
  }>;
  viewsThisWeek: number;
}

const CompanyDashboardContent = () => {
  const [stats, setStats] = useState<CompanyDashboardStats | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dashboardData, userData] = await Promise.all([
          getCompanyDashboardStats(),
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
  return (
    <div className="font-epilogue">
      {/* Greeting & Date Select */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-[#25324B]">
            Good morning, {user?.fullName || "Company User"}
          </h1>
          <p className="text-gray-500 font-medium">
            Here is your job listings statistic report for this week.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white border border-gray-100 flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors cursor-pointer">
            <span className="text-sm font-bold text-[#25324B]">
              Jul 19 - Jul 25
            </span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="bg-white border border-gray-100 p-2 hover:bg-gray-50 transition-colors cursor-pointer">
            <Printer className="w-5 h-5 text-[#25324B]" />
          </div>
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-primary p-6 text-white flex items-center justify-between group cursor-pointer transition-all">
          <div>
            <span className="text-5xl font-extrabold block mb-2">{stats?.pendingApplications || 0}</span>
            <p className="text-white/90 font-semibold leading-tight">
              New candidates to <br /> review
            </p>
          </div>
          <Users className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
        </div>

        <div className="bg-[#56CDAD] p-6 text-white flex items-center justify-between group cursor-pointer transition-all">
          <div>
            <span className="text-5xl font-extrabold block mb-2">{stats?.interviewsScheduled || 0}</span>
            <p className="text-white/90 font-semibold leading-tight">
              Interviews <br /> scheduled
            </p>
          </div>
          <Calendar className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
        </div>

        <div className="bg-[#FFB836] p-6 text-white flex items-center justify-between group cursor-pointer transition-all">
          <div>
            <span className="text-5xl font-extrabold block mb-2">{stats?.viewsThisWeek || 0}</span>
            <p className="text-white/90 font-semibold leading-tight">
              Profile views <br /> this week
            </p>
          </div>
          <Eye className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Job Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-gray-100 p-6 shadow-none">
          <div className="flex items-center justify-between mb-4">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-xs font-bold text-gray-400">TOTAL</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#25324B] mb-1">{stats?.totalJobs || 0}</h3>
          <p className="text-xs text-gray-400 font-bold tracking-wider">JOB POSTINGS</p>
        </div>

        <div className="bg-white border border-gray-100 p-6 shadow-none">
          <div className="flex items-center justify-between mb-4">
            <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs font-bold text-gray-400">ACTIVE</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#25324B] mb-1">{stats?.activeJobs || 0}</h3>
          <p className="text-xs text-gray-400 font-bold tracking-wider">JOB POSTINGS</p>
        </div>

        <div className="bg-white border border-gray-100 p-6 shadow-none">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-xs font-bold text-gray-400">TOTAL</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#25324B] mb-1">{stats?.totalApplications || 0}</h3>
          <p className="text-xs text-gray-400 font-bold tracking-wider">APPLICATIONS</p>
        </div>

        <div className="bg-white border border-gray-100 p-6 shadow-none">
          <div className="flex items-center justify-between mb-4">
            <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
            <span className="text-xs font-bold text-gray-400">PENDING</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#25324B] mb-1">{stats?.pendingApplications || 0}</h3>
          <p className="text-xs text-gray-400 font-bold tracking-wider">APPLICATIONS</p>
        </div>
      </div>

      {/* Middle Section: Stats & Job Open */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {/* Job Statistics Chart (Simulated) */}
        <div className="lg:col-span-3 bg-white border border-gray-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#25324B]">
                Job statistics
              </h3>
              <p className="text-gray-500 text-sm font-medium">
                Showing Job Statistic This Week
              </p>
            </div>
            <div className="bg-[#F8F9FF] p-1 flex items-center">
              <button className="px-4 py-1 text-xs font-bold bg-white text-primary shadow-sm">
                Week
              </button>
              <button className="px-4 py-1 text-xs font-bold text-gray-400">
                Month
              </button>
              <button className="px-4 py-1 text-xs font-bold text-gray-400">
                Year
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-8 border-b border-gray-100 pb-2">
            <button className="text-sm font-bold text-primary border-b-2 border-primary pb-2 px-1">
              Overview
            </button>
            <button className="text-sm font-bold text-gray-400 pb-2 px-1">
              Jobs View
            </button>
            <button className="text-sm font-bold text-gray-400 pb-2 px-1">
              Jobs Applied
            </button>
          </div>

          {/* Recent Applications Table */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#25324B]">Recent Applications</h4>
            {stats?.recentApplications?.slice(0, 5).map((app) => (
              <div key={app.id} className="flex items-center justify-between p-4 bg-gray-50 rounded">
                <div>
                  <p className="font-medium text-[#25324B]">{app.candidate}</p>
                  <p className="text-sm text-gray-500">{app.role}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    app.status === 'PENDING' ? 'bg-yellow-100 text-yellow-600' :
                    app.status === 'ACCEPTED' ? 'bg-green-100 text-green-600' :
                    app.status === 'REJECTED' ? 'bg-red-100 text-red-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    {app.status}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">{app.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-[#25324B] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full bg-primary text-white py-2 text-sm font-bold hover:bg-primary/90">
                Post New Job
              </button>
              <button className="w-full border border-gray-200 py-2 text-sm font-bold hover:bg-gray-50">
                View All Applications
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboardContent;
