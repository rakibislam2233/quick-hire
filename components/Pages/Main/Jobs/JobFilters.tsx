"use client";
import { Input } from "@/components/ui/input";
import { Filter, MapPin, Search } from "lucide-react";

interface JobFiltersProps {
  onSearchChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export default function JobFilters({
  onSearchChange,
  onLocationChange,
  onCategoryChange,
}: JobFiltersProps) {
  const categories = [
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
            placeholder="Search jobs..."
            className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary bg-gray-50 shadow-none"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Location
        </h4>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Filter by location..."
            className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary bg-gray-50 shadow-none"
            onChange={(e) => onLocationChange(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          Categories
        </h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="category"
                value={category}
                defaultChecked={category === "All"}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                onChange={(e) => onCategoryChange(e.target.value)}
              />
              <span className="text-gray-600 group-hover:text-primary transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
