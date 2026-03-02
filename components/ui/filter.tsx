import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter as FilterIcon } from "lucide-react";

interface FilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onFilterClick?: () => void;
  placeholder?: string;
  showFilterButton?: boolean;
  className?: string;
}

export function Filter({
  searchTerm,
  onSearchChange,
  onFilterClick,
  placeholder = "Search...",
  showFilterButton = true,
  className = "",
}: FilterProps) {
  return (
    <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 ${className}`}>
      <div className="relative w-full md:w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input
          placeholder={placeholder}
          className="pl-10 rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      {showFilterButton && (
        <Button
          variant="outline"
          onClick={onFilterClick}
          className="rounded-none border-gray-200 text-[#25324B] font-bold h-11 px-6 flex items-center gap-2"
        >
          <FilterIcon className="w-4 h-4" />
          Filter
        </Button>
      )}
    </div>
  );
}
