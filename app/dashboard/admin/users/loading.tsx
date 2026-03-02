import { Skeleton } from "@/components/ui/skeleton";

export default function AdminUsersLoading() {
  return (
    <div className="font-epilogue p-6 space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* Search and Filter Skeleton */}
      <div className="flex items-center justify-between">
        <div className="relative w-80">
          <Skeleton className="h-11 w-full rounded" />
        </div>
        <Skeleton className="h-11 w-32 rounded" />
      </div>

      {/* Table Skeleton */}
      <div className="bg-white border border-gray-100 rounded-lg">
        <div className="p-6 border-b border-gray-100">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-20 rounded" />
                  <Skeleton className="h-8 w-16 rounded" />
                  <Skeleton className="h-8 w-8 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
