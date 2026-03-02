"use client";

import { getMyApplications } from "@/services/application.service";
import { Calendar, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Application {
  id: string;
  job: {
    id: string;
    title: string;
    company: {
      name: string;
      logo?: string;
    };
  };
  appliedDate: string;
  status: string;
  statusColor: string;
}

const UserApplicationsContent = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await getMyApplications();
        setApplications(data.applications || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

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
          <p className="text-red-500 font-medium">Error loading applications</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          My Applications
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Track your job applications and their status.
        </p>
      </div>

      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-white border border-gray-100 p-6 rounded-lg hover:border-primary transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                  {app.job.company.logo ? (
                    <Image
                      src={app.job.company.logo}
                      alt={app.job.company.name}
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
                    {app.job.title}
                  </h3>
                  <p className="text-sm text-gray-500">{app.job.company.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    app.status === "INTERVIEWING"
                      ? "bg-blue-50 text-blue-600 border border-blue-100"
                      : app.status === "ACCEPTED"
                        ? "bg-green-50 text-green-600 border border-green-100"
                        : app.status === "REJECTED"
                          ? "bg-red-50 text-red-600 border border-red-100"
                          : "bg-orange-50 text-orange-600 border border-orange-100"
                  }`}
                >
                  {app.status}
                </span>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {new Date(app.appliedDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserApplicationsContent;
