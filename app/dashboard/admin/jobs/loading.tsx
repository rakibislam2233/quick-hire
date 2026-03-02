import { Skeleton } from "@/components/ui/skeleton";

export default function AdminJobsLoading() {
  return (
    <div className="font-epilogue p-6 space-y-8">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-80" />
        </div>
      </div>

      {/* Search and Filter Skeleton */}
      <div className="bg-white border border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Skeleton className="h-11 w-full rounded" />
        </div>
        <Skeleton className="h-11 w-24 rounded" />
      </div>

      {/* Table Skeleton */}
      <div className="bg-white border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F8F9FF]">
                <th className="px-6 py-4">
                  <Skeleton className="h-4 w-28" />
                </th>
                <th className="px-6 py-4">
                  <Skeleton className="h-4 w-20" />
                </th>
                <th className="px-6 py-4 text-center">
                  <Skeleton className="h-4 w-16" />
                </th>
                <th className="px-6 py-4 text-center">
                  <Skeleton className="h-4 w-20" />
                </th>
                <th className="px-6 py-4 text-center">
                  <Skeleton className="h-4 w-28" />
                </th>
                <th className="px-6 py-4 text-center">
                  <Skeleton className="h-4 w-16" />
                </th>
                <th className="px-6 py-4 text-center">
                  <Skeleton className="h-4 w-20" />
                </th>
                <th className="px-6 py-4 text-right">
                  <Skeleton className="h-4 w-16 ml-auto" />
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-8 w-8 rounded" />
                      <div className="space-y-1">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Skeleton className="h-6 w-20 mx-auto rounded" />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Skeleton className="h-3 w-3" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Skeleton className="h-3 w-3" />
                      <Skeleton className="h-3 w-4" />
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Skeleton className="h-6 w-20 mx-auto rounded" />
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Skeleton className="h-3 w-3" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Skeleton className="h-4 w-4 rounded" />
                      <Skeleton className="h-4 w-4 rounded" />
                      <Skeleton className="h-4 w-4 rounded" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
