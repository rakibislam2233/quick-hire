import { Skeleton } from "@/components/ui/skeleton";

export default function AdminEditCategoryLoading() {
  return (
    <div className="bg-white p-8">
      <div className="font-epilogue max-w-4xl mx-auto space-y-8">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-2">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        {/* Form Skeleton */}
        <div className="bg-white border border-gray-100 p-8 space-y-8">
          {/* Section Header */}
          <div className="flex items-center gap-2 border-b border-gray-50 pb-4">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-5 w-40" />
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Category Name */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <div className="relative">
                <Skeleton className="h-12 w-full rounded" />
              </div>
            </div>

            {/* Icon Picker */}
            <div className="space-y-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-12 w-full rounded" />
              {/* Selected icon preview skeleton */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-100">
                <div className="space-y-1">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="h-4 w-4 rounded ml-auto" />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-32 w-full rounded" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <Skeleton className="h-12 w-24 rounded" />
            <Skeleton className="h-12 w-32 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
