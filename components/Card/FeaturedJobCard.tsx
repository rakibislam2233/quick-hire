import Image from "next/image";
import React from "react";
interface FeaturedJobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    description: string;
    type: string;
    logo: string;
    tags: {
      name: string;
      color: string;
    }[];
  };
}

const FeaturedJobCard = ({ job }: FeaturedJobCardProps) => {
  return (
    <div
      key={job.id}
      className="border border-[#D6DDEB] p-6 flex flex-col bg-white hover:border-primary/30 transition-colors duration-300"
    >
      {/* Card Header */}
      <div className="flex justify-between items-start mb-6">
        <div className="size-16 relative flex items-center justify-center grayscale">
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
      <h3 className="text-lg md:text-[18px] font-semibold text-[#25324B] mb-2">
        {job.title}
      </h3>
      <p className="text-slate-500 font-epilogue text-sm mb-6 flex items-center gap-1">
        <span className="text-[#25324B] font-medium">{job.company}</span>
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
  );
};

export default FeaturedJobCard;
