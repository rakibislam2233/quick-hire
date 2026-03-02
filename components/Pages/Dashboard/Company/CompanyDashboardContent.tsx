"use client";

import { Briefcase, Users, FileText, TrendingUp } from "lucide-react";

interface CompanyDashboardContentProps {
  stats?: any;
  error?: string;
}

const CompanyDashboardContent = ({ stats, error }: CompanyDashboardContentProps) => {
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

  const companyStats = [
    {
      label: "Active Jobs",
      value: stats.activeJobs || 0,
      icon: Briefcase,
      color: "bg-primary",
    },
    {
      label: "Total Applicants",
      value: stats.totalApplicants || 0,
      icon: Users,
      color: "bg-[#56CDAD]",
    },
    {
      label: "Interviews Scheduled",
      value: stats.interviewsScheduled || 0,
      icon: FileText,
      color: "bg-[#FFB836]",
    },
    {
      label: "Hired Candidates",
      value: stats.hiredCandidates || 0,
      icon: TrendingUp,
      color: "bg-[#26A4FF]",
    },
  ];

  return (
    <div className="font-epilogue p-6 space-y-8">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          Company Dashboard
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Manage your job postings and track recruitment progress.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {companyStats.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} p-6 text-white rounded-lg flex items-center justify-between group cursor-pointer transition-all`}
          >
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
