import { Briefcase, Calendar, FileText } from "lucide-react";

interface UserDashboardStats {
  totalApplications: number;
  savedJobs: number;
  interviewsScheduled: number;
}

interface UserDashboardContentProps {
  stats?: UserDashboardStats;
}

const UserDashboardContent = ({ stats }: UserDashboardContentProps) => {
  const userStats = [
    {
      label: "Total Applied Jobs",
      value: stats?.totalApplications || 0,
      icon: Briefcase,
      color: "bg-primary",
    },
    {
      label: "Interviews Scheduled",
      value: stats?.interviewsScheduled || 0,
      icon: Calendar,
      color: "bg-[#56CDAD]",
    },
    {
      label: "Saved Jobs",
      value: stats?.savedJobs || 0,
      icon: FileText,
      color: "bg-[#FFB836]",
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
        {userStats?.map((stat, index) => (
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

      {/* Recent Applications */}
      <div className="bg-white border border-gray-100 p-6 rounded-lg ">
        <h3 className="text-lg font-bold text-[#25324B] mb-4">
          Recent Applications
        </h3>
        <h1 className="text-gray-500">No recent applications available</h1>
        {/* <div className="space-y-4">
          {stats.recentApplications
            ?.slice(0, 5)
            .map((app: any, index: number) => (
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
                      {app.jobTitle}
                    </p>
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
        </div> */}
      </div>
    </div>
  );
};

export default UserDashboardContent;
