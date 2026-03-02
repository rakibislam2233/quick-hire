"use client";
import { Briefcase, FileText, TrendingUp, Users } from "lucide-react";
interface CompanyDashboardContentProps {
  stats: {
    totalJobs: number;
    totalApplications: number;
    pendingApplications: number;
    approvedJobs: number;
  };
}

const CompanyDashboardContent = ({ stats }: CompanyDashboardContentProps) => {
  const companyStats = [
    {
      label: "Total Jobs",
      value: stats?.totalJobs || 0,
      icon: Briefcase,
      color: "bg-primary",
    },
    {
      label: "Total Applicants",
      value: stats?.totalApplications || 0,
      icon: Users,
      color: "bg-[#56CDAD]",
    },
    {
      label: "Pending Applications",
      value: stats?.pendingApplications || 0,
      icon: FileText,
      color: "bg-[#FFB836]",
    },
    {
      label: "Approved Jobs",
      value: stats?.approvedJobs || 0,
      icon: TrendingUp,
      color: "bg-[#4F46E5]",
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
        {companyStats?.map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} p-6 text-white rounded-lg flex items-center justify-between group cursor-pointer transition-all`}
          >
            <div>
              <span className="text-5xl font-extrabold block mb-2">
                {stat?.value}
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

      {/* Recent Job Postings */}
      <div className="bg-white border border-gray-100 p-6 rounded-lg ">
        <h3 className="text-lg font-bold text-[#25324B] mb-4">
          Recent Job Postings
        </h3>
        <h1 className="text-gray-500">No recent job postings available</h1>
        {/* <div className="space-y-4">
          {stats.recentJobs?.slice(0, 5).map((job: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {job.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {job.applicants} applicants
                  </p>
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  job.status === "ACTIVE"
                    ? "bg-green-50 text-green-600"
                    : job.status === "CLOSED"
                      ? "bg-red-50 text-red-600"
                      : "bg-gray-50 text-gray-600"
                }`}
              >
                {job.status}
              </span>
            </div>
          )) || <p className="text-gray-500 text-sm">No recent job postings</p>}
        </div> */}
      </div>
    </div>
  );
};

export default CompanyDashboardContent;
