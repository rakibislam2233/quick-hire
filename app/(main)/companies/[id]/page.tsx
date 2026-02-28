"use client";

import JobCard from "@/components/Pages/Main/Jobs/JobCard";
import { mockCompanies, mockJobs } from "@/services/job.service";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Globe,
  MapPin,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

interface CompanyDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function CompanyDetailPage({ params }: CompanyDetailPageProps) {
  const { id } = use(params);
  const company = mockCompanies.find((c) => c.id === id);

  if (!company) {
    notFound();
  }

  const companyJobs = mockJobs.filter((job) => job.company === company.name);

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 md:px-16">
        {/* Back Link */}
        <Link
          href="/companies"
          className="inline-flex items-center gap-2 text-primary font-semibold mb-8 group no-underline"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          Back to all companies
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white border border-gray-100 p-8">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8 border-b border-gray-100 pb-8">
                <div className="relative h-24 w-24">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-extrabold text-[#25324B] mb-2">
                    {company.name}
                  </h1>
                  <p className="text-gray-600 font-medium text-lg mb-4">
                    {company.industry}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <a
                        href={company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none text-gray-600 space-y-6">
                <h2 className="text-2xl font-bold text-[#25324B]">
                  About {company.name}
                </h2>
                <p>{company.description}</p>
                <p>
                  We are a dynamic team of professionals dedicated to excellence
                  in our field. Our culture is built on innovation,
                  collaboration, and a shared passion for delivering value to
                  our users and clients.
                </p>
              </div>
            </div>

            {/* Open Positions */}
            <div>
              <h2 className="text-2xl font-bold text-[#25324B] mb-6">
                Open Positions
              </h2>
              <div className="space-y-4">
                {companyJobs.length > 0 ? (
                  companyJobs.map((job) => <JobCard key={job.id} job={job} />)
                ) : (
                  <div className="bg-white border border-gray-100 p-8 text-center">
                    <p className="text-gray-500 italic">
                      No open positions at the moment.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Company Info Card */}
            <div className="bg-white border border-gray-100 p-8">
              <h3 className="text-lg font-bold text-[#25324B] mb-6">
                Company Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-50 pb-4">
                  <span className="text-gray-500 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Founded
                  </span>
                  <span className="text-[#25324B] font-semibold">
                    {company.founded}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-4">
                  <span className="text-gray-500 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Employees
                  </span>
                  <span className="text-[#25324B] font-semibold">
                    {company.employees}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-50 pb-4">
                  <span className="text-gray-500 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> Industry
                  </span>
                  <span className="text-[#25324B] font-semibold">
                    {company.industry}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Location
                  </span>
                  <span className="text-[#25324B] font-semibold">
                    {company.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-[#4640DE] p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Interested in working with us?
              </h3>
              <p className="mb-8 opacity-90">
                Keep an eye on our open positions or reach out to us directly
                through our website.
              </p>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-white text-[#4640DE] hover:bg-white/90 rounded-none h-12 font-bold transition-colors">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
