import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredJobs = [
  {
    id: 1,
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    logo: "/asset/brand/vodafone.png", // Using available logos as placeholder
    type: "Full Time",
    description: "Revolut is looking for Email Marketing to help team ma...",
    tags: [
      { name: "Marketing", color: "text-orange-500 bg-orange-50" },
      { name: "Design", color: "text-emerald-500 bg-emerald-50" },
    ],
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, US",
    logo: "/asset/brand/intel.png",
    type: "Full Time",
    description: "Dropbox is looking for Brand Designer to help the team t...",
    tags: [
      { name: "Design", color: "text-emerald-500 bg-emerald-50" },
      { name: "Business", color: "text-blue-500 bg-blue-50" },
    ],
  },
  {
    id: 3,
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    logo: "/asset/brand/tesla.png",
    type: "Full Time",
    description: "Pitch is looking for Customer Manager to join marketing t...",
    tags: [{ name: "Marketing", color: "text-orange-500 bg-orange-50" }],
  },
  {
    id: 4,
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    logo: "/asset/brand/amd.png",
    type: "Full Time",
    description: "Blinkist is looking for Visual Designer to help team desi...",
    tags: [{ name: "Design", color: "text-emerald-500 bg-emerald-50" }],
  },
  {
    id: 5,
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    logo: "/asset/brand/talkit.png",
    type: "Full Time",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: [
      { name: "Marketing", color: "text-orange-500 bg-orange-50" },
      { name: "Design", color: "text-emerald-500 bg-emerald-50" },
    ],
  },
  {
    id: 6,
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    logo: "/asset/brand/vodafone.png",
    type: "Full Time",
    description: "Canva is looking for Lead Engineer to help develop n...",
    tags: [
      { name: "Design", color: "text-emerald-500 bg-emerald-50" },
      { name: "Business", color: "text-blue-500 bg-blue-50" },
    ],
  },
  {
    id: 7,
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    logo: "/asset/brand/intel.png",
    type: "Full Time",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: [{ name: "Marketing", color: "text-orange-500 bg-orange-50" }],
  },
  {
    id: 8,
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    logo: "/asset/brand/tesla.png",
    type: "Full Time",
    description: "Twitter is looking for Data Analyst to help team desi...",
    tags: [{ name: "Technology", color: "text-red-500 bg-red-50" }],
  },
];

const FeaturedJobs = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="w-full container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-[#25324B] uppercase tracking-tighter">
            Featured <span className="text-primary italic">jobs</span>
          </h2>
          <Link
            href="/jobs"
            className="flex items-center text-primary font-black uppercase text-xs tracking-widest hover:text-blue-700 transition-all group"
          >
            Show all jobs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-100 p-6 flex flex-col bg-white hover:border-primary/30 transition-colors duration-300"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 relative flex items-center justify-center grayscale">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-primary font-epilogue text-sm font-semibold border border-primary/20 bg-blue-50/50 px-3 py-1">
                  {job.type}
                </span>
              </div>

              {/* Card Body */}
              <h3 className="text-xl font-bold text-[#25324B] mb-2">
                {job.title}
              </h3>
              <p className="text-slate-500 font-epilogue text-sm mb-6 flex items-center gap-1">
                <span className="text-[#25324B] font-medium">
                  {job.company}
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-400 mx-1 block"></span>
                {job.location}
              </p>
              <p className="text-slate-500 font-epilogue text-sm leading-relaxed mb-8 flex-1">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {job.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`font-epilogue font-semibold text-xs px-4 py-1.5 rounded-full ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
