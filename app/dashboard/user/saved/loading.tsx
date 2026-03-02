import { Skeleton } from "@/components/ui/skeleton";

export default function UserSavedJobsLoading() {
  return (
    <div className="font-epilogue p-6 space-y-8">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="text-sm text-gray-400">
          <Skeleton className="h-4 w-16" />
        </div>
      </div>

      {/* Saved Jobs Skeleton */}
      <div className="space-y-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border border-gray-100 p-6 rounded-lg hover:border-primary transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
                  <Skeleton className="w-6 h-6 bg-gray-200 rounded" />
                </div>
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-48 mb-2" />
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <Skeleton className="h-3 w-20" />
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-3 w-12" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-20 rounded" />
                <button className="text-gray-300 hover:text-red-500 transition-colors">
                  <Skeleton className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State Skeleton */}
      <div className="text-center py-12">
        <Skeleton className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <Skeleton className="h-6 w-32 mx-auto mb-2" />
        <Skeleton className="h-4 w-64 mx-auto mb-6" />
        <Skeleton className="h-12 w-32 mx-auto" />
      </div>
    </div>
  );
}
