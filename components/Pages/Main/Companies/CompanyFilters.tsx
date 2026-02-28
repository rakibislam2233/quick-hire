"use client";

import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

interface CompanyFiltersProps {
  onSearchChange: (value: string) => void;
  onIndustryChange: (value: string) => void;
}

export default function CompanyFilters({
  onSearchChange,
  onIndustryChange,
}: CompanyFiltersProps) {
  const industries = [
    "All",
    "Design",
    "Engineering",
    "Marketing",
    "Sales",
    "Customer Service",
  ];

  return (
    <div className="bg-white border border-gray-100 p-6 space-y-8">
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Search className="w-5 h-5 text-primary" />
          Search
        </h4>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search companies..."
            className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary bg-gray-50 shadow-none"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          Industry
        </h4>
        <div className="space-y-2">
          {industries.map((industry) => (
            <label
              key={industry}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="industry"
                value={industry}
                defaultChecked={industry === "All"}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                onChange={(e) => onIndustryChange(e.target.value)}
              />
              <span className="text-gray-600 group-hover:text-primary transition-colors">
                {industry}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
