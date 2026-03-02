import { Skeleton } from "@/components/ui/skeleton";

export default function UserProfileLoading() {
  return (
    <div className="font-epilogue mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-96" />
        </div>
        <Skeleton className="h-12 w-32 rounded" />
      </div>

      <div className="bg-white border border-gray-100 p-8 shadow-none">
        <div className="flex items-center gap-8 mb-10 pb-10 border-b border-gray-50">
          <Skeleton className="w-24 h-24 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-11 w-full rounded" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-11 w-full rounded" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-11 w-full rounded" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-11 w-full rounded" />
            </div>
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-24 w-full rounded" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-11 w-full rounded" />
          </div>

          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-24 w-full rounded" />
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
