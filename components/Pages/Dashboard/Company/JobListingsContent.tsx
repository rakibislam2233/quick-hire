"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllJobs } from "@/services/job.service";
import { Filter, Loader2, MoreVertical, Plus, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  status: string;
  applicantsCount: number;
  createdAt: string;
}

const JobListingsContent = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getAllJobs();
        setJobs(data.jobs || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <p className="text-red-500 font-medium">Error loading jobs</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="font-epilogue">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#25324B]">
            Job Listings
          </h2>
          <p className="text-gray-500 font-medium">
            Manage and monitor all your current job postings.
          </p>
        </div>
        <Link
          href="/dashboard/company/job-listing/add"
          className="no-underline"
        >
          <Button className="bg-primary text-white rounded-none h-12 px-6 font-bold flex items-center gap-2 shadow-none">
            <Plus className="w-5 h-5" />
            Post a job
          </Button>
        </Link>
      </div>

      <div className="bg-white border border-gray-100 shadow-none">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search job title..."
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
                  Roles
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Date Posted
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Job Type
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400  tracking-wider">
                  Applicants
                </th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {mockJobs.map((job, index) => (
                <tr
                  key={job.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-6">
                    <h4 className="text-sm font-bold text-[#25324B] mb-1">
                      {job.title}
                    </h4>
                    <p className="text-xs text-gray-500 font-medium">
                      {job.category} • {job.location}
                    </p>
                  </td>
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100 ">
                      Live
                    </span>
                  </td>
                  <td className="px-6 py-6 text-sm text-[#25324B] font-medium">
                    {job.postedAt}
                  </td>
                  <td className="px-6 py-6 text-sm text-[#25324B] font-medium">
                    Aug 15, 2026
                  </td>
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 bg-blue-50 text-primary text-[10px] font-bold border border-blue-100 ">
                      {job.type}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-sm font-bold text-[#25324B]">
                    {randomizedApplicants[index]}
                  </td>
                  <td className="px-6 py-6 text-right">
                    <Link
                      href={`/dashboard/company/job-listing/edit/${job.id}`}
                    >
                      <button className="text-gray-400 hover:text-primary p-2">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </Link>
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

export default JobListingsContent;
