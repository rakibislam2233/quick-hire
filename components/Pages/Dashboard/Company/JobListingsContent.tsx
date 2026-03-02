"use client";
import { deleteJobAction } from "@/app/dashboard/company/_actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Job, JobStatus } from "@/interface/job.interface";
import { Edit, Filter, MoreVertical, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { toast } from "sonner";

const JobListingsContent = ({ jobListings }: { jobListings: Job[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [localJobs, setLocalJobs] = useState(jobListings || []);

  const filteredJobs = localJobs?.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = async (jobId: string) => {
    startTransition(async () => {
      try {
        const result = await deleteJobAction(jobId);
        if (result.success) {
          toast.success(result.message);
          // Instantly update UI without reload
          setLocalJobs(prev => prev.filter(job => job.id !== jobId));
        } else {
          toast.error("Failed to delete job");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the job");
      } finally {
        setDeleteConfirm(null);
      }
    });
  };

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              <tr className="border-b border-gray-50 bg-[#F8F9FF]">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Job Title
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Type
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Location
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Applicants
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredJobs?.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div>
                      <span className="block font-bold text-[#25324B] text-sm">
                        {job.title}
                      </span>
                      <p className="text-xs text-gray-400">
                        Posted {new Date(job.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-bold text-gray-500">
                      {job.type}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-xs font-bold text-gray-500">
                      {job.location}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-sm font-bold text-[#25324B]">
                      {job._count?.applications || 0}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-black ${
                        job.status === JobStatus.PENDING
                          ? "bg-green-50 text-green-600"
                          : job.status === JobStatus.APPROVED
                            ? "bg-blue-50 text-blue-600"
                            : "bg-red-50 text-red-600"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/dashboard/company/job-listing/edit/${job.id}`}
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        <Edit className="w-4 h-4" />
                      </Link>
                      <button 
                        className="text-gray-300 hover:text-red-500 transition-colors"
                        onClick={() => setDeleteConfirm(job.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-300 hover:text-primary transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
            <h3 className="text-lg font-bold text-[#25324B] mb-2">
              Confirm Delete
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Are you sure you want to delete this job post? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                onClick={() => setDeleteConfirm(null)}
                disabled={isPending}
                className="rounded-none border-gray-200 text-[#25324B] font-bold h-10 px-6"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(deleteConfirm)}
                disabled={isPending}
                className="bg-red-500 text-white rounded-none h-10 px-6 font-bold hover:bg-red-600"
              >
                {isPending ? "Deleting..." : "Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListingsContent;
