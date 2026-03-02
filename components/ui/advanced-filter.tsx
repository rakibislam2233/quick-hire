import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter as FilterIcon, X } from "lucide-react";

interface FilterField {
  key: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'multiselect';
  value?: any;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

interface AdvancedFilterProps {
  searchTerm: string;
  filters: Record<string, any>;
  fields: FilterField[];
  onSearchChange: (value: string) => void;
  onFilterChange: (key: string, value: any) => void;
  onFilterRemove: (key: string) => void;
  onClearAll: () => void;
  placeholder?: string;
  showFilterButton?: boolean;
  className?: string;
}

export function AdvancedFilter({
  searchTerm,
  filters,
  fields,
  onSearchChange,
  onFilterChange,
  onFilterRemove,
  onClearAll,
  placeholder = "Search...",
  showFilterButton = true,
  className = "",
}: AdvancedFilterProps) {
  const hasActiveFilters = searchTerm.trim() !== '' || Object.keys(filters).length > 0;

  const renderFilterField = (field: FilterField) => {
    const value = filters[field.key] || '';

    switch (field.type) {
      case 'text':
        return (
          <Input
            placeholder={field.placeholder || `Enter ${field.label}`}
            value={value}
            onChange={(e) => onFilterChange(field.key, e.target.value)}
            className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
          />
        );

      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => onFilterChange(field.key, e.target.value)}
            className="w-full rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11 px-3 text-sm"
          >
            <option value="">{`Select ${field.label}`}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'date':
        return (
          <Input
            type="date"
            value={value}
            onChange={(e) => onFilterChange(field.key, e.target.value)}
            className="rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-11"
          />
        );

      case 'multiselect':
        return (
          <select
            multiple
            value={Array.isArray(value) ? value : []}
            onChange={(e) => {
              const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
              onFilterChange(field.key, selectedOptions);
            }}
            className="w-full rounded-none border-gray-200 focus-visible:ring-0 focus-visible:border-primary shadow-none h-20 px-3 text-sm"
          >
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      default:
        return null;
    }
  };

  const getFilterDisplayValue = (field: FilterField) => {
    const value = filters[field.key];
    if (!value) return null;

    if (field.type === 'multiselect' && Array.isArray(value)) {
      return value.length > 0 ? `${value.length} selected` : null;
    }

    if (field.type === 'select' && field.options) {
      const option = field.options.find(opt => opt.value === value);
      return option?.label || value;
    }

    return value;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
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
            className="rounded-none border-gray-200 text-[#25324B] font-bold h-11 px-6 flex items-center gap-2"
          >
            <FilterIcon className="w-4 h-4" />
            Filter
          </Button>
        )}
      </div>

      {/* Filter Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fields.map((field) => (
          <div key={field.key} className="space-y-2">
            <label className="text-xs font-bold text-[#25324B]">
              {field.label}
            </label>
            {renderFilterField(field)}
          </div>
        ))}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-xs font-medium text-gray-500">Active filters:</span>
          
          {searchTerm.trim() && (
            <Badge variant="secondary" className="gap-1">
              Search: "{searchTerm}"
              <X 
                className="w-3 h-3 cursor-pointer" 
                onClick={() => onSearchChange('')}
              />
            </Badge>
          )}

          {fields.map((field) => {
            const displayValue = getFilterDisplayValue(field);
            if (!displayValue) return null;

            return (
              <Badge key={field.key} variant="secondary" className="gap-1">
                {field.label}: {displayValue}
                <X 
                  className="w-3 h-3 cursor-pointer" 
                  onClick={() => onFilterRemove(field.key)}
                />
              </Badge>
            );
          })}

          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-xs h-6 px-2 text-gray-500 hover:text-gray-700"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}
