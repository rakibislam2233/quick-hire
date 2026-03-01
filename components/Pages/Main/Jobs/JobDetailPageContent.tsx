"use client";

import ApplyForm from "@/components/Pages/Main/Jobs/ApplyForm";
import { Button } from "@/components/ui/button";
import { Job } from "@/interface/job.interface";
import { getJobById } from "@/services/job.service";
import { ArrowLeft, Briefcase, Clock, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface JobDetailPageContentProps {
  id: string;
}

export default function JobDetailPageContent({
  id,
}: JobDetailPageContentProps) {
  const searchParams = useSearchParams();
  const shouldApply = searchParams.get("apply") === "true";
  const applyRef = useRef<HTMLDivElement>(null);

  const [job, setJob] = useState<Job | null | undefined>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const data = await getJobById(id);
      setJob(data);
      setLoading(false);
    };
    fetchJob();
  }, [id]);

  useEffect(() => {
    if (shouldApply && applyRef.current && !loading) {
      applyRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [shouldApply, loading]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <p className="text-gray-500 font-epilogue">Loading job details...</p>
      </div>
    );
  }

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-16">
        {/* Back Link */}
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-primary font-semibold mb-8 group no-underline font-epilogue"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to all jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white border border-gray-100 p-8 shadow-none">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8 border-b border-gray-100 pb-8">
                <div className="relative h-24 w-24">
                  <Image
                    src={job.logo}
                    alt={job.company}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-extrabold text-[#25324B] mb-2 font-epilogue  tracking-tighter">
                    {job.title}
                  </h1>
                  <p className="text-gray-600 font-medium text-lg mb-4">
                    {job.company}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.postedAt}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none text-gray-600 space-y-6">
                <h2 className="text-2xl font-bold text-[#25324B] font-epilogue  tracking-tighter">
                  Job Description
                </h2>
                <p>{job.description}</p>

                <h3 className="text-xl font-bold text-[#25324B] font-epilogue  tracking-tighter">
                  Responsibilities
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Lead the development of new product features and
                    improvements.
                  </li>
                  <li>
                    Collaborate with cross-functional teams to define and ship
                    elegant solutions.
                  </li>
                  <li>
                    Write high-quality, maintainable, and well-tested code.
                  </li>
                  <li>
                    Mentor junior developers and contribute to team growth.
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-[#25324B] font-epilogue  tracking-tighter">
                  Requirements
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Minimum 5 years of experience in the respective field.
                  </li>
                  <li>
                    Strong proficiency in modern technologies and best
                    practices.
                  </li>
                  <li>Excellent communication and problem-solving skills.</li>
                  <li>Passion for building impactful products.</li>
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <div ref={applyRef}>
              <ApplyForm />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Action Card */}
            <div className="bg-primary p-8 text-white shadow-none">
              <h3 className="text-xl font-bold mb-4 font-epilogue  tracking-tighter">
                Apply for this position
              </h3>
              <p className="mb-8 opacity-90 text-sm">
                Ready to take the next step in your career? Join our innovative
                team and make an impact.
              </p>
              <Button
                onClick={() =>
                  applyRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full bg-white text-primary hover:bg-white/90 rounded-none h-12 font-bold shadow-none  text-sm tracking-wider"
              >
                Apply Now
              </Button>
            </div>

            {/* Job Summary */}
            <div className="bg-white border border-gray-100 p-8 shadow-none">
              <h3 className="text-lg font-bold text-[#25324B] mb-6 font-epilogue  tracking-tighter">
                Job Summary
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-gray-50 pb-4">
                  <span className="text-gray-500">Job Type</span>
                  <span className="text-[#25324B] font-semibold">
                    {job.type}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-4">
                  <span className="text-gray-500">Location</span>
                  <span className="text-[#25324B] font-semibold">
                    {job.location}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-4">
                  <span className="text-gray-500">Category</span>
                  <span className="text-[#25324B] font-semibold">
                    {job.category}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-4">
                  <span className="text-gray-500">Posted</span>
                  <span className="text-[#25324B] font-semibold">
                    {job.postedAt}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Salary</span>
                  <span className="text-[#25324B] font-semibold">
                    {job.salary}
                  </span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-white border border-gray-100 p-8 shadow-none">
              <h3 className="text-lg font-bold text-[#25324B] mb-6 font-epilogue  tracking-tighter">
                Skills & Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold border border-gray-200  tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
