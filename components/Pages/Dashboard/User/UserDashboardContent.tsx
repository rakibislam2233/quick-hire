"use client";

import { ArrowRight, Bookmark, Briefcase, Clock, Search } from "lucide-react";

const UserDashboardContent = () => {
  const stats = [
    {
      label: "Applied Jobs",
      value: 12,
      icon: Briefcase,
      color: "bg-primary",
    },
    { label: "Saved Jobs", value: 8, icon: Bookmark, color: "bg-[#FFB836]" },
    { label: "Interviews", value: 3, icon: Clock, color: "bg-[#56CDAD]" },
  ];

  const recentApplications = [
    {
      id: 1,
      company: "Nomad",
      role: "Senior UI/UX Designer",
      status: "Interviewing",
      date: "2 days ago",
    },
    {
      id: 2,
      company: "Dropbox",
      role: "Product Designer",
      status: "Applied",
      date: "4 days ago",
    },
    {
      id: 3,
      company: "Terraform",
      role: "Visual Designer",
      status: "Declined",
      date: "1 week ago",
    },
  ];

  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-[#25324B]">
          Welcome back, Jake!
        </h1>
        <p className="text-gray-500 font-medium">
          You have 2 new messages and 1 upcoming interview today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.color} p-6 text-white flex items-center justify-between group cursor-pointer transition-all`}
          >
            <div>
              <span className="text-5xl font-extrabold block mb-2">
                {stat.value}
              </span>
              <p className="text-white/90 font-semibold leading-tight">
                {stat.label}
              </p>
            </div>
            <stat.icon className="w-8 h-8 opacity-20 group-hover:opacity-40 transition-opacity" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-[#25324B]  tracking-tighter">
              Recent Applications
            </h2>
            <button className="text-primary text-xs font-bold  flex items-center gap-1 hover:underline">
              View All <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-4">
            {recentApplications.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-gray-100 p-6 flex items-center justify-between hover:border-primary transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center font-bold text-primary rounded">
                    {app.company[0]}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#25324B]">
                      {app.role}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {app.company} • {app.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span
                    className={`px-3 py-1 text-[10px] font-bold rounded-full border  ${
                      app.status === "Interviewing"
                        ? "bg-purple-50 text-purple-600 border-purple-100"
                        : app.status === "Declined"
                          ? "bg-red-50 text-red-600 border-red-100"
                          : "bg-blue-50 text-blue-600 border-blue-100"
                    }`}
                  >
                    {app.status}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-primary p-8 text-white">
            <h3 className="text-xl font-extrabold mb-4  tracking-tighter">
              Find your dream job
            </h3>
            <p className="text-white/70 text-sm font-medium mb-6 leading-relaxed">
              Explore thousands of job opportunities tailored just for you.
            </p>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full h-11 pl-10 bg-white text-[#25324B] text-xs font-bold rounded-none border-none focus:outline-none"
              />
            </div>
            <button className="w-full bg-[#FFB836] text-[#25324B] h-11 font-bold  text-xs tracking-widest shadow-none">
              Explore Now
            </button>
          </div>

          <div className="bg-white border border-gray-100 p-8 shadow-none">
            <h3 className="text-lg font-bold text-[#25324B] mb-6  tracking-tighter">
              Profile Completion
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="w-[80%] h-full bg-[#56CDAD]"></div>
              </div>
              <span className="text-sm font-bold text-[#25324B]">80%</span>
            </div>
            <p className="text-xs text-gray-500 font-medium leading-relaxed mb-6">
              Complete your profile to increase your chances of getting hired by
              top companies.
            </p>
            <button className="text-primary text-xs font-bold  flex items-center gap-1 hover:underline">
              Edit Profile <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardContent;
