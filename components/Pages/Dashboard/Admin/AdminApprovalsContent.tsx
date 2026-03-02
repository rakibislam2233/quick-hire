"use client";

import { Button } from "@/components/ui/button";
import { Check, Clock, Eye, X } from "lucide-react";
import Image from "next/image";

const AdminApprovalsContent = () => {
  const pendingJobs = [
    {
      id: 1,
      role: "Blockchain Developer",
      company: "Nomad",
      logo: "/asset/logo/logo.png",
      salary: "$120k - $160k",
      postedTime: "2 hours ago",
    },
    {
      id: 2,
      role: "SEO Specialist",
      company: "Spotify",
      logo: "/asset/logo/logo.png",
      salary: "$80k - $100k",
      postedTime: "5 hours ago",
    },
    {
      id: 3,
      role: "Cybersecurity Analyst",
      company: "Dropbox",
      logo: "/asset/logo/logo.png",
      salary: "$130k - $170k",
      postedTime: "yesterday",
    },
  ];

  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          Job Approvals
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Moderate job postings before they go live.
        </p>
      </div>

      <div className="space-y-4">
        {pendingJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover: transition-all"
          >
            <div className="flex gap-4">
              <div className="w-14 h-14 border border-gray-50 p-3 relative shrink-0 bg-white">
                <Image
                  src={job.logo}
                  alt={job.company}
                  fill
                  className="object-contain p-1 opacity-60"
                />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#25324B] mb-1">
                  {job.role}
                </h3>
                <div className="flex items-center gap-4 text-xs font-bold text-gray-400  tracking-widest">
                  <span className="text-primary font-black  underline decoration-primary/20 underline-offset-4 decoration-2">
                    {job.company}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {job.postedTime}
                  </div>
                  <span className="text-[#25324B]/50">{job.salary}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-gray-100 hover:text-primary hover:border-primary/30 transition-all rounded-none shadow-none"
              >
                <Eye className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-red-50 text-red-400 hover:bg-red-50 hover:text-red-500 transition-all rounded-none shadow-none"
              >
                <X className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 border-green-50 text-green-400 hover:bg-green-50 hover:text-green-500 transition-all rounded-none shadow-none"
              >
                <Check className="w-4 h-4" />
              </Button>
              <Button className="h-10 px-6 bg-primary text-white font-bold text-xs  rounded-none shadow-none ml-2">
                Approve
              </Button>
            </div>
          </div>
        ))}

        {pendingJobs.length === 0 && (
          <div className="bg-gray-50/50 border border-dashed border-gray-100 p-20 text-center">
            <p className="text-gray-400 text-sm font-bold  tracking-widest">
              No pending approvals at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminApprovalsContent;
