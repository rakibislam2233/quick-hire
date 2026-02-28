"use client";

import { Calendar, MoreVertical } from "lucide-react";
import Image from "next/image";

const UserApplicationsContent = () => {
  const applications = [
    {
      id: 1,
      role: "Senior UX Designer",
      company: "Dropbox",
      logo: "/asset/logo/logo.png",
      appliedDate: "Jan 12, 2024",
      status: "Interview",
      statusColor: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      id: 2,
      role: "Frontend Engineer",
      company: "Nomad",
      logo: "/asset/logo/logo.png",
      appliedDate: "Jan 15, 2024",
      status: "Review",
      statusColor: "bg-orange-50 text-orange-600 border-orange-100",
    },
    {
      id: 3,
      role: "Product Manager",
      company: "Spotify",
      logo: "/asset/logo/logo.png",
      appliedDate: "Dec 28, 2023",
      status: "Accepted",
      statusColor: "bg-green-50 text-green-600 border-green-100",
    },
    {
      id: 4,
      role: "Visual Designer",
      company: "InVision",
      logo: "/asset/logo/logo.png",
      appliedDate: "Dec 20, 2023",
      status: "Declined",
      statusColor: "bg-red-50 text-red-600 border-red-100",
    },
  ];

  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          My Applications
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Track and manage your sent applications.
        </p>
      </div>

      <div className="bg-white border border-gray-100 overflow-hidden shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F8F9FF]">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Company
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Role
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                  Applied Date
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {applications.map((app) => (
                <tr
                  key={app.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-gray-100 p-2 relative shrink-0">
                        <Image
                          src={app.logo}
                          alt={app.company}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="font-bold text-[#25324B] text-sm">
                        {app.company}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 underline decoration-primary/30 font-bold text-[#25324B] text-sm hover:text-primary cursor-pointer decoration-2 underline-offset-4 transition-all">
                    {app.role}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {app.appliedDate}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase border ${app.statusColor}`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-gray-300 hover:text-primary transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserApplicationsContent;
