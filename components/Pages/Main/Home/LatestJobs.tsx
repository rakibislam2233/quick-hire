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
    <section className="w-full bg-[#F8F9FF] py-16 md:py-24 relative overflow-hidden">
      {/* Decorative lines in background (approximate layout from image) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] border-l border-b border-[#EADDFF]/40 -translate-y-1/2 translate-x-1/3 rotate-45 pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] border-l border-t border-[#EADDFF]/40 translate-y-1/3 translate-x-1/4 -rotate-12 pointer-events-none"></div>

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
            <div
              key={job.id}
              className="bg-white border border-transparent hover:border-primary/20 transition-all duration-300 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0_4px_30px_rgb(0,0,0,0.03)]"
            >
              {/* Logo */}
              <div className="w-16 h-16 shrink-0 relative flex items-center justify-center grayscale">
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold text-[#25324B] mb-2">
                  {job.title}
                </h3>
                <p className="text-slate-500 font-epilogue text-sm mb-4 flex items-center gap-1">
                  <span className="text-[#25324B] font-medium">
                    {job.company}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-400 mx-2 block"></span>
                  {job.location}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-epilogue font-semibold text-xs px-4 py-1.5 rounded-full text-emerald-500 bg-emerald-50">
                    {job.type}
                  </span>
                  <div className="w-[1px] h-4 bg-gray-200 mx-1"></div>
                  {job.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`font-epilogue font-semibold text-xs px-4 py-1.5 rounded-full border ${tag.color}`}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
