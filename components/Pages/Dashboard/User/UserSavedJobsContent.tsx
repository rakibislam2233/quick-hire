"use client";

import { Button } from "@/components/ui/button";
import { Bookmark, MapPin, MoreVertical } from "lucide-react";
import Image from "next/image";

const UserSavedJobsContent = () => {
  const savedJobs = [
    {
      id: 1,
      role: "Product Designer",
      company: "Nomad",
      location: "San Francisco, USA",
      type: "Full-Time",
      logo: "/asset/logo/logo.png",
      salary: "$120k - $140k",
    },
    {
      id: 2,
      role: "Frontend Engineer",
      company: "Dropbox",
      location: "Remote",
      type: "Contract",
      logo: "/asset/logo/logo.png",
      salary: "$80 - $100 / hr",
    },
    {
      id: 3,
      role: "Brand Designer",
      company: "Spotify",
      location: "Stockholm, Sweden",
      type: "Full-Time",
      logo: "/asset/logo/logo.png",
      salary: "$90k - $110k",
    },
  ];

  return (
    <div className="font-epilogue">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#25324B]">Saved Jobs</h2>
          <p className="text-gray-500 font-medium text-sm">
            Review the jobs you&apos;ve saved for later.
          </p>
        </div>
        <span className="text-xs font-bold text-gray-400  tracking-widest bg-gray-50 px-3 py-1.5 border border-gray-100">
          {savedJobs.length} Jobs Total
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group relative"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 border border-gray-50 p-2.5 relative bg-white">
                <Image
                  src={job.logo}
                  alt={job.company}
                  fill
                  className="object-contain p-1 opacity-60"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Bookmark className="w-2 h-2 text-orange-600 fill-orange-600" />
                </div>
                <button className="text-gray-300 hover:text-primary transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-extrabold text-[#25324B] mb-1 group-hover:text-primary transition-colors cursor-pointer">
                {job.role}
              </h3>
              <p className="text-xs font-bold text-gray-400  tracking-widest mb-4">
                {job.company} • {job.type}
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
              <span className="text-sm font-black text-[#25324B]">
                {job.salary}
              </span>
              <Button className="bg-primary/5 hover:bg-primary hover:text-white text-primary rounded-none h-8 px-4 text-[10px] font-black  transition-all shadow-none border-none">
                Apply Now
              </Button>
            </div>
          </div>
        ))}

        {savedJobs.length === 0 && (
          <div className="col-span-full py-20 bg-gray-50/50 border border-dashed border-gray-100 text-center">
            <p className="text-gray-400 text-sm font-bold  tracking-widest">
              You haven&apos;t saved any jobs yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSavedJobsContent;
