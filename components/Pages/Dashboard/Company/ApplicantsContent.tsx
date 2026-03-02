"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Filter, MoreVertical, Search, Loader2 } from "lucide-react";
import { getApplicationsForJob, updateApplicationStatus } from "@/services/application.service";
import { toast } from "sonner";

interface Applicant {
  id: string;
  user: {
    id: string;
    fullName: string;
    email: string;
    avatar?: string;
  };
  job: {
    id: string;
    title: string;
  };
  status: string;
  appliedDate: string;
  score?: number;
  resume?: string;
}

const ApplicantsContent = () => {
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        // This would normally get applications for a specific job
        // For now, we'll use a general endpoint
        const data = await getApplicationsForJob("all"); // or get all company applications
        setApplicants(data.applications || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, []);

  const handleStatusUpdate = async (applicantId: string, newStatus: string) => {
    try {
      await updateApplicationStatus(applicantId, newStatus);
      setApplicants(applicants.map(app => 
        app.id === applicantId ? { ...app, status: newStatus } : app
      ));
      toast.success(`Application status updated to ${newStatus}`);
    } catch (err: any) {
      toast.error(err.message || "Failed to update status");
    }
  };

  const filteredApplicants = applicants.filter(applicant =>
    applicant.user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    applicant.job.title.toLowerCase().includes(searchTerm.toLowerCase())
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
          <p className="text-red-500 font-medium">Error loading applicants</p>
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
            Applicants
          </h2>
          <p className="text-gray-500 font-medium">
            Review and manage job applications.
          </p>
        </div>
        <Button className="bg-primary text-white rounded-none h-12 px-6 font-bold flex items-center gap-2 shadow-none">
          <Download className="w-5 h-5" />
          Export
        </Button>
      </div>

      <div className="bg-white border border-gray-100 shadow-none">
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search applicants..."
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
                  Applicant
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest">
                  Job
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Score
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 tracking-widest text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredApplicants.map((applicant) => (
                <tr
                  key={applicant.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#25324B] font-bold text-xs">
                        {applicant.user.fullName[0]}
                      </div>
                      <div>
                        <span className="block font-bold text-[#25324B] text-sm">
                          {applicant.user.fullName}
                        </span>
                        <p className="text-xs text-gray-400">{applicant.user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-[#25324B]">
                      {applicant.job.title}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-sm font-bold text-[#25324B]">
                      {applicant.score ? `${applicant.score}/5` : "N/A"}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-black ${
                        applicant.status === "ACCEPTED"
                          ? "bg-green-50 text-green-600"
                          : applicant.status === "INTERVIEWING"
                            ? "bg-blue-50 text-blue-600"
                            : applicant.status === "SHORTLISTED"
                              ? "bg-purple-50 text-purple-600"
                              : applicant.status === "REJECTED"
                                ? "bg-red-50 text-red-600"
                                : "bg-gray-50 text-gray-600"
                      }`}
                    >
                      {applicant.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-none border-gray-200 text-[#25324B] font-bold h-8 px-3 text-xs"
                        onClick={() => handleStatusUpdate(applicant.id, "SHORTLISTED")}
                      >
                        Shortlist
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary text-white rounded-none h-8 px-3 text-xs font-bold shadow-none"
                        onClick={() => handleStatusUpdate(applicant.id, "INTERVIEWING")}
                      >
                        Interview
                      </Button>
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
    </div>
  );
};

export default ApplicantsContent;
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
