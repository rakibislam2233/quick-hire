import { Button } from "@/components/ui/button";
import { Bookmark, Building, MapPin } from "lucide-react";
import Image from "next/image";

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

interface UserSavedJobsContentProps {
  savedJobs?: SavedJob[];
}

const UserSavedJobsContent = ({ savedJobs }: UserSavedJobsContentProps) => {
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
          {savedJobs?.length || 0} jobs saved
        </div>
      </div>

      <div className="space-y-4">
        {savedJobs?.map((savedJob) => (
          <div
            key={savedJob.id}
            className="bg-white border border-gray-100 p-6 rounded-lg hover:border-primary hover:shadow-md transition-all duration-200"
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
                      <Building className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-[#25324B] text-lg mb-1">
                    {savedJob.job.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                    <Building className="w-3 h-3" />
                    {savedJob.job.company.name}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400">
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
                  className="rounded-none border-gray-200 text-[#25324B] font-bold h-10 px-6 text-xs hover:bg-gray-50"
                >
                  Apply Now
                </Button>
                <button
                  className="text-gray-300 hover:text-red-500 transition-colors"
                  title="Remove from saved jobs"
                >
                  <Bookmark className="w-5 h-5 fill-current" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {(!savedJobs || savedJobs.length === 0) && (
          <div className="bg-white border border-gray-100 rounded-lg p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bookmark className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-[#25324B] mb-3">No Saved Jobs Yet</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Start saving jobs you're interested in and they'll appear here for easy access later.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-primary text-white rounded-none h-12 px-8 font-bold shadow-none hover:bg-primary/90">
                Browse Jobs
              </Button>
              <Button 
                variant="outline" 
                className="rounded-none border-gray-200 text-[#25324B] h-12 px-8 font-bold hover:bg-gray-50"
              >
                Set Alerts
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSavedJobsContent;
