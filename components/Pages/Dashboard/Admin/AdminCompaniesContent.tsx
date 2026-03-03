"use client";
import SearchFilter from "@/components/Shared/SearchFilter";
import { Company } from "@/interface/company.interface";
import { Globe, MoreVertical, Search } from "lucide-react";
import Image from "next/image";

interface AdminCompaniesContentProps {
  companies?: Company[];
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
  onSearchChange?: (search: string) => void;
}

const AdminCompaniesContent = ({
  companies = [],
  meta
}: AdminCompaniesContentProps) => {
  return (
    <div className="font-epilogue">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-[#25324B]">
          Company Management
        </h2>
        <p className="text-gray-500 font-medium text-sm">
          Verify and manage company accounts.
        </p>
      </div>

      <div className="bg-white border border-gray-100 shadow-none">
        <div className="p-6 border-b border-gray-100">
          <SearchFilter searchPlaceholder="Search companies by name or location..." />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 bg-[#F8F9FF]">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest">
                  Company
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest">
                  Description
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest">
                  Website
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Industry
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Size
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Location
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Founded
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-center">
                  Jobs
                </th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400  tracking-widest text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {companies?.map((company) => (
                <tr
                  key={company.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                        {company.logo ? (
                          <Image
                            src={company.logo}
                            alt={company.name}
                            fill
                            className="object-contain p-2"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                            <Globe className="w-4 h-4 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div>
                        <span className="block font-bold text-[#25324B] text-sm">
                          {company.name}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="text-gray-600 text-xs max-w-xs truncate">
                      {company.description || "No description"}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs cursor-pointer hover:underline underline-offset-4 decoration-2">
                      <Globe className="w-3.5 h-3.5" />
                      {company.website || "N/A"}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[10px] font-black">
                        {company.industry || "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="bg-purple-50 text-purple-600 px-2 py-0.5 rounded text-[10px] font-black">
                        {company.size || "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="bg-orange-50 text-orange-600 px-2 py-0.5 rounded text-[10px] font-black">
                        {company.location || "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="bg-gray-50 text-gray-600 px-2 py-0.5 rounded text-[10px] font-black">
                        {company.foundedYear || "N/A"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="bg-green-50 text-green-600 px-2 py-0.5 rounded text-[10px] font-black">
                        {company._count?.jobs || 0} Jobs
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-gray-300 hover:text-primary transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {(!companies || companies.length === 0) && (
                <tr>
                  <td colSpan={9} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Globe className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-bold text-[#25324B] mb-2">
                        No Companies Found
                      </h3>
                      <p className="text-gray-500 text-sm">
                        No companies match your current search criteria.
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
            {/* <Pagination
              meta={meta}
              onPageChange={onPageChange}
              onLimitChange={onLimitChange}
            /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCompaniesContent;
