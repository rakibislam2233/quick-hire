"use client";
import { deleteJobAction } from "@/app/dashboard/admin/_actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Job, JobStatus, JobType } from "@/interface/job.interface";
import { Building2, Calendar, DollarSign, Edit, Filter, MapPin, MoreVertical, Search, Trash2, Users } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";

interface AdminJobsContentProps {
  jobs?: Job[];
}

const AdminJobsContent = ({ jobs }: AdminJobsContentProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [localJobs, setLocalJobs] = useState(jobs || []);

  const filteredJobs = localJobs?.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: JobStatus) => {
    switch (status) {
      case JobStatus.APPROVED:
        return "bg-green-50 text-green-600 border-green-100";
      case JobStatus.PENDING:
        return "bg-orange-50 text-orange-600 border-orange-100";
      case JobStatus.REJECTED:
        return "bg-red-50 text-red-600 border-red-100";
      case JobStatus.CLOSED:
        return "bg-gray-50 text-gray-600 border-gray-100";
      default:
        return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  const getTypeColor = (type: JobType) => {
    switch (type) {
      case JobType.FULL_TIME:
        return "bg-blue-50 text-blue-600";
      case JobType.PART_TIME:
        return "bg-purple-50 text-purple-600";
      case JobType.CONTRACT:
        return "bg-yellow-50 text-yellow-600";
      case JobType.INTERNSHIP:
        return "bg-pink-50 text-pink-600";
      case JobType.FREELANCE:
        return "bg-indigo-50 text-indigo-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

  const handleDelete = async (jobId: string) => {
    startTransition(async () => {
      try {
        const result = await deleteJobAction(jobId);
        if (result.success) {
          toast.success(result.message);
          setLocalJobs(prev => prev.filter(job => job.id !== jobId));
        } else {
          toast.error(result.error || "Failed to delete job");
        }
      } catch (error) {
        toast.error("Failed to delete job");
      } finally {
        setDeleteConfirm(null);
      }
    });
  };

  return (
    <div className="font-epilogue">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-[#25324B]">Job Management</h2>
          <p className="text-gray-500 font-medium text-sm">
            Monitor and manage all job postings across the platform.
          </p>
        </div>
      </div>

      <div className="bg-white border border-gray-100 shadow-none">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search jobs..."
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
                  Job Details
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Company
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Type
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Location
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Applications
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Deadline
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
                    <div className="space-y-1">
                      <div>
                        <span className="block font-bold text-[#25324B] text-sm">
                          {job.title}
                        </span>
                        <p className="text-xs text-gray-400">
                          ID: {job.id}
                        </p>
                      </div>
                      {job.salary && (
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <DollarSign className="w-3 h-3" />
                          {job.salary}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                        {job.company?.logo ? (
                          <img
                            src={job.company.logo}
                            alt={job.company.name}
                            className="w-full h-full object-contain p-1"
                          />
                        ) : (
                          <Building2 className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <span className="block font-bold text-[#25324B] text-sm">
                          {job.company?.name || "Unknown"}
                        </span>
                        {job.company?.location && (
                          <p className="text-xs text-gray-400">{job.company.location}</p>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black ${getTypeColor(job.type)}`}>
                      {job.type.replace("_", " ")}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#25324B]">
                      <Users className="w-3 h-3" />
                      {job._count?.applications || 0}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Badge
                      variant="outline"
                      className={getStatusColor(job.status)}
                    >
                      {job.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {new Date(job.deadline).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-gray-300 hover:text-primary transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="text-gray-300 hover:text-red-500 transition-colors cursor-pointer"
                        onClick={() => setDeleteConfirm(job.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="text-gray-300 hover:text-primary transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {(!filteredJobs || filteredJobs.length === 0) && (
                <tr>
                  <td colSpan={8} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Filter className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-bold text-[#25324B] mb-2">
                        No Jobs Found
                      </h3>
                      <p className="text-gray-500 text-sm">
                        No job postings match your current filters.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
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
              Are you sure you want to delete this job? This action cannot be undone.
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

export default AdminJobsContent;
