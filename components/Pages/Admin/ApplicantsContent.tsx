"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Filter, MoreVertical, Search } from "lucide-react";

const ApplicantsContent = () => {
  const applicants = [
    {
      id: 1,
      name: "Maria Garcia",
      job: "Senior UI/UX Designer",
      date: "July 22, 2026",
      stage: "Interview",
      score: "4.5/5",
    },
    {
      id: 2,
      name: "James Wilson",
      job: "Software Engineer",
      date: "July 21, 2026",
      stage: "Shortlisted",
      score: "4.2/5",
    },
    {
      id: 3,
      name: "Linda Chen",
      job: "Marketing Manager",
      date: "July 20, 2026",
      stage: "Declined",
      score: "3.8/5",
    },
    {
      id: 4,
      name: "Robert Fox",
      job: "Frontend Developer",
      date: "July 19, 2026",
      stage: "Applied",
      score: "4.0/5",
    },
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Interview":
        return "bg-purple-50 text-purple-600 border-purple-100";
      case "Shortlisted":
        return "bg-blue-50 text-blue-600 border-blue-100";
      case "Declined":
        return "bg-red-50 text-red-600 border-red-100";
      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  return (
    <div className="font-epilogue">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#25324B]">
            All Applicants
          </h2>
          <p className="text-gray-500 font-medium">
            Review and manage candidates who have applied to your positions.
          </p>
        </div>
        <Button
          variant="outline"
          className="rounded-none border-gray-200 text-[#25324B] font-bold h-12 px-6 flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Export Data
        </Button>
      </div>

      <div className="bg-white border border-gray-100 shadow-none">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search applicants..."
              className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
            />
          </div>
          <Button
            variant="outline"
            className="rounded-none border-gray-200 text-[#25324B] font-bold h-11 px-6 flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F8F9FF] border-b border-gray-100">
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Candidate Name
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Applied Role
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Application Date
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Score
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Stage
                </th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 flex items-center justify-center text-primary font-bold text-xs  border border-gray-200 rounded">
                      {app.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h4 className="text-sm font-bold text-[#25324B]">
                      {app.name}
                    </h4>
                  </td>
                  <td className="px-6 py-6 text-sm text-[#25324B] font-semibold">
                    {app.job}
                  </td>
                  <td className="px-6 py-6 text-sm text-gray-500 font-medium">
                    {app.date}
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-sm font-bold text-primary">
                      {app.score}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <span
                      className={`px-3 py-1 text-[10px] font-bold rounded-full border  ${getStageColor(app.stage)}`}
                    >
                      {app.stage}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <button className="text-gray-400 hover:text-primary">
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

export default ApplicantsContent;
