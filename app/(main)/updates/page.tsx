"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Star } from "lucide-react";

const UpdatesPage = () => {
  const updates = [
    {
      version: "v2.0.0",
      title: "The Dashboard Revolution",
      date: "Feb 28, 2024",
      description:
        "A complete overhaul of the dashboard system with role-based access for Admin, Company, and Users. Introducing premium design and full responsiveness.",
      features: [
        "Multi-role architecture",
        "Mobile-first sidebars",
        "Realistic management tools",
        "Enhanced Job forms",
      ],
      type: "Major",
    },
    {
      version: "v1.5.0",
      title: "Advanced Job Filtering",
      date: "Feb 15, 2024",
      description:
        "Added granular filters for salary range, job type, and category across the platform.",
      features: [
        "Salary range slider",
        "Category multi-select",
        "Location-based search",
      ],
      type: "Feature",
    },
    {
      version: "v1.2.0",
      title: "Performance & Polish",
      date: "Feb 01, 2024",
      description:
        "Infrastructure updates to improve page load speed and SEO meta tags optimization.",
      features: [
        "Server Components refactor",
        "SEO optimizations",
        "Bug fixes",
      ],
      type: "Maintenance",
    },
  ];

  return (
    <div className="font-epilogue bg-white min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#25324B] mb-4  tracking-tighter">
            Platform <span className="text-primary ">Updates</span>
          </h1>
          <p className="text-gray-500 font-medium text-lg leading-relaxed">
            See what&apos;s new on QuickHire. We constantly update the platform
            to give you the best experience.
          </p>
        </div>

        <div className="space-y-16">
          {updates.map((update) => (
            <div
              key={update.version}
              className="relative pl-12 border-l-2 border-gray-100 pb-16 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary"></div>
              <div className="mb-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-primary font-black  text-xs tracking-widest">
                    {update.version}
                  </span>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1.5 text-gray-400 font-bold  text-[10px] tracking-widest">
                    <Calendar className="w-3.5 h-3.5" />
                    {update.date}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-[#25324B] tracking-tight">
                  {update.title}
                </h2>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed mb-6 ">
                {update.description}
              </p>
              <div className="space-y-3 mb-8">
                {update.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Star className="w-3.5 h-3.5 text-primary fill-primary/10" />
                    <span className="text-sm font-bold text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                {update.type === "Major" ? (
                  <Badge className="rounded-none bg-primary hover:bg-primary shadow-none font-black  text-[10px] tracking-widest px-3">
                    Update {update.type}
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="rounded-none border-gray-200 text-gray-400 font-black  text-[10px] tracking-widest px-3 shadow-none"
                  >
                    Update {update.type}
                  </Badge>
                )}
                <button className="text-xs font-black text-primary  tracking-widest flex items-center gap-1 hover:gap-2 transition-all">
                  View Changelog <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatesPage;
