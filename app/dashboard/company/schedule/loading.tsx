import { Skeleton } from "@/components/ui/skeleton";

export default function CompanyScheduleLoading() {
  return (
    <div className="font-epilogue p-6 space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* Calendar Skeleton */}
      <div className="bg-white border border-gray-100 p-6 rounded-lg">
        <div className="grid grid-cols-7 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="text-center">
              <Skeleton className="h-4 w-8 mx-auto mb-2" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((j) => (
                  <Skeleton key={j} className="h-12 w-full rounded" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interview List Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="bg-white border border-gray-100 p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="space-y-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-48" />
                </div>
              </div>
              <Skeleton className="h-8 w-20 rounded" />
            </div>
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
