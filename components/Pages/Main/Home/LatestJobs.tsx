import LatestJobCard from "@/components/Card/LatestJobCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const latestJobs = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: "/asset/brand/vodafone.png",
    type: "Full-Time",
    tags: [
      { name: "Marketing", color: "text-orange-500 border-orange-200" },
      { name: "Design", color: "text-blue-500 border-blue-200" },
    ],
  },
  {
    id: 2,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    logo: "/asset/brand/intel.png",
    type: "Full-Time",
    tags: [
      { name: "Marketing", color: "text-orange-500 border-orange-200" },
      { name: "Design", color: "text-blue-500 border-blue-200" },
    ],
  },
  {
    id: 3,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    logo: "/asset/brand/tesla.png",
    type: "Full-Time",
    tags: [
      { name: "Marketing", color: "text-orange-500 border-orange-200" },
      { name: "Design", color: "text-blue-500 border-blue-200" },
    ],
  },
  {
    id: 4,
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    logo: "/asset/brand/amd.png",
    type: "Full-Time",
    tags: [
      { name: "Marketing", color: "text-orange-500 border-orange-200" },
      { name: "Design", color: "text-blue-500 border-blue-200" },
    ],
  },
  {
    id: 5,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: "/asset/brand/talkit.png",
    type: "Full-Time",
    tags: [
      { name: "Marketing", color: "text-orange-500 border-orange-200" },
      { name: "Design", color: "text-blue-500 border-blue-200" },
    ],
  },
  {
    id: 6,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    logo: "/asset/brand/vodafone.png",
    type: "Full-Time",
    tags: [
      { name: "Marketing", color: "text-orange-500 border-orange-200" },
      { name: "Design", color: "text-blue-500 border-blue-200" },
    ],
  },
  {
    id: 7,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: "/asset/brand/intel.png",
    type: "Full-Time",
    tags: [
      { name: "Marketing", color: "text-orange-500 border-orange-200" },
      { name: "Design", color: "text-blue-500 border-blue-200" },
    ],
  },
  {
    id: 8,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    logo: "/asset/brand/tesla.png",
    type: "Full-Time",
    tags: [
      { name: "Marketing", color: "text-orange-500 border-orange-200" },
      { name: "Design", color: "text-blue-500 border-blue-200" },
    ],
  },
];

const LatestJobs = () => {
  return (
    <section className="w-full bg-[#F8F8FD] py-10 md:py-16 relative overflow-hidden">
      <div className="w-full container mx-auto px-5 md:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25324B]">
            Latest <span className="text-[#26A4FF]">jobs open</span>
          </h2>
          <Link
            href="/jobs"
            className="flex items-center text-primary font-epilogue font-semibold hover:text-blue-700 transition-colors group"
          >
            Show all jobs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {latestJobs.map((job) => (
            <LatestJobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
