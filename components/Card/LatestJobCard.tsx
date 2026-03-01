import Image from "next/image";
import React from "react";

interface LatestJobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    logo: string;
    type: string;
    tags: {
      name: string;
      color: string;
    }[];
  };
}

const LatestJobCard = ({ job }: LatestJobCardProps) => {
  return (
    <div
      key={job.id}
      className="bg-white border border-transparent hover:border-primary/20 transition-all duration-300 px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0_4px_30px_rgb(0,0,0,0.03)]"
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
        <h3 className="text-xl font-semibold text-[#25324B] mb-2">{job.title}</h3>
        <p className="text-slate-500 font-epilogue text-sm mb-4 flex items-center gap-1">
          <span className="text-[#25324B]">{job.company}</span>
          <span className="w-1 h-1 rounded-full bg-gray-400 mx-2 block"></span>
          {job.location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-epilogue font-semibold text-xs px-4 py-1.5 rounded-full text-emerald-500 bg-emerald-50">
            {job.type}
          </span>
          <div className="w-px h-4 bg-gray-200 mx-1"></div>
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
  );
};

export default LatestJobCard;
