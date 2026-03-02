import { Skeleton } from "@/components/ui/skeleton";

export default function CompanySettingsLoading() {
  return (
    <div className="font-epilogue p-6 space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* Settings Form Skeleton */}
      <div className="bg-white border border-gray-100 p-8 shadow-none">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-11 w-full rounded" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-11 w-full rounded" />
            </div>
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-24 w-full rounded" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-11 w-full rounded" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-20 w-full rounded" />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-6">
          <Skeleton className="h-12 w-24 rounded" />
          <Skeleton className="h-12 w-32 rounded" />
        </div>
      </div>
    </div>
  );
}
