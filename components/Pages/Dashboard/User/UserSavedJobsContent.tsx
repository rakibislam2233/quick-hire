"use client";

import { Button } from "@/components/ui/button";
import { getSavedJobs, toggleSaveJob } from "@/services/application.service";
import { Bookmark, Loader2, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface SavedJob {
  id: string;
  job: {
    id: string;
    title: string;
    type: string;
    location: string;
    salary?: string;
    company: {
      name: string;
      logo?: string;
    };
  };
  savedAt: string;
}

const UserSavedJobsContent = () => {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        const data = await getSavedJobs();
        setSavedJobs(data.savedJobs || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedJobs();
  }, []);

  const handleUnsaveJob = async (jobId: string) => {
    try {
      await toggleSaveJob(jobId);
      setSavedJobs(savedJobs.filter(job => job.job.id !== jobId));
      toast.success("Job removed from saved jobs");
    } catch (err: any) {
      toast.error(err.message || "Failed to unsave job");
    }
  };

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
          <p className="text-red-500 font-medium">Error loading saved jobs</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-epilogue">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-[#25324B]">Saved Jobs</h2>
          <p className="text-gray-500 font-medium text-sm">
            Jobs you've bookmarked for later.
          </p>
        </div>
        <div className="text-sm text-gray-400">
          {savedJobs.length} jobs saved
        </div>
      </div>

      <div className="space-y-4">
        {savedJobs.map((savedJob) => (
          <div
            key={savedJob.id}
            className="bg-white border border-gray-100 p-6 rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                  {savedJob.job.company.logo ? (
                    <Image
                      src={savedJob.job.company.logo}
                      alt={savedJob.job.company.name}
                      fill
                      className="object-contain p-2"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[#25324B] text-lg">
                    {savedJob.job.title}
                  </h3>
                  <p className="text-sm text-gray-500">{savedJob.job.company.name}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {savedJob.job.location}
                    </div>
                    <span>•</span>
                    <span>{savedJob.job.type}</span>
                    {savedJob.job.salary && (
                      <>
                        <span>•</span>
                        <span>{savedJob.job.salary}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="rounded-none border-gray-200 text-[#25324B] font-bold h-10 px-6 text-xs"
                >
                  Apply Now
                </Button>
                <button
                  onClick={() => handleUnsaveJob(savedJob.job.id)}
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  <Bookmark className="w-5 h-5 fill-current" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {savedJobs.length === 0 && (
          <div className="text-center py-12">
            <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-[#25324B] mb-2">No saved jobs yet</h3>
            <p className="text-gray-500 text-sm mb-6">
              Start saving jobs you're interested in and they'll appear here.
            </p>
            <Button className="bg-primary text-white rounded-none h-12 px-8 font-bold shadow-none">
              Browse Jobs
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSavedJobsContent;
