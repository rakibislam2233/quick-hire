"use client";

import JobCard from "@/components/Card/JobCard";
import JobFilters from "@/components/Pages/Main/Jobs/JobFilters";
import { Job } from "@/interface/job.interface";
import { getAllJobs } from "@/services/job.service";
import { useEffect, useMemo, useState } from "react";

export default function JobsPageContent() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchJobs = async () => {
      const data = await getAllJobs();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase());
      const matchesLocation = job.location
        .toLowerCase()
        .includes(location.toLowerCase());
      const matchesCategory = category === "All" || job.category === category;

      return matchesSearch && matchesLocation && matchesCategory;
    });
  }, [jobs, search, location, category]);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-16">
        <div className="mb-12 font-epilogue">
          <h1 className="text-4xl  text-[#25324B] mb-2 font-bold tracking-tighter">
            Find Jobs
          </h1>
          <p className="text-gray-500 text-lg">
            Browse and filter thousands of job opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <JobFilters
                onSearchChange={setSearch}
                onLocationChange={setLocation}
                onCategoryChange={setCategory}
              />
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between bg-white border border-gray-100 p-4 mb-6 shadow-none">
              <span className="text-gray-600 font-medium font-epilogue">
                Showing{" "}
                <span className="text-primary font-bold">
                  {filteredJobs.length}
                </span>{" "}
                jobs
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="text-sm font-semibold text-gray-700 bg-transparent border-none focus:ring-0 cursor-pointer">
                  <option>Newest</option>
                  <option>Salary: High to Low</option>
                  <option>Popular</option>
                </select>
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="bg-white border border-gray-100 p-16 text-center shadow-none">
                <p className="text-gray-500 text-lg">
                  No jobs found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
