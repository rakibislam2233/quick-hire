"use client";
import { AdvancedFilter } from "@/components/ui/advanced-filter";
import { Pagination } from "@/components/ui/pagination";
import { useFilter } from "@/hooks/useFilter";
import { IUser, UserRole, UserStatus } from "@/interface/user.interface";
import { Mail, MoreVertical, Shield, User } from "lucide-react";

interface AdminUsersContentProps {
  users?: IUser[];
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
  onPageChange?: (page: number) => void;
  onLimitChange?: (limit: number) => void;
  onFiltersChange?: (filters: Record<string, any>) => void;
}

const AdminUsersContent = ({ 
  users = [], 
  meta,
  onPageChange,
  onLimitChange,
  onFiltersChange 
}: AdminUsersContentProps) => {
  const {
    searchTerm,
    page,
    limit,
    filters,
    setSearchTerm,
    setPage,
    setLimit,
    setFilter,
    removeFilter,
    clearAllFilters,
    getQueryParams,
  } = useFilter({
    initialPage: meta?.page || 1,
    initialLimit: meta?.limit || 10,
  });

  // Define filter fields for users
  const filterFields = [
    {
      key: 'status',
      label: 'Status',
      type: 'select' as const,
      options: [
        { value: 'ACTIVE', label: 'Active' },
        { value: 'INACTIVE', label: 'Inactive' },
        { value: 'BANNED', label: 'Banned' },
      ],
    },
    {
      key: 'role',
      label: 'Role',
      type: 'select' as const,
      options: [
        { value: 'USER', label: 'User' },
        { value: 'COMPANY', label: 'Company' },
        { value: 'ADMIN', label: 'Admin' },
      ],
    },
    {
      key: 'dateFrom',
      label: 'Joined From',
      type: 'date' as const,
    },
    {
      key: 'dateTo',
      label: 'Joined To',
      type: 'date' as const,
    },
  ];

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    notifyFiltersChange();
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilter(key, value);
    notifyFiltersChange();
  };

  const handleFilterRemove = (key: string) => {
    removeFilter(key);
    notifyFiltersChange();
  };

  const handleClearAll = () => {
    setSearchTerm('');
    clearAllFilters();
    notifyFiltersChange();
  };

  const notifyFiltersChange = () => {
    // Get all query parameters and notify parent
    const queryParams = getQueryParams();
    onFiltersChange?.(queryParams);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    onPageChange?.(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    onLimitChange?.(newLimit);
  };

  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          User Management
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Monitor and manage all platform users.
        </p>
      </div>

      <div className="bg-white border border-gray-100 shadow-none">
        <div className="p-6 border-b border-gray-100">
          <AdvancedFilter
            searchTerm={searchTerm}
            filters={filters}
            fields={filterFields}
            onSearchChange={handleSearchChange}
            onFilterChange={handleFilterChange}
            onFilterRemove={handleFilterRemove}
            onClearAll={handleClearAll}
            placeholder="Search users by name or email..."
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F8F9FF]">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest">
                  User
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest">
                  Role
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Status
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Joined Date
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {users?.map((user) => (
                <tr
                  key={user?.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-[#25324B] font-bold text-xs ring-4 ring-white">
                        {user?.fullName[0]}
                      </div>
                      <div>
                        <span className="block font-bold text-[#25324B] text-sm">
                          {user?.fullName}
                        </span>
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                        {user?.role === UserRole.COMPANY ? (
                          <Shield className="w-4 h-4 text-primary" />
                        ) : (
                          <User className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {user?.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user?.status === UserStatus.ACTIVE
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user?.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="text-sm text-gray-500">
                      {new Date(user?.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-gray-300 hover:text-primary transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}

              {(!users || users.length === 0) && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <User className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-bold text-[#25324B] mb-2">
                        No Users Found
                      </h3>
                      <p className="text-gray-500 text-sm">
                        No users match your current search criteria.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {meta && (
          <div className="p-6 border-t border-gray-100">
            <Pagination
              meta={meta}
              onPageChange={handlePageChange}
              onLimitChange={handleLimitChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsersContent;
