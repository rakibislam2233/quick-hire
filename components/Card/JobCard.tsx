import { Button } from "@/components/ui/button";
import { Job } from "@/interface/job.interface";
import { Briefcase, Clock, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white border border-gray-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-6 w-full">
        <div className="relative h-16 w-16 shrink-0">
          <Image
            src={job.logo}
            alt={job.company}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
            <span className="px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full border border-blue-100">
              {job.type}
            </span>
          </div>
          <p className="text-gray-600 font-medium mb-3">{job.company}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
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

      <div className="flex items-center gap-3 w-full md:w-auto">
        <Link href={`/jobs/${job.id}`} className="w-full md:w-auto">
          <Button
            variant="outline"
            className="w-full md:w-auto border-primary text-primary rounded-none px-8 cursor-pointer"
          >
            View Details
          </Button>
        </Link>
        <Link href={`/jobs/${job.id}?apply=true`} className="w-full md:w-auto">
          <Button className="w-full md:w-auto bg-primary text-white rounded-none px-8 cursor-pointer">
            Apply Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
